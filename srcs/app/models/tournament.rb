# frozen_string_literal: true

class Tournament < ApplicationRecord
  validates :start_date, presence: true
  has_one :owner, -> { where(role: 'owner') }, class_name: 'TournamentParticipant'
  has_many :participants, class_name: 'TournamentParticipant', dependent: :destroy
end
