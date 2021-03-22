import { Guild } from '../models/guild_model'

export const Guilds = Backbone.Collection.extend({
  initialize: function (url) {
    this.on('all', function (e) {
    }, this)
  },
  model: Guild,
  urlRoot: '/api/guilds/',
  url: function () {
    return this.urlRoot
  }
})
