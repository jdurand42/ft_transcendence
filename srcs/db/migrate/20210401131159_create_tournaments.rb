class CreateTournaments < ActiveRecord::Migration[6.0]
  def change
    create_table :tournaments do |t|
      t.datetime :start_date
      t.integer :winner_id
      t.timestamps
    end
  end
end
