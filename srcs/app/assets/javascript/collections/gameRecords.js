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
  comparator: function (model) {
    return -new Date(model.get('created_at'))
  },
  fetchByTournament: function (tournamentId) {
    return this.fetch({
      url: this.urlRoot + '?tournament_id=' + tournamentId
    })
  },
  fetchByWarTimeId: function (warTimeId) {
    return this.fetch({
      url: this.urlRoot + '?war_time_id=' + warTimeId
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
  },
  fetchGameByUserIdStatus: function (userId, status = 'pending') {
    return this.fetch({
      url: this.urlRoot + '?user_id=' + userId + '&status=' + status
    })
  },
  fetchInProgressGame: function (userId, status = 'inprogress') {
    return this.fetch({
      url: this.urlRoot + '?user_id=' + userId + '&status=' + status
    })
  },

  deleteGame: function (gameId) {
    const deleteGame = async () => {
      $.ajax({
        method: 'delete',
        url: '/api/games/' + gameId
      })
    }
    try {
      deleteGame()
    } catch (e) {
    }
  }
})
