# frozen_string_literal: true

class GameCleanupJob < ApplicationJob
  include(GameOverHelper)
  queue_as :default

  def perform(game)
    game.reload
    return unless game.status == 'pending'

    notify_declined(game)
    Game.destroy(game.id)
  end
end
