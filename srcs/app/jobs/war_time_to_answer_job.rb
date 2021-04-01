# frozen_string_literal: true

class WarTimeToAnswerJob < ApplicationJob
  queue_as :default

  def perform(game, war_time)
    ge = GameEngine.new(game, 0)

    if war_time&.max_unanswered&.positive?
      war_time.decrement!(:max_unanswered)
      ge.unanswered
    else
      ge.forfeit(game.player_right.id)
    end
    game.update!(status: 'played')
  end
end
