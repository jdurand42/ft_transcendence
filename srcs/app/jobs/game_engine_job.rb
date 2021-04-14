# frozen_string_literal: true

class GameEngineJob < ApplicationJob
  include(CacheHelper)
  include(TournamentHelper)
  include(GameOverHelper)
  queue_as :default

  def perform(game, turns_limit)
    change_players_status(game, 'ingame')
    game.update!(status: 'inprogress')
    pong = GameEngine.new(game, turns_limit)
    pong.start
    turn(pong) until pong.over
    game_over(game)
    manage_tournament(game)
  end

  def turn(pong)
    paddle_left = game_get_paddle_pos(pong.game.id, pong.game.player_left.id)
    paddle_right = game_get_paddle_pos(pong.game.id, pong.game.player_right.id)
    pong.tick(paddle_left, paddle_right)
    sleep(0.01.seconds)
  end
end
