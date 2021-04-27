import { Users } from '../collections/usersCollection'
import { GameRecord } from '../models/gameRecord'

export const NotifView = Backbone.View.extend({
  events: {
    'click .refuseGame': 'closeNotif',
    'click .acceptGame': 'acceptGame',
    'click .closeNotif': 'closeNotif'
  },
  initialize: function () {
    this.users = this.collection
    this.context = {}
  },
  el: $('#notif'),
  render: function () {
    return this
  },
  receiveMessage: function (msg) {
    if (msg.action === 'game_invitation') {
      this.gameInvitation(msg)
    } else if (msg.action === 'guild_invitation') {
      this.guildInvitation()
    }
  },
  guildInvitation: function (msg) {
    this.userLoggedId = Number(window.localStorage.getItem('user_id'))
    this.context.guildId = msg.id
    console.log('guild_invitation')
    console.log(msg)
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

  acceptGame: function (e) {
    this.gameRecord = new GameRecord()
    const gameId = e.currentTarget.getAttribute('for')
    if (document.getElementById('gameNotif' + gameId) !== null) {
      document.getElementById('gameNotif' + gameId).remove()
    } else if (document.getElementById('senderGameNotif' + gameId) !== null) {
      document.getElementById('senderGameNotif' + gameId).remove()
    }
    window.location.href = '#game/' + gameId
  },

  closeNotif: function (e) {
    this.gameRecord = new GameRecord()
    const gameId = e.currentTarget.getAttribute('for')
    if (document.getElementById('gameNotif' + gameId) !== null) {
      this.gameRecord.refuseInvitationGame(gameId)
      document.getElementById('gameNotif' + gameId).remove()
    } else if (document.getElementById('senderGameNotif' + gameId) !== null) {
      // fermer la notif detruit la game pour éviter de lock l'user
      // peut etre mettre dans le router une supression de la game
      // si refresh
      this.gameRecord.refuseInvitationGame(gameId)
      document.getElementById('senderGameNotif' + gameId).remove()
    }
  }
})
