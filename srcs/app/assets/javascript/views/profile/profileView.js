/* import { AchivementsView } from './achivementsView.js'
import { EditProfileView } from './editProfileView.js'
import { MatchHistoryView } from './matchHistoryView.js'
import { FriendsView } from './friendsView.js'
import { ProfileOverviewView } from './overviewView.js'
import { NoGuildView } from './noGuildView.js' */

export const ProfileView = Backbone.View.extend({
  events: {
    'click #matchHistory': 'loadMatchHistory',
    'click #friends': 'loadFriends',
    'click #profileGuild': 'loadGuild',
    'click #achievements': 'loadAchievements',
    'click #leaveGuild': 'leaveGuild',
    'click #manageGuild': function (e) { Backbone.history.navigate('manage_guild', { trigger: true }) },
    'click #followUser': function (e) { this.followUser(e) },

    //    'click #followAnUser': function (e) { this.followAnUser(e) },
    'click #sendInvitation': 'sendInvitation',
    'click #playUser': 'playUser'
  },

  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.ladders = this.model.get('ladders').get('obj')
    this.gameRecords = this.model.get('gameRecords').get('obj')
    this.achievements = this.model.get('achievements').get('obj')
    this.userId = this.model.get('userLoggedId')
    if (this.id === null) {
      this.id = this.userId
    }
    this.$el.html(Handlebars.templates.profile({}))
    this.loadMatchHistory()
  },
  el: $('#app'),

  loadMatchHistory: function () {
    const load = async () => {
      try {
        await this.users.fetch()
        if (this.id > this.users.length || this.id <= 0) {
          this.$el.find('#profileContent').html(Handlebars.templates.contentNotFound({}))
          return
        }
        this.checkLadderId()
        this.$el.find('#profileSubNavBar').html(Handlebars.templates.profileSubNavBar({}))
        await this.ladders.fetch() &&
        await this.gameRecords.fetch()
        this.renderPannel()
        // console.log('<img src=' + this.users.get(this.id).get('image_url') + '\'></img>')
        await this.guilds.fetch()
        this.matchHistory()
      } catch (e) {
        console.log(e)
        this.$el.find('#profileContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadFriends: function () {
    const load = async () => {
      try {
        await this.users.fetch()
        this.checkLadderId()
        this.renderPannel()
        await this.guilds.fetch() &&
        await this.ladders.fetch()
        this.friends()
      } catch (e) {
        console.log(e)
        this.$el.find('#profileContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadAchievements: function () {
    const load = async () => {
      try {
        await this.users.fetch()
        this.checkLadderId()
        await this.achievements.fetch()
        this.renderPannel()
        this.achievementsView()
      } catch (e) {
        console.log(e)
        this.$el.find('#profileContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadGuild: function () {
    const load = async () => {
      try {
        await this.users.fetch()
        this.checkLadderId()
        await this.guilds.fetch() &&
        await this.ladders.fetch()
        // await this.achivements.fetch()
        this.renderPannel()
        this.profileGuild()
      } catch (e) {
        console.log(e)
        this.$el.find('#profileContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  renderPannel: function () {
    const user = this.users.get(this.id)
    const context = {
      trophy: 'icons/' + this.ladders.get(user.get('ladder_id')).get('name').toLowerCase() + '.svg',
      rank: this.id,
      generalRank: this.id,
      totalRank: this.users.length,
      totalLeagueRank: this.users.length,
      ratio: Math.round(user.get('ladder_games_won') / (user.get('ladder_games_won') + user.get('ladder_games_lost')) * 100 * 100) / 100,
      victories: user.get('ladder_games_won'),
      totalGames: user.get('ladder_games_won') + user.get('ladder_games_lost'),
      nickname: user.get('nickname'),
      image_url: user.get('image_url')
    }
    if (isNaN(context.ratio)) {
      context.ratio = 0
    }
    this.$el.find('#profilePannel').html(Handlebars.templates.profilePannel(context))
    if (this.id != this.userId) {
      this.renderProfileSubPannel()
    }
    // this.$el.find('#profilePictureContainer').html('<img id="profilePicture" src=\'' + this.users.get(this.id).get('image_url') + '\'></img>')
  },

  renderProfileSubPannel: function () {
    this.$el.find('#profileButtons').html(Handlebars.templates.profileButtons())
    const friends = this.users.get(this.userId).get('friends')
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].friend_id == this.id) {
        document.getElementById('followUser').innerHTML = '<div>Unfollow</div>'
        // document.getElementById('followUser').style = 'background: #DDD7D7;border: 2px solid #606060;box-sizing: border-box;border-radius: 10px;'
        return
      }
    }
    // document.getElementById('followUser').style = ''
  },

  matchHistory: function () {
    const template = Handlebars.templates.matchHistory
    const context = {}

    context.player = this.users.get(this.id).get('nickname')
    if (this.users.get(this.id).get('guild_id') != null) {
      context.guild = this.guilds.get(this.users.get(this.id).get('guild_id')).get('anagram')
    } else { context.guild = this.users.get(this.id).get('guild_id') }

    context.guild_id = this.users.get(this.id).get('guild_id')
    context.id = this.id

    context.matchs = []

    for (let i = 1; i <= this.gameRecords.length; i++) {
      const game = {}
      if (context.id == this.gameRecords.get(i).get('player_left_id') ||
          context.id == this.gameRecords.get(i).get('player_right_id')) {
        game.player_left_id = this.gameRecords.get(i).get('player_left_id')
        game.player_right_id = this.gameRecords.get(i).get('player_right_id')
        game.player_left_nickname = this.users.get(game.player_left_id).get('nickname')
        game.player_right_nickname = this.users.get(game.player_right_id).get('nickname')
        game.game_type = this.gameRecords.get(i).get('game_type')
        game.created_at = this.gameRecords.get(i).get('created_at')
        if (context.id == this.gameRecords.get(i).get('winner_id')) { game.result = 'win' } else { game.result = 'loose' }
        context.matchs.push(game)
      }
    }
    if (!context.matchs.length) {
      this.$el.find('#profileContent').html('<div class="notFoundMessage" id="notFoundMatchHistory">no match history records found</div>')
    } else {
      this.$el.find('#profileContent').html(Handlebars.templates.matchHistory(context))
    }
  },

  friends: function () {
    const friends = this.users.get(this.id).get('friends')
    const userFriends = this.users.get(this.userId).get('friends')
    const context = { friends: Array(), friendsNumber: friends.length }
    for (let i = 0; i < friends.length; i++) {
      // context.friends.push(JSON.parse(JSON.stringify(this.users.get(friends[i].friend_id))))
      context.friends.push(
        this.updateContextForlist(JSON.parse(JSON.stringify(this.users.get(friends[i].friend_id))), i))
      // context.friends[i] = this.updateContextForlist(context.friends[i])
      if (userFriends.some(e => e.friend_id === friends[i].friend_id)) {
        context.friends[i].isFriend = true
      } else {
        context.friends[i].isFriend = false
      }
      if (this.users.get(friends[i].friend_id).get('guild_id')) {
        context.friends[i].guild = JSON.parse(JSON.stringify(this.guilds.get(this.users.get(friends[i].friend_id).get('guild_id'))))
      } else {
        context.friends[i].guild = false
      }
    }
    console.log(this.users.get(1))
    this.$el.find('#profileContent').html(Handlebars.templates.friends(context))
    return this
  },

  updateContextForlist: function (user, i) {
    user.trophy = 'icons/' + this.ladders.get(user.ladder_id).get('name').toLowerCase() + '.svg'
    user.rank = i + 1
    user.generalRank = '42'
    user.victories = user.ladder_games_won
    user.totalGames = user.victories + user.ladder_games_lost
    if (user.status === 'ingame') {
      user.slide_show = './icons/slideshow-ingame.svg'
    } else {
      user.slide_show = './icons/slideshow.svg'
    }
    user.follow = this.users.get(this.userId).get('friends').some(el => el.friend_id === user.id)
    if (user.guild_id) {
      user.guildName = this.guilds.get(user.guild_id).get('name')
    }
    return user
  },

  achievementsView: function () {
    const context = {
      name: this.users.get(this.id).get('nickname'),
      ladder_id: this.users.get(this.id).get('ladder_id'),
      // ladder_name: this.ladders.get(this.users.get(this.id).get('ladder_id')).get('name'),
      guild_id: this.users.get(this.id).get('guild_id'),
      id: this.id
    }
    console.log(this.achievements)
    this.$el.find('#profileContent').html(Handlebars.templates.achievements(context))
  },

  profileGuild: function () {
    let guild
    if (this.users.get(this.id).get('guild_id')) {
      guild = this.guilds.get(this.users.get(this.id).get('guild_id'))
    } else if (this.userId === this.id) {
      this.$el.find('#profileContent').html(Handlebars.templates.userLoggedNoGuild(JSON.parse(JSON.stringify(this.users.get(this.id)))))
      return
    } else {
      this.$el.find('#profileContent').html(Handlebars.templates.userNoGuild(JSON.parse(JSON.stringify(this.users.get(this.id)))))
      if (this.users.get(this.userId).get('guild_id') &&
			(this.guilds.get(this.users.get(this.userId).get('guild_id')).get('owner_id').includes(parseInt(this.userId)) ||
			this.guilds.get(this.users.get(this.userId).get('guild_id')).get('owner_id').includes(parseInt(this.officer_ids)))) {
      	this.$el.find('#sendInvitationButton').html('<button id=\"sendInvitation\">Send an Invitation to your guild</button>')
      }
      return
    }
    const context = {
      guild: JSON.parse(JSON.stringify(guild)),
      owner: undefined,
      officers: Array(),
      members: Array(),
      membersNumber: 0
    }
    // console.log(this.users.get(this.userId)
    for (let i = 1; i <= this.users.length; i++) {
      if (!this.users.get(i).get('guild_id') || this.users.get(i).get('guild_id') != guild.get('id')) {
        continue
      }
      if (i === parseInt(guild.get('owner_id')[0])) {
        context.owner = this.updateContextForlist(JSON.parse(JSON.stringify(this.users.get(i))), i)
      } else if (guild.get('officer_ids').includes(i)) {
        context.officers.push(this.updateContextForlist(JSON.parse(JSON.stringify(this.users.get(i))), i))
      } else {
        context.members.push(this.updateContextForlist(JSON.parse(JSON.stringify(this.users.get(i))), i))
      }
    }
    context.membersNumber = context.officers.length + context.members.length + 1

    this.$el.find('#profileContent').html(Handlebars.templates.profileGuild(context))
    if (this.userId === this.id) {
      this.$el.find('#manageGuildButton').html('<button id="manageGuild">Manage guild</button>')
      this.$el.find('#leaveGuildButton').html('<button id="leaveGuild">Leave guild</button>')
    }
  },

  leaveGuild: function () {
    if (this.users.get(this.userId).get('guild_id') === null) {
      return
    }
    const guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
    const leave = async () => {
      try {
      	const response = await guild.leave(this.userId)
        this.users.get(this.userId).set({ guild_id: null })
        this.$el.find('#profileContent').html(Handlebars.templates.userLoggedNoGuild(JSON.parse(JSON.stringify(this.users.get(this.userId)))))
      } catch (e) {
        console.log(e)
      }
    }
    leave()
  },

  /*
	callAlfred: async function () {
		return await $.ajax({
			url: '/api/games/',
			data: { mode: 'duel', opponent_id: '1' },
			method: 'POST',
			context: this,
			success: function (response) {
				console.log(response)
				this.game = response
				this.initializeGame()
			}
		})
	},

	challengeAlfred: function () {
		// const load = async () => {
		try {
				this.callAlfred()
		} catch (e) {
		}
		// }
		// load()
	} */
  requestDuel: async function () {
    return await $.ajax({
      url: '/api/games/',
      data: { mode: 'duel', opponent_id: this.id },
      method: 'POST',
      context: this,
      success: function (response) {
        console.log(response)
        // this.gameId = response.id
        window.location.href = `#game/${response.id}`
        // navigate to game/{{this.gameId}}
      }
    })
  },

  playUser: function () {
    // not implemented yet
    console.log('play with user')
    try {
      this.requestDuel()
    } catch (e) {
      console.log('error while requesting duel')
      // gérer dans la notif l'erreur?
      console.log(e)
    }
  },

  followUser: function (e) {
    console.log(e.target.value)
    if (e.target.value) {
      this.tid = e.target.value
    } else {
      this.tid = this.id
    }
    console.log(this.tid)
    const follow = async () => {
      try {
        const friends = this.users.get(this.userId).get('friends')
        for (let i = 0; i < friends.length; i++) {
          if (friends[i].friend_id == this.tid) {
            const response = await this.users.get(this.userId).unfollow(this.tid)
            friends.splice(friends.indexOf({ friend_id: parseInt(this.tid) }), 1)
            this.users.get(this.userId).set({ friends: friends })
            const div = document.getElementById('followUser')
            div.innerHTML = 'Follow'
            div.style.backgroundColor = 'var(--primary-color)'
            div.style.border = '0px'
            // e.target.style = ''
            return
          }
        }
        const response = await this.users.get(this.userId).follow(this.tid)
        friends.push({ friend_id: parseInt(this.tid) })
        this.users.get(this.userId).set({ friends: friends })
        const div = document.getElementById('followUser')
        div.innerHTML = 'Unfollow'
        div.style.backgroundColor = '#C4C4C4'
        div.style.border = '2px solid #606060'
        // e.target.style = 'background: #DDD7D7;border: 2px solid #606060;box-sizing: border-box;border-radius: 10px;'
      } catch (e) {
      }
    }
    follow()
  },

  sendInvitation: function () {
    if (!this.users.get(this.userId).get('guild_id') || this.id === this.userId) { return }
    const guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
    const sendInvitation = async () => {
      try {
        const response = await guild.sendInvitation(this.id)
        this.$el.find('#sendInvitationButton').html('<span>Invited</span>')
      } catch (e) {
        console.log(e)
      }
    }
    sendInvitation()
  },

  checkLadderId: function () {
    if (this.users.get(this.id).get('ladder_id') === null) {
      this.users.get(this.id).set({ ladder_id: 1 })
    }
  }
})
