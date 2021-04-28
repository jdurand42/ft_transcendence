# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Tournaments', type: :request do
  let(:auth) { create(:user, admin: true) }
  let(:token) { auth.create_new_auth_token }
  context 'GET' do
    let(:users) { create_list(:user, 2, status: 'online') }
    let(:token_2) { users[0].create_new_auth_token }
    let(:token_3) { users[1].create_new_auth_token }
    before do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now + 1 }
      post participants_api_tournament_url(Tournament.first.id), headers: token_2
      post participants_api_tournament_url(Tournament.first.id), headers: token_3
      put api_tournament_url(Tournament.first.id), headers: token, params: { start_date: DateTime.now }
      post api_games_url, headers: token_2,
                          params: { mode: 'tournament', opponent_id: users[1].id, tournament_id: Tournament.first.id }
    end
    describe '#index' do
      it 'should return the tournament' do
        get api_tournaments_url, headers: token
        expect(response.status).to eq 200
        expect(json[0]['participant_ids']).to eq [users[0].id, users[1].id]
        expect(json.size).to eq 1
      end
    end
    describe '#participants' do
      it 'should return participants' do
        get participants_api_tournament_url(Tournament.first.id), headers: token
        expect(json.size).to eq 2
      end
    end
  end
  describe 'POST /create' do
    it 'should create a tournament' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now }
      expect(response.status).to eq 201
      expect(Tournament.count).to eq 1
    end
    it 'should not create two tournaments' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now }
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now + 1 }
      expect(json['errors']).to eq ['There can be only one tournament at a time']
      expect(response.status).to eq 403
      expect(Tournament.count).to eq 1
    end
  end
  describe 'PUT /update' do
    it 'should update a tournament' do
      start_date_param = DateTime.now + 2
      post api_tournaments_url, headers: token, params: { start_date: DateTime.tomorrow }
      put api_tournament_url(Tournament.first.id), headers: token, params: { start_date: start_date_param }
      expect(response.status).to eq 200
      expect(Tournament.first.start_date.strftime('%d/%b/%Y')).to eq start_date_param.strftime('%d/%b/%Y')
    end
    it 'should not update running tournament' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.yesterday }
      put api_tournament_url(Tournament.first.id), headers: token, params: { start_date: DateTime.now }
      expect(response.status).to eq 403
      expect(json['errors']).to eq ['The tournament has begun']
      expect(Tournament.first.start_date.strftime('%d/%b/%Y')).to eq DateTime.yesterday.strftime('%d/%b/%Y')
    end
  end
  describe 'DELETE /destroy' do
    it 'should delete tournament' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now + 1 }
      delete api_tournament_url(Tournament.first.id), headers: token
      expect(response.status).to eq 204
      expect(Tournament.count).to eq 0
    end
  end
  describe '#join' do
    it 'user should join tournament' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now + 1 }
      user = create(:user)
      token_2 = user.create_new_auth_token
      post participants_api_tournament_url(Tournament.first.id), headers: token_2
      expect(Tournament.first.participants.count).to eq 1
    end
    it 'should not join running tournament' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now }
      user = create(:user)
      token_2 = user.create_new_auth_token
      post participants_api_tournament_url(Tournament.first.id), headers: token_2
      expect(json['errors']).to eq ['The tournament has begun']
      expect(Tournament.first.participants.count).to eq 0
    end
  end
  describe '#leave' do
    it 'user should leave tournament' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now + 1 }
      user = create(:user)
      token_2 = user.create_new_auth_token
      post participants_api_tournament_url(Tournament.first.id), headers: token_2
      delete "/api/tournaments/#{Tournament.first.id}/participants/#{user.id}", headers: token_2
      expect(status).to eq 204
    end
    it 'admin should kick a participant' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now + 1 }
      user = create(:user)
      token_2 = user.create_new_auth_token
      post participants_api_tournament_url(Tournament.first.id), headers: token_2
      delete "/api/tournaments/#{Tournament.first.id}/participants/#{user.id}", headers: token
      expect(status).to eq 204
    end
    it 'only admins should kick' do
      post api_tournaments_url, headers: token, params: { start_date: DateTime.now + 1 }
      users = create_list(:user, 2)
      token_2 = users[0].create_new_auth_token
      token_3 = users[1].create_new_auth_token
      post participants_api_tournament_url(Tournament.first.id), headers: token_2
      delete "/api/tournaments/#{Tournament.first.id}/participants/#{users[0].id}", headers: token_3
      expect(status).to eq 403
    end
  end
end
