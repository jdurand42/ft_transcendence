# frozen_string_literal: true

class TournamentAbortJob < ApplicationJob
  queue_as :default

  def perform(trnmt)
    trnmt.destroy! if trnmt && trnmt.participants.count < 3
  end
end
