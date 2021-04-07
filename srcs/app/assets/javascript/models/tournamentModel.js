import { SuperHeaders } from '../services/headers'

export const Tournament = Backbone.Model.extend({
  defaults: {
    id: undefined,
    start_date: undefined,
    participant_ids: undefined
  },
  initialize: function () {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },
  urlRoot: '/api/tournaments',
  url: function () {
    if (this.id !== undefined) { return this.urlRoot + '/' + this.id }
    return this.urlRoot
  },
  createTournament: function (startDate) {
    return this.save({
      start_date: startDate
    })
  },
  register: function (userId) {
    const url = this.url() + '/participants'
    console.log(url)
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        user_id: userId
      })
    })
  },
  unregister: function (userId) {
    const url = this.url() + '/participants'
    return fetch(url, {
      method: 'DELETE',
      headers: this.headers
    })
  },
  cancelTournament: function () {
    return fetch(this.url(), {
      method: 'DELETE',
      headers: this.headers
    })
  }
})
