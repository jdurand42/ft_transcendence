# frozen_string_literal: true

require 'rails_helper'
include(WartimeMatchmaking)
RSpec.describe WartimeMatchmaking do
  before {
    create_list(:guild_with_members, 2, count: 1)
    create(:war, from: Guild.first, on: Guild.last)
    War.first.update!(opened: true)
    User.update_all(status: 'online')
  }
  it "finds a opponent" do
    expect(wartime_matchmaker(User.first)).to eq User.last.id.to_s
  end
  it "finds only online opponents" do
    User.last.update!(status: 'offline')
    expect(wartime_matchmaker(User.first)).to eq ""
  end
end
