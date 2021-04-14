# frozen_string_literal: true

class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.references :winner, foreign_key: { to_table: :users, null: true }
      t.references :player_left, foreign_key: { to_table: :users }
      t.references :player_right, foreign_key: { to_table: :users }
      t.integer :connected_players, default: 0
      t.references :war_time, foreign_key: { to_table: :war_times, null: true }
      t.references :tournament, foreign_key: { to_table: :tournaments, null: true }
      t.string :status, default: 'pending'
      t.string :mode
      t.timestamps
    end
  end
end
