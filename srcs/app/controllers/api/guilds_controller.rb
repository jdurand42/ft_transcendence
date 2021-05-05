# frozen_string_literal: true

module Api
  class GuildsController < ApiController
    before_action :set_guild
    skip_before_action :set_guild, only: %i[index create guild_params manage_ownership]
    after_action :verify_authorized, except: %i[index show create destroy_members]

    def index
      json_response(Guild.all.order(score: :desc))
    end

    def update
      authorize @guild
      @guild.update!(guild_params)
      json_response(@guild)
    end

    def create
      return render_error('hasGuildAlready', 403) if current_user.guild_member

      guild = Guild.create!(guild_params)
      GuildMember.create!(user: current_user, guild: guild, rank: 'owner')
      json_response(guild, 201)
    end

    def show
      json_response(@guild)
    end

    def create_members
      authorize @guild
      to_ret = GuildMember.create!(user_id: params.fetch(:tid), guild: @guild)
      json_response(to_ret, 201)
    end

    def destroy_members
      helper = DestroyMemberService.new(current_user, @guild, params.fetch(:tid))
      helper.destroy_errors
      helper.target.destroy! unless ownership_changed?(@guild, helper.target)
      head :no_content
    end

    def create_officers
      authorize @guild
      to_ret = GuildMember.where(user_id: params.fetch(:tid), guild: @guild).update(rank: 'officer').first
      json_response(to_ret, 201)
    end

    def destroy_officers
      authorize @guild
      GuildMember.where(user_id: params.fetch(:tid), guild: @guild).update(rank: 'member').first
      head :no_content
    end

    def accept_invites
      authorize @guild
      to_ret = GuildMember.create!(user: current_user, guild: @guild)
      guild_delete_invitation(@guild.id, current_user.id)
      json_response(to_ret, 201)
    end

    def refuse_invitation
      authorize @guild

      guild_delete_invitation(@guild.id, current_user.id)
      head :no_content
    end

    def create_invitation
      authorize @guild
      user_id = params.fetch(:user_id)
      return render_error('userOffline', 403) unless user_available?(user_id)

      guild_invite_user(@guild.id, user_id)
      ActionCable.server.broadcast("user_#{user_id}", { action: 'guild_invitation', id: @guild.id })
      json_response({ user_id: user_id.to_i }, 201)
    end

    private

    def user_available?(user)
      User.find(user).status == 'online'
    end

    def ownership_changed?(guild, target)
      return unless target&.owner?

      target.destroy!
      guild.members.first&.owner! unless guild.officers.first&.owner!
      guild.destroy! unless guild.members.count.positive?
      true
    end

    def guild_params
      params.permit(:name, :anagram)
    end

    def set_guild
      @guild = Guild.find(params[:id])
    end
  end
end
