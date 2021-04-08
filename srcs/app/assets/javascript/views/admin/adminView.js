import { Users } from '../../collections/usersCollection'

export const AdminView = Backbone.View.extend({
  events: {
    'click .banned': 'authorize',
    'click .administrator': 'administrator'
  },
  initialize: function () {
    this.users = new Users()
    this.context = {}
    this.context.users = []

    const fetch = async () => {
      await this.users.fetch()
      this.render()
    }
    fetch()
  },
  el: $('#app'),

  render: function (message = '') {
    const users = JSON.parse(JSON.stringify(this.users))
    console.log(users)
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
  }
})
