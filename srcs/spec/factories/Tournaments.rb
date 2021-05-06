# frozen_string_literal: true

FactoryBot.define do
  factory :tournament do
    start_date { Faker::Date.between(from: DateTime.now + 1, to: DateTime.now + 2) }
    time_to_answer { 60 }
    factory :tournament_with_participants do
      transient do
        count { 3 }
      end
      after(:create) do |trnmt, evaluator|
        create_list(:tournament_participant, evaluator.count, tournament: trnmt)
      end
    end
  end

  factory :tournament_participant do
    tournament
    user
  end
end
