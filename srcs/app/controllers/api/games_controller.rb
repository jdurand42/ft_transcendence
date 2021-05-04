# frozen_string_literal: true

module Api
  class GamesController < ApiController
    before_action :set_game, only: %i[destroy]
    include(WarHelper)
    include(GameOverHelper)
    include(CompetitionHelper)

    GameReducer = Rack::Reducer.new(
      Game.all,
      ->(user_id:) { Game.where(player_left: user_id).or(Game.where(player_right: user_id)) },
      ->(status:) { where(status: status) },
      ->(mode:) { where(mode: mode) },
      ->(tournament_id:) { where(tournament_id: tournament_id) },
      ->(war_time_id:) { where(war_time_id: war_time_id) }
    )

    def index
      @games = GameReducer.apply(params)
      json_response(@games)
    end

    def create
      @games_params = params.permit(:mode)
      player_sides
      creation_errors?

      game = create_game
      GameCleanupJob.set(wait: 300).perform_later(game)
      json_response(game, 201)
    end

    def destroy
      authorize @game
      notify_declined(@game)
      @game.destroy
      head :no_content
    end

    protected

    def player_sides
      @games_params[:player_left_id] = current_user.id
      params[:opponent_id] ||= match_maker(current_user, @games_params[:mode])
      @games_params[:player_right_id] = params.fetch(:opponent_id).to_i
    end

    def creation_errors?
      war_time_error if @games_params[:mode] == 'war'
      tournament_error if @games_params[:mode] == 'tournament'
      raise PlayerInGameError if players_already_in_game?
      raise OpponentNotAvailableError unless opponent_available?
    end

    def tournament_error
      raise TournamentNotStartedError unless tournament_started?
      raise AlreadyPlayedError if match_played_already?
      raise OpponentNotParticipantError unless opponent_participant?

      @games_params.merge!(tournament_id: Tournament.last.id)
    end

    def war_time_error
      raise RunningWarTimeError unless war_time.present?
      raise WarTimeMatchLimitError if Game.where(war_time_id: war_time.id, status: 'inprogress').any?

      @games_params.merge!(war_time_id: war_time.id)
    end

    def war_time
      war = war_opened(current_user.guild, User.find(params[:opponent_id]).guild)
      running_war_time(war)
    end

    def send_invites(game)
      invite(game.player_left.id, game.id)
      invite(game.player_right.id, game.id)
      war_time_to_answer(game) if game.mode == 'war'
      tournament_time_to_answer(game) if game.mode == 'tournament'
    end

    def create_game
      game = Game.create!(@games_params)
      send_invites(game)
      game
    end

    def set_game
      @game = Game.find(params[:id])
    end

    def war_time_to_answer(game)
      WarTimeToAnswerJob.set(wait: WarTime.find(game.war_time_id).time_to_answer).perform_later(game, war_time)
    end

    def tournament_time_to_answer(game)
      TournamentTimeToAnswerJob.set(wait: Tournament.first.time_to_answer).perform_later(game)
    end

    def invite(user_id, game_id)
      ActionCable.server.broadcast("user_#{user_id}",
                                   { action: 'game_invitation', id: game_id, sender_id: current_user.id })
    end

    def opponent_available?
      User.find(params['opponent_id']).status == 'online'
    end

    def tournament_started?
      DateTime.now.in_time_zone(1) >= Tournament.last.start_date
    end

    def match_played_already?
      TournamentParticipant.find_by_user_id(current_user.id).opponents.include?(params[:opponent_id].to_i)
    end

    def opponent_participant?
      TournamentParticipant.find_by_user_id(params[:opponent_id]).present?
    end

    def players_already_in_game?
      Game.where(player_right_id: @games_params['player_right_id'])
          .or(Game.where(player_left_id: @games_params['player_right_id']))
          .where.not(status: 'played').empty? == false ||
        Game.where(player_right_id: @games_params['player_left_id'])
            .or(Game.where(player_left_id: @games_params['player_left_id']))
            .where.not(status: 'played').empty? == false
    end
  end
end
