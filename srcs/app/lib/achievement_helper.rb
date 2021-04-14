# frozen_string_literal: true

module AchievementHelper
  def achievement_unlocked(user_id, name)
    ach = Achievement.find_by_name(name)
    return unless ach.nil? == false

    UserAchievement.create!(user_id: user_id, achievement_id: ach.id)
    ActionCable.server.broadcast("user_#{user_id}", { action: 'achievement_unlocked', id: ach.id })
  end

  def mass_achievement_unlocked(user_ids, name)
    user_ids.each { |t| achievement_unlocked(t, name) }
  end
end
