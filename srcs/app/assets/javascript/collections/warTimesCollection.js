import { WarTime } from '../models/warTimesModel'

export const WarTimes = Backbone.Collection.extend({
  initialize: function (warId) {
    this.war_id = warId
  },

  default: {
    war_id: undefined
  },

  model: WarTime,
  urlRoot: '/api/wars',

  url: function () {
    if (this.war_id !== undefined) {
      return this.urlRoot + '/' + this.war_id + '/times'
    }
    return this.urlRoot
  },

  fetchWarTimes: function (warId) {
    this.save({
      url: this.urlRoot + '/' + warId + '/times'
    })
  }
})
