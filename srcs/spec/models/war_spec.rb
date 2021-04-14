# frozen_string_literal: true

require 'rails_helper'

RSpec.describe War, type: :model do
  it 'should validate presence of attributes' do
    should validate_presence_of(:from)
    should validate_presence_of(:on)
    should validate_presence_of(:war_start)
    should validate_presence_of(:war_end)
    should validate_presence_of(:prize)
  end

  it 'should have correct association' do
    should belong_to(:from)
    should belong_to(:on)
    should have_many(:war_addons)
    should have_many(:war_times)
  end

  describe "achievement" do
    it "unlock when player declares war",test:true do
      bang = create(:guild_with_members, count: 3)
      create(:achievement, name: 'Tonight, We Dine In Hell !')
      create(:war, from: bang, on: create(:guild), war_start: DateTime.now + 1, war_end: DateTime.now + 3)
      expect(UserAchievement.count).to eq 3
    end
  end
end
