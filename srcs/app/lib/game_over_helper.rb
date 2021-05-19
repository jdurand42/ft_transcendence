# frozen_string_literal: true

module GameOverHelper
  include(UserStatusHelper)
  include(ScoreHelper)
  include(CompetitionHelper)
  def notify_winner(game_id, user_id)
    ActionCable.server.broadcast("user_#{user_id}", { action: 'game_won', id: game_id })
  end

  def notify_looser(game_id, user_id)
    ActionCable.server.broadcast("user_#{user_id}", { action: 'game_lost', id: game_id })
  end

  def notify_spectator(game)
    ActionCable.server.broadcast("game_#{game.id}", { action: 'game_over', id: game.id })
  end

  def notify_players(game)
    notify_spectator(game)
    notify_winner(game.id, game.winner.id)
    notify_looser(game.id, game.player_left.id == game.winner.id ? game.player_left.id : game.player_right.id)
  end

  def game_over(game)
    game.update!(status: 'played')
    change_players_status(game, 'online')
    return if game.winner.nil?

    GamePointGiver.new.game_points(game)
    notify_players(game)
  end

  def notify_unanswered(game)
    ActionCable.server.broadcast("user_#{game.player_left.id}", { action: 'game_unanswered', id: game.id })
    ActionCable.server.broadcast("user_#{game.player_right.id}", { action: 'game_unanswered', id: game.id })
  end

  def notify_declined(game)
    ActionCable.server.broadcast("user_#{game.player_left.id}", { action: 'game_declined', id: game.id })
    ActionCable.server.broadcast("user_#{game.player_right.id}", { action: 'game_declined', id: game.id })
  end

  def change_players_status(game, status)
    update_user_status(game.player_left, status) if game.player_left.status != 'offline'
    update_user_status(game.player_right, status) if game.player_right.status != 'offline'
  end
end
