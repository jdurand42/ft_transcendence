import { User } from "./userModel"

export const War = Backbone.Model.extend({
    defaults: {
        id: undefined,
        closed: undefined,
        opened: undefined,
        from: undefined,
        from_agreement: undefined,
        from_score: undefined,
        on: undefined,
        on_agreement: undefined,
        on_score: undefined,
        war_start: undefined,
        war_end: undefined,
        prize: undefined,
        max_unanswared: undefined,
        prize: undefined,
        tournament_effort: undefined,
        ladder_effort: undefined,
        tournament_effort: undefined,
        terms_agreed: undefined,
        war_end: undefined,
        war_start: undefined
    },

    initialize: function () {
        // this.from = new User(this.get('from'))
        // this.on = new User(this.get('on'))
    },

    urlRoot: 'api/wars/',

    url: function () {
        return this.urlRoot
    }
})