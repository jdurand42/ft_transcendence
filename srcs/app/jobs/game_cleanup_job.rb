# frozen_string_literal: true

class GameCleanupJob < ApplicationJob
  include(GameOverHelper)
  queue_as :default

  def perform(game)
    notify_declined(game)
    Game.destroy(game.id)
  end
end
