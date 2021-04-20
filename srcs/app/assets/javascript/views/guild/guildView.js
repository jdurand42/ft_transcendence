import { Users } from '../../collections/usersCollection'
import { Wars } from '../../collections/warCollection'
import { WarTimes } from '../../collections/warTimesCollection'
import { User } from '../../models/userModel'

export const GuildView = Backbone.View.extend({
  events: {
    'click #currentWar': 'loadCurrentWar',
    'click #lastWars': 'loadLastWars',
    'click #members': 'loadMembers',
    'click #calendarWar': 'loadCalendar',
    'click .war-informations-container': 'displayWarInformations',
    'click .scores-last-wars': 'openLastWar'
  },
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.ladders = this.model.get('ladders').get('obj')
    this.userId = this.model.get('userLoggedId')
    this.members = new Users()
    this.wars = new Wars()
    this.userLogged = new User()
    this.currentWar = undefined
    this.currentWarTimes = undefined
    this.lastWars = new Wars()
    this.lastWarsTimes = []
    this.calendar = new Wars()

    const fetch = async () => {
      const response1 = this.members.fetchByGuildId(this.id)
      const response2 = this.wars.fetchByGuildId(this.id)
      const response4 = this.ladders.fetch()
      const response5 = this.guilds.fetch()
      const response6 = this.userLogged.fetchUser(this.userId)
      await response2 && await response5 && await response6

      for (let i = 0; i < this.wars.length; i++) {
        if (this.wars.at(i).get('opened') === true) {
          this.currentWar = this.wars.at(i)
          this.currentWar = new WarTimes(this.wars.at(i).get('id'))
          await this.currentWarTimes.fetch()
        }
        if (this.wars.at(i).get('closed') === false) { // TEST METTRE == TRUE
          this.lastWarsTimes.push(new WarTimes(this.wars.at(i).get('id')))
          this.lastWarsTimes[this.lastWarsTimes.length - 1].fetch()
          this.lastWars.add(this.wars.at(i))
        }
        console.log(this.wars.at(i))
        if (this.wars.at(i).get('closed') === false &&
            this.wars.at(i).get('opened') === false) {
          this.calendar.add(this.wars.at(i))
        }
      }
      if (this.wars.length > 0) { // TEST
        this.currentWar = this.wars.at(0) // TEST
      }
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
    const context = {}
    this.guild = this.guilds.get(this.id)
    if (this.id === null || this.id === undefined) {
      this.id = this.users.get(this.userId).get('guild_id')
    }
    context.manage = true // TEST TO REMOVE
    if (this.guild.get('id') === this.userLogged.get('guild_id')) {
      context.manage = true
    } else if (this.userLogged.get('guild_id') !== undefined) {
      context.fromId = this.userLogged.get('guild_id')
      context.onId = this.id
      context.declareWar = true
    }
    this.$el.html(Handlebars.templates.guild(context))

    if (parseInt(this.id) > this.guilds.length || parseInt(this.id) <= 0) {
      this.$el.find('#guildContent').html(Handlebars.templates.contentNotFound({}))
      return
    }
    this.$el.find('#guildSubNavBar').html(Handlebars.templates.guildSubNavBar(context))
    this.renderPannel()
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
    try {
      document.getElementById('lastWars').classList.remove('open')
      document.getElementById('members').classList.remove('open')
      document.getElementById('calendarWar').classList.remove('open')
    } catch (e) {}

    const div = document.getElementById('currentWar')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())
    this.displayCurrentWar()
  },

  positionSquare: function (offsets) {
    document.getElementById('square').style.left = offsets.left - 24
  },

  loadLastWars: function () {
    try {
      document.getElementById('currentWar').classList.remove('open')
      document.getElementById('members').classList.remove('open')
      document.getElementById('calendarWar').classList.remove('open')
    } catch (e) {}

    const div = document.getElementById('lastWars')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())

    this.displayLastWars()
  },

  loadMembers: function () {
    try {
      document.getElementById('currentWar').classList.remove('open')
      document.getElementById('lastWars').classList.remove('open')
      document.getElementById('calendarWar').classList.remove('open')
    } catch (e) {}

    const div = document.getElementById('members')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())

    this.updateMembers()
  },

  loadCalendar: function () {
    document.getElementById('currentWar').classList.remove('open')
    document.getElementById('lastWars').classList.remove('open')
    document.getElementById('members').classList.remove('open')

    const div = document.getElementById('calendarWar')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())
    this.displayCalendar()
  },

  updateContextCurrentWar: function (context, war, index) {
    const fromGuild = this.guilds.get(war.get('from_id'))
    const onGuild = this.guilds.get(war.get('on_id'))
    context.index = index
    context.id = war.get('id')
    context.fromName = fromGuild.get('name')
    context.onName = onGuild.get('name')
    context.fromScore = war.get('from_score')
    context.onScore = war.get('on_score')
    context.prize = war.get('prize')
    const warStart = new Date(war.get('war_start'))
    index = warStart.toString().indexOf('GMT')
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
      this.updateContextCurrentWar(context, this.currentWar, 0)
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
      this.updateContextCurrentWar(context.wars[i], this.lastWars.at(i), i)
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

  isProposal: function (war) {
    if (war.get('from_id') == this.id &&
        war.get('from_agreement') === false) {
      return true
    }
    if (war.get('on_id') == this.id &&
        war.get('on_agreement') === false) {
      return true
    }
  },

  displayCalendar: function () {
    const context = {}
    if (this.calendar.length > 0) {
      context.war = true

      context.wars = []
      for (let i = 0; i < this.calendar.length; i++) {
        context.wars.push({})
        this.updateContextCurrentWar(context.wars[i], this.calendar.at(i), i)
        context.wars[i].proposal = this.isProposal(this.calendar.at(i))
      }
    } else {
      context.war = false
    }

    this.$el.find('#guildcontent').html(Handlebars.templates.calendar(context))

    if (this.calendar.length > 0) {
      let div = document.getElementById('validation-container-0').getBoundingClientRect()
      const center1X = div.left + div.width / 2
      const center1Y = div.top + div.height / 2
      div = document.getElementById('validation-container-' + (this.calendar.length - 1)).getBoundingClientRect()
      const center2X = div.left + div.width / 2
      const center2Y = div.top + div.height / 2

      console.log(center1X)
      console.log(center1Y)
      console.log(center2X)
      console.log(center2Y)

      const line = document.getElementById('line')
      console.log(line)
      line.style.top = center1Y
      line.style.left = center1X
      line.style.height = center2Y - center1Y
    }

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
