# frozen_string_literal: true

class Game < ApplicationRecord
  belongs_to :player_left, class_name: 'User'
  belongs_to :player_right, class_name: 'User'
  belongs_to :winner, class_name: 'User', optional: true
  validates_presence_of :connected_players
  validates_inclusion_of :mode, in: %w[duel ladder tournament war]
  validates_inclusion_of :status, in: %w[pending inprogress played]
  validates_uniqueness_of :player_left_id, conditions: -> { where.not(status: 'played') }
  validates_uniqueness_of :player_right_id, conditions: -> { where.not(status: 'played') }
  validates_presence_of :war_time_id, if: :war_mode
  validates_presence_of :tournament_id, if: :tournament_mode

  private

  def war_mode
    mode == 'war'
  end

  def tournament_mode
    mode == 'tournament'
  end
end
