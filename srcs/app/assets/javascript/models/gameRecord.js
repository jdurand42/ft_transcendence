import { SuperHeaders } from '../services/headers'

export const GameRecord = Backbone.Model.extend({
  defaults: {
    winner_id: undefined,
    player_left_id: undefined,
    player_right_id: undefined,
    mode: undefined,
    war_time_id: undefined,
    tournament_id: undefined,
    status: undefined,
    created_at: undefined,
    id: undefined
  },

  initialize: function () {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },

  urlRoot: 'api/games',
  url: function () {
    if (this.id !== undefined) { return this.urlRoot + '/' + this.id }
    return this.urlRoot
  },

  playGame: function (gameType) {
    return this.save({
      mode: gameType
    })
  },

  inviteGame: function (opponentId, gameType = 'duel') {
    fetch(this.urlRoot, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        mode: gameType,
        opponent_id: opponentId
      })
    })
  },

  deleteGame: function (gameId) {
    try {
      $.ajax({
        method: 'DELETE',
        url: this.urlRoot + '/' + gameId
      })
    } catch (e) {
    }
  },

  randomFight: function (gameType = 'war') {
    this.save({
      mode: gameType
    })
  },

  inviteTournamentGame: function (userId) {
    return this.save({
      opponent_id: userId,
      mode: 'tournament'
    })
  }
})
