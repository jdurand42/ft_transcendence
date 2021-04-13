class CreateTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :tournaments do |t|
      t.datetime :start_date
      t.integer :winner_id
      t.integer :time_to_answer, unsigned: true, default: 60
      t.timestamps
    end
  end
end
