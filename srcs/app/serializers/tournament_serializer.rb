# frozen_string_literal: true

class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :created_at, :participant_ids

  def participant_ids
    object.participants.pluck(:user_id)
  end
end
