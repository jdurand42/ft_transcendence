# frozen_string_literal: true

class WarTimeToAnswerJob < ApplicationJob
  include(GameOverHelper)
  queue_as :default

  def perform(game, war_time)
    if war_time&.max_unanswered&.positive?
      war_time.decrement!(:max_unanswered)
      notify_unanswered(game.id, game.player_left.id, game.player_right.id)
    else
      game.update!(winner: game.player_left)
      game_over(game)
    end
    game.update!(status: 'played')
  end
end
