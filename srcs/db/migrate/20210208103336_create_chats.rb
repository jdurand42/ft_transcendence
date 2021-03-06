# frozen_string_literal: true

class CreateChats < ActiveRecord::Migration[6.0]
  def change
    create_table :chats do |t|
      t.string :name
      t.string :privacy, default: 'private'
      t.string :password_digest
      t.timestamps
    end
  end
end
