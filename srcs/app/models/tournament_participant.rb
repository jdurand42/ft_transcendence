# frozen_string_literal: true

class TournamentParticipant < ApplicationRecord
  validates_presence_of :user
  validates_uniqueness_of :user_id, scope: :tournament
  validates_presence_of :tournament
  belongs_to :user
  belongs_to :tournament, touch: true
end
