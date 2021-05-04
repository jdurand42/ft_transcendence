import { GameRecord } from '../models/gameRecord'
import { MyWebSocket } from '../services/websocket'

export const HomeView = Backbone.View.extend({
  events: {
    'click .play-gif': 'play',
    'click #ranked': 'ranked',
    'click #training': 'training'
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
  },
  ranked: async function () {
    const game = new GameRecord()
    try {
      // this.$el.find('#homeMain').html(Handlebars.templates.loader({}))
      await game.playGame('ladder')
      window.location.href = '/#game/' + game.get('id')
    } catch (e) {
      this.$el.find('#homeMain').html(Handlebars.templates.play({}))
    }
  },
  training: async function () {
    const game = new GameRecord()
    try {
      // this.$el.find('#homeMain').html(Handlebars.templates.loader({}))
      await game.playGame('duel')
      window.location.href = '/#game/' + game.get('id')
    } catch (e) {
      this.$el.find('#homeMain').html(Handlebars.templates.play({}))
    }
  }
})
