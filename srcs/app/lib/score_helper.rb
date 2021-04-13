# frozen_string_literal: true

module ScoreHelper
  include(WarHelper)
  include(AchievementHelper)

  class WarPrizeGiver
    def prize_points(war)
      winner_from(war) if war.from_score > war.on_score
      winner_on(war) if war.on_score > war.from_score
    end

    private

    def winner_from(war)
      war.from.increment!(:score, war.prize)
      war.on.decrement!(:score, war.prize)
      mass_achievement_unlocked(war.from.members.pluck(:user_id), 'This Is Sparta !')
    end

    def winner_on(war)
      war.on.increment!(:score, war.prize)
      war.from.decrement!(:score, war.prize)
      mass_achievement_unlocked(war.on.members.pluck(:user_id), 'This Is Sparta !')
    end
  end

  class GamePointGiver
    include(WarHelper)
    POINTS = 10
    TOURNAMENT_POINTS = 100

    def game_points(game)
      init(game)
      ladder_points
      @winner.guild&.increment!(:score, POINTS)
      war_points(@war, POINTS, @winner) if war_enemies?
    end

    def tournament_points(trnmt)
      winner = User.find(trnmt.winner_id)
      winner.increment!(:score, TOURNAMENT_POINTS)
      winner.guild&.increment!(:score, TOURNAMENT_POINTS)
      tournament_war_effort(winner)
    end

    private

    def tournament_war_effort(winner)
      wars = winner.guild&.wars&.where(tournament_effort: true)
      wars&.each { |war| war_points(war, TOURNAMENT_POINTS, winner) }
    end

    def ladder_points
      return unless @game.mode['ladder'] == 'ladder'

      @winner.increment!(:score, POINTS)
      @looser.decrement!(:score, POINTS) if @looser.score >= POINTS
      @winner.increment!(:ladder_games_won)
      @looser.increment!(:ladder_games_lost)
      achievement_unlocked(@winner.id, 'Is There No One Else ?') if @winner.ladder_games_won == 100
      ladder_war_effort
    end

    def war_points(war, points, winner)
      if winner.guild.id == war.from_id
        war.increment!(:from_score, points)
      else
        war.increment!(:on_score, points)
      end
    end

    def ladder_war_effort
      wars = @winner.guild&.wars&.where(ladder_effort: true)
      wars&.each { |war| war_points(war, POINTS, @winner) }
    end

    def war_enemies?
      @war = war_opened_side_help(@winner.guild, @looser.guild)
      @war.present?
    end

    def init(game)
      @game = game
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
