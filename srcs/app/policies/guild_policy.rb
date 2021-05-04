# frozen_string_literal: true

class GuildPolicy < ApplicationPolicy
  include(CacheHelper)
  attr_reader :user, :record

  def initialize(user, record)
    super
    @user = user
    @record = record
  end

  def update?
    owner_admin?
  end

  def create_members?
    owner_admin? || officer?
  end

  def create_officers?
    owner_admin? || officer?
  end

  def destroy_officers?
    owner_admin? || officer?
  end

  def accept_invites?
    guild_pending_invitation?(record.id, user.id)
  end

  def refuse_invitation?
    guild_pending_invitation?(record.id, user.id)
  end

  def create_invitation?
    owner_admin? || officer?
  end

  private

  def officer?
    GuildMember.find_by_user_id_and_guild_id_and_rank(user.id, record.id, 'officer')
  end

  def owner_admin?
    GuildMember.find_by(user: user, guild: record, rank: 'owner') || user.admin == true
  end
end
