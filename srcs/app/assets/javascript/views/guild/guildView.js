export const GuildView = Backbone.View.extend({
  events: {
    'click #currentWar': 'loadCurrentWar',
    'click #lastWars': 'loadLastWars',
    'click #members': 'loadMembers',
    'click #calendar': 'loadCalendar'
  },
  el: $('#app'),
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.ladders = this.model.get('ladders').get('obj')
    this.userId = this.model.get('userLoggedId')
    this.$el.html(Handlebars.templates.guild({}))
    this.$el.find('#guildSubNavBar').html(Handlebars.templates.guildSubNavBar({}))
    this.loadCurrentWar()
  },

  loadCurrentWar: function () {
    const load = async () => {
      try {
        await this.users.fetch()
        if (this.id === null || this.id === undefined) {
          console.log(this.userId)
	        this.id = this.users.get(this.userId).get('guild_id')
          console.log(this.id)
        }
	      if (this.id === null || this.id === undefined) {
          this.$el.find('#guildContent').html('<p>It seems you aren\'t member of a guild</p>')
          return
	      }
        await this.ladders.fetch() &&
        await this.guilds.fetch()
        this.renderPannel()
        if (this.users.get(this.userId).get('guild_id') &&
				this.guilds.get(this.id).get('id') === this.users.get(this.userId).get('guild_id')) {
          this.$el.find('#guildButton').html('<button id="manageGuildButton"><a href="#manage_guild">Manage guild</a></button>')
          this.$el.find('#calendar').html('<span class=\"subNavBarEl\">Calendar</span>')
        }
        this.currentWar()
      } catch (e) {
        console.log(e)
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadLastWars: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.ladders.fetch() &&
        await this.guilds.fetch()
        this.renderPannel()
        this.lastWars()
      } catch (e) {
        console.log(e)
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadMembers: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.ladders.fetch() &&
        await this.guilds.fetch() &&
        this.renderPannel()
        this.members()
      } catch (e) {
        console.log(e)
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadCalendar: function () {
    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.ladders.fetch() &&
        await this.guilds.fetch() &&
        this.renderPannel()
        this.calendar()
      } catch (e) {
        console.log(e)
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  currentWar: function () {
    const context = JSON.parse(JSON.stringify(this.guilds.get(this.id)))
    this.$el.find('#guildcontent').html(Handlebars.templates.currentWar(context))
    return this
  },

  lastWars: function () {
    const context = JSON.parse(JSON.stringify(this.guilds.get(this.id)))
    this.$el.find('#guildcontent').html(Handlebars.templates.lastWars(context))

    return this
  },

  members: function () {
    const guild = this.guilds.get(this.id)

    const context = {
      name: this.guilds.get(this.id).get('name'),
      id: this.id,
      anagram: this.guilds.get(this.id).get('anagram'),
      owner: undefined,
      members: Array(),
      officers: Array(),
      membersNumber: 0
    }
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

    context.membersNumber = context.members.length + context.officers.length + 1
    this.$el.find('#guildcontent').html(Handlebars.templates.guildMembers(context))
    return this
  },

  renderPannel: function () {
    this.$el.find('#guildPannel').html(Handlebars.templates.guildPannel({}))
  },

  calendar: function () {
    const context = JSON.parse(JSON.stringify(this.guilds.get(this.id)))
    this.$el.find('#guildcontent').html(Handlebars.templates.calendar(context))
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
  }
})
