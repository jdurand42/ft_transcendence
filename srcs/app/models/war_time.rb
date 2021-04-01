# frozen_string_literal: true

class WarTime < ApplicationRecord
  validates_presence_of :day, uniqueness: true
  validates_presence_of :start_hour
  validates_presence_of :end_hour
  validates_presence_of :time_to_answer
  validates_presence_of :max_unanswered
  validates_numericality_of :start_hour, inclusion: { in: 0..23 }, other_than: :end_hour
  validates_numericality_of :end_hour, inclusion: { in: 0..23 }, greater_than: :start_hour
  validates_numericality_of :time_to_answer, greater_than: -1
  validates_numericality_of :max_unanswered, greater_than: -1
  belongs_to :war
end
