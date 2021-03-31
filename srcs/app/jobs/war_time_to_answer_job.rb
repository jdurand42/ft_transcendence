# frozen_string_literal: true

class WarTimeToAnswerJob < ApplicationJob
  queue_as :default

  def perform(game)
    ge = GameEngine.new(game, 0)
    ge.forfeit(game.player_right.id)
    game.update!(status: 'played')
  end
end
