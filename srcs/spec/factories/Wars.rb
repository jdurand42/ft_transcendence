# frozen_string_literal: true

FactoryBot.define do
  factory :war_time do
    day { %w[monday tuesday wednesday thursday friday saturday sunday].sample }
    start_hour { rand(8..12) }
    end_hour { rand(13..24) }
    time_to_answer { rand(4..8) }
    max_unanswered { rand(4..8) }
    war { FactoryBot.create(:war) }
  end

  factory :war do
    prize { rand(10..100) }
    from_score { rand(1..20) }
    on_score { rand(1..20) }
    war_start { Faker::Date.between(from: Date.today, to: 2.days.after) }
    war_end { Faker::Date.between(from: 3.days.after, to: 5.days.after) }
    on { FactoryBot.create(:guild) }
    from { FactoryBot.create(:guild) }
    opened { true }
    closed { false }

    factory :war_with_times do
      transient do
        war_time_count { 3 }
      end
      after(:create) do |war, evaluator|
        create_list(:war_time, evaluator.war_time_count, war: war)
      end
    end
  end
end
