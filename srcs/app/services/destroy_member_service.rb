# frozen_string_literal: true

class DestroyMemberService
  attr_reader :target

  def initialize(current_user, guild, tid)
    @current_user = current_user
    @guild = guild
    @tid = tid
    @target = target_presence(tid, guild)
  end

  def destroy_errors
    return if @current_user.admin == true

    current_user_guild?
    member_kicks_member?
    mutiny
    owner_leaving_at_war
  end

  private

  def current_user_guild?
    raise ApiController::NotAllowedError if @guild != @current_user.guild
  end

  def member_kicks_member?
    raise ApiController::NotAllowedError if @current_user.guild_member.member? && @target.user != @current_user
  end

  def mutiny
    return unless @current_user.guild_member.officer? && @guild.owner.user_id == @tid.to_i

    raise ApiController::GuildOwnerDeletionError
  end

  def owner_leaving_at_war
    return unless @guild.owner == target && @guild.wars.where(opened: true).present?

    raise ApiController::WarOngoingError
  end

  def target_presence(tid, guild)
    target = GuildMember.find_by(user_id: tid, guild: guild)
    raise ActiveRecord::RecordNotFound if target.nil?

    target
  end
end
