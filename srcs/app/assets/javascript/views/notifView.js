import { Users } from '../collections/usersCollection'
import { GameRecord } from '../models/gameRecord'

export const NotifView = Backbone.View.extend({
  events: {
    'click .refuseGame': 'refuseGame'
  },
  initialize: function () {
    console.log('initialize Notif View')
    this.users = this.collection
    this.gameRecord = new GameRecord()
    this.context = {}
  },
  el: $('#notif'),
  render: function () {
    return this
  },
  receiveMessage: function (socketId, msg) {
    console.log('NOTIF RECEIVE MESSAGE')
    console.log(socketId)
    console.log(msg)
    if (msg.action === 'game_invitation') {
      this.gameInvitation(msg)
    }
  },

  gameInvitation: function (msg) {
    this.userLoggedId = window.localStorage.getItem('user_id')
    this.context.gameId = msg.id
    if (msg.sender_id === this.userLoggedId) {
      this.context.nickname = this.users.get(this.userLoggedId).get('nickname')
      this.templateGameNotif = Handlebars.templates.senderGameNotif
    } else {
      // const sender = this.users.get(msg.sender_id)
      // this.context.nickname = sender.get('nickname')
      this.templateGameNotif = Handlebars.templates.gameNotif
    }
    const templateDataGameNotif = this.templateGameNotif(this.context)
    this.$el.append(templateDataGameNotif)
  },

  refuseGame: function (e) {
    const gameId = e.currentTarget.getAttribute('for')
    this.gameRecord.refuseInvitationGame(gameId)
    document.getElementById('gameNotif' + gameId).remove()
  }
})
