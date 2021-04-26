# frozen_string_literal: true

class WarTimeSerializer < ActiveModel::Serializer
  attributes :id, :day, :start_hour, :end_hour, :time_to_answer, :max_unanswered, :war_id
end
