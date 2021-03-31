require 'rails_helper'

RSpec.describe "Wars", type: :request do
  let(:auth) { create(:user) }
  let(:auth_2) { create(:user) }
  let(:access_token) { auth.create_new_auth_token }
  let(:access_token_2) { auth_2.create_new_auth_token }
  let(:attributes) { { on_id: Guild.last.id, war_start: DateTime.now, war_end: DateTime.new(2022, 01, 01, 00, 00, 0), prize: 1000 } }
  let(:attributes_2) { { on_id: Guild.first.id, war_start: DateTime.now, war_end: DateTime.new(2022), prize: 100 } }
  before {
    post api_guilds_url, headers: access_token, params: { name: "NoShroud", anagram: "NOS", score: 100 }
    post api_guilds_url, headers: access_token_2, params: { name: "BANG", anagram: "ABCDE", score: 100 }
  }
  context '#get' do
    before {
      post api_wars_url, headers: access_token, params: attributes
      post api_wars_url, headers: access_token_2, params: attributes_2
    }
    describe "#index" do
      it 'should return all wars' do
        get api_wars_url, headers: access_token
        expect(json.size).to eq 2
        expect(response.status).to eq 200
      end
      it 'should return guild wars' do
        get "/api/wars?guild_id=#{Guild.first.id}", headers: access_token
        expect(json.size).to eq 2
        expect(response.status).to eq 200
      end
    end
    describe "#show" do
      it 'should return a war' do
        get api_war_url(War.first), headers: access_token
        expect(response.status).to eq 200
        expect(json['id']).to match(War.first.id)
        expect(json['id']).to_not match(War.last.id)
      end
    end
  end
  describe "#create" do
    it 'should declare a war' do
      post api_wars_url, headers: access_token, params: attributes
      expect(response.status).to eq 201
      expect(War.count).to eq(1)
    end
    it 'should not let a member create a war' do
      user_1 = create(:user)
      user_1_access = user_1.create_new_auth_token
      post "/api/guilds/#{Guild.first.id}/members/#{user_1.id}", headers: access_token
      post api_wars_url, headers: user_1_access, params: attributes
      expect(response.status).to eq 403
      expect(response.message).to eq 'Forbidden'
      expect(War.count).to eq 0
    end
    it 'should not let declare a war against himself' do
      valid_attributes = { on_id: Guild.first.id, war_start: DateTime.now, war_end: DateTime.new(2022, 03, 10, 11, 11, 0), prize: 1000 }
      post api_wars_url, headers: access_token, params: valid_attributes
      expect(response.status).to eq 422
      expect(War.count).to eq(0)
    end
    it 'should not let guild-less user declare a war' do
      user = create(:user)
      token = user.create_new_auth_token
      post api_wars_url, headers: token, params: attributes
      expect(response.status).to eq 403
      expect(War.count).to eq(0)
    end
  end
  describe "#update" do
    before { post api_wars_url, headers: access_token, params: attributes }
    it 'should update a war' do
      put api_war_url(War.first.id), headers: access_token_2, params: { war_end: DateTime.new(2022, 03, 10, 11, 11, 0), prize: 200 }
      expect(response.status).to eq 200
      expect(War.first.war_end).to eq(DateTime.new(2022, 03, 10, 11, 11,0))
      expect(War.first.prize).to eq(200)
    end
    it 'should not let owner update after creation' do
      put api_war_url(War.first.id), headers: access_token, params: { prize: 1200 }
      expect(response.status).to eq 403
      expect(json['errors']).to eq ['Your opponent has not negotiated war terms yet']
    end
    it 'should let update works alternately' do
      put api_war_url(War.first.id), headers: access_token_2, params: { prize: 1200 }
      expect(response.status).to eq 200
      put api_war_url(War.first.id), headers: access_token, params: { prize: 1100 }
      expect(response.status).to eq 200
      put api_war_url(War.first.id), headers: access_token_2, params: { prize: 1000 }
      expect(response.status).to eq 200
      put api_war_url(War.first.id), headers: access_token, params: { prize: 900 }
      expect(response.status).to eq 200
    end
    it 'should not let same user update war twice' do
      put api_war_url(War.first.id), headers: access_token_2, params: { prize: 1200 }
      expect(response.status).to eq 200
      put api_war_url(War.first.id), headers: access_token, params: { prize: 900 }
      expect(response.status).to eq 200
      put api_war_url(War.first.id), headers: access_token_2, params: { prize: 900 }
      expect(response.status).to eq 200
      put api_war_url(War.first.id), headers: access_token_2, params: { prize: 900 }
      expect(response.status).to eq 403
    end
    it 'should not let update if terms are accepted' do
      post agreements_api_war_url(War.first.id), headers: access_token, params: { agree_terms: true }
      post agreements_api_war_url(War.first.id), headers: access_token_2, params: { agree_terms: true }
      put api_war_url(War.first.id), headers: access_token, params: { prize: 800 }
      expect(json['errors']).to eq ['War terms have been accepted, cannot update anymore']
      expect(response.status).to eq 403
    end
  end
  describe '#agreement' do
    before { post api_wars_url, headers: access_token, params: attributes }
    it 'should agree war terms' do
      post agreements_api_war_url(War.first.id), headers: access_token, params: { agree_terms: true }
      expect(War.first.from_agreement).to be_truthy
      post agreements_api_war_url(War.first.id), headers: access_token_2, params: { agree_terms: true }
      expect(response.status).to eq 201
      expect(War.first.on_agreement).to be_truthy
      expect(War.first.terms_agreed).to be_truthy
    end
    context 'if one side has agreed terms,' do
      it 'should not let update' do
        post agreements_api_war_url(War.first.id), headers: access_token, params: { agree_terms: true }
        put api_war_url(War.first.id), headers: access_token, params: { prize: 900 }
        expect(response.status).to eq 403
        expect(json['errors']).to eq ['One side has agree war terms, accept or decline agreement']
      end
      it 'should not let create war_times' do
        post agreements_api_war_url(War.first.id), headers: access_token, params: { agree_terms: true }
        post times_api_war_url(War.first.id), headers: access_token, params: { date_start: DateTime.new(2021, 1, 1), date_end: DateTime.new(2022, 1, 1) }
        expect(response.status).to eq 403
        expect(json['errors']).to eq ['One side has agree war terms, accept or decline agreement']
      end
    end
  end
  describe '#wars_entangled?' do
    before {
      post api_wars_url, headers: access_token, params: attributes
      post api_wars_url, headers: access_token_2, params: { on_id: Guild.first.id, war_start: DateTime.now, war_end: DateTime.new(2022, 01, 01, 00, 00, 0), prize: 1000 }
      post agreements_api_war_url(War.first.id), headers: access_token, params: { agree_terms: true }
    }
    it 'should consider war with agreed terms (start dates entangled)' do
      post agreements_api_war_url(War.first.id), headers: access_token_2, params: { agree_terms: true }
      post agreements_api_war_url(War.last.id), headers: access_token, params: { agree_terms: true }
      expect(json['errors']).to eq ['Entity dates are entangled with another one']
      expect(response.status).to eq 403
    end
    it 'should consider war with agreed terms (end dates entangled)' do
      post api_wars_url, headers: access_token_2, params: { on_id: Guild.first.id, war_start: DateTime.new(2020, 1, 1), war_end: DateTime.new(2021, 6, 6), prize: 1000 }
      post agreements_api_war_url(War.first.id), headers: access_token_2, params: { agree_terms: true }
      post agreements_api_war_url(War.last.id), headers: access_token, params: { agree_terms: true }
      expect(json['errors']).to eq ['Entity dates are entangled with another one']
      expect(response.status).to eq 403
    end
    it 'should not consider war without agreed terms' do
      expect(response.status).to eq 201
    end
  end
  describe 'lifecycle' do
    let(:attributes) { { on_id: Guild.last.id, war_start: DateTime.now, war_end: DateTime.now.in_time_zone(1).in(5), prize: 100 } }
    before {
      post api_wars_url, headers: access_token, params: attributes
      post agreements_api_war_url(War.first.id), headers: access_token, params: { agree_terms: true }
      post agreements_api_war_url(War.first.id), headers: access_token_2, params: { agree_terms: true }
    }
    context 'opening' do
      before { perform_enqueued_jobs(only: WarOpenerJob) }
      it 'should open at start time' do
        expect(War.first.opened?).to be_truthy
      end
      it 'should not let update when opened' do
        put api_war_url(War.first.id), headers: access_token_2, params: { prize: 1200 }
        expect(json['errors']).to eq ["War ongoing"]
      end
    end
    context 'closing' do
      it 'should close at end time' do
        perform_enqueued_jobs(only: WarCloserJob)
        expect(War.first.closed?).to be_truthy
      end
      it 'should not let update when closed' do
        perform_enqueued_jobs(only: WarCloserJob)
        put api_war_url(War.first.id), headers: access_token_2, params: { prize: 1200 }
        expect(json['errors']).to eq ["This war has ended"]
      end
      it 'transfers prize points from looser to winner (from_side)' do
        War.first.update!(from_score: 2, on_score: 1)
        perform_enqueued_jobs(only: WarCloserJob)
        expect(War.first.from.score).to eq 100
        expect(War.first.on.score).to eq -100
      end
      it 'transfers prize points from looser to winner (on_side)' do
        War.first.update!(from_score: 1, on_score: 2)
        perform_enqueued_jobs(only: WarCloserJob)
        expect(War.first.from.score).to eq -100
        expect(War.first.on.score).to eq 100
      end
    end
  end
  describe "Times",test:true do
    let(:war_time_attributes) { { day: Date.today.strftime("%A"), start_hour: 8, end_hour: 20, time_to_answer: 10, max_unanswered: 2 } }
    before { post api_wars_url, headers: access_token, params: attributes }
    context 'create' do
      it 'should create a war time' do
        post times_api_war_url(War.first.id), headers: access_token, params: war_time_attributes
        expect(response.status).to eq 201
      end
      it 'should not create entangled war time (start hour entangled)' do
        post times_api_war_url(War.first.id), headers: access_token, params: war_time_attributes
        post times_api_war_url(War.first.id), headers: access_token, params: { day: Date.today.strftime("%A"), start_hour: 9, end_hour: 21, time_to_answer: 10, max_unanswered: 2 }
        expect(response.status).to eq 403
        expect(json['errors']).to eq ['Entity dates are entangled with another one']
      end
      it 'should not create entangled war time (end hour entangled)' do
        post times_api_war_url(War.first.id), headers: access_token, params: war_time_attributes
        post times_api_war_url(War.first.id), headers: access_token, params: { day: Date.today.strftime("%A"), start_hour: 7, end_hour: 19, time_to_answer: 10, max_unanswered: 2 }
        expect(response.status).to eq 403
        expect(json['errors']).to eq ['Entity dates are entangled with another one']
      end
    end
    context 'destroy' do
      before { post times_api_war_url(War.first.id), headers: access_token, params: war_time_attributes }
      it 'should destroy a war time' do
        delete times_api_war_url(War.first.id), headers: access_token, params: { tid: WarTime.first.id }
        expect(response.status).to eq 204
        expect(WarTime.count).to eq 0
      end
      it 'should not destroy a war time if terms accepted' do
        post agreements_api_war_url(War.first.id), headers: access_token, params: { agree_terms: true }
        post agreements_api_war_url(War.first.id), headers: access_token_2, params: { agree_terms: true }
        delete times_api_war_url(War.first.id), headers: access_token, params: { tid: WarTime.first.id }
        expect(response.status).to eq 403
        expect(WarTime.count).to eq 1
      end
    end
  end
end
