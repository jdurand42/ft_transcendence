import { Users } from '../../collections/usersCollection'
import { Wars } from '../../collections/warCollection'

export const GuildView = Backbone.View.extend({
  events: {
    'click #currentWar': 'loadCurrentWar',
    'click #lastWars': 'loadLastWars',
    'click #members': 'loadMembers',
    'click #calendar': 'loadCalendar'
  },
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.ladders = this.model.get('ladders').get('obj')
    this.userId = this.model.get('userLoggedId')
    this.$el.html(Handlebars.templates.guild({}))
    this.members = new Users()
    this.wars = new Wars()

    const fetch = async () => {
      const response1 = this.members.fetchByGuildId(this.id)
      const response2 = this.wars.fetchByGuildId(this.id)
      await response1 && await response2
      this.loadCurrentWar()
    }
    fetch()
  },
  el: $('#app'),
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
          this.$el.find('#guildContent').html(Handlebars.templates.notMemberOfAGuild({}))
          return
        }
        await this.ladders.fetch() &&
        await this.guilds.fetch()
        this.guild = this.guilds.get(this.id)
        console.log(this.guild)

        if (parseInt(this.id) > this.guilds.length || parseInt(this.id) <= 0) {
          this.$el.find('#guildContent').html(Handlebars.templates.contentNotFound({}))
          return
        }

        this.$el.find('#guildSubNavBar').html(Handlebars.templates.guildSubNavBar({}))
        this.renderPannel()

        if (this.users.get(this.userId).get('guild_id') &&
            this.guilds.get(this.id).get('id') === this.users.get(this.userId).get('guild_id')) {
          this.$el.find('#guildButton').html('<button id="manageGuildButton"><a href="#manage_guild">Manage guild</a></button>')
          this.$el.find('#calendar').html('<span class=\"subNavBarEl\">Calendar</span>')
        }
        this.currentWar()
        document.getElementById('lastWars').classList.remove('open')
        document.getElementById('members').classList.remove('open')

        const div = document.getElementById('currentWar')
        div.classList.add('open')
        this.positionSquare(div.getBoundingClientRect())
      } catch (e) {
        console.log(e)
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  positionSquare: function (offsets) {
    document.getElementById('square').style.left = offsets.left - 32
  },

  loadLastWars: function () {
    document.getElementById('currentWar').classList.remove('open')
    document.getElementById('members').classList.remove('open')

    const div = document.getElementById('lastWars')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())

    const load = async () => {
      try {
        await this.users.fetch() &&
        await this.ladders.fetch() &&
        await this.guilds.fetch()
        this.renderPannel()
        this.lastWars()
      } catch (e) {
        this.$el.find('#guildContent').html('<p>There was a problem while loading the page</p>')
      }
    }
    load()
  },

  loadMembers: function () {
    document.getElementById('currentWar').classList.remove('open')
    document.getElementById('lastWars').classList.remove('open')

    const div = document.getElementById('members')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())

    this.updateMembers()
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

  updateMembers: function () {
    const context = {
      name: this.guild.get('name'),
      id: this.id,
      anagram: this.guilds.get(this.id).get('anagram'),
      owner: undefined,
      members: [],
      officers: [],
      membersNumber: 0
    }
    for (let i = 0; i < this.members.length; i++) {
      console.log(this.members)
      const member = this.members.at(i)

      context.members.push(this.updateContextForlist(JSON.parse(JSON.stringify(member)), i))

      if (this.guild.get('owner_id')[0] === member.get('id')) {
        context.members[i].member = 'Owner'
      } else if (this.guild.get('officer_ids').some(el => el === member.get('id')) === true) {
        context.members[i].member = 'Officer'
      } else {
        context.members[i].member = 'Member'
      }
    }

    context.membersNumber = this.members.length
    this.$el.find('#guildcontent').html(Handlebars.templates.guildMembers(context))
    return this
  },

  renderPannel: function () {
    const context = JSON.parse(JSON.stringify(this.guilds.get(this.id)))
    context.totalWars = 0
    context.warsWon = 0
    console.log(this.wars)
    for (let i = 0; i < this.wars.length; i++) {
      const war = this.wars.at(i)
      if (war.get('closed') === true) {
        context.totalWars += 1
        if ((war.get('from_id') === this.id &&
            war.get('from_score') > war.get('on_score')) ||
            (war.get('on_id') === this.id &&
            war.get('on_score') > war.get('from_score'))) {
          context.warsWon += 1
        }
      }
    }

    this.$el.find('#guildPannel').html(Handlebars.templates.guildPannel(context))
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
