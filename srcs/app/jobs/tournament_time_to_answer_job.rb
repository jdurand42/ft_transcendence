# frozen_string_literal: true

class TournamentTimeToAnswerJob < ApplicationJob
  include(GameOverHelper)
  include(TournamentHelper)
  queue_as :default

  def perform(game)
    return unless game.status == 'pending'
    return game.destroy if game.connected_players.size.zero?

    game.update!(winner_id: game.connected_players[0])
    game_over(game)
    manage_tournament(game)
  end
end
