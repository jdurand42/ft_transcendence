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
    'click #achievements': 'loadAchievements'
  },

  el: $('#app'),
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.ladders = this.model.get('ladders').get('obj')
    this.gameRecords = this.model.get('gameRecords').get('obj')
    this.userId = this.model.get('userLoggedId')
    if (this.id === null) {
      this.id = this.userId
    }
    this.$el.html(Handlebars.templates.profile({}))
    this.$el.find('#profileSubNavBar').html(Handlebars.templates.profileSubNavBar({}))
    this.loadMatchHistory()
    //    this.listenTo(this.guilds, 'sync', function () { this.getUsers() }, this)
  },

  loadMatchHistory: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.ladders.fetch() &&
 				await this.gameRecords.fetch()
        this.renderPannel()
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
        await this.guilds.fetch()
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
        // await this.achivements.fetch()
        this.renderPannel()
        this.achievements()
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
    this.$el.find('#profileContent').html(Handlebars.templates.friends(context))
    return this
  },

  achievements: function () {
    const context = {
      name: this.users.get(this.id).get('nickname'),
      ladder_id: this.users.get(this.id).get('ladder_id'),
      ladder_name: this.ladders.get(this.users.get(this.id).get('ladder_id')).get('name'),
      guild_id: this.users.get(this.id).get('guild_id'),
      id: this.id
    }
    this.$el.find('#profileContent').html(Handlebars.templates.achievements(context))
  },

  profileGuild: function () {
    this.$el.find('#profileContent').html(Handlebars.templates.profileGuild({}))
  }
})
