# frozen_string_literal: true

require 'rails_helper'
include(GameOverHelper)
RSpec.describe GameOverHelper do
  let(:game) { FactoryBot.create(:game)}
  it "validates that player left can loose" do
    game.update!(winner: game.player_right)
    game_over(game)
  end
end
