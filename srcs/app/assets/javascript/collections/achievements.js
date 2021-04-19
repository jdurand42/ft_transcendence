import { Achievement } from '../models/achievement.js'

export const Achievements = Backbone.Collection.extend({
  initialize: function (url) {
    this.on('all', function (e) {
      //
    }, this)
    // this.fetch('success')
  },
  model: Achievement,
  urlRoot: '/api/achievements',
  url: function () {
    return this.urlRoot
  },
  fetchByUserId: function (userId) {
    return this.fetch({
      url: this.urlRoot + '?user_id=' + userId
    })
  }
})
