# frozen_string_literal: true

class TournamentTimeToAnswerJob < ApplicationJob
  include(GameOverHelper)
  include(TournamentHelper)
  queue_as :default

  def perform(game)
    game.update!(winner_id: game.player_left.id)
    game_over(game)
    manage_tournament(game)
  end
end
