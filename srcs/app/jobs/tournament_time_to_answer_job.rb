# frozen_string_literal: true

class TournamentTimeToAnswerJob < ApplicationJob
  queue_as :default

  def perform(game)
    GameEngine.new(game, 0).forfeit(game.player_right.id)
    game.update!(status: 'played')
  end
end
