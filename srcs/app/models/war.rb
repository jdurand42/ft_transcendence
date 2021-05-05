# frozen_string_literal: true

class War < ApplicationRecord
  after_create :achievement

  validates_presence_of :from
  validates_presence_of :on
  validates_presence_of :war_start
  validates_presence_of :war_end
  validates_presence_of :prize
  validate :start_before_end
  validate :from_must_not_eq_on

  belongs_to :from, class_name: 'Guild'
  belongs_to :on, class_name: 'Guild'
  has_many :war_times, dependent: :destroy

  def from_must_not_eq_on
    valid = from && on && from != on
    errors.add(:from, "can't be equal to 'on'") unless valid
  end

  def start_before_end
    valid = war_start && war_end && war_start < war_end
    errors.add(:war_start, 'must be before end time') unless valid
  end

  def achievement
    mass_achievement_unlocked(from.members.pluck(:user_id), 'Tonight, We Dine In Hell !')
  end
end
