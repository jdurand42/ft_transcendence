import { SuperHeaders } from '../services/headers'
import { GameRecord } from '../models/gameRecord.js'

export const GameRecords = Backbone.Collection.extend({
  initialize: function (url) {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },
  model: GameRecord,
  urlRoot: '/api/games',
  url: function () {
    return this.urlRoot
  },
  fetchByTournament: function (tournamentId) {
    return fetch('/api/tournaments/' + tournamentId + '/games', {
      method: 'GET',
      headers: this.headers
    })
  }
})
