# frozen_string_literal: true

require 'rails_helper'
include(ScoreHelper)

RSpec.describe WarPrizeGiver do
  let!(:wpg) { WarPrizeGiver.new }
  let!(:guilds) { create_list(:guild_with_members, 2, score: 0) }
  let!(:war) { create(:war, from: guilds[0], on: guilds[1], prize: 1000, opened: true, closed: false, from_score: 1, on_score: 0) }
  let!(:ach) { Achievement.create(name: 'This Is Sparta !', description: 'You must win a War') }
  before { wpg.prize_points(war) }
  it "should transfer points" do
    expect(guilds[0].score).to eq 1000
    expect(guilds[1].score).to eq -1000
  end
  it "should unlock achievement for winning guild members" do
    expect(UserAchievement.all.pluck(:user_id)).to eq guilds[0].members.pluck(:user_id)
  end
end
