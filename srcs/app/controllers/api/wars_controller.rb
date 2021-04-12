# frozen_string_literal: true

module Api
  class WarsController < ApiController
    include(WarHelper)
    before_action :set_war, except: %i[index create]
    before_action :war_editable?, only: %i[update create_times destroy_times]
    after_action :verify_authorized, except: %i[index show]

    UserReducer = Rack::Reducer.new(War.all.order(war_end: :desc),
                                    ->(guild_id:) { where(from_id: guild_id).or(where(on_id: guild_id)) })

    def index
      wars = UserReducer.apply(params)
      json_response(wars)
    end

    def create
      war = War.new(params_create)
      authorize war
      war.last_negotiation = current_user.guild.id
      war.save!
      achievement_unlocked(current_user.id, 'Tonight, We Dine In Hell !')
      json_response(war, 201)
    end

    def update
      authorize @war
      return render_error('notNegotiated', 403) unless turn_to_negotiate?(@war)

      @war.update!(params_update)
      @war.update!(from_agreement: false, on_agreement: false)
      json_response(@war)
    end

    def agreements
      authorize @war
      return render_error('timeSlotEntangled', 403) if wars_entangled?(@war, @from, @on)

      guild_agrees
      start_war(@war) if @war.from_agreement? && @war.on_agreement?
      json_response(@war, 201)
    end

    def create_times
      authorize @war
      return render_error('timeSlotEntangled', 403) if war_time_entangled?(@war)

      war_time = WarTime.create!(time_params_create)
      json_response(war_time, 201)
    end

    def destroy_times
      authorize @war
      WarTime.find(params[:tid]).destroy!
      head :no_content
    end

    def show
      json_response(@war)
    end

    private

    def guild_agrees
      if current_user.guild_member.guild_id == @from.id
        @war.update!(from_agreement: param_agreement)
      else
        @war.update!(on_agreement: param_agreement)
      end
    end

    def war_editable?
      return unless @war.from_agreement? || @war.on_agreement?
      return render_error('warOngoing', 403) if @war.opened?
      return render_error('warClosed', 403) if @war.closed?

      render_error('pendingAgreement', 403) if @war.terms_agreed == false
      render_error('termsAccepted', 403) if @war.terms_agreed == true
    end

    def params_update
      params.permit(:war_start, :war_end, :prize, :ladder_effort, :tournament_effort)
    end

    def param_agreement
      param = params.fetch(:agree_terms)
      param == 'true'
    end

    def params_create
      tmp = params.permit(:on_id, :war_start, :war_end, :prize, :ladder_effort, :tournament_effort)
      tmp.merge!(from_id: current_user.guild&.id)
    end

    def time_params_create
      params.permit(:day, :start_hour, :end_hour, :max_unanswered, :time_to_answer).merge!(war: @war)
    end

    def set_war
      @war = War.find(params[:id])
      @from = Guild.find(@war.from_id)
      @on = Guild.find(@war.on_id)
    end
  end
end
