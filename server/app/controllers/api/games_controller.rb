# frozen_string_literal: true

module Api
  class GamesController < ApiController
    GameReducer = Rack::Reducer.new(
      Game.all,
      ->(user_id:) { Game.where(player_left: user_id).or(Game.where(player_right: user_id)) },
      ->(game_type_id:) { where(game_type_id: game_type_id) }
    )

    def index
      @games = GameReducer.apply(params)
      json_response(@games)
    end

    def create
      games_params = params.permit(:game_type_id)
      if games_params[:game_type_id] == '1'
        raise ActiveRecord::RecordInvalid if params.key?(:opponent_id) == false

        games_params[:player_left_id], games_params[:player_right_id] = [current_user.id,
                                                                         params[:opponent_id].to_i].shuffle
      end
      json_response(Game.create!(games_params))
    end
  end
end