# frozen_string_literal: true

module CompetitionHelper
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
      player.update!(ladder: Ladder.find_by_name('Silver'))
    when 2000...4000
      player.update!(ladder: Ladder.find_by_name('Gold'))
    when 4000...8000
      player.update!(ladder: Ladder.find_by_name('Platinum'))
    else
      player.update!(ladder: Ladder.find_by_name('Diamond')) if player.score > 12_000
    end
  end
end