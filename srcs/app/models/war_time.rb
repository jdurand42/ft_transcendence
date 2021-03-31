# frozen_string_literal: true

class WarTime < ApplicationRecord
  validates_presence_of :day, uniqueness: true
  validates_presence_of :start_hour, uniqueness: true
  validates_presence_of :end_hour, uniqueness: true
  validates_presence_of :time_to_answer
  validates_presence_of :max_unanswered
  validate :start_before_end
  belongs_to :war

  def start_before_end
    valid = start_hour && end_hour && start_hour < end_hour
    errors.add(:date_start, 'must be before end date') unless valid
  end
end
