# frozen_string_literal: true

module Api
  class MessagesController < ApiController
    before_action :authorize

    def index
      json_response(ChatMessage.where(chat_id: @chat_id).order(id: :asc).last(10))
    end

    private

    def set_chat_id
      @chat_id = params['chat_id']
    end

    def send_forbidden?
      user_timeout_from_chat?(@chat_id, current_user.id)
    end

    def message_params
      params.permit(:content)
    end

    def reject_user?
      return false if current_user.admin?
      return true if user_banned_from_chat?(@chat_id, current_user.id)

      ChatParticipant.find_by(user_id: current_user.id, chat_id: @chat_id).nil?
    end

    def authorize
      set_chat_id
      raise NotAllowedError if reject_user?
    end
  end
end
