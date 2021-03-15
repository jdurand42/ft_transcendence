# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :validatable, :omniauthable

  include DeviseTokenAuth::Concerns::User

  belongs_to :ladder, optional: true

  has_one :guild_member, dependent: :destroy

  has_one_attached :avatar

  has_many :chats, foreign_key: 'owner_id', dependent: :destroy
  has_many :chat_participant, dependent: :destroy
  has_many :chat_admin, dependent: :destroy

  has_many :user_achievements, dependent: :destroy
  has_many :achievements, through: :user_achievements

  has_many :ignores, foreign_key: 'user_id', dependent: :destroy, class_name: 'UserIgnore'

  has_many :friendships_as_friend_a,
           foreign_key: :friend_a_id,
           class_name: :Friendship
  has_many :friendships_as_friend_b,
           foreign_key: :friend_b_id,
           class_name: :Friendship
  has_many :friend_as, through: :friendships_as_friend_b
  has_many :friend_bs, through: :friendships_as_friend_a
  def friendships
    friendships_as_friend_a + friendships_as_friend_b
  end

  validates_presence_of :nickname
  validates :nickname, uniqueness: true
  validates_presence_of :image_url
  validates_inclusion_of :two_factor, in: [true, false]
  validates_inclusion_of :first_login, in: [true, false]
  validates_inclusion_of :admin, in: [true, false]
  validates_inclusion_of :banned, in: [true, false]
  validates_inclusion_of :status, in: %w[offline online ingame]
  validates_presence_of :ladder_games_won
  validates_presence_of :ladder_games_lost

  has_secure_password :two_factor_code, validations: false
end