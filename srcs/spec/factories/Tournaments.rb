# frozen_string_literal: true

FactoryBot.define do
  factory :tournament do
    start_date { Faker::Date.between(from: DateTime.yesterday, to: DateTime.now + 1) }
    transient do
      owner { create(:user) }
    end
    after(:create) do |trnmt, evaluator|
      create(:tournament_participant, tournament: trnmt, role: 'owner', user: evaluator.owner)
    end
  end

  factory :tournament_participant do
    tournament
    user
    role { 'participant' }
  end
end

