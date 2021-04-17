# frozen_string_literal: true

class GameSerializer < ActiveModel::Serializer
  attributes :id, :winner_id, :player_left_id, :player_right_id, :mode, :war_time_id, :status, :created_at
  attributes :tournament_id, :player_left_points, :player_right_points
end
