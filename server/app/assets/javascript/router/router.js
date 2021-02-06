import { homeView } from '../views/home_view.js'
import { usersView } from '../views/users_view.js'
import { pongView } from '../views/pong_view.js'

export const Router = Backbone.Router.extend({
  initialize: function () {
    this.homeView = homeView
    this.usersView = usersView
    this.pongView = pongView
    console.log('In router initialize')
  },

  routes:
  {
    user_page: 'users_view',
    home: 'home_view',
    pong: 'pong_view'
  },

  home_view: function (url) {
    console.log('in home route')
    this.homeView.render()
  },

  users_view: function (url) {
    console.log('in users_view route')
    this.usersView.render()
  },

  pong_view: function (url) {
    console.log('in pong view')
    this.pongView.render()
  }
})
