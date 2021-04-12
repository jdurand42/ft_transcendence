# frozen_string_literal: true

module CompetitionHelper
  include(AchievementHelper)

  def match_maker(player)
    user = User.where(status: 'online').where('score > ?', player.score).order('score').without(player).first
    return user if user.present?

    User.where(status: 'online').order(:score).without(player).last
  end

  def assign_ladder(player)
    case player.score
    when 0...1000
      player.update!(ladder: Ladder.find_by_name('Bronze'))
    when 1000...2000
      update_and_unlock(player, 'Silver', 'RoadToDiamond I')
    when 2000...4000
      update_and_unlock(player, 'Gold', 'RoadToDiamond II')
    when 4000...8000
      update_and_unlock(player, 'Platinum', 'RoadToDiamond III')
    else
      update_and_unlock(player, 'Diamond', 'To Infinity And Beyond !') if player.score > 12_000
    end
  end

  def update_and_unlock(player, ladder_name, ach_name)
    player.update!(ladder: Ladder.find_by_name(ladder_name))
    achievement_unlocked(player.id, ach_name)
  end
end
