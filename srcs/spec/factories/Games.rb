# frozen_string_literal: true

FactoryBot.define do
  factory :game do
    player_left { create(:user) }
    player_right { create(:user) }
    mode { 'duel' }
  end
end
