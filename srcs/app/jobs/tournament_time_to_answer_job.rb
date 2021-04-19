# frozen_string_literal: true

class TournamentTimeToAnswerJob < ApplicationJob
  include(GameOverHelper)
  queue_as :default

  def perform(game)
    game.update!(winner_id: game.player_left.id)
    game_over(game)
  end
end
