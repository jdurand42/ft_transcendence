# frozen_string_literal: true

require 'rails_helper'

RSpec.describe WarCloserJob, type: :job do
  let!(:guilds) { create_list(:guild_with_members, 2, score: 0) }
  let!(:war) { create(:war, from: guilds[0], on: guilds[1], prize: 1000, opened: true, closed: false, from_score: 1, on_score: 0) }
  let!(:ach) { Achievement.create(name: 'This Is Sparta !', description: 'You must win a War') }
  before {
    ActiveJob::Base.queue_adapter = :test
    ActiveJob::Base.queue_adapter.perform_enqueued_jobs = true
    WarCloserJob.perform_later(war)
  }
  it 'performs' do
    expect(WarCloserJob).to have_been_performed
  end
  it 'gives points to from' do
    expect(Guild.first.score).to eq 1000
    expect(Guild.last.score).to eq -1000
  end
  it 'updates war' do
    war.reload
    expect(war.opened).to be_falsey
    expect(war.closed).to be_truthy
  end
end
