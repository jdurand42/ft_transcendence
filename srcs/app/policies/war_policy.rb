# frozen_string_literal: true

class WarPolicy < ApplicationPolicy
  def create?
    GuildMember.find_by_user_id_and_rank(user.id, %w[owner officer])
  end

  def update?
    guild_owner_officer?
  end

  def agreements?
    guild_owner_officer?
  end

  def create_times?
    guild_owner_officer?
  end

  def destroy_times?
    guild_owner_officer?
  end

  private

  def guild_owner_officer?
    GuildMember.find_by_user_id_and_guild_id_and_rank(user.id, [record.from.id, record.on.id], %w[owner officer])
  end
end
