# frozen_string_literal: true

require 'rails_helper'
include(TournamentHelper)
RSpec.describe TournamentHelper do
  context 'Tournament with 3 participants' do
    let!(:ach) { Achievement.create(name: 'My Name Is Achilles', description: 'You must win a tournament') }
    let!(:tournament) { create(:tournament_with_participants) }
    let(:participants) { tournament.participants.pluck(:user_id) }
    describe 'match_all_played?' do
      it 'returns true' do
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[0], player_right_id: participants[1], winner_id: participants[0])
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[1], player_right_id: participants[2], winner_id: participants[1])
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[2], player_right_id: participants[0], winner_id: participants[2])
        expect(match_all_played?).to be_truthy
      end
      it 'returns false' do
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[0], player_right_id: participants[1], winner_id: participants[0])
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[1], player_right_id: participants[2], winner_id: participants[1])
        expect(match_all_played?).to be_falsey
      end
      it "returns false if all game status not 'played'" do
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[0], player_right_id: participants[1], winner_id: participants[0])
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[1], player_right_id: participants[2], winner_id: participants[1])
        create(:game, mode: 'tournament', status: 'inprogress', tournament_id: tournament.id, player_left_id: participants[2], player_right_id: participants[0])
        expect(match_all_played?).to be_falsey
      end
    end
    describe 'participant win_count' do
      it 'increments win_count' do
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[0], player_right_id: participants[1], winner_id: participants[0])
        expect { manage_tournament(Game.first) }.to change { TournamentParticipant.find_by_user_id(participants[0]).win_count }.by(1)
      end
      it 'increments by 1 for all games' do
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[0], player_right_id: participants[1], winner_id: participants[0])
        expect { manage_tournament(Game.first) }.to change { TournamentParticipant.find_by_user_id(participants[0]).win_count }.by(1)
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[1], player_right_id: participants[2], winner_id: participants[2])
        expect { manage_tournament(Game.second) }.to change { TournamentParticipant.find_by_user_id(participants[2]).win_count }.by(1)
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[2], player_right_id: participants[0], winner_id: participants[2])
        expect { manage_tournament(Game.last) }.to change { TournamentParticipant.find_by_user_id(participants[2]).win_count }.by(1)
      end
    end
    describe 'tournament_winner' do
      it 'returns player with bigger win_count' do
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[0], player_right_id: participants[1], winner_id: participants[0])
        manage_tournament(Game.first)
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[1], player_right_id: participants[2], winner_id: participants[2])
        manage_tournament(Game.second)
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[2], player_right_id: participants[0], winner_id: participants[2])
        manage_tournament(Game.last)
        expect(Tournament.first.winner_id).to eq participants[2]
      end
    end
    describe 'opponent_control' do
      it "add opponent's id to participant opponents" do
        create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[0], player_right_id: participants[1], winner_id: participants[0])
        manage_tournament(Game.first)
        expect(TournamentParticipant.find_by_user_id(participants[0]).opponents).to include(participants[1])
        expect(TournamentParticipant.find_by_user_id(participants[1]).opponents).to include(participants[0])
      end
    end
  end
  describe 'manage_exaequo' do
    let!(:tournament) { create(:tournament_with_participants, count: 4) }
    let(:participants) { tournament.participants.pluck(:user_id) }
    before do
      create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[0], player_right_id: participants[1], winner_id: participants[0])
      manage_tournament(Game.first)
      create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[1], player_right_id: participants[2], winner_id: participants[1])
      manage_tournament(Game.second)
      create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[2], player_right_id: participants[3], winner_id: participants[2])
      manage_tournament(Game.third)
      create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[3], player_right_id: participants[0], winner_id: participants[3])
      manage_tournament(Game.fourth)
      create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[3], player_right_id: participants[1], winner_id: participants[3])
      manage_tournament(Game.fifth)
      create(:game, mode: 'tournament', status: 'played', tournament_id: tournament.id, player_left_id: participants[2], player_right_id: participants[0], winner_id: participants[2])
      manage_tournament(Game.last)
    end
    it 'deletes non exaequo participants' do
      expect(TournamentParticipant.count).to eq 2
    end
    it 'resets participants opponents list' do
      expect(TournamentParticipant.where.not(opponents: []).count).to eq 0
    end
  end
end
