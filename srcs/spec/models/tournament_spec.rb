# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Tournament, type: :model do
  ActiveJob::Base.queue_adapter = :test
  it { validate_presence_of :start_date }
  it { validate_presence_of :time_to_answer }
  it { should have_many(:participants) }

  describe 'TournamentAbortJob' do
    it "enqueue job at 'start_date' change" do
      expect { Tournament.create!(start_date: DateTime.now) }.to have_enqueued_job
    end
    it "doesn't enqueue job at time_to_answer change" do
      Tournament.create!(start_date: DateTime.now + 2)
      expect { Tournament.first.update!(time_to_answer: 30) }.to_not have_enqueued_job
    end
    it 'enqueue job at start_date change' do
      Tournament.create!(start_date: DateTime.now + 2)
      expect { Tournament.first.update!(start_date: DateTime.now + 1) }.to have_enqueued_job
    end
  end

  describe 'achievement' do
    it 'unlock achievement for tournament winner', test: true do
      winner = create(:user)
      create(:achievement, name: 'My Name Is Achilles')
      Tournament.create!(start_date: DateTime.now + 1)
      Tournament.first.update!(winner_id: winner.id)
      expect(UserAchievement.count).to eq 1
    end
  end
end
