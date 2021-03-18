import { Guilds } from '../../collections/guilds_collection'

export const GuildsView = Backbone.View.extend({
  events: {
    'keyup #searchGuilds': 'searchGuilds'
  },

  initialize: function () {
    this.guilds = new Guilds()
    this.context = {}

    const fetchGuilds = async () => {
      await this.guilds.fetch()
      this.displayList()
    }
    fetchGuilds()

    this.render()
  },

  el: $('#app'),

  render: function () {
    this.templateGuilds = Handlebars.templates.guildsMain
    const templateData = this.templateGuilds(this.context)

    this.$el.html(templateData)
    console.log(Handlebars.templates.guildsHeader)
    this.$el.find('#guildsHeader-container').html(Handlebars.templates.guildsHeader(this.context))
    return this
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
      this.context.guilds[i].nbGamers = 1 + guild.get('officer_ids').length + guild.get('member_ids').length
      this.context.guilds[i].warsWon = '42'
      this.context.guilds[i].totalWars = '42'
      this.context.guilds[i].victories = '42'
      this.context.guilds[i].totalGames = '42'
    }
    console.log(this.context)
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
