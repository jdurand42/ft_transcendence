# frozen_string_literal: true

class Tournament < ApplicationRecord
  validates :start_date, presence: true
  has_one :owner, -> { where(role: 'owner') }, class_name: 'TournamentParticipant', dependent: :destroy
  has_many :participants, -> { where(role: 'participant') }, class_name: 'TournamentParticipant', dependent: :destroy
  has_many :games
end
