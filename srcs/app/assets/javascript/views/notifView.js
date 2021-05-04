import { GameRecords } from '../collections/gameRecords'
import { Users } from '../collections/usersCollection'
import { GameRecord } from '../models/gameRecord'
import { Guild } from '../models/guildModel'

export const NotifView = Backbone.View.extend({
  events: {
    'click .refuseGame': 'closeNotif',
    'click .acceptGame': 'acceptGame',
    'click .closeNotif': 'closeNotif',
    'click #acceptGuild': 'acceptGuild'
  },
  initialize: function () {
    this.users = this.collection
    this.games = new GameRecords()
    this.context = {}

    this.users.once('sync', function () {
      const fetchPendingGames = async () => {
        await this.games.fetchGameByUserIdStatus(window.localStorage.getItem('user_id'))
        for (let i = 0; i < this.games.length; i++) {
          const msg = {}
          msg.id = this.games.at(i).get('id')
          msg.sender_id = this.games.at(i).get('player_left_id')
          this.gameInvitation(msg)
        }
      }
      fetchPendingGames()
    }, this)
  },
  el: $('#notif'),
  render: function () {
    return this
  },
  receiveMessage: function (msg) {
    if (msg.action === 'game_invitation') {
      this.gameInvitation(msg)
    } else if (msg.action === 'guild_invitation') {
      this.guildInvitation(msg)
    }
  },
  guildInvitation: function (msg) {
    const fetchGuild = async () => {
      this.userLoggedId = Number(window.localStorage.getItem('user_id'))
      const guild = new Guild({ id: msg.id })
      await guild.fetch()
      const context = JSON.parse(JSON.stringify(guild))
      const templateGuildNotif = Handlebars.templates.guildInvitation
      const templateDataGuildNotif = templateGuildNotif(context)
      this.$el.append(templateDataGuildNotif)
    }
    fetchGuild()
  },
  gameInvitation: function (msg) {
    this.userLoggedId = Number(window.localStorage.getItem('user_id'))
    this.context.gameId = msg.id
    console.log('id dans gameId ' + this.context.gameId)
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
    console.log('gameId dans acceptGame ' + gameId)
    if (document.getElementById('gameNotif' + gameId) !== null) {
      document.getElementById('gameNotif' + gameId).remove()
    } else if (document.getElementById('senderGameNotif' + gameId) !== null) {
      document.getElementById('senderGameNotif' + gameId).remove()
    }
    window.location.href = '#game/' + gameId
  },

  closeNotif: function (e) {
    const fetchNotif = async () => {
      const id = e.currentTarget.getAttribute('for')
      if (document.getElementById('gameNotif' + id) !== null) {
        const gameRecord = new GameRecord({ id: id })
        gameRecord.deleteGame(id)
        document.getElementById('gameNotif' + id).remove()
      } else if (document.getElementById('senderGameNotif' + id) !== null) {
        const gameRecord = new GameRecord({ id: id })
        gameRecord.deleteGame(id)
        document.getElementById('senderGameNotif' + id).remove()
      } else if (document.getElementById('guildNotif' + id) !== null) {
        const guild = new Guild({ id: id })
        guild.refuseInvitation(id)
        document.getElementById('guildNotif' + id).remove()
      }
    }
    fetchNotif()
  },
  acceptGuild: function (e) {
    const id = e.currentTarget.getAttribute('for')
    const guild = new Guild({ id: id })
    guild.acceptInvitation(this.userLoggedId)
    document.getElementById('guildNotif' + id).remove()
  }
})
