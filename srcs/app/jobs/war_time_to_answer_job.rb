# frozen_string_literal: true

class WarTimeToAnswerJob < ApplicationJob
  include(GameOverHelper)
  queue_as :default

  def perform(game, war_time)
    return unless game.status == 'pending'

    if max_unanswered_positive?(game, war_time)
      decrement_max_unanswered(game, war_time)
      notify_unanswered(game)
    else
      game.winner_id = game.connected_players[0]
      game_over(game)
    end
    game.update!(status: 'played')
  end

  def absent_player(game)
    if game.connected_players.include?(game.player_left.id)
      game.player_right
    else
      game.player_left
    end
  end

  def max_unanswered_positive?(game, war_time)
    if absent_player(game).guild == war_time.war.from
      war_time.from_max_unanswered.positive?
    else
      war_time.on_max_unanswered.positive?
    end
  end

  def decrement_max_unanswered(game, war_time)
    if absent_player(game).guild == war_time.war.from
      war_time.decrement!(:from_max_unanswered)
    else
      war_time.decrement!(:on_max_unanswered)
    end
  end
end
