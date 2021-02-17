# frozen_string_literal: true

class ChatParticipant < ApplicationRecord
  validates_presence_of :user
  validates_presence_of :chat
  belongs_to :chat
  belongs_to :user
end
