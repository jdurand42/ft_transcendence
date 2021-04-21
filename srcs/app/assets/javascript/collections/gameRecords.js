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
    return this.fetch({
      url: this.urlRoot + '?tournament_id=' + tournamentId
    })
  },
  fetchTournamentMyGames: function (userId, status, tournamentId) {
    return this.fetch({
      url: this.urlRoot + '?user_id=' + userId + '&status=' + status + '&tournament_id=' + tournamentId
    })
  },
  fetchMyGames: function (userId, mode, status = 'played') {
    return this.fetch({
      url: this.urlRoot + '?user_id=' + userId + '&mode=' + mode + '&status=' + status
    })
  }
})
