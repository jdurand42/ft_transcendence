# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TournamentAbortJob, type: :job do
  it 'delete tournament at start_date if participants < 3' do
    trnmt = create(:tournament)
    ActiveJob::Base.queue_adapter = :test
    ActiveJob::Base.queue_adapter.perform_enqueued_jobs = true
    TournamentAbortJob.perform_later(trnmt)
    expect(TournamentAbortJob).to have_been_performed
    expect(Tournament.first).to eq nil
  end
end

