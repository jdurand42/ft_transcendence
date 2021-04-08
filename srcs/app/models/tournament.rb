# frozen_string_literal: true

class Tournament < ApplicationRecord
  validates :start_date, presence: true
  has_many :participants, class_name: 'TournamentParticipant', dependent: :destroy
  has_many :games
end
