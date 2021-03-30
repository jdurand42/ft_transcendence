# frozen_string_literal: true

module ScoreHelper
  include(WarHelper)

  class WarPrizeGiver
    def prize_points(war)
      winner_from(war) if war.from_score > war.on_score
      winner_on(war) if war.on_score > war.from_score
    end

    private

    def winner_from(war)
      war.from.increment!(:score, war.prize)
      war.on.decrement!(:score, war.prize)
    end

    def winner_on(war)
      war.on.increment!(:score, war.prize)
      war.from.decrement!(:score, war.prize)
    end
  end

  class GamePointGiver
    POINTS = 10

    def game_points(game)
      @game = game
      winner_side
      @winner.guild&.increment!(:score, POINTS)
      duel_points
      ladder_points
      war_time_points
    end

    private

    def duel_points
      return unless @game.mode['duel'] == 'duel'

      war_points(@war) if war_enemies?
    end

    def ladder_points
      return unless @game.mode['ladder'] == 'ladder'

      @winner.increment!(:ladder_games_won)
      @looser.increment!(:ladder_games_lost)
      ladder_war_effort
    end

    def war_time_points
      return unless @game.mode['war'] == 'war'

      war_points(@war) if war_enemies?
    end

    def war_points(war)
      if @winner.guild.id == war.from_id
        war.increment!(:from_score, POINTS)
      else
        war.increment!(:on_score, POINTS)
      end
    end

    def ladder_war_effort
      wars = @winner.guild&.wars&.where(ladder_effort: true)
      wars&.each { |war| war_points(war) }
    end

    def war_enemies?
      @war = war_opened_side_help(@winner.guild, @looser.guild)
      @war.present?
    end

    def winner_side
      if @game.winner == @game.player_left
        @winner = @game.player_left
        @looser = @game.player_right
      else
        @looser = @game.player_left
        @winner = @game.player_right
      end
    end
  end
end
