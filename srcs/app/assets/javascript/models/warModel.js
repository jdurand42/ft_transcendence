export const War = Backbone.Model.extend({
  defaults: {
    closed: undefined,
    from_agreement: undefined,
    from_id: undefined,
    from_score: undefined,
    id: undefined,
    ladder_effort: undefined,
    last_negotiation: undefined,
    max_unanswared: undefined,
    on_agreement: undefined,
    on_id: undefined,
    opened: undefined,
    prize: undefined,
    terms_agreed: undefined,
    tournament_effort: undefined,
    war_start: undefined,
    war_end: undefined
  },

  initialize: function () {
  },

  urlRoot: 'api/wars',

  url: function () {
    if (this.id !== undefined) { return this.urlRoot }
    return this.urlRoot
  },

  createWar: function (onId, warStart, warEnd, prize, maxUnanswered, tournamentEffort, ladderEffort) {
    return this.save({
      on_id: onId,
      war_start: warStart,
      war_end: warEnd,
      prize: prize,
      max_unanswered: maxUnanswered,
      tournament_effort: tournamentEffort,
      ladder_effort: tournamentEffort
    })
  }

  // createWarTime: function (warStart, warEnd) {

  // }
})
