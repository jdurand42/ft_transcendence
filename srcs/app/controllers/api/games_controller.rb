# frozen_string_literal: true

module Api
  class GamesController < ApiController
    before_action :set_game, only: %i[destroy]
    include(WarHelper)
    include(WartimeMatchmaking)

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
      return if war_time_error?
      return if tournament_error?
      return render_error('gamePlayersAlreadyInGame', 403) if players_already_in_game?
      return render_error('opponentNotAvailable', 403) unless opponent_available?

      json_response(create_game, 201)
    end

    def destroy
      authorize @game
      @game.destroy
      head :no_content
    end

    protected

    def player_sides
      @games_params[:player_left_id] = current_user.id
      params[:opponent_id] = wartime_matchmaker(current_user) if params[:mode] == 'war' && current_user.guild
      @games_params[:player_right_id] = params.fetch(:opponent_id).to_i
    end

    def tournament_error?
      return nil unless @games_params[:mode] == 'tournament'
      return render_error('trnmtNotStarted', 403) unless tournament_started?
      return render_error('alreadyPlayed', 403) if match_played_already?
      return render_error('opponentNotParticipant', 403) unless opponent_participant?

      @games_params.merge!(tournament_id: Tournament.last.id)
      nil
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

    def war_time_error?
      return nil unless @games_params[:mode] == 'war'
      return render_error('noWarTimeOnGoing', 403) unless war_time.present?
      return render_error('warTimeMatchLimit', 403) if Game.where(war_time_id: war_time.id, status: 'inprogress').any?

      @games_params.merge!(war_time_id: war_time.id)
      nil
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

    def create_game
      game = Game.create!(@games_params)
      send_invites(game)
      game
    end

    def set_game
      @game = Game.find(params[:id])
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
