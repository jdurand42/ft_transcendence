# frozen_string_literal: true

class CreateWarTimes < ActiveRecord::Migration[6.0]
  def change
    create_table :war_times do |t|
      t.string :day
      t.integer :start_hour
      t.integer :end_hour
      t.integer :time_to_answer, unsigned: true
      t.integer :max_unanswered, unsigned: true
      t.references :war, foreign_key: true
      t.timestamps
    end
  end
end
