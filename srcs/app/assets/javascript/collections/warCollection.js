import { War } from '../models/warModel'
import { SuperHeaders } from '../services/headers'

export const Wars = Backbone.Collection.extend({
  initialize: function () {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },
  model: War,
  urlRoot: '/api/wars',
  url: function () {
    return this.urlRoot
  },
  fetchByGuildId: function (id) {
    const url = this.urlRoot + '?guild_id=' + id
    return fetch(url, {
      method: 'GET',
      headers: this.headers
    })
    // return $.ajax({
    //     url: this.urlRoot + '?guild_id=' + id,
    //     method: 'GET'
    // })
  }
})
