import { Guild } from '../models/guildModel'

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
