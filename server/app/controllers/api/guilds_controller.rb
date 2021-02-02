# frozen_string_literal: true

module Api
  class GuildsController < ApplicationController
    before_action :set_guild, only: %i[show update destroy]
    before_action :set_guilds, only: %i[index search]

    def index
      json_response(@guilds)
    end

    def update
      @guild.update!(user_params)
      json_response(@guild)
    end

    def create
      new = Guild.create(user_params)
      json_response(new, :created)
    end

    def destroy
      @guild.destroy
      head :no_content
    end

    def search
      case @guilds.count
      when 0 then render action: "no_results"
      when 1 then render action: "show"
      when 2..10 then render action: "show_many"
      end
    end

    def no_results
      # code here
    end

    def show
      json_response(@guild)
    end

    def show_many
      # code here
    end

    private
    def set_guild
      @guild = Guild.find(params[:id])
    end

    def set_guilds
      @guilds = Guild.all
    end
  end
end