import { Guilds } from '../../collections/guildsCollection'
import { Wars } from '../../collections/warCollection'

export const GuildsView = Backbone.View.extend({
  events: {
    'keyup #searchGuilds': 'searchGuilds'
  },

  initialize: function (options) {
    this.guilds = new Guilds()
    this.wars = new Wars()
    this.context = {}
    this.guildsWar = []

    this.socket = options.socket
    this.socket.updateContext(this, options.notifView)

    const fetchGuilds = async () => {
      const response = this.wars.fetch()
      await this.guilds.fetch()
      this.displayList()
      await response
      this.displayWars()
    }
    fetchGuilds()

    this.render()
  },

  el: $('#app'),

  render: async function () {
    this.templateGuilds = Handlebars.templates.guildsMain
    const templateData = this.templateGuilds(this.context)

    this.$el.html(templateData)
    await this.$el.find('#guildsHeader-container').html(Handlebars.templates.guildsHeader(this.context))
    return this
  },

  displayWars: function () {
    const fetchWars = async () => {
      for (let i = 0; i < this.guilds.length; i++) {
        const guildId = this.guilds.at(i).get('id')
        const wars = new Wars()
        await wars.fetchByGuildId(guildId)
        const totalWars = document.createTextNode('0')
        let warWons = document.createTextNode('0')
        try {
          document.getElementById('totalWars' + guildId).appendChild(totalWars)
        } catch (e) {}
        try {
          document.getElementById('warsWon' + guildId).appendChild(warWons)
        } catch (e) {}
        this.guildsWar.push({ id: guildId, warWons: 0, totalWars: 0 })
        for (let i = 0; i < wars.length; i++) {
          if (wars.at(i).get('closed') === true) {
            const totalWars = Number(document.getElementById('totalWars' + guildId).textContent) + 1
            this.guildsWar[this.guildsWar.length - 1].totalWars = totalWars
            document.getElementById('totalWars' + guildId).textContent = totalWars.toString()
            if (guildId === wars.at(i).get('from_id')) {
              if (wars.at(i).get('from_score') > wars.at(i).get('on_score')) {
                warWons = Number(document.getElementById('warsWon' + guildId).textContent) + 1
                this.guildsWar[this.guildsWar.length - 1].warWons = warWons
                document.getElementById('warsWon' + guildId).textContent = warWons.toString()
              }
            } else {
              if (wars.at(i).get('from_score') < wars.at(i).get('on_score')) {
                warWons = Number(document.getElementById('warsWon' + guildId).textContent) + 1
                document.getElementById('warsWon' + guildId).textContent = warWons.toString()
                this.guildsWar[this.guildsWar.length - 1].warWons = warWons
              }
            }
          }
        }
      }
    }
    fetchWars()
  },

  displayList: function () {
    this.updateContextGuilds(this.guilds)
    this.$el.find('#guildsList-container').html(Handlebars.templates.guildsList(this.context))
  },

  updateContextGuilds: function (guilds) {
    this.context.nbGuilds = guilds.length
    this.context.guilds = []
    for (let i = 0; i < guilds.length; i++) {
      let guild
      if (guilds[i] !== undefined) {
        guild = guilds[i]
      } else {
        guild = guilds.at(i)
      }
      this.context.guilds.push(JSON.parse(JSON.stringify(guild)))
      this.context.guilds[i].rank = i + 1
      this.context.guilds[i].image_url = './images/profile-pic.jpg'
      this.context.guilds[i].nbGamers = guild.get('member_ids').length
    }
  },

  updateHTML: function (div, template) {
    this.$el.find(div).html(template)
  },

  searchGuilds: function (e) {
    const value = document.getElementById('searchGuilds').value
    const search = this.guilds.filter(function (el) {
      if (el.get('name').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      if (el.get('anagram').toLowerCase().startsWith(value.toLowerCase() === true)) { return true }
      return false
    })
    this.updateContextGuilds(search)
    this.updateHTML('#guildsList-container', Handlebars.templates.guildsList(this.context))
    const guilds = document.getElementsByClassName('guildTable')
    for (let i = 0; i < guilds.length; i++) {
      const id = guilds[i].getAttribute('id')
      const guildWar = this.guildsWar.find(el => el.id === Number(id))
      const warsWonDiv = document.getElementById('warsWon' + id)
      const totalWarsDiv = document.getElementById('totalWars' + id)
      warsWonDiv.textContent = guildWar.warWons
      totalWarsDiv.textContent = guildWar.totalWars
    }
  }
})
