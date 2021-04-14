# frozen_string_literal: true

require 'rails_helper'
include(ScoreHelper)

RSpec.describe GamePointGiver do
  let(:gp) { GamePointGiver.new }
  let!(:tom) { create(:user, nickname: 'tom', ladder_games_lost: 0, ladder_games_won: 0) }
  let!(:alan) { create(:user, nickname: 'alan', ladder_games_lost: 0, ladder_games_won: 0) }
  let!(:ladder_game) { create(:game, player_left: tom, player_right: alan, winner: tom, status: 'played', mode: 'ladder') }
  let!(:ladder_game_2) { create(:game, player_left: tom, player_right: alan, winner: alan, status: 'played', mode: 'ladder') }
  let!(:ach) { Achievement.create(name: 'Is There No One Else ?', description: 'You must win 100 ladder games') }
  context 'user_score' do
    it "changes players score" do
      gp.game_points(ladder_game)
      expect(User.find_by_nickname('tom').score).to eq 10
      expect(User.find_by_nickname('alan').score).to eq 0
    end
  end
  context 'Ladder' do
    it "increments Tom's ladder games won/lost",test:true do
      gp.game_points(ladder_game)
      expect(User.find_by_nickname('tom').ladder_games_won).to eq 1
      expect(User.find_by_nickname('alan').ladder_games_lost).to eq 1
      expect(User.find_by_nickname('tom').ladder_games_lost).to eq 0
      expect(User.find_by_nickname('alan').ladder_games_won).to eq 0
    end
    it "increments Alan's ladder games won/lost" do
      gp.game_points(ladder_game_2)
      expect(User.find_by_nickname('alan').ladder_games_won).to eq 1
      expect(User.find_by_nickname('tom').ladder_games_lost).to eq 1
      expect(User.find_by_nickname('alan').ladder_games_lost).to eq 0
      expect(User.find_by_nickname('tom').ladder_games_won).to eq 0
    end
    it "unlock an achievement" do
      tommy = create(:user, nickname: 'tommy', ladder_games_lost: 0, ladder_games_won: 99)
      al = create(:user, nickname: 'al', ladder_games_lost: 0, ladder_games_won: 0)
      ladder_game = create(:game, player_left: tommy, player_right: al, winner: tommy, status: 'played', mode: 'ladder')
      gp.game_points(ladder_game)
      expect(UserAchievement.find_by_user_id_and_achievement_id(tommy.id, ach.id)).to be_present
    end
  end
  context 'Tournament' do
    let!(:tournament) { create(:tournament, winner_id: tom.id) }
    let(:game) { create(:game, player_left: tom, player_right: alan, winner: tom, status: 'played', mode: 'tournament', tournament_id: Tournament.first.id) }
    it "increment winner score" do
      gp.tournament_points(Tournament.first)
      expect(User.find_by_nickname('tom').score).to eq 100
    end
  end
  context 'User has a guild' do
    let!(:duel_game) { create(:game, player_left: tom, player_right: alan, winner: tom, status: 'played') }
    let!(:duel_game_2) { create(:game, player_left: tom, player_right: alan, winner: alan, status: 'played') }
    let(:bang) { create(:guild, name: 'BANG', score: 0) }
    let(:nos) { create(:guild, name: 'NOS', score: 0) }
    before {
      create(:guild_member, user: tom, guild: bang, rank: 'owner')
      create(:guild_member, user: alan, guild: nos, rank: 'owner')
    }
    it "gives points to Tom's guild" do
      expect { gp.game_points(duel_game) }.to change { Guild.first.score }.by(10)
    end
    it "gives points to Alan's guild" do
      expect { gp.game_points(duel_game_2) }.to change { Guild.last.score }.by(10)
    end
    context 'At war' do
      before { create(:war, from: nos, on: bang, war_start: DateTime.now, war_end: DateTime.new(2022), prize: 1000, opened: true, from_score: 0, on_score: 0) }
      context 'unexpected encounter' do
        it "gives points to winner's guild war score (side_on)" do
          expect { gp.game_points(duel_game) }.to change { War.first.on_score }.by(10)
        end
        it "gives points to winner's guild war score (side_from)" do
          expect { gp.game_points(duel_game_2) }.to change { War.first.from_score }.by(10)
        end
      end
      context "with ladder_effort" do
        it "at false gives no points" do
          gp.game_points(ladder_game) # Winner = Tom, BANG, war side_on
          expect(War.first.on_score).to eq 10 # 10 points (war enemies)
          expect(User.find_by_nickname('tom').ladder_games_won).to eq 1
        end
        it "at true gives points" do
          War.first.toggle!(:ladder_effort)
          gp.game_points(ladder_game) # Winner = Tom, BANG, war side_on
          expect(War.first.on_score).to eq 20 # 10 points (war enemies) + 10 points (ladder_effort)
          expect(User.find_by_nickname('tom').ladder_games_won).to eq 1
        end
      end
      context "with tournament effort" do
        it "at false gives no points" do
          create(:tournament, winner_id: tom.id)
          create(:game, player_left: tom, player_right: alan, winner: tom, status: 'played', mode: 'tournament', tournament_id: Tournament.first.id)
          gp.tournament_points(Tournament.first)
          expect(War.first.on_score).to eq 0
        end
        it "at true gives points" do
          War.first.toggle!(:tournament_effort)
          create(:tournament, winner_id: tom.id)
          create(:game, player_left: tom, player_right: alan, winner: tom, status: 'played', mode: 'tournament', tournament_id: Tournament.first.id)
          gp.tournament_points(Tournament.first)
          expect(War.first.on_score).to eq 100
        end
      end
      context 'war_time duel' do
        it "gives points to war on_score" do
          war_time = WarTime.create(day: Date.today.strftime('%A'), start_hour: 8, end_hour: 23, war_id: War.first.id, time_to_answer: 10, max_unanswered: 2)
          war_game = create(:game, player_left: tom, player_right: alan, winner: tom, status: 'played', mode: 'war', war_time_id: war_time.id)
          gp.game_points(war_game)
          expect(User.find_by_nickname('tom').guild.id).to eq War.first.on_id
          expect(War.first.on_score).to eq 10
          expect(War.first.from_score).to eq 0
        end
      end
    end
  end
end
