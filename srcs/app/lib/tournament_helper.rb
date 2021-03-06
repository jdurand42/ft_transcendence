# frozen_string_literal: true

module TournamentHelper
  include(ScoreHelper)
  include(AchievementHelper)
  def manage_tournament(game)
    return unless game.mode == 'tournament' && game.status == 'played' && game.winner.present?

    increment_win_count(game)
    opponent_control(game)
    return unless match_all_played?

    if exaequo?
      manage_exaequo
    else
      tournament_winner
    end
  end

  def increment_win_count(game)
    TournamentParticipant.find_by_user_id(game.winner_id).increment!(:win_count)
  end

  def opponent_control(game)
    left = TournamentParticipant.find_by_user_id(game.player_left_id)
    right = TournamentParticipant.find_by_user_id(game.player_right_id)
    left.opponents << game.player_right_id
    right.opponents << game.player_left_id
    left.save
    right.save
  end

  def match_all_played?
    TournamentParticipant.pluck(:opponents).all? { |t| t.size == Tournament.first.participants.count - 1 }
  end

  def tournament_winner
    winner_id = TournamentParticipant.order(win_count: :desc).first.user_id
    Tournament.first.update!(winner_id: winner_id)
    GamePointGiver.new.tournament_points(Tournament.first)
  end

  def exaequo?
    win_ordered = TournamentParticipant.order(win_count: :desc)
    win_ordered.first.win_count == win_ordered.second.win_count
  end

  def manage_exaequo
    return unless exaequo?

    win_ordered = TournamentParticipant.order(win_count: :desc)
    TournamentParticipant.where.not(win_count: win_ordered.first.win_count).destroy_all
    TournamentParticipant.update_all(opponents: [])
  end
end
