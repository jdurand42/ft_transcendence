# frozen_string_literal: true

class WarTime < ApplicationRecord
  validates_presence_of :date_start
  validates_presence_of :date_end
  validates_presence_of :time_to_answer
  validates_presence_of :max_unanswered
  validate :start_before_end
  belongs_to :war

  def start_before_end
    valid = date_start && date_end && date_start < date_end
    errors.add(:date_start, 'must be before end date') unless valid
  end
end
