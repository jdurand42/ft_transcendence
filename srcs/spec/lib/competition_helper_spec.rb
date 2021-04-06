# frozen_string_literal: true

require 'rails_helper'
include(CompetitionHelper)
RSpec.describe CompetitionHelper do
  let!(:ladder) { create(:ladder) }
  let!(:player) { create(:user, status: 'online', ladder: ladder, ladder_games_won: 9, ladder_games_lost: 6)}
  let!(:player_1) { create(:user, status: 'online', ladder: ladder, ladder_games_won: 10, ladder_games_lost: 10)}
  let!(:player_2) { create(:user, status: 'online', ladder: ladder, ladder_games_won: 8, ladder_games_lost: 8)}
  let!(:player_3) { create(:user, status: 'online', ladder: ladder, ladder_games_won: 7, ladder_games_lost: 6)}
  let!(:player_4) { create(:user, status: 'online', ladder: ladder, ladder_games_won: 6, ladder_games_lost: 6)}
  describe "match a player" do
    it "with more wins" do
      expect(match_maker(player)).to eq player_1
    end
    it "with the most wins if no one with more wins" do
      expect(match_maker(player_1)).to eq player
    end
  end
  describe "top_ladder?" do
    it "confirms player is in ladder top 3" do
      expect(top_ladder?(player)).to be_truthy
    end
    it "confirms player_4 is not in ladder top 3" do
      expect(top_ladder?(player_4)).to be_falsey
    end
  end
  describe "assign_ladder" do
    let(:bronze) { Ladder.create(name: 'Bronze') }
    let(:silver) { Ladder.create(name: 'Silver') }
    let(:gold) { Ladder.create(name: 'Gold') }
    let(:platinum) { Ladder.create(name: 'Platinum') }
    let(:diamond) { Ladder.create(name: 'Diamond') }
    it "assigns player to gold" do
      expect{ assign_ladder(player) }.to change{ player.ladder_id }.to(gold.id)
    end
    it "assigns player_4 to bronze", test:true do
      expect{ assign_ladder(player_4) }.to change{ player_4.ladder_id }
    end
    it "assigns player_3 to silver" do
      expect{ assign_ladder(player_3) }.to change{ player_3.ladder_id }.to(silver.id)
    end
  end
end
