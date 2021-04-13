# frozen_string_literal: true

module ChatHelper
  def add_participants(chat, participants)
    return unless participants

    participants = participants[0, 1] if chat.privacy == 'direct_message'
    participants.each do |t|
      ChatParticipant.create(user_id: t, chat_id: chat.id)
      ActionCable.server.broadcast("user_#{t}", { action: 'chat_invitation', id: chat.id })
    end
  end
end
