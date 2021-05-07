# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Games', type: :request do
  let(:access_token) { auth.create_new_auth_token }
  let(:auth) { User.find_by(nickname: 'auth') }
  let(:sam) { User.find_by(nickname: 'sam') }
  let(:pippin) { User.find_by(nickname: 'pippin') }
  let(:merry) { User.find_by(nickname: 'merry') }
  before(:all) {
    FactoryBot.create(:user, nickname: 'auth', admin: true, status: 'online')
    FactoryBot.create(:user, nickname: 'auth_2', status: 'online')
    Achievement.create(name: 'Tonight, We Dine In Hell !', description: 'You must declare a War')
    %w(sam pippin merry).map { |name| FactoryBot.create(:user, status: 'online', nickname: name) }
    Guild.create(name: 'NoShroud', anagram: 'NOS')
    Guild.create(name: 'BANG', anagram: 'ABCDE')
    GuildMember.create(user_id: User.find_by(nickname: 'auth').id, guild_id: Guild.first.id, rank: 'owner')
    GuildMember.create(user_id: User.find_by(nickname: 'auth_2').id, guild_id: Guild.last.id, rank: 'owner')
    GuildMember.create(user_id: User.find_by(nickname: 'sam').id, guild_id: Guild.first.id, rank: 'member')
    GuildMember.create(user_id: User.find_by(nickname: 'pippin').id, guild_id: Guild.last.id, rank: 'member')
    FactoryBot.create(:war, from_id: Guild.first.id, on_id: Guild.last.id, opened: true)
  }
  after(:all) {
    GuildMember.destroy_all
    War.destroy_all
    User.destroy_all
    Achievement.destroy_all
    Guild.destroy_all
  }
  describe 'requires auth token' do
    before { get '/api/games' }
    it 'returns status code 401' do
      expect(response).to have_http_status(401)
      expect(json).to_not be_empty
    end
  end
  describe 'retrieves one game' do
    before { create_list(:game, 2) }
    it 'returns one game' do
      get api_game_url(Game.first.id), headers: access_token
      expect(json['id']).to eq Game.first.id
      expect(status).to eq 200
    end
  end
  describe 'retrieves all games played' do
    context 'search with user_id' do
      before do
        create_list(:game, 2)
        get '/api/games', headers: access_token, params: { user_id: User.last.id, mode: 'duel' }
      end
      it 'returns all games played' do
        expect(json).not_to be_empty
        expect(json.size).to eq(1)
      end
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
        expect(json).to_not be_empty
      end
    end
    context 'search with user_id and status' do
      before do
        create_list(:game, 2)
        Game.first.update!(status: 'played')
        get '/api/games', headers: access_token, params: { status: 'played' }
      end
      it 'returns all games played' do
        expect(json).not_to be_empty
        expect(json.size).to eq(1)
        expect(response).to have_http_status(200)
      end
    end
    context 'search with tournament_id' do
      it 'returns all tournament games' do
        create(:tournament)
        create_list(:game, 1)
        create_list(:game, 2, tournament_id: Tournament.first.id)
        get '/api/games', headers: access_token, params: { tournament_id: Tournament.first.id }
        expect(json.count).to eq 2
      end
    end
    context 'search with war_time_id' do
      it 'returns all war_time_id games' do
        FactoryBot.create(:war_with_times)
        create(:game)
        create_list(:game, 2, mode: 'war', war_time_id: WarTime.first.id)
        get '/api/games', headers: access_token, params: { war_time_id: WarTime.first.id }
        expect(json.count).to eq 2
      end
    end
    context 'everything' do
      before do
        create_list(:game, 2)
        get '/api/games', headers: access_token
      end
      it 'returns all played matchs' do
        expect(json.size).to eq(2)
      end
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end
  context 'create' do
    describe 'a valid duel game' do
      it 'returns status code 201' do
        create(:game)
        expect do
          post '/api/games', headers: access_token, params: { mode: 'duel', opponent_id: sam.id }
        end.to have_broadcasted_to("user_#{sam.id}").exactly(:once).with(sender_id: auth.id, action: 'game_invitation', id: Game.maximum(:id).next)
        expect(response).to have_http_status(201)
        expect(json).not_to be_empty
        expect(Game.count).to eq(2)
      end
    end
    describe 'a duel with an already ingame player' do
      before do
        sam.update!(status: 'ingame')
        post '/api/games', headers: access_token, params: { mode: 'duel', opponent_id: sam.id }
      end
      it 'returns status code 403' do
        expect(response).to have_http_status(401)
        expect(json).not_to be_empty
      end
    end
    it 'already in another duel game' do
      create(:game, player_right: auth, status: 'pending')
      post '/api/games', headers: access_token, params: { mode: 'duel', opponent_id: sam.id }
      expect(response).to have_http_status(401)
      expect(json).not_to be_empty
    end
    it 'already in another duel game' do
      create(:game, player_left: auth, status: 'pending')
      post '/api/games', headers: sam.create_new_auth_token, params: { mode: 'duel', opponent_id: auth.id }
      expect(response).to have_http_status(401)
      expect(json).not_to be_empty
    end
  end
  context 'delete' do
    describe 'cancel invitation' do
      before do
        game = create(:game, player_left: auth)
        delete "/api/games/#{game.id}", headers: access_token
      end
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
    describe 'is not allowed after game started' do
      before do
        game = create(:game)
        game.update!(status: 'played')
        delete "/api/games/#{game.id}", headers: sam.create_new_auth_token
      end
      it 'returns status code 403' do
        expect(response).to have_http_status(403)
        expect(json).not_to be_empty
      end
    end
  end
  context 'WarTime' do
    let(:auth_2) { User.find_by(nickname: 'auth_2') }
    let(:access_token_2) { auth_2.create_new_auth_token }
    before { WarTime.create(day: Date.today.strftime('%A'), start_hour: 2, end_hour: 23, time_to_answer: 10, max_unanswered: 1, war: War.first) }
    it 'should decrement max_unanswered at time_to_answer' do
      post '/api/games', headers: access_token, params: { mode: 'war', opponent_id: auth_2.id }
      accept_game_invite(Game.first, auth.id)
      perform_enqueued_jobs(only: WarTimeToAnswerJob)
      expect(Game.first.winner_id).to eq nil
      expect(WarTime.first.max_unanswered).to eq 1
      expect(WarTime.first.from_max_unanswered).to eq 1
      expect(WarTime.first.on_max_unanswered).to eq 0
    end
    it "returns 'noWarTimeOnGoing' if user has no guild" do
      token_3 = merry.create_new_auth_token
      post '/api/games', headers: token_3, params: { mode: 'war', opponent_id: auth_2.id }
      expect(json['error']).to eq "Can't launch game in war mode, no running WarTime"
    end
    it "can't create a game if existing 'inprogress' game",test:true do
      post '/api/games', headers: access_token, params: { mode: 'war', opponent_id: auth_2.id }
      Game.first.update!(status: 'inprogress', connected_players: [auth.id, auth_2.id])
      post '/api/games', headers: sam.create_new_auth_token, params: { mode: 'war', opponent_id: pippin.id }
      expect(json['error']).to eq 'Your guild is already playing a war time match against this guild'
    end
    it "can create a game if existing 'played' game" do
      Game.create(winner: auth, player_left_id: auth.id, player_right_id: auth_2.id, war_time_id: WarTime.first.id, mode: 'war', status: "played")
      post '/api/games', headers: sam.create_new_auth_token, params: { mode: 'war', opponent_id: pippin.id }
      expect(json['player_left_id']).to eq sam.id
    end
    it "returns 'noWarTimeOnGoing' if no wartime" do
      WarTime.first.update!(end_hour: 3)
      post '/api/games', headers: access_token, params: { mode: 'war', opponent_id: auth_2.id }
      expect(json['error']).to eq "Can't launch game in war mode, no running WarTime"
    end
    it 'should forfeit opponent at time_to_answer' do
      WarTime.first.update!(on_max_unanswered: 0)
      post '/api/games', headers: access_token, params: { mode: 'war', opponent_id: auth_2.id }
      accept_game_invite(Game.first, auth.id)
      perform_enqueued_jobs(only: WarTimeToAnswerJob)
      expect(Game.first.winner_id).to eq auth.id
    end
    it 'should delete game at TTA if no one answer' do
      post '/api/games', headers: access_token, params: { mode: 'war', opponent_id: auth_2.id }
      perform_enqueued_jobs(only: WarTimeToAnswerJob)
      expect(Game.first).to eq nil
      expect(WarTime.first.from_max_unanswered).to eq 1
      expect(WarTime.first.on_max_unanswered).to eq 1
    end
  end
  context 'Tournament' do
    include(TournamentHelper)
    let(:users) { create_list(:user, 2, status: 'online') }
    let(:token) { sam.create_new_auth_token }
    let(:token_2) { pippin.create_new_auth_token }
    before do
      post api_tournaments_url, headers: access_token, params: { start_date: DateTime.now + 1 }
      post participants_api_tournament_url(Tournament.first.id), headers: token
      post participants_api_tournament_url(Tournament.first.id), headers: token_2
      create(:tournament_participant, tournament: Tournament.first)
    end
    it "can't play twice against same opponent (one way)" do
      put api_tournament_url(Tournament.first.id), headers: access_token, params: { start_date: DateTime.now }
      post api_games_url, headers: token, params: { mode: 'tournament', opponent_id: pippin.id }
      Game.first.update!(status: 'played')
      TournamentParticipant.find_by_user_id(sam.id).update!(opponents: [pippin.id])
      post api_games_url, headers: token, params: { mode: 'tournament', opponent_id: pippin.id }
      expect(Game.count).to eq 1
      expect(json['error']).to eq 'You already challenged this player'
      expect(status).to eq 401
    end
    it "can't play twice against same opponent (other way)" do
      put api_tournament_url(Tournament.first.id), headers: access_token, params: { start_date: DateTime.now }
      post api_games_url, headers: token, params: { mode: 'tournament', opponent_id: pippin.id }
      Game.first.update!(status: 'played')
      TournamentParticipant.find_by_user_id(sam.id).update!(opponents: [pippin.id])
      TournamentParticipant.find_by_user_id(pippin.id).update!(opponents: [sam.id])
      post api_games_url, headers: token_2, params: { mode: 'tournament', opponent_id: sam.id }
      expect(Game.count).to eq 1
      expect(json['error']).to eq 'You already challenged this player'
      expect(status).to eq 401
    end
    it "can't play before tournament starts" do
      post api_games_url, headers: token, params: { mode: 'tournament', opponent_id: pippin.id }
      expect(Game.count).to eq 0
      expect(json['error']).to eq 'Tournament has not started yet'
      expect(status).to eq 401
    end
    it "can't play if opponent not participant" do
      put api_tournament_url(Tournament.first.id), headers: access_token, params: { start_date: DateTime.now }
      post api_games_url, headers: token, params: { mode: 'tournament', opponent_id: merry.id }
      expect(Game.count).to eq 0
      expect(json['error']).to eq "This player doesn't participate to the tournament"
      expect(status).to eq 401
    end
    context "TTA" do
      before {
        put api_tournament_url(Tournament.first.id), headers: access_token, params: { start_date: DateTime.now }
        post api_games_url, headers: token, params: { mode: 'tournament', opponent_id: pippin.id, tournament_id: Tournament.first.id }
      }
      it 'sam wins at TTA' do
        accept_game_invite(Game.first, sam.id)
        perform_enqueued_jobs(only: TournamentTimeToAnswerJob)
        expect(Game.first.winner_id).to eq sam.id
        expect(Game.first.status).to eq 'played'
        winner = TournamentParticipant.find_by(user_id: sam.id)
        expect(winner.win_count).to eq 1
        expect(winner.opponents).to include(pippin.id)
        expect(TournamentParticipant.find_by(user_id: pippin.id).opponents).to include(sam.id)
      end
      it 'pippin wins at TTA' do
        accept_game_invite(Game.first, pippin.id)
        perform_enqueued_jobs(only: TournamentTimeToAnswerJob)
        expect(Game.first.winner_id).to eq pippin.id
        expect(Game.first.status).to eq 'played'
        winner = TournamentParticipant.find_by(user_id: pippin.id)
        expect(winner.win_count).to eq 1
        expect(winner.opponents).to include(sam.id)
        expect(TournamentParticipant.find_by(user_id: sam.id).opponents).to include(pippin.id)
      end
      it 'no one accept game invite, no one win, no max_unanswered decrement' do
        perform_enqueued_jobs(only: TournamentTimeToAnswerJob)
        expect(Game.first.status).to eq 'played'
        expect(Game.first.winner_id).to eq nil
      end
    end
  end
  context "Matchmaking" do
    it 'ladder mode' do
      User.update_all(score: 10)
      auth.update!(score: 1)
      sam.update!(score: 2)
      post api_games_url, headers: access_token, params: { mode: 'ladder' }
      expect(status).to eq 201
      expect(json['player_right_id']).to eq sam.id
    end
    it 'duel mode' do
      User.update_all(score: 10)
      auth.update!(score: 1)
      sam.update!(score: 2)
      post api_games_url, headers: access_token, params: { mode: 'duel' }
      expect(status).to eq 201
      expect(json['player_right_id']).to eq sam.id
    end
    it 'war mode' do
      WarTime.create(day: Date.today.strftime('%A'), start_hour: 8, end_hour: 22, time_to_answer: 10, max_unanswered: 1, war: War.first)
      post api_games_url, headers: access_token, params: { mode: 'war' }
      expect(status).to eq 201
      expect(User.find(json['player_right_id']).guild).to eq Guild.last
    end
  end
  def accept_game_invite(game, *players)
    game.connected_players.push(*players)
    game.save
  end
end
