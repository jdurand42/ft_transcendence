export const Tournament = Backbone.Model.extend({
  defaults: {
    id: undefined,
    start_date: undefined,
    participant_ids: undefined
  },
  urlRoot: '/api/tournaments'
})
