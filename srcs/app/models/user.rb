# frozen_string_literal: true

class User < ApplicationRecord
  include(AchievementHelper)
  devise :database_authenticatable, :registerable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User
  after_save :achievements

  belongs_to :ladder, optional: true

  has_one :guild_member, dependent: :destroy
  has_one :guild, through: :guild_member

  has_many :wars, through: :guild
  # has_many :wars_from_enemy, through: :guild

  has_one_attached :avatar

  has_many :chat_participant, dependent: :destroy
  has_many :user_achievements, dependent: :destroy
  has_many :achievements, through: :user_achievements
  has_many :ignores, foreign_key: 'user_id', dependent: :destroy, class_name: 'UserIgnore'
  has_many :friendship, foreign_key: 'user_id', dependent: :destroy, class_name: 'Friendship'
  validates_presence_of :nickname
  validates :nickname, uniqueness: true
  validates :two_factor, inclusion: [true, false]
  validates :first_login, inclusion: [true, false]
  validates :admin, inclusion: [true, false]
  validates :banned, inclusion: [true, false]
  validates_inclusion_of :status, in: %w[offline online ingame]
  validates_presence_of :ladder_games_won
  validates_presence_of :ladder_games_lost
  validates :avatar, content_type: ['image/png', 'image/jpg', 'image/jpeg'],
                     size: { less_than: 6.megabytes, message: 'is not given between size' }

  has_secure_password :two_factor_code, validations: false

  private

  def achievements
    achievement_unlocked(id, 'Much Secure!') if saved_change_to_two_factor? && two_factor == true
  end
end
