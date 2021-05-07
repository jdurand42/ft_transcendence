# frozen_string_literal: true

class Game < ApplicationRecord
  after_update :inprogress_clean_up, if: :inprogress_ghost?
  belongs_to :player_left, class_name: 'User'
  belongs_to :player_right, class_name: 'User'
  belongs_to :winner, class_name: 'User', optional: true
  belongs_to :tournament, class_name: 'Tournament', optional: true
  belongs_to :war_time, class_name: 'WarTime', optional: true
  validates_inclusion_of :mode, in: %w[duel ladder tournament war]
  validates_inclusion_of :status, in: %w[pending inprogress played]
  validates_uniqueness_of :player_left_id, conditions: -> { where.not(status: 'played') }
  validates_uniqueness_of :player_right_id, conditions: -> { where.not(status: 'played') }
  validates_presence_of :war_time_id, if: :war_mode

  private

  def war_mode
    mode == 'war'
  end

  def inprogress_ghost?
    status == 'inprogress' && connected_players.size.zero?
  end

  def inprogress_clean_up
    destroy
  end
end
