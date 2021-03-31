# frozen_string_literal: true

class CreateWarTimes < ActiveRecord::Migration[6.0]
  def change
    create_table :war_times do |t|
      t.datetime :date_start
      t.datetime :date_end
      t.integer :time_to_answer, unsigned: true
      t.integer :max_unanswered, unsigned: true
      t.boolean :opened, default: false
      t.boolean :closed, default: false
      t.references :war, foreign_key: true
      t.timestamps
    end
  end
end
