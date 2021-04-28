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

  def notify_players(game)
    notify_winner(game.id, game.winner.id)
    if game.player_left.id == game.winner.id
      notify_looser(game.id, game.player_right.id)
    else
      notify_looser(game.id, game.player_left.id)
    end
  end

  def game_over(game)
    game.update!(status: 'played')
    change_players_status(game, 'online')
    return if game.winner.nil?

    assign_ladder(game.player_left)
    assign_ladder(game.player_right)
    GamePointGiver.new.game_points(game)
    notify_players(game)
  end

  def notify_unanswered(game)
    ActionCable.server.broadcast("user_#{game.player_left.id}", { action: 'game_unanswered', id: game.id })
    ActionCable.server.broadcast("user_#{game.player_right.id}", { action: 'game_unanswered', id: game.id })
  end

  def change_players_status(game, status)
    update_user_status(game.player_left, status) if game.player_left.status != 'offline'
    update_user_status(game.player_right, status) if game.player_right.status != 'offline'
  end
end
