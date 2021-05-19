# frozen_string_literal: true

require 'faker'
require 'factory_bot_rails'
include(CompetitionHelper)

Ladder.create(name: 'Bronze')
Ladder.create(name: 'Silver')
Ladder.create(name: 'Gold')
Ladder.create(name: 'Platinum')
Ladder.create(name: 'Diamond')

Achievement.create(name: 'My Name Is Achilles', description: 'You must win a tournament')
Achievement.create(name: 'Tonight, We Dine In Hell !', description: 'You must declare a War')
Achievement.create(name: 'This Is Sparta !', description: 'You must win a War')
Achievement.create(name: 'Is There No One Else ?', description: 'You must win 100 ladder games')
Achievement.create(name: 'RoadToDiamond I', description: 'You must reach Silver Ladder')
Achievement.create(name: 'RoadToDiamond II', description: 'You must reach Gold Ladder')
Achievement.create(name: 'RoadToDiamond III', description: 'You must reach Platinum Ladder')
Achievement.create(name: 'To Infinity And Beyond !', description: 'You must reach Diamond Ladder')
Achievement.create(name: 'Much Secure!', description: '2FA is activated')

if Rails.env.development?

  def create_users(count)
    FactoryBot.create_list(:user, count)
  end

  def create_guilds(count, officer_count = 0, member_count = 0)
    guilds = FactoryBot.create_list(:guild, count)
    guilds.each do |guild|
      create_guild_members(guild, 'owner', create_users(1))
      create_guild_members(guild, 'officer', create_users(officer_count))
      create_guild_members(guild, 'member', create_users(member_count))
    end
    guilds
  end

  def create_guild_members(guild, rank, users)
    users.each { |user| FactoryBot.create(:guild_member, guild: guild, rank: rank, user: user) }
  end

  def create_chats(count, participant_count)
    chats = FactoryBot.create_list(:chat, count)
    chats.each do |chat|
      create_chat_participants(chat, create_users(participant_count))
    end
  end

  def create_chat_participants(chat, users)
    users.each { |participant| FactoryBot.create(:chat_participant, user: participant, chat: chat) }
  end

  def create_incoming_war(from, on)
    FactoryBot.create(:war, from: from, on: on, war_start: DateTime.now + 2, war_end: DateTime.now + 3, opened: false, closed: false)
  end

  def create_opened_war(from, on)
    FactoryBot.create(:war, from: from, on: on, war_start: DateTime.now - 1, war_end: DateTime.now + 1, opened: true, closed: false)
  end

  def create_closed_war(from, on)
    FactoryBot.create(:war, from: from, on: on, war_start: DateTime.now - 3, war_end: DateTime.now - 2, opened: false, closed: true)
  end

  def create_war_games(count, war_times, from_side, on_side)
    war_times.each do |war_time|
      count.times do
        left = User.find(from_side.members.pluck(:user_id).sample)
        right = User.find(on_side.members.pluck(:user_id).sample)
        hash = {
          left: {
            user: left,
            left_score: 3,
            right_score: rand(0..2)
          }, right: {
            user: right,
            right_score: 3,
            left_score: rand(0..2)
          }
        }
        winner = hash[hash.keys.sample]
        Game.create(winner: winner[:user], player_left: left, player_right: right, mode: 'war', status: 'played', war_time: war_time, player_left_points: winner[:left_score], player_right_points: winner[:right_score])
      end
    end
  end

  def create_war_times(count, war)
    days = %w[monday tuesday wednesday thursday friday saturday sunday]
    war_times = []
      count.times do
        war_times << WarTime.create(day: days.sample, start_hour: rand(1..12), end_hour: rand(13..23), time_to_answer: rand(10..120), max_unanswered: rand(1..10), war: war)
      end
    war_times
  end

  FactoryBot.create(:user, nickname: "Alfred", email: "9000@student.42.fr", two_factor: true, two_factor_code: ENV["ALFRED_CODE"])
  guilds = create_guilds(2, 1, 2)

  incoming_war = create_incoming_war(guilds[0], guilds[1])
  create_war_times(2, incoming_war)

  closed_war = create_closed_war(guilds[0], guilds[1])
  war_times = create_war_times(2, closed_war)
  create_war_games(2, war_times, guilds[0], guilds[1])

  opened_war = create_opened_war(guilds[0], guilds[1])
  war_times = create_war_times(2, opened_war)
  create_war_games(2, war_times, guilds[0], guilds[1])

  create_chats(2, 2)
  create_guilds(2, 2, 3)

  User.all.each { |user| assign_ladder(user) }
end
