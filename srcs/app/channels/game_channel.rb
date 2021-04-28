# frozen_string_literal: true

class GameChannel < ApplicationCable::Channel
  def subscribed
    @game = Game.find(params[:id])
    return reject if @game.status == 'played'

    stream_from "game_#{@game.id}"
    return unless player?

    manage_game
  end

  def received(data)
    return if player? == false || data.key?('position') == false

    game_set_paddle_pos(@game.id, current_user.id, data['position'])
  end

  def unsubscribed
    return if player? == false

    @game.with_lock do
      @game.reload
      @game.connected_players.delete(current_user.id)
      @game.save!
    end
  end

  private

  def player?
    @game.player_left.id == current_user.id || @game.player_right.id == current_user.id
  end

  def manage_game
    @game.with_lock do
      @game.reload
      @game.connected_players << current_user.id
      GameEngineJob.perform_later(@game, 0) if @game.connected_players.size == 2
      @game.save!
    end
  end
end
