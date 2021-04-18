import { TournamentParticipant } from '../models/tournamentParticipantModel'

export const TournamentParticipants = Backbone.Collection.extend({
  initialize: function (options) {
    this.tournament_id = options.tournament_id
  },
  default: {
    tournament_id: undefined
  },
  model: TournamentParticipant,
  urlRoot: '/api/tournaments',
  url: function () {
    return this.urlRoot + '/' + this.tournament_id + '/participants'
  }
})
