# frozen_string_literal: true

module CompetitionHelper
  include(AchievementHelper)

  def match_maker(player, mode)
    return wartime_matchmaker(player) if mode == 'war'

    main_match_maker(player)
  end

  def main_match_maker(player)
    user = User.where(status: 'online').where('score > ?', player.score).order('score').without(player).first
    return user.id.to_s if user.present?

    User.where(status: 'online').order(:score).without(player).last&.id.to_s
  end

  def enemy_list(player)
    war = War.find_by(opened: true, from: player.guild)
    war ||= War.find_by(opened: true, on: player.guild)
    war.from == player.guild ? war.on.members : war.from.members
  end

  def wartime_matchmaker(player)
    enemy_online = []
    enemy_list(player).each do |t|
      enemy_online << t.user if t.user.status == 'online'
    end
    enemy_online.sample&.id.to_s
  end

  def assign_ladder(player)
    case player.score
    when 0..99
      player.update!(ladder: Ladder.find_by_name('Bronze'))
    when 100..199
      player.update!(ladder: Ladder.find_by_name('Silver'))
    when 200..299
      player.update!(ladder: Ladder.find_by_name('Gold'))
    when 300..499
      player.update!(ladder: Ladder.find_by_name('Platinum'))
    else
      player.update!(ladder: Ladder.find_by_name('Diamond')) if player.score > 499
    end
  end
end
