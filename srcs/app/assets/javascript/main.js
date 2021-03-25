import { Router } from './router/router.js'

$(document).ready(function () {
  const mainRouter = new Router()
  // = new Router({model: new SuperWrapper([new Wrapper({collection: new Guilds()}),
  // new Wrapper({collection: new Users()})])})
  Backbone.history.start()
  // Backbone.history.start({ pushState: true })
})
