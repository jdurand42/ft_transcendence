import { MyWebSocket } from '../services/websocket'

export const HomeView = Backbone.View.extend({
  initialize: function (options) {
    this.templateHome = Handlebars.templates.home
    this.socket = options.socket
    this.socket.updateContext(this, options.notifView)
    this.render()
  },
  el: $('#app'),
  render: function () {
    const context = {
    }
    const templateDataHome = this.templateHome(context)
    this.$el.html(templateDataHome)
    return this
  }
})
