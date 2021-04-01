# frozen_string_literal: true

class Tournament < ApplicationRecord
  validates_presence_of :start_date
  validates_presence_of :end_date
  belongs_to :owner, class_name: 'User'
  has_many :participants, class_name: 'User'
end
