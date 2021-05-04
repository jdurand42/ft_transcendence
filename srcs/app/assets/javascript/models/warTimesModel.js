import { SuperHeaders } from '../services/headers'

export const WarTime = Backbone.Model.extend({
  defaults: {
    day: undefined,
    start_hour: undefined,
    end_hour: undefined,
    time_to_answer: undefined,
    max_unanswered: undefined,
    from_max_unanswered: undefined,
    on_max_unanswered: undefined,
    id: undefined
  },

  initialize: function () {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },

  urlRoot: '/api/wars',

  delete: function (warId) {
    const header = this.superHeaders.getHeaders()
    const url = this.urlRoot + '/' + warId + '/times/' + this.id
    return fetch(url, {
      method: 'DELETE',
      headers: header
    })
  }
})
