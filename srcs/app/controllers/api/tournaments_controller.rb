# frozen_string_literal: true

module Api
  class TournamentsController < ApiController
    before_action :set_tournament, except: %i[index create]
    before_action :tournament_running?, only: %i[update destroy join]
    after_action :verify_authorized, except: %i[index create join leave games] # show]

    def index
      json_response(Tournament.all)
    end

    def games
      json_response(@trnmt.games)
    end

    def create
      return render_not_allowed unless current_user.admin?
      return render_error('trnmtUnique', 403) unless Tournament.count.zero?

      trnmt = Tournament.create!(tournament_params)
      json_response(trnmt, 201)
    end

    def update
      authorize @trnmt
      @trnmt.update!(tournament_params)
      json_response(@trnmt, 200)
    end

    def destroy
      authorize @trnmt
      @trnmt.destroy!
      head :no_content
    end

    def join
      participant = TournamentParticipant.create!(user: current_user, tournament: @trnmt)
      json_response(participant, 201)
    end

    private

    def tournament_params
      params.permit(:start_date)
    end

    def tournament_running?
      render_error('trnmtRunning', 403) unless DateTime.now.in_time_zone(1) < @trnmt.start_date
    end

    def set_tournament
      @trnmt = Tournament.find(params[:id])
    end
  end
end
