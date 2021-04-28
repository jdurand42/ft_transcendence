# frozen_string_literal: true

module UserStatusHelper
  ACTIVITY_CHANNEL = 'activity'

  def update_user_status(user, status)
    user.update!(status: status)
    content = {}
    content[:action] = 'user_update_status'
    content[:id] = user.id
    content[:status] = status
    content[:game_id] = user_find_pending_game(user) if status == 'ingame'
    ActionCable.server.broadcast(ACTIVITY_CHANNEL, content)
  end

  def user_find_pending_game(user)
    if (g = Game.where(status: 'pending', player_left: user.id)).present?
      return g.first.id
    end
    if (g = Game.where(status: 'pending', player_right: user.id)).present?
      return g.first.id
    end

    0
  end
end
