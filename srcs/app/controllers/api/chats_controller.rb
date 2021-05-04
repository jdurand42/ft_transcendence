# frozen_string_literal: true

module Api
  class ChatsController < ApiController
    include(ChatHelper)
    before_action :set_chat
    skip_before_action :set_chat, only: %i[index create messages]
    after_action :verify_authorized, except: %i[index show create join leave]

    ChatReducer = Rack::Reducer.new(
      Chat.all.order(:updated_at),
      ->(participant_id:) { joins(:participants).where(chat_participants: { user_id: participant_id }) }
    )

    def index
      chats = ChatReducer.apply(params)
      json_response(chats)
    end

    def update
      authorize @chat
      @chat.update!(chat_params)
      json_response(@chat, 200)
    end

    def create
      chat = Chat.create!(chat_params)
      ChatParticipant.create!(user: current_user, chat: chat, role: 'owner')
      ActionCable.server.broadcast("user_#{current_user.id}", { action: 'chat_invitation', id: chat.id })
      add_participants(chat, params[:participant_ids])
      json_response(chat, 201)
    end

    def join
      raise WrongPasswordError if @chat.privacy == 'protected' && !@chat.authenticate(params.fetch(:password))
      raise JoinPrivateChatError if @chat.privacy == 'private'

      json_response(ChatParticipant.create!(user: current_user, chat: @chat), 201)
    end

    def leave
      ChatParticipant.where(chat: @chat, user: current_user).destroy_all
      manage_ownership if @chat.owner.nil?
      head :no_content
    end

    def kick
      authorize @chat
      target_id = params.fetch(:tid)
      raise NotAllowedError if @chat.owner.id == target_id.to_i

      ChatParticipant.find_by_chat_id_and_user_id(@chat.id, target_id).destroy!
      ActionCable.server.broadcast("user_#{target_id}", { action: 'chat_kicked', id: @chat.id })
      head :no_content
    end

    def mutes
      authorize @chat
      timeout_user_from_chat(@chat.id, params.fetch(:user_id), params.fetch(:duration))
      json_response({ user: params[:user_id].to_i, duration: params[:duration].to_i }, 201)
    end

    def bans
      authorize @chat
      attributes = { user_id: params.fetch(:user_id), duration: params.fetch(:duration) }
      ban_user_from_chat(@chat.id, attributes[:user_id], attributes[:duration])
      disconnect_banned_user(attributes[:user_id])
      ActionCable.server.broadcast("user_#{attributes[:user_id]}", { action: 'chat_banned', id: @chat.id })
      json_response(attributes, 201)
    end

    def invites
      authorize @chat
      add_participants(@chat, params[:participant_ids])
      json_response(params[:participant_ids], 201)
    end

    def promote
      authorize @chat
      target = params.fetch(:tid)
      raise NotAllowedError if ChatParticipant.find_by_user_id_and_chat_id_and_role(target, @chat.id, 'owner')
      raise ActiveRecord::RecordNotFound unless (p = ChatParticipant.where(user_id: target, chat: @chat).first)

      p.update!(role: 'admin')
      json_response({ user_id: p.id, role: p.role }, 201)
    end

    def demote
      authorize @chat
      target = params.fetch(:tid)
      raise NotAllowedError if ChatParticipant.where(chat: @chat, user_id: target, role: 'owner').empty? == false

      ChatParticipant.where(chat: @chat, user: target).first&.update!(role: 'participant')
      head :no_content
    end

    def show
      json_response(@chat)
    end

    def destroy
      authorize @chat
      @chat.destroy
      head :no_content
    end

    private

    def manage_ownership
      if (admin = ChatParticipant.where(chat: @chat, role: 'admin').first)
        admin.update!(role: 'owner')
      elsif (p = ChatParticipant.where(chat: @chat).first)
        p.update!(role: 'owner')
      else
        @chat.destroy
      end
    end

    def chat_params
      params.permit(:privacy, :password, :name)
    end

    def set_chat
      @chat = Chat.find(params[:id])
    end
  end
end
