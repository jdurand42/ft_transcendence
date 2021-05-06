# frozen_string_literal: true

class Tournament < ApplicationRecord
  after_save :minimum_players_abort, if: :saved_change_to_start_date?
  after_update :achievement, if: :saved_change_to_winner_id?

  validates :start_date, presence: true
  validates :time_to_answer, presence: true, numericality: true
  has_many :participants, class_name: 'TournamentParticipant', dependent: :destroy
  has_many :games, dependent: :nullify

  def minimum_players_abort
    TournamentAbortJob.set(wait_until: start_date).perform_later(self)
    destroy if (start_date < DateTime.now) && (participants.count < 3)
  end

  def achievement
    achievement_unlocked(winner_id, 'My Name Is Achilles')
  end
end
