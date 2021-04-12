# frozen_string_literal: true

module AchievementHelper
  def achievement_unlocked(winner_id, name)
    ach = Achievement.find_by_name(name).id
    UserAchievement.create!(user_id: winner_id, achievement_id: ach)
    ActionCable.server.broadcast("user_#{winner_id}", { action: 'achievement_unlocked', id: ach })
  end

  def mass_achievement_unlocked(user_ids, name)
    user_ids.each { |t| achievement_unlocked(t, name) }
  end
end
