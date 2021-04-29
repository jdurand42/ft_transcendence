# frozen_string_literal: true

class WarPolicy < ApplicationPolicy
  def create?
    GuildMember.find_by_user_id_and_rank(user.id, %w[owner officer])
  end

  def update?
    owner_officer_admin?
  end

  def agreements?
    owner_officer_admin?
  end

  def create_times?
    owner_officer_admin?
  end

  def destroy_times?
    owner_officer_admin?
  end

  private

  def owner_officer_admin?
    GuildMember.find_by_user_id_and_guild_id_and_rank(user.id, [record.from.id, record.on.id],
                                                      %w[owner officer]) || user.admin?
  end
end
