/* eslint-disable eqeqeq */
import { Users } from '../../collections/usersCollection'

export const AdminView = Backbone.View.extend({
  events: {
    'keyup #searchAdmin': 'searchAdmin',
    'click .banned': 'authorize',
    'click .administrator': 'administrator'
  },
  initialize: function (options) {
    this.users = new Users()
    this.context = {}
    this.context.users = []

    this.socket = options.socket
    this.socket.updateContext(this, options.notifView)

    const fetch = async () => {
      await this.users.fetch()
      this.render()
    }
    fetch()
  },
  el: $('#app'),

  render: function (message = '') {
    this.context.users = []
    for (let i = 0; i < this.users.length; i++) {
      this.context.users[i] = JSON.parse(JSON.stringify(this.users.at(i)))
      if (this.users.at(i).get('uid') == 69891) {
        this.context.users[i].owner = true
      }
    }
    this.context.nbUsers = this.users.length
    this.templateAdmin = Handlebars.templates.adminMain
    this.$el.html(this.templateAdmin(this.context))
    this.$el.find('#adminHeader-container').html(Handlebars.templates.adminHeader(this.context))
    this.$el.find('#adminList-container').html(Handlebars.templates.adminList(this.context))
    return this
  },
  authorize: function (event) {
    const userId = event.currentTarget.getAttribute('for')
    const user = this.users.get(userId)
    user.updateBanned(event.currentTarget.checked)
  },
  administrator: function (e) {
    const userId = e.currentTarget.getAttribute('for')
    const user = this.users.get(userId)
    user.setAsWebsiteAdmin(e.currentTarget.checked)
  },
  searchAdmin: function () {
    const value = document.getElementById('searchAdmin').value
    const search = this.users.filter(function (el) {
      if (el.get('nickname').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      return false
    })
    this.context.users = JSON.parse(JSON.stringify(search))
    this.$el.find('#adminList-container').html(Handlebars.templates.adminList(this.context))
  }
})
