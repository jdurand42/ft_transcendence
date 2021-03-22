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
    'click #followUser': 'followUser',
    'click #playUser': 'playUser'
  },

  el: $('#app'),
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
    this.$el.find('#profileSubNavBar').html(Handlebars.templates.profileSubNavBar({}))
    this.loadMatchHistory()
  },

  loadMatchHistory: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.ladders.fetch() &&
 				await this.gameRecords.fetch()
        this.renderPannel()
        if (this.id != this.userId) {
        	this.renderProfileButtons()
        }
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
        await this.users.fetch() &&
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
	      await this.users.fetch() &&
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
    this.$el.find('#profilePannel').html(Handlebars.templates.profilePannel({}))
  },

  renderProfileButtons: function () {
    const div = this.$el.find('#profileButtons')
    div.html(Handlebars.templates.profileButtons())
    const friends = this.users.get(this.userId).get('friends')
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].friend_id == this.id) {
        document.getElementById('followUser').innerHTML = '<div>followed</div>'
      }
    }
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
    this.$el.find('#profileContent').html(Handlebars.templates.matchHistory(context))
  },

  friends: function () {
    const context = {
      guild_id: this.users.get(this.id).get('guild_id'),
      id: this.id
    }
    // console.log(this.users.get(this.id).get('friends'))
    this.$el.find('#profileContent').html(Handlebars.templates.friends(context))
    return this
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
      return
    }
    console.log(guild)
    const context = {
      guild: JSON.parse(JSON.stringify(guild)),
      owner: JSON.parse(JSON.stringify(this.users.get(guild.get('owner_id')[0]))),
      officers: Array(),
      members: Array()
    }
    for (let i = 0; i < guild.get('officer_ids').length; i++) {
      context.officers.push(JSON.parse(JSON.stringify(this.users.get(guild.get('officer_ids')[i]))))
    }

    for (let i = 0; i < guild.get('member_ids').length; i++) {
      context.officers.push(JSON.parse(JSON.stringify(this.users.get(guild.get('member_ids')[i]))))
    }
    this.$el.find('#profileContent').html(Handlebars.templates.profileGuild(context))
    if (this.userId === this.id) {
      if (this.users.get(this.userId).get('guild_id') != null) {
        this.$el.find('#manageGuildButton').html('<button><a href=\"#manage_guild\">Manage guild</a></button>')
        this.$el.find('#leaveGuildButton').html('<button id="leaveGuild">Leave guild</button>')
      }
    }
    /* if (this.userId == this.id) {
      console.log('ici')
      this.$el.find('#leaveGuildButton').html('<button id="leaveGuild">Leave guild</button>')
    } */
  },

  leaveGuild: function () {
    console.log('faire plus tard')
  /*  const leaveGuild = async () => {
      try {
        const response = await this.createRequest('/api/guilds/' + this.members/' + this.userId, 'DELETE')
        this.users.get(this.userId).set({ guild_id: null })
        this.$el.html('<p>You successfully leaved the guild</p>')
        console.log('ici')
      } catch (e) {
        console.log(e)
        this.renderError(e, '#guildGlobalError', Handlebars.templates.guildError)
      } finally {
      }
    }
    leaveGuild() */
  },

  playUser: function () {
    // not implemented yet
  },

  followUser: function () {
    // if (id === undefined) { id = this.id }
    const follow = async () => {
      try {
        const response = await $.ajax({
          url: '/api/users/' + this.id + '/friends',
          method: 'POST',
          data: { friend_id: this.id }
        })
        document.getElementById('followUser').innerHTML = '<div>followed</div>'
      } catch (e) {
        console.log(e)
      }
    }
    follow()
  }
})
