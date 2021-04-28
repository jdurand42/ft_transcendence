# frozen_string_literal: true

require 'rails_helper'
include(CompetitionHelper)
RSpec.describe CompetitionHelper do
  let!(:ladder) { create(:ladder) }
  let!(:player) { create(:user, status: 'online', ladder: ladder) }
  let!(:player_1) { create(:user, status: 'online', ladder: ladder) }
  describe 'match a player' do
    it 'with better score' do
      player.update!(score: 10)
      player_1.update!(score: 100)
      expect(match_maker(player)).to eq player_1
    end
    it 'with the best score if no better score' do
      player.update!(score: 100)
      player_1.update!(score: 90)
      expect(match_maker(player)).to eq player_1
    end
  end
  describe 'assign_ladder' do
    let(:bronze) { Ladder.create(name: 'Bronze') }
    let(:silver) { Ladder.create(name: 'Silver') }
    let(:gold) { Ladder.create(name: 'Gold') }
    let(:platinum) { Ladder.create(name: 'Platinum') }
    let(:diamond) { Ladder.create(name: 'Diamond') }
    let!(:ach_1) { Achievement.create(name: 'RoadToDiamond I', description: 'You must reach Silver Ladder') }
    let!(:ach_2) { Achievement.create(name: 'RoadToDiamond II', description: 'You must reach Gold Ladder') }
    let!(:ach_3) { Achievement.create(name: 'RoadToDiamond III', description: 'You must reach Platinum Ladder') }
    let!(:ach_4) { Achievement.create(name: 'To Infinity And Beyond !', description: 'You must reach Diamond Ladder') }
    it 'assigns player to bronze' do
      player.update!(score: 10)
      expect { assign_ladder(player) }.to change { player.ladder_id }.to(bronze.id)
    end
    it 'assigns player to silver' do
      player.update!(score: 1010)
      expect { assign_ladder(player) }.to change { player.ladder_id }.to(silver.id)
      expect(UserAchievement.find_by_user_id_and_achievement_id(player.id, ach_1.id))
    end
    it 'assigns player to gold' do
      player.update!(score: 2010)
      expect { assign_ladder(player) }.to change { player.ladder_id }.to(gold.id)
      expect(UserAchievement.find_by_user_id_and_achievement_id(player.id, ach_2.id))
    end
    it 'assigns player to platinum' do
      player.update!(score: 4010)
      expect { assign_ladder(player) }.to change { player.ladder_id }.to(platinum.id)
      expect(UserAchievement.find_by_user_id_and_achievement_id(player.id, ach_3.id))
    end
    it 'assigns player to diamond' do
      player.update!(score: 12_010)
      expect { assign_ladder(player) }.to change { player.ladder_id }.to(diamond.id)
      expect(UserAchievement.find_by_user_id_and_achievement_id(player.id, ach_4.id))
    end
  end
end
