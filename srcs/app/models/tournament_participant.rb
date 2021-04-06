# frozen_string_literal: true

class TournamentParticipant < ApplicationRecord
  validates_presence_of :user
  validates_uniqueness_of :user_id, scope: :tournament
  validates_presence_of :tournament
  belongs_to :user
  belongs_to :tournament
  enum role: %i[participant owner]
  validates_uniqueness_of :role, scope: :tournament, if: :role_owner

  def role_owner
    role == 'owner'
  end
end
