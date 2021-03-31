# frozen_string_literal: true

class WarPolicy < ApplicationPolicy
  def create?
    user.guild.present? && GuildMember.where(user_id: user.id, rank: 'owner').first.present?
  end

  def update?
    guild_owner?
  end

  def agreements?
    guild_owner?
  end

  def create_times?
    guild_owner?
  end

  def destroy_times?
    guild_owner?
  end

  private

  def guild_owner?
    user.guild_member == record.from.owner || user.guild_member == record.on.owner
  end
end
