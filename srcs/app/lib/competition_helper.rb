# frozen_string_literal: true

module CompetitionHelper
  def match_maker(player)
    user = User.where(status: 'online').where('ladder_games_won > ?', player.ladder_games_won).order('ladder_games_won')
               .without(player).first
    return user if user.present?

    User.where(status: 'online').order('ladder_games_won').without(player).last
  end

  def top_ladder?(player)
    User.where(ladder_id: player.ladder_id).order(:ladder_games_won).last(3).include?(player)
  end

  def assign_ladder(player)
    ratio = user_ratio(player.id)
    case ratio
    when 0.0...1.0
      player.update!(ladder: Ladder.find_by_name('Bronze'))
    when 1.0...1.5
      player.update!(ladder: Ladder.find_by_name('Silver'))
    when 1.5...2.0
      player.update!(ladder: Ladder.find_by_name('Gold'))
    when 2.0...2.5
      player.update!(ladder: Ladder.find_by_name('Platinum'))
    else
      player.update!(ladder: Ladder.find_by_name('Diamond')) if ratio > 2.5
    end
  end

  def user_ratio(user_id)
    user = User.find(user_id)
    user.ladder_games_won.to_f / user.ladder_games_lost
  end
end
