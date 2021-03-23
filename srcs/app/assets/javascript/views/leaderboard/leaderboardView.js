import { Users } from '../../collections/usersCollection'
import { Guilds } from '../../collections/guilds_collection'
import { Ladders } from '../../collections/laddersCollection'
import { User } from '../../models/userModel'

export const LeaderboardView = Backbone.View.extend({
  events: {
    'keyup #searchLeaderboard': 'searchLeaderboard',
    'click .league-filter': 'openFilter',
    'click .league': 'filter',
    'click #follow': 'follow'
  },

  initialize: function () {
    this.users = new Users()
    this.guilds = new Guilds()
    this.ladders = new Ladders()
    this.userLogged = new User()
    this.context = {}

    const fetchUsers = async () => {
      const response1 = this.guilds.fetch()
      const response2 = this.users.fetch()
      await response1 && await response2
      this.displayList()
    }
    fetchUsers()

    const fetchLadders = async () => {
      const response1 = this.userLogged.fetchUser(window.localStorage.getItem('user_id'))
      const response2 = this.ladders.fetch()
      await response1 && await response2
      if (this.userLogged.get('ladder_id') === null) { // Back undefined doit disparaitre
        this.ladderId = 1
      } else {
        this.ladderId = this.userLogged.get('ladder_id')
      }
      this.render()
    }
    fetchLadders()
  },

  el: $('#app'),

  render: function () {
    this.templateLeaderboard = Handlebars.templates.leaderboardMain
    const templateData = this.templateLeaderboard(this.context)

    this.context.name = this.ladders.get(this.ladderId).get('name')
    this.context.league = []
    for (let i = 0; i < this.ladders.length; i++) {
      this.context.league.push(JSON.parse(JSON.stringify(this.ladders.at(i))))
    }

    this.$el.html(templateData)
    this.$el.find('#leaderboardHeader-container').html(Handlebars.templates.leaderboardHeader(this.context))
    return this
  },

  follow: function (e) {
    if (e.currentTarget.className === 'follow') {
      e.currentTarget.classList.remove('follow')
      e.currentTarget.classList.add('unfollow')
    } else {
      e.currentTarget.classList.remove('unfollow')
      e.currentTarget.classList.add('follow')
    }
  },

  displayList: function () {
    this.updateContextLeaderboard(this.users.slice().filter(el => el.get('ladder_id') === this.ladderId))
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
      this.context.users[i].trophy = 'icons/' + this.ladders.get(user.get('ladder_id')).get('name').toLowerCase() + '.svg'
      this.context.users[i].rank = i + 1
      if (user.get('guild_id') === null) {
        this.context.users[i].guild = 'N/A'
      } else {
        this.context.users[i].guild = this.guilds.get(user.get('guild_id')).get('name')
      }
      this.context.users[i].generalRank = '42'
      this.context.users[i].victories = user.get('ladder_games_won')
      this.context.users[i].totalGames = user.get('ladder_games_won') + user.get('ladder_games_lost')

      if (user.get('status') === 'ingame') {
        this.context.users[i].slide_show = './icons/slideshow-ingame.svg'
      } else {
        this.context.users[i].slide_show = './icons/slideshow.svg'
      } 
    }
  },

  updateHTML: function (parent, child, template) {
    const html = template(this.context)
    document.getElementById(child).remove()
    document.getElementById(parent).appendChild($(html).find('#' + child)[0])
  },

  updateEL: function (div, template) {
    this.$el.find(div).html(template)
  },

  searchLeaderboard: function () {
    const value = document.getElementById('searchLeaderboard').value
    const search = this.users.filter(function (el) {
      if (el.get('nickname').toLowerCase().startsWith(value.toLowerCase()) === true) { return true }
      return false
    })
    this.updateContextLeaderboard(search)
    this.updateEL('#leaderboardList-container', Handlebars.templates.leaderboardList(this.context))
  },

  openFilter: function (e) {
    if (document.getElementById('list-leagues').style.display === 'none') {
      document.getElementById('list-leagues').style.display = 'flex'
    } else {
      document.getElementById('list-leagues').style.display = 'none'
    }
  },

  filter: function (e) {
    this.ladderId = Number(e.currentTarget.getAttribute('for'))
    this.context.name = this.ladders.get(this.ladderId).get('name')
    this.openFilter()
    this.updateHTML('league-filter', 'league-name', Handlebars.templates.leaderboardHeader)
    this.displayList()
  }
})
