# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:nickname) }
  it { should allow_values(true, false).for(:two_factor) }
  it { should allow_values(true, false).for(:first_login) }
  it { should allow_values(true, false).for(:admin) }
  it { should allow_values(true, false).for(:banned) }
  it { should allow_values('offline', 'online', 'ingame').for(:status) }
  it { should validate_presence_of(:ladder_games_won) }
  it { should validate_presence_of(:ladder_games_lost) }
  it { should belong_to(:ladder) }
  it { should have_one(:guild_member).dependent(:destroy) }
  it { should have_many(:chat_participant).dependent(:destroy) }
  it { should have_many(:ignores).dependent(:destroy) }

  it 'validates uniqueness of nickname' do
    create(:user, nickname: 'unique name')
    should validate_uniqueness_of(:nickname)
  end

  describe "achievement" do
    it 'validates achievement when two_factor is toggled' do
      user = FactoryBot.create(:user, two_factor: false)
      create(:achievement, name: "Much Secure!")
      user.two_factor = true
      user.save
      expect(UserAchievement.count).to eq(1)
    end
    it "unlock achievement at 100 ladder_won" do
      user = create(:user)
      create(:achievement, name: "Is There No One Else ?")
      user.update!(ladder_games_won: 100)
      expect(UserAchievement.count).to eq(1)
    end
  end
end
