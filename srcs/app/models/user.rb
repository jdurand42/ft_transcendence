# frozen_string_literal: true

class User < ApplicationRecord
  include(AchievementHelper)
  devise :database_authenticatable, :registerable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User
  after_update :achievements
  after_update :achievement_ladder, if: :saved_change_to_ladder_id?

  belongs_to :ladder, optional: true

  has_one :guild_member, dependent: :destroy
  has_one :guild, through: :guild_member
  has_one_attached :avatar

  has_many :wars, through: :guild
  has_many :games, foreign_key: 'player_left_id', dependent: :destroy
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
  validates :avatar, content_type: %w[image/png image/jpg image/jpeg],
                     size: { less_than: 6.megabytes, message: 'is not given between size' }

  has_secure_password :two_factor_code, validations: false

  private

  def achievements
    achievement_unlocked(id, 'Much Secure!') if saved_change_to_two_factor? && (two_factor == true)
    achievement_unlocked(id, 'Is There No One Else ?') if saved_change_to_ladder_games_won? && ladder_games_won == 100
  end

  def achievement_ladder
    case ladder = Ladder.find(ladder_id).name
    when 'Silver'
      achievement_unlocked(id, 'RoadToDiamond I')
    when 'Gold'
      achievement_unlocked(id, 'RoadToDiamond II')
    when 'Platinum'
      achievement_unlocked(id, 'RoadToDiamond III')
    else
      achievement_unlocked(id, 'To Infinity And Beyond !') if ladder == 'Diamond'
    end
  end
end
