# frozen_string_literal: true

class War < ApplicationRecord
  validates_presence_of :from
  validates_presence_of :on
  #  validates_uniqueness_of :on, scope: :guild
  validates_presence_of :war_start
  validates_presence_of :war_end
  validates_presence_of :prize
  validates_presence_of :from_score
  validates_presence_of :on_score
  validates_presence_of :max_unanswered
  validate :start_before_end
  validate :from_must_not_eq_on

  belongs_to :guild
  has_many :war_addons
  has_one :war_time

  def from_must_not_eq_on
    valid = from && on && from != on
    errors.add(:from, "can't be equal to 'on'") unless valid
  end

  def start_before_end
    valid = war_start && war_end && war_start < war_end
    errors.add(:war_start, 'must be before end time') unless valid
  end
end