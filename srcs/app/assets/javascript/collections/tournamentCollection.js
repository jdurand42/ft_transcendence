import { Tournament } from '../models/tournamentModel'

export const Tournaments = Backbone.Collection.extend({
  initialize: function () {
  },
  model: Tournament,
  urlRoot: '/api/tournaments',
  url: function () {
    return this.urlRoot
  }
})
