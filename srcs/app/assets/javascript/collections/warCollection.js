import { War } from '../models/warModel'

export const Wars = Backbone.Collection.extend({
  initialize: function () {
  },
  model: War,
  urlRoot: '/api/wars',
  url: function () {
    if (this.id !== undefined) { return this.urlRoot + '?guild_id=' + this.id }
    return this.urlRoot
  },
  fetchByGuildId: function (id) {
    return this.fetch({
      url: this.urlRoot + '?guild_id=' + id
    })
  },
  comparator: function (model) {
    return new Date(model.get('war_start'))
  }
})
