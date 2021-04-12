import { Users } from '../collections/usersCollection'
import { GameRecord } from '../models/gameRecord'

export const NotifView = Backbone.View.extend({
  events: {
    'click .refuseGame': 'closeNotif',
    'click .closeNotif': 'closeNotif'
  },
  initialize: function () {
    this.users = this.collection
    this.gameRecord = new GameRecord()
    this.context = {}
  },
  el: $('#notif'),
  render: function () {
    return this
  },
  receiveMessage: function (msg) {
    if (msg.action === 'game_invitation') {
      this.gameInvitation(msg)
    }
  },
  gameInvitation: function (msg) {
    this.userLoggedId = Number(window.localStorage.getItem('user_id'))
    this.context.gameId = msg.id
    this.templateGameNotif = undefined
    if (msg.sender_id === this.userLoggedId) {
      // this.context.nickname = this.users.get(this.userLoggedId).get('nickname') // Add receiver
      this.templateGameNotif = Handlebars.templates.senderGameNotif
    } else {
      const sender = this.users.get(msg.sender_id)
      this.context.nickname = sender.get('nickname')
      this.templateGameNotif = Handlebars.templates.gameNotif
    }
    const templateDataGameNotif = this.templateGameNotif(this.context)
    this.$el.append(templateDataGameNotif)
  },
  closeNotif: function (e) {
    const gameId = e.currentTarget.getAttribute('for')
    if (document.getElementById('gameNotif' + gameId) !== null) {
      this.gameRecord.refuseInvitationGame(gameId)
      document.getElementById('gameNotif' + gameId).remove()
    } else if (document.getElementById('senderGameNotif' + gameId) !== null) {
      document.getElementById('senderGameNotif' + gameId).remove()
    }
  }
})
