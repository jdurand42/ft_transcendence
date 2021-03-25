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
  }
})
