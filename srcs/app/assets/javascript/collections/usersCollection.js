import { User } from '../models/userModel'

export const Users = Backbone.Collection.extend({
  initialize: function () {
  },
  model: User,
  urlRoot: '/api/users',
  url: function () {
    return this.urlRoot
  },
  fetchByGuildId: function (guildId) {
    const url = this.urlRoot + '?guild_id=' + guildId
    return this.fetch({
      url: url
    })
  }
})
