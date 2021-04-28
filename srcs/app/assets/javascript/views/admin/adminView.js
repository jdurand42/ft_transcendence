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
    const users = JSON.parse(JSON.stringify(this.users))
    this.context.users = users
    this.context.nbUsers = users.length
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
