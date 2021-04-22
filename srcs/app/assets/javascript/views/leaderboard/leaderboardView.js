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
    this.guilds = new Guilds()
    this.ladders = new Ladders()
    this.userLogged = new User()
    this.usersLadder1 = new Users()
    this.usersLadder2 = new Users()
    this.usersLadder3 = new Users()
    this.usersLadder4 = new Users()
    this.usersLadder5 = new Users()
    this.users = new Users()
    this.context = {}

    this.socket = options.socket
    this.socket.updateContext(this, options.notifView)

    this.users.fetch()

    const fetchUsers = async () => {
      const response1 = this.guilds.fetch()
      const response2 = this.userLogged.fetchUser(window.localStorage.getItem('user_id'))
      const response8 = this.ladders.fetch()
      await response1 && await response2 && await response8
      this.ladderId = this.userLogged.get('ladder_id')
      if (this.ladderId === 1) {
        await this.usersLadder1.fetchByLadderId(1)
      }
      if (this.ladderId === 2) {
        await this.usersLadder2.fetchByLadderId(2)
      }
      if (this.ladderId === 3) {
        await this.usersLadder3.fetchByLadderId(3)
      }
      if (this.ladderId === 4) {
        await this.usersLadder4.fetchByLadderId(4)
      }
      if (this.ladderId === 5) {
        await this.usersLadder5.fetchByLadderId(5)
      }
      this.render()
    }
    fetchUsers()
  },

  el: $('#app'),

  render: function () {
    this.templateLeaderboard = Handlebars.templates.leaderboardMain
    const templateData = this.templateLeaderboard(this.context)

    this.context.name = this.ladders.get(this.ladderId).get('name')
    this.context.league = []
    for (let i = 0; i < this.ladders.length; i++) {
      this.context.league.unshift(JSON.parse(JSON.stringify(this.ladders.at(i))))
    }

    this.$el.html(templateData)
    this.$el.find('#leaderboardHeader-container').html(Handlebars.templates.leaderboardHeader(this.context))
    this.displayList()
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

  displayList: async function () {
    if (this.ladderId === 1) {
      if (this.usersLadder1.length === 0) {
        await this.usersLadder1.fetchByLadderId(1)
      }
      this.updateContextLeaderboard(this.usersLadder1)
    } else if (this.ladderId === 2) {
      console.log(this.usersLadder2)
      if (this.usersLadder2.length === 0) {
        await this.usersLadder2.fetchByLadderId(2)
      }
      this.updateContextLeaderboard(this.usersLadder2)
    } else if (this.ladderId === 3) {
      if (this.usersLadder3.length === 0) {
        await this.usersLadder3.fetchByLadderId(3)
      }
      this.updateContextLeaderboard(this.usersLadder3)
    } else if (this.ladderId === 4) {
      if (this.usersLadder4.length === 0) {
        await this.usersLadder4.fetchByLadderId(4)
      }
      this.updateContextLeaderboard(this.usersLadder4)
    } else if (this.ladderId === 5) {
      if (this.usersLadder5.length === 0) {
        await this.usersLadder5.fetchByLadderId(5)
      }
      this.updateContextLeaderboard(this.usersLadder5)
    }

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
      if (user.get('id') !== this.userLogged.get('id')) {
        this.context.users[i].itsNotMe = true
      }
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
    this.users.get(msg.message.id).set({ status: msg.message.status })

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
