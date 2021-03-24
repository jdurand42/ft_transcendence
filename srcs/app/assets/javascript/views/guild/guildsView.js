import { Guilds } from '../../collections/guilds_collection'
import { Wars } from '../../collections/warCollection'

export const GuildsView = Backbone.View.extend({
  events: {
    'keyup #searchGuilds': 'searchGuilds'
  },

  initialize: function () {
    this.guilds = new Guilds()
    this.wars = new Wars()
    this.context = {}

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

  render: function () {
    this.templateGuilds = Handlebars.templates.guildsMain
    const templateData = this.templateGuilds(this.context)

    this.$el.html(templateData)
    this.$el.find('#guildsHeader-container').html(Handlebars.templates.guildsHeader(this.context))
    return this
  },

  displayWars: function () {
    const fetchWars = async () => {
      for (let i = 0; i < this.guilds.length; i++) {
        const guildId = this.guilds.at(i).get('id')
        const wars = new Wars()
        wars.fetchByGuildId(guildId)
        let totalWars = document.createTextNode('0')
        let warWons = document.createTextNode('0')
        document.getElementById('totalWars' + guildId).appendChild(totalWars)
        document.getElementById('warsWon' + guildId).appendChild(warWons)
        for (let i = 0; i < this.wars.length; i++) {
          const from = this.wars.at(i).get('from')
          let totalWars = document.createTextNode(Number(totalWars) + 1)
          document.getElementById('totalWars' + from).appendChild(totalWars)
          if (guildId === this.wars.at(i).get('from')) {
            if (this.wars.at(i).get('from_score') > this.wars.at(i).get('on_score')) {
              let warWons = document.createTextNode(Number(warWons) + 1)
              document.getElementById('warsWon' + from).appendChild(warWons)
            }
          } else {
            if (this.wars.at(i).get('from_score') < this.wars.at(i).get('on_score')) {
              let warWons = document.createTextNode(Number(warWons) + 1)
              document.getElementById('warsWon' + from).appendChild(warWons)
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
      console.log(guild)
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
  }
})
