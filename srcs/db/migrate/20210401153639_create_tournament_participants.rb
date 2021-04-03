class CreateTournamentParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :tournament_participants do |t|
      t.references :user, foreign_key: true
      t.references :tournament, foreign_key: true
      t.index %i[user_id tournament_id], unique: true
      t.integer :role, default: 0
      t.timestamps
    end
  end
end
