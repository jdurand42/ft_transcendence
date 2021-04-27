import { MyWebSocket } from '../services/websocket'

export const HomeView = Backbone.View.extend({
  events: {
    'click .play-gif': 'play'
  },
  initialize: function (options) {
    this.templateHome = Handlebars.templates.home
    this.socket = options.socket
    this.socket.updateContext(this, options.notifView)
    this.render()
  },
  el: $('#app'),
  render: function () {
    this.$el.html(Handlebars.templates.homeMain({}))
    this.$el.find('#homeMain').html(Handlebars.templates.play({}))
    return this
  },
  play: function () {
    this.$el.find('#homeMain').html(Handlebars.templates.rankedOrTraining({}))
  }
})
