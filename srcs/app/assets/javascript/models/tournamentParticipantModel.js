export const TournamentParticipant = Backbone.Model.extend({
  defaults: {
    id: undefined,
    user: undefined,
    win_count: undefined,
    opponents: undefined,
    tournament: undefined
  },
  initialize: function (options) {
    this.tournament_id = options.tournament_id
  },
  urlRoot: '/api/tournaments',
  url: function () {
    return this.urlRoot + '/' + this.tournament_id + '/participants'
  }
})
