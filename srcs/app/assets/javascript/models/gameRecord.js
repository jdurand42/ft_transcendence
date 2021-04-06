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
    created_at: undefined
  },

  initialize: function () {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },

  urlRoot: 'api/games',
  url: function () {
    if (this.id !== undefined) { return this.urlRoot + this.id }
    return this.urlRoot
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

  refuseInvitationGame: function (gameId) {
    fetch(this.urlRoot + '/' + gameId, {
      method: 'DELETE',
      headers: this.headers
    })
  }

})
