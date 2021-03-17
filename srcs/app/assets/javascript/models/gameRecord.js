import { SuperHeaders } from '../services/headers'

export const GameRecord = Backbone.Model.extend({
  defaults: {
    winner_id: undefined,
    looser_id: undefined,
    type_id: undefined,
    created_at: undefined
  },

  initialize: function () {
    console.log('initialize')
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
        game_type: gameType,
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
