# frozen_string_literal: true

FactoryBot.define do
  factory :game do
    player_left { create(:user) }
    player_right { create(:user) }
    mode { 'duel' }
  end
end

# factory :tournament_game_won do
#   mode { 'tournament' }
#   winner { player_left }
#   status { 'played' }
#   tournament_id { create(:tournament).id }
#   after(:create) do |game|
#     create(:tournament_participant, tournament_id: game.tournament_id, user: game.player_left)
#     create(:tournament_participant, tournament_id: game.tournament_id, user: game.player_right)
#   end
