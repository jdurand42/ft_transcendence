# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_04_151232) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "guild_officers", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "guild_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["guild_id"], name: "index_guild_officers_on_guild_id"
    t.index ["user_id"], name: "index_guild_officers_on_user_id"
  end

  create_table "guilds", force: :cascade do |t|
    t.string "name"
    t.string "anagram", limit: 5, null: false
    t.integer "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "owner_id"
    t.index ["owner_id"], name: "index_guilds_on_owner_id"
  end

  create_table "ladders", force: :cascade do |t|
    t.string "name", null: false
    t.text "desc"
    t.integer "mmr_threshold"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "nickname", null: false
    t.string "avatar", default: "default_avatar.png", null: false
    t.integer "status", default: 0
    t.integer "two_factor", default: 0
    t.integer "mmr", default: 200
    t.bigint "ladder_id"
    t.bigint "guild_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["guild_id"], name: "index_users_on_guild_id"
    t.index ["ladder_id"], name: "index_users_on_ladder_id"
  end

  add_foreign_key "guild_officers", "guilds"
  add_foreign_key "guild_officers", "users"
  add_foreign_key "guilds", "users", column: "owner_id"
  add_foreign_key "users", "guilds"
  add_foreign_key "users", "ladders"
end
