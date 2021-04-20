export const WarTime = Backbone.Model.extend({
  defaults: {
    day: undefined,
    start_hour: undefined,
    end_hour: undefined,
    time_to_answer: undefined,
    max_unanswered: undefined
  },

  urlRoot: '/api/wars'
})
