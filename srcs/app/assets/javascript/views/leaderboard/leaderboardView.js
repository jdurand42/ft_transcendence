import { Users } from '../../collections/usersCollection'

export const LeaderboardView = Backbone.View.extend({
  events: {
    'keyup #searchLeaderboard': 'searchLeaderboard'
  },

  initialize: function () {
    this.users = new Users()
    this.context = {}

    const fetchUsers = async () => {
      await this.users.fetch()
      this.displayList()
    }
    fetchUsers()

    this.render()
  },

  el: $('#app'),

  render: function () {
    this.templateLeaderboard = Handlebars.templates.leaderboardMain
    const templateData = this.templateLeaderboard(this.context)

    this.$el.html(templateData)
    this.$el.find('#leaderboardHeader-container').html(Handlebars.templates.leaderboardHeader(this.context))
    return this
  },

  displayList: function () {
    this.updateContextLeaderboard(this.users)
    this.$el.find('#leaderboardList-container').html(Handlebars.templates.leaderboardList(this.context))
  },

  updateContextLeaderboard: function (users) {
    this.context.nbGamers = users.length
    this.context.users = []
    for (let i = 0; i < users.length; i++) {
      let user
      if (users[i] !== undefined) {
        user = users[i]
      } else {
        user = users.at(i)
      }
      this.context.users.push(JSON.parse(JSON.stringify(user)))
      this.context.users[i].rank = i + 1
      this.context.users[i].guild = '42'
      this.context.users[i].generalRank = '42'
      this.context.users[i].victories = '42'
      this.context.users[i].totalGames = '42'
    }
  },

  updateHTML: function (div, template) {
    this.$el.find(div).html(template)
  },

  searchGuilds: function (e) {
    const value = document.getElementById('searchLeaderboard').value
    const search = this.guilds.filter(function (el) {
      if (el.get('nickname').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      return false
    })
    this.updateContextLeaderboard(search)
    this.updateHTML('#leaderboardList-container', Handlebars.templates.leaderboardList(this.context))
  }
})
