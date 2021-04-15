# frozen_string_literal: true

require 'rails_helper'
include(AchievementHelper)
RSpec.describe AchievementHelper do
  describe "achievement_unlocked" do
    let!(:ach) { Achievement.create(name: 'My Name Is Achilles', description: 'You must win a tournament') }
    let!(:winner) { create(:user) }
    it "creates a UserAchievement" do
      achievement_unlocked(winner.id, 'My Name Is Achilles')
      expect(UserAchievement.find_by_user_id_and_achievement_id(winner.id, ach.id)).to be_present
    end
    it "broadcasts" do
      expect{ achievement_unlocked(winner.id, 'My Name Is Achilles') }.to have_broadcasted_to("user_#{winner.id}").exactly(:once).with(action: 'achievement_unlocked', id: ach.id)
    end
    it "unlock achievement once max",test:true do
      expect{ achievement_unlocked(winner.id, 'My Name Is Achilles') }.to have_broadcasted_to("user_#{winner.id}")
      expect{ achievement_unlocked(winner.id, 'My Name Is Achilles') }.to_not have_broadcasted_to("user_#{winner.id}")
      expect(UserAchievement.count).to eq 1
    end
  end
end

