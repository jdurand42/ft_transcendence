# frozen_string_literal: true

require 'rails_helper'

RSpec.describe GameEngineJob, type: :job do
  include(CacheHelper)
  let!(:player_left) { create(:user, status: 'online') }
  let!(:player_right) { create(:user, status: 'online') }
  let!(:game) { create(:game, player_left: player_left, player_right: player_right) }
  ActiveJob::Base.queue_adapter = :test
  ActiveJob::Base.queue_adapter.perform_enqueued_jobs = true
  it 'starts pongEngine' do
    expect {
      GameEngineJob.perform_later(game, 1)
    }.to have_broadcasted_to("activity").with(a_hash_including(action: 'user_update_status', id: player_left.id, status: 'ingame', game_id: game.id)).once
    game.reload
    expect(game.status).to eq('played')
    player_left.reload
    expect(player_left.status).to eq('online')
  end
  it "updates Game with player_points at pongEngine end" do
    game.update!(player_left_points: 1, player_right_points: 1)
    GameEngineJob.perform_later(game, 1)
    game.reload
    expect(game.player_left_points).to eq 0
    expect(game.player_right_points).to eq 0
  end
end
