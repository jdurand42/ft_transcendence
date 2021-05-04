# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Chats', type: :request do
  include_context 'with cache'
  let(:auth) { create(:user) }
  let(:access_token) { auth.create_new_auth_token }
  let(:user) { create(:user) }
  let(:user_access) { user.create_new_auth_token }
  let(:users) { create_list(:user, 3) }
  let(:chat) { create(:chat, owner: auth) }
  describe '#index' do
    let!(:chats) { create_list(:chat, 2) }
    it 'should get chats' do
      get api_chats_url, headers: access_token
      expect(response.status).to eq 200
      expect(json.size).to eq(2)
    end
    it 'should get chats where participant_id equal' do
      ChatParticipant.create(chat: Chat.first, user: User.first)
      get api_chats_url, headers: access_token, params: { participant_id: User.first.id }
      expect(response).to have_http_status(200)
      expect(json.size).to eq(1)
    end
    it 'should get chat' do
      get api_chat_url(Chat.first.id), headers: access_token
      expect(response).to have_http_status(200)
      assert_equal Chat.first.privacy, json['privacy']
    end
  end
  describe 'Ban/Mute responses' do
    before do
      post api_chats_url, headers: access_token, params: { name: 'Hop' }
      post invites_api_chat_url(Chat.first.id), headers: access_token, params: { participant_ids: [user.id] }
    end
    it 'should get timeout_id' do
      post mutes_api_chat_url(Chat.first.id), headers: access_token, params: { user_id: user.id, duration: 10 }
      get api_chat_url(Chat.first.id), headers: access_token
      expect(json['timeout_ids'][0]).to eq user.id
    end
    it 'should get ban_id' do
      post bans_api_chat_url(Chat.first.id), headers: access_token, params: { user_id: user.id, duration: 10 }
      get api_chat_url(Chat.first.id), headers: access_token
      expect(json['ban_ids'][0]).to eq user.id
    end
  end

  describe '#create' do
    context 'should create a chat with :' do
      it 'owner as admin' do
        post api_chats_url, headers: access_token, params: { name: 'Hop' }
        expect(response).to have_http_status(201)
        expect(ChatParticipant.first.role).to eq('owner')
      end
      it 'two participants' do
        post api_chats_url, headers: access_token, params: { name: 'Hop', privacy: 'private', participant_ids: [user.id] }
        expect(response).to have_http_status(201)
        expect(ChatParticipant.first.user_id).to eq(auth.id)
        expect(ChatParticipant.last.user_id).to eq(user.id)
      end
      it 'a name' do
        post api_chats_url, headers: access_token, params: { name: 'DISCUSSION' }
        expect(response).to have_http_status(201)
        expect(Chat.first.name).to eq('DISCUSSION')
      end
      it 'unique bad participant ID' do
        post api_chats_url, headers: access_token, params: { name: 'Hop', participant_ids: 0 }
        expect(response).to have_http_status(201)
      end
      it 'array including bad participant ID' do
        post api_chats_url, headers: access_token, params: { name: 'Hop', participant_ids: [users[0].id, [0], users[1].id, users[2].id] }
        expect(ChatParticipant.count).to eq 4
        expect(response).to have_http_status(201)
      end
      it "current_user as chat's owner" do
        post api_chats_url, headers: access_token, params: { name: 'Hop', privacy: 'protected', password: 'asd' }
        expect(response).to have_http_status(201)
        expect(Chat.first.owner.id).to eq(auth.id)
        expect(ChatParticipant.first.user_id).to eq(auth.id)
        expect(ChatParticipant.first.role).to eq('owner')
        expect(Chat.first.name).to eq('Hop')
        expect(json).to include('name' => 'Hop')
      end
      it 'two participants max if direct_message' do
        post api_chats_url, headers: access_token, params: { name: 'Hop', privacy: 'direct_message', participant_ids: [users[0].id, users[1].id, users[2].id] }
        expect(Chat.first.participants.count).to eq 2
        expect(Chat.first.participants.last.user_id).to eq users[0].id
      end
    end
    context 'should not create :' do
      it 'a protected chat without password' do
        post api_chats_url, headers: access_token, params: { name: 'Hop', privacy: 'protected' }
        expect(response).to have_http_status(422)
        expect(response.body).to match("Validation failed: Password can't be blank")
      end
      it 'a chat without a name' do
        post api_chats_url, headers: access_token
        expect(response).to have_http_status(422)
        expect(response.body).to match("Validation failed: Name can't be blank")
      end
    end
  end

  describe '#join' do
    let(:chat_attributes) { { name: 'Hop', privacy: 'protected', password: 'abc' } }
    before { post api_chats_url, headers: access_token, params: chat_attributes }
    it 'should let a user join a protected chat' do
      post participants_api_chat_url(Chat.first.id), headers: user_access, params: { password: 'abc' }
      expect(response.status).to eq 201
      expect(ChatParticipant.count).to eq(2)
    end
    it 'should return error: passwordRequired' do
      post participants_api_chat_url(Chat.first.id), headers: user_access
      expect(response).to have_http_status(422)
      expect(json['error']).to eq 'param is missing or the value is empty: password'
      expect(ChatParticipant.count).to eq(1)
    end
    it 'should return error : passwordIncorrect' do
      post participants_api_chat_url(Chat.first.id), headers: user_access, params: { password: 'cbd' }
      expect(response.status).to eq 403
      expect(response.body).to match(I18n.t('passwordIncorrect'))
      expect(ChatParticipant.count).to eq(1)
    end
    it 'should not let user join twice' do
      post participants_api_chat_url(Chat.first.id), headers: user_access, params: { password: 'abc' }
      expect(response.status).to eq 201
      post participants_api_chat_url(Chat.first.id), headers: user_access, params: { password: 'abc' }
      expect(json['message']).to eq 'Validation failed: User has already been taken'
      expect(response.status).to eq 422
    end
    it 'should not let user join private chat' do
      Chat.first.update!(privacy: 'private')
      post participants_api_chat_url(Chat.first.id), headers: user_access
      expect(json['error']).to eq 'You must be invited to join this chat'
    end
  end
  describe '#mutes' do
    it 'should mute a participant' do
      timer = 2
      post participants_api_chat_url(chat.id), headers: access_token, params: { user: user, chat: chat }
      post mutes_api_chat_url(chat.id), headers: access_token, params: { user_id: user.id, duration: timer }
      expect(response).to have_http_status(201)
      expect(Rails.cache.exist?("timeout_chat_#{chat.id}_#{user.id}")).to eq(true)
      sleep((timer + 1).seconds)
      expect(Rails.cache.exist?("timeout_chat_#{chat.id}_#{user.id}")).to eq(false)
    end
    it 'should return an error, due to bad parameters' do
      post mutes_api_chat_url(chat.id), headers: access_token, params: { useP: user, duration: 2 }
      expect(response).to have_http_status(422)
    end
    it 'should not let participant mute' do
      post participants_api_chat_url(chat.id), headers: user_access, params: { user: user, chat: chat }
      post mutes_api_chat_url(chat.id), headers: user_access, params: { user_id: user.id, duration: 2 }
      expect(response).to have_http_status(403)
      expect(json['errors']).to eq ['This action is not allowed with your current privileges.']
    end
    context "super_user" do
      before { user.update(admin: true) }
      it 'should ban participant' do
        to_be_banned = ChatParticipant.create(user: users[1], chat: chat, role: 'participant')
        post bans_api_chat_url(chat.id), headers: user_access, params: { user_id: to_be_banned.id, duration: 10 }
        expect(response).to have_http_status(201)
        expect(Rails.cache.exist?("ban_chat_#{chat.id}_#{to_be_banned.id}")).to eq(true)
      end
      it 'should ban chat_admin' do
        to_be_banned = ChatParticipant.create(user: users[1], chat: chat, role: 'admin')
        post bans_api_chat_url(chat.id), headers: user_access, params: { user_id: to_be_banned.id, duration: 10 }
        expect(response).to have_http_status(201)
        expect(Rails.cache.exist?("ban_chat_#{chat.id}_#{to_be_banned.id}")).to eq(true)
      end
      it 'should ban owner' do
        post bans_api_chat_url(chat.id), headers: user_access, params: { user_id: auth.id, duration: 10 }
        expect(response).to have_http_status(201)
        expect(Rails.cache.exist?("ban_chat_#{chat.id}_#{auth.id}")).to eq(true)
      end
    end
  end
  describe '#bans' do
    it 'owner should ban' do
      to_be_banned = ChatParticipant.create(user: users[0], chat: chat, role: 'participant')
      post bans_api_chat_url(chat.id), headers: access_token, params: { user_id: to_be_banned.id, duration: 10 }
      expect(response).to have_http_status(201)
      expect(Rails.cache.exist?("ban_chat_#{chat.id}_#{to_be_banned.id}")).to eq(true)
    end
    it 'chat_admin should ban' do
      ChatParticipant.create(user: users[0], chat: chat, role: 'admin')
      admin_access = users[0].create_new_auth_token
      to_be_banned = ChatParticipant.create(user: users[1], chat: chat, role: 'participant')
      post bans_api_chat_url(chat.id), headers: admin_access, params: { user_id: to_be_banned.id, duration: 10 }
      expect(response).to have_http_status(201)
      expect(Rails.cache.exist?("ban_chat_#{chat.id}_#{to_be_banned.id}")).to eq(true)
    end
    it 'participant should not ban' do
      ChatParticipant.create(user: users[0], chat: chat, role: 'participant')
      to_be_banned = ChatParticipant.create(user: users[1], chat: chat, role: 'participant')
      post bans_api_chat_url(chat.id), headers: user_access, params: { user_id: to_be_banned.id, duration: 10 }
      expect(response).to have_http_status(403)
      expect(json['errors']).to eq ['This action is not allowed with your current privileges.']
    end
    context "super_user" do
      before { user.update(admin: true) }
      it 'should ban participant' do
        to_be_banned = ChatParticipant.create(user: users[1], chat: chat, role: 'participant')
        post bans_api_chat_url(chat.id), headers: user_access, params: { user_id: to_be_banned.id, duration: 10 }
        expect(response).to have_http_status(201)
        expect(Rails.cache.exist?("ban_chat_#{chat.id}_#{to_be_banned.id}")).to eq(true)
      end
      it 'should ban chat_admin' do
        to_be_banned = ChatParticipant.create(user: users[1], chat: chat, role: 'admin')
        post bans_api_chat_url(chat.id), headers: user_access, params: { user_id: to_be_banned.id, duration: 10 }
        expect(response).to have_http_status(201)
        expect(Rails.cache.exist?("ban_chat_#{chat.id}_#{to_be_banned.id}")).to eq(true)
      end
      it 'should ban owner' do
        post bans_api_chat_url(chat.id), headers: user_access, params: { user_id: auth.id, duration: 10 }
        expect(response).to have_http_status(201)
        expect(Rails.cache.exist?("ban_chat_#{chat.id}_#{auth.id}")).to eq(true)
      end
    end
    it 'should return an error, due to bad parameters' do
      post bans_api_chat_url(chat.id), headers: access_token, params: { userP: users[0], duration: 10 }
      expect(response).to have_http_status(422)
    end
    it 'should notify' do
      expect do
        post bans_api_chat_url(chat.id), headers: access_token, params: { user_id: user.id, duration: 10 }
      end.to have_broadcasted_to("user_#{user.id}").exactly(:once).with(action: 'chat_banned', id: chat.id)
    end
  end

  describe '#update' do
    it "should change chat's name and privacy" do
      post api_chats_url, headers: access_token, params: { name: 'Hop' }
      put api_chat_url(Chat.first.id), headers: access_token, params: { name: 'Custom Name', privacy: 'private' }
      expect(Chat.first.name).to eq('Custom Name')
      expect(Chat.first.privacy).to eq('private')
    end
    it "should return 'not_allowed'" do
      post api_chats_url, headers: access_token, params: { name: 'Hop' }
      put api_chat_url(Chat.first.id), headers: user_access, params: { admin_ids: [user.id] }
      expect(response).to have_http_status(403)
      expect(response.body).to match(I18n.t('notAllowed'))
    end
  end

  describe '#leave' do
    it 'should let participant leave chat' do
      post participants_api_chat_url(chat.id), headers: user_access, params: { user: user, chat: chat }
      delete participants_api_chat_url(chat.id), headers: user_access
      expect(ChatParticipant.count).to eq(1)
    end
    it 'should let participant leave protected chat' do
      post api_chats_url, headers: access_token, params: { name: 'Hop', privacy: 'protected', password: 'abc' }
      delete participants_api_chat_url(Chat.first.id), headers: access_token
      expect(ChatParticipant.count).to eq(0)
      expect(response.status).to eq 204
      expect(Chat.first).to eq nil
    end
    it 'should delete participant and chat' do
      post api_chats_url, headers: access_token, params: { name: 'Hop' }
      delete participants_api_chat_url(Chat.first.id), headers: access_token
      expect(ChatParticipant.count).to eq(0)
      expect(Chat.first).to eq nil
    end
    it 'should delete owner and set another user, owner' do
      post api_chats_url, headers: access_token, params: { name: 'Hop', participant_ids: [user.id] }
      delete participants_api_chat_url(Chat.first.id), headers: access_token
      expect(ChatParticipant.count).to eq(1)
      expect(ChatParticipant.where(role: 'owner').count).to eq(1)
      expect(ChatParticipant.first.user_id).to eq(user.id)
      expect(ChatParticipant.where(role: 'owner').first.user_id).to eq(user.id)
      expect(Chat.first.owner.id).to eq(user.id)
      expect(response).to have_http_status(204)
    end
    it 'should delete owner and set another admin, owner' do
      admin = create(:user)
      post api_chats_url, headers: access_token, params: { name: 'Hop', participant_ids: [admin.id, user.id] }
      ChatParticipant.find_by(user_id: admin.id).update(role: 'admin')
      delete participants_api_chat_url(Chat.first.id), headers: access_token
      expect(ChatParticipant.count).to eq(2)
      expect(ChatParticipant.where(role: 'owner').count).to eq(1)
      expect(ChatParticipant.first.user_id).to eq(admin.id)
      expect(ChatParticipant.where(role: 'owner').first.user_id).to eq(admin.id)
      expect(Chat.first.owner.id).to eq(admin.id)
      expect(response).to have_http_status(204)
    end
  end

  describe '#kick',test:true do
    before { post api_chats_url, headers: access_token, params: { name: 'Hop', privacy: 'private', participant_ids: [ user.id, users[0].id, users[1].id] } }
    it 'should kick a participant' do
      expect do
        delete "/api/chats/#{Chat.first.id}/participants/#{users[0].id}", headers: access_token
      end.to have_broadcasted_to("user_#{users[0].id}").exactly(:once).with(action: 'chat_kicked', id: Chat.first.id)
      expect(response.status).to eq 204
      expect(ChatParticipant.find_by(user: users[0], chat: Chat.first)).to eq nil
    end
    it 'should not let participant kick a participant' do
      delete "/api/chats/#{Chat.first.id}/participants/#{users[0].id}", headers: user_access
      expect(response.status).to eq 403
      expect(ChatParticipant.count).to eq 4
    end
    context "admin should" do
      before { ChatParticipant.find_by(user: user, chat: Chat.first).update(role: 'admin') }
      it 'kick a participant' do
        delete "/api/chats/#{Chat.first.id}/participants/#{users[0].id}", headers: user_access
        expect(response.status).to eq 204
        expect(ChatParticipant.find_by(user: users[0], chat: Chat.first)).to eq nil
      end
      it 'not kick the owner' do
        delete "/api/chats/#{Chat.first.id}/participants/#{auth.id}", headers: user_access
        expect(response.status).to eq 401
        expect(ChatParticipant.where(user: auth, chat: Chat.first)).to exist
      end
      it 'kick an admin' do
        ChatParticipant.find_by(user: users[0], chat: Chat.first).update(role: 'admin')
        delete "/api/chats/#{Chat.first.id}/participants/#{users[0].id}", headers: user_access
        expect(response.status).to eq 204
        expect(ChatParticipant.where(user: users[0], chat: Chat.first)).to_not exist
      end
    end
  end

  describe '#destroy' do
    it 'returns status code 204' do
      post api_chats_url, headers: access_token, params: { name: 'Hop' }
      delete api_chat_url(Chat.first.id), headers: access_token
      expect(response).to have_http_status(204)
      expect(Chat.count).to eq(0)
    end
    it 'should destroy protected chat without error' do
      post api_chats_url, headers: access_token, params: { name: 'ok', privacy: 'protected', password: 'abc' }
      delete api_chat_url(Chat.first.id), headers: access_token
      expect(response).to have_http_status(204)
      expect(Chat.count).to eq(0)
    end
    it 'should not let participant destroy chat' do
      post api_chats_url, headers: access_token, params: { name: 'ok', privacy: 'protected', password: 'abc' }
      post participants_api_chat_url(Chat.first.id), headers: user_access
      delete api_chat_url(Chat.first.id), headers: user_access
      expect(response).to have_http_status(403)
      expect(Chat.count).to eq(1)
    end
  end

  describe '#invites' do
    it 'should invite participants' do
      post api_chats_url, headers: access_token, params: { name: 'Hop' }
      post invites_api_chat_url(Chat.first), headers: access_token, params: { participant_ids: [users[0].id, users[1].id] }
      expect(response.status).to eq 201
      expect(Chat.first.participants.count).to eq 3
    end
  end
  describe '#admins' do
    before { post api_chats_url, headers: access_token, params: { name: 'Hop' } }
    it 'should promote a participant' do
      create(:chat_participant, chat_id: Chat.first.id, user: user)
      post "/api/chats/#{Chat.first.id}/admins/#{user.id}", headers: access_token
      expect(response.status).to eq 201
      expect(ChatParticipant.where(chat: Chat.first, role: 'admin').count).to eq 1
      expect(ChatParticipant.where(user: user, chat: Chat.first, role: 'admin')).to exist
    end
    it 'should not promote an owner' do
      post "/api/chats/#{Chat.first.id}/admins/#{auth.id}", headers: access_token
      expect(response.status).to eq 401
    end
    it 'should demote an admin' do
      post participants_api_chat_url(Chat.first.id), headers: access_token
      post "/api/chats/#{Chat.first.id}/admins/#{user.id}", headers: access_token
      delete "/api/chats/#{Chat.first.id}/admins/#{user.id}", headers: access_token
      expect(response.status).to eq 204
      expect(ChatParticipant.where(chat: Chat.first, role: 'admin').count).to eq 0
      expect(ChatParticipant.where(user: user, chat: Chat.first, role: 'admin')).to_not exist
    end
  end
end
