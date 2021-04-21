import { Users } from '../../collections/usersCollection'
import { Wars } from '../../collections/warCollection'
import { WarTimes } from '../../collections/warTimesCollection'
import { User } from '../../models/userModel'

export const GuildView = Backbone.View.extend({
  events: {
    'click #currentWar': 'loadCurrentWar',
    'click #lastWars': 'loadLastWars',
    'click #members': 'loadMembers',
    'click #calendar': 'loadCalendar',
    'click .war-informations-container': 'displayWarInformations',
    'click .scores-last-wars': 'openLastWar'
  },
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.ladders = this.model.get('ladders').get('obj')
    this.userId = this.model.get('userLoggedId')
    this.$el.html(Handlebars.templates.guild({}))
    this.members = new Users()
    this.wars = new Wars()
    this.userLogged = new User()
    this.currentWar = undefined
    this.currentWarTimes = undefined
    this.lastWars = new Wars()
    this.lastWarsTimes = []

    const fetch = async () => {
      // sécurité et séléction pour #guild/
      await this.users.fetch() &&
			await this.guilds.fetch()
      if (this.id === null || this.id === undefined) {
        this.id = this.users.get(this.userId).get('guild_id')
      }
      if (parseInt(this.id) > this.guilds.length || parseInt(this.id) <= 0 || this.id === null) {
        this.$el.find('#guildContent').html(Handlebars.templates.contentNotFound({}))
        return
      }
      this.guild = this.guilds.get(this.id)

      const response1 = this.members.fetchByGuildId(this.id)
      const response2 = this.wars.fetchByGuildId(this.id)
      const response4 = this.ladders.fetch()
      const response6 = this.userLogged.fetchUser(this.userId)
      await response2 && await response6

      console.log(this.wars)

      for (let i = 0; i < this.wars.length; i++) {
        if (this.wars.at(i).get('opened') === true) {
          this.currentWar = this.wars.at(i)
          this.currentWar = new WarTimes(this.wars.at(i).get('id'))
          // await this.currentWarTimes.fetch()
        }
        if (this.wars.at(i).get('closed') === false) { // TEST METTRE == TRUE
          this.lastWarsTimes.push(new WarTimes(this.wars.at(i).get('id')))
          this.lastWarsTimes[this.lastWarsTimes.length - 1].fetch()
          this.lastWars.add(this.wars.at(i))
        }
      }
      this.currentWar = this.wars.at(0) // TEST
      console.log(this.currentWar.get('id'))
      console.log(this.currentWar.get('id'))
      try {
        if (this.currentWar !== undefined) {
          this.currentWarTimes = new WarTimes(this.currentWar.get('id')) // TEST
        }

        await this.currentWarTimes.fetch() // TEST
      } catch (e) {
        console.log('404 war times to do back')
      }

      console.log(this.currentWarTimes)
      console.log(this.lastWarsTimes)

      this.render()
      // this.loadCurrentWar()
    }
    fetch()
  },
  el: $('#app'),
  render: function () {
    this.$el.find('#guildSubNavBar').html(Handlebars.templates.guildSubNavBar({}))
    this.renderPannel()
    if (this.guild.get('id') === this.userLogged.get('guild_id')) {
      this.$el.find('#guildButton').html('<button id="manageGuildButton"><a href="#manage_guild">Manage guild</a></button>')
      this.$el.find('#calendar').html('<div class=\"subNavBarEl\">Calendar</div>')
    }
    this.loadCurrentWar()
    return this
  },

  openLastWar: function (e) {
    const id = Number(e.currentTarget.getAttribute('for'))
    const div = document.getElementById('war-informations-' + id)
    if (div.style.display === 'none') {
      div.style.display = 'flex'
    } else {
      div.style.display = 'none'
    }
  },

  displayWarInformations: function () {
    const div = document.getElementById('war-infos')
    if (div.style.display === 'none') {
      div.style.display = 'flex'
      document.getElementById('arrow-icon').style.transform = 'rotate(-180deg)'
    } else {
      div.style.display = 'none'
      document.getElementById('arrow-icon').style.transform = 'rotate(0deg)'
    }
  },

  loadCurrentWar: function () {
    document.getElementById('lastWars').classList.remove('open')
    document.getElementById('members').classList.remove('open')

    const div = document.getElementById('currentWar')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())
    this.displayCurrentWar()
  },

  positionSquare: function (offsets) {
    document.getElementById('square').style.left = offsets.left - 24
  },

  loadLastWars: function () {
    document.getElementById('currentWar').classList.remove('open')
    document.getElementById('members').classList.remove('open')

    const div = document.getElementById('lastWars')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())

    this.displayLastWars()
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
    this.calendar()
  },

  updateContextCurrentWar: function (context, war) {
    const fromGuild = this.guilds.get(war.get('from_id'))
    const onGuild = this.guilds.get(war.get('on_id'))
    context.id = war.get('id')
    context.fromName = fromGuild.get('name')
    context.onName = onGuild.get('name')
    context.fromScore = war.get('from_score')
    context.onScore = war.get('on_score')
    context.prize = war.get('prize')
    const warStart = new Date(war.get('war_start'))
    let index = warStart.toString().indexOf('GMT')
    context.warStart = warStart.toString().substr(0, index)

    const warEnd = new Date(war.get('war_end'))
    index = warEnd.toString().indexOf('GMT')
    context.warEnd = warEnd.toString().substr(0, index)
    if (war.get('tournament_effort') === true) {
      context.tournamentsIcon = './icons/check_circle-yellow.svg'
    } else {
      context.tournamentsIcon = './icons/highlight_off.svg'
    }
    if (war.get('ladder_effort') === true) {
      context.ladderIcon = './icons/check_circle-yellow.svg'
    } else {
      context.ladderIcon = './icons/highlight_off.svg'
    }
    context.warTime = []
  },

  displayCurrentWar: function () {
    const context = {}
    if (this.currentWar === undefined) {
      context.war = false
    } else {
      context.war = true
      this.updateContextCurrentWar(context, this.currentWar)
    }
    this.$el.find('#guildcontent').html(Handlebars.templates.currentWar(context))
    if (Number(context.fromScore) > Number(context.onScore)) {
      document.getElementById('from-score').classList.add('winner')
    } else if (Number(context.fromScore) < Number(context.onScore)) {
      document.getElementById('on-score').classList.add('winner')
    }
    return this
  },

  displayLastWars: function () {
    const context = {}
    if (this.lastWars.length > 0) {
      context.war = true
    } else {
      context.war = false
    }

    context.wars = []
    for (let i = 0; i < this.lastWars.length; i++) {
      context.wars.push({})
      this.updateContextCurrentWar(context.wars[i], this.lastWars.at(i))
    }

    this.$el.find('#guildcontent').html(Handlebars.templates.lastWars(context))

    for (let i = 0; i < context.wars.length; i++) {
      if (Number(context.wars[i].fromScore) > Number(context.wars[i].onScore)) {
        document.getElementById('from-score-' + context.wars[i].id).classList.add('winner')
      } else if (Number(context.wars[i].fromScore) < Number(context.wars[i].onScore)) {
        document.getElementById('on-score-' + context.wars[i].id).classList.add('winner')
      }
    }

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
    user.follow = this.userLogged.get('friends').some(el => el.friend_id === user.id)
    if (user.guild_id) {
      user.guildName = this.guilds.get(user.guild_id).get('name')
    }
    return user
  }
})
