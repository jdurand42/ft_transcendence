# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::Messages', type: :request do
  include_context 'with cache'
  let(:auth) { create(:user) }
  let(:current_chat) { create(:chat) }
  let(:access_token) { auth.create_new_auth_token }

  describe '#get' do
    it 'should retrieves last 10 messages' do
      chat = create(:chat_with_messages, messages_count: 20)
      create(:chat_participant, user: auth, chat: chat)
      get "/api/chats/#{chat.id}/messages", headers: access_token
      expect(ChatMessage.all.count).to eq(20)
      expect(json.size).to eq 10
      expect(response.status).to eq 200
    end
    it 'lets admin retrieve',test: true do
      auth.update(admin: true)
      chat = create(:chat_with_messages, messages_count: 20)
      get "/api/chats/#{chat.id}/messages", headers: access_token
      expect(response.status).to eq 200
    end
  end
end
