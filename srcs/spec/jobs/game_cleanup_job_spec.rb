require 'rails_helper'

RSpec.describe GameCleanupJob, type: :job do
  let!(:player_left) { create(:user, status: 'online') }
  let!(:player_right) { create(:user, status: 'online') }
  let!(:game) { create(:game, player_left: player_left, player_right: player_right) }
  ActiveJob::Base.queue_adapter = :test
  ActiveJob::Base.queue_adapter.perform_enqueued_jobs = true
  it 'delete a pending game' do
    expect {
      GameCleanupJob.perform_later(game)
    }.to have_broadcasted_to("user_#{player_right.id}").with(a_hash_including(action: 'game_declined', id: game.id)).once
    expect(Game.where(id: game.id).present?).to eq(false)
  end


  it 'does not delete inprogress game' do
    game.update!(status: 'inprogress', connected_players: [player_left.id, player_right.id])
    expect {
      GameCleanupJob.perform_later(game)
    }.not_to have_broadcasted_to("user_#{player_right.id}").with(a_hash_including(action: 'game_declined', id: game.id)).once
    expect(Game.where(id: game.id).present?).to eq(true)
  end
end
