# frozen_string_literal: true

module WartimeMatchmaking
  def enemy_list(user_a)
    war = War.find_by(opened: true, from: user_a.guild)
    war ||= War.find_by(opened: true, on: user_a.guild)
    war.from == user_a.guild ? war.on.members : war.from.members
  end

  def wartime_matchmaker(user_a)
    enemy_online = []
    enemy_list(user_a).each do |t|
      enemy_online << t.user if t.user.status == 'online'
    end
    enemy_online.sample&.id.to_s
  end
end
