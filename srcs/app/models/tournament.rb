# frozen_string_literal: true

class Tournament < ApplicationRecord
  after_save :refresh_abort
  after_update :achievement

  validates :start_date, presence: true
  validates :time_to_answer, presence: true, numericality: true
  has_many :participants, class_name: 'TournamentParticipant', dependent: :destroy
  has_many :games, dependent: :nullify

  def refresh_abort
    TournamentAbortJob.set(wait_until: start_date).perform_later(self) if saved_change_to_start_date?
  end

  def achievement
    achievement_unlocked(winner_id, 'My Name Is Achilles') if saved_change_to_winner_id?
  end
end
