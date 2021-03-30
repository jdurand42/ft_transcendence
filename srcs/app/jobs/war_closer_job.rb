# frozen_string_literal: true

class WarCloserJob < ApplicationJob
  queue_as :default
  include(ScoreHelper)

  def perform(war)
    WarPrizeGiver.new.prize_points(war)
    war.update!(opened: false, closed: true)
  end
end
