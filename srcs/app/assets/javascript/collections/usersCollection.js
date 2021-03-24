import { User } from '../models/userModel'

export const Users = Backbone.Collection.extend({
  initialize: function () {
  },
  model: User,
  urlRoot: '/api/users/',
  url: function () {
    return this.urlRoot
  }
})
