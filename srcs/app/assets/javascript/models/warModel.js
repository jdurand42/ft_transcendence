export const War = Backbone.Model.extend({
    defaults: {
        id: undefined,
        from: undefined,
        on: undefined,
        from_score: undefined,
        on_score: undefined,
        war_start: undefined,
        war_end: undefined,
        prize: undefined,
        max_unanswared: undefined,
        prize: undefined,
        tournament_effort: undefined,
        ladder_effort: undefined
    },

    initialize: function () {
    },

    urlRoot: 'api/wars/',

    url: function () {
        return this.urlRoot
    }
})