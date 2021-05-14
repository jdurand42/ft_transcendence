import { Wrapper } from '../models/wrapper.js'

export const SuperWrapper = Backbone.Model.extend({
  defaults: {
    users: undefined,
    guilds: undefined,
    ladders: undefined,
    userLogged: undefined,
    channels: undefined
  }
})
