import { Users } from '../../collections/usersCollection'
import { Guilds } from '../../collections/guildsCollection'
import { Ladders } from '../../collections/laddersCollection'
import { User } from '../../models/userModel'

export const LeaderboardView = Backbone.View.extend({
  events: {
    'keyup #searchLeaderboard': 'searchLeaderboard',
    'click .league-filter': 'openFilter',
    'click .league': 'filter',
    'click #follow': 'follow'
  },

  initialize: function (options) {
    this.users = new Users()
    this.guilds = new Guilds()
    this.ladders = new Ladders()
    this.userLogged = new User()
    this.context = {}

    this.socket = options.socket
    this.socket.updateContext(this, options.notifView)

    // this.users.on('fetch', function () {
    //   this.updateContextLeaderboard(this.users)
    // }, this)

    const fetchUsers = async () => {
      const response1 = this.guilds.fetch()
      const response2 = this.users.fetch()
      await response1 && await response2
      console.log(this.users)
      // for (let i = 0; i < this.users.length; i++) {
      // this.socket.subscribeChannel(this.users.at(i).get('id'), 'ActivityChannel')
      // }
      this.displayList()
    }
    fetchUsers()

    const fetchLadders = async () => {
      const response1 = this.userLogged.fetchUser(window.localStorage.getItem('user_id'))
      const response2 = this.ladders.fetch()
      await response1 && await response2
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
    const userId = Number(e.currentTarget.getAttribute('for'))
    let newFriends = this.userLogged.get('friends')
    if (e.currentTarget.className === 'follow') {
      e.currentTarget.classList.remove('follow')
      e.currentTarget.classList.add('unfollow')
      this.userLogged.follow(userId)
      newFriends.push({ friend_id: Number(userId) })
    } else {
      e.currentTarget.classList.remove('unfollow')
      e.currentTarget.classList.add('follow')
      this.userLogged.unfollow(userId)
      newFriends = newFriends.slice().filter(el => el.friend_id != userId)
    }
    this.userLogged.set({ friends: newFriends })
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
      // this.context.users[i].generalRank = '42'
      this.context.users[i].victories = user.get('ladder_games_won')
      this.context.users[i].totalGames = user.get('ladder_games_won') + user.get('ladder_games_lost')

      if (user.get('status') === 'ingame') {
        this.context.users[i].slide_show = './icons/slideshow-ingame.svg'
      } else {
        this.context.users[i].slide_show = './icons/slideshow.svg'
      }
      this.context.users[i].follow = this.userLogged.get('friends').some(el => el.friend_id === user.get('id'))
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
  },

  receiveMessage: function (msg) {
    const channelId = Number(JSON.parse(msg.identifier).id)
    // if (channelId === msg.message.id) {
    this.users.get(msg.message.id).set({ status: msg.status })

    let div = document.getElementById('pastille' + msg.message.id)
    div.classList.remove('offline')
    div.classList.remove('ingame')
    div.classList.remove('online')
    div.classList.add(msg.message.status)

    div = document.getElementById('status' + msg.message.id)
    if (msg.message.status === 'online') {
      div.innerHTML = 'ONLINE'
    } else if (msg.message.status === 'offline') {
      div.innerHTML = 'OFFLINE'
    } else {
      div.innerHTML = 'IN GAME'
    }

    div = document.getElementById('slide-show' + msg.message.id)
    if (msg.message.status === 'ingame') {
      div.setAttribute('src', './icons/slideshow-ingame.svg')
    } else {
      div.setAttribute('src', './icons/slideshow.svg')
    }

    // this.users.fetch()
  }
  // }
})
