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
    return fetch('/api/games?tournament_id=' + tournamentId, {
      method: 'GET',
      headers: this.headers
    })
  },
  fetchTournamentMyGames: function (userId, status, tournamentId) {
    return fetch('/api/games?user_id=' + userId + '&status=' + status + '&tournament_id=' + tournamentId, {
      method: 'GET',
      headers: this.headers
    })
  }
})
