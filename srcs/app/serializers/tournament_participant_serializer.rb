# frozen_string_literal: true

class TournamentParticipantSerializer < ActiveModel::Serializer
  attributes :id, :user, :tournament, :win_count, :opponents
end
