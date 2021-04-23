/* eslint-disable eqeqeq */
import { Users } from '../../collections/usersCollection'
import { Wars } from '../../collections/warCollection'
import { WarTimes } from '../../collections/warTimesCollection'
import { GameRecords } from '../../collections/gameRecords'
import { Guild } from '../../models/guildModel'
import { User } from '../../models/userModel'
import { WarTime } from '../../models/warTimesModel'

export const GuildView = Backbone.View.extend({
  events: {
    'click #currentWar': 'loadCurrentWar',
    'click #lastWars': 'loadLastWars',
    'click #members': 'loadMembers',
    'click #calendarWar': 'loadCalendar',
    'click .war-informations-container': 'displayWarInformations',
    'click .scores-last-wars': 'openLastWar',
    'mouseover .validation-container': 'displayExplanation',
    'click .accept-button': 'acceptWar',
    'click .refuse-button': 'refuseWar',
    'click .negociate-button': 'negociateWar'
  },
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.userLogged = new User()
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
    this.calendarWarTimes = []
    this.timer = []
    this.guild = undefined

    this.currentGames = []
    this.lastWarsGames = []
    // TO DO: AMELIORER LE TEMPS DE CHARGEMENT, DES CHOSES PEUVENT ENCORE ETRE FAITES

    // ce bloc est obligatoire pour la route /#guild/ et les checks pour #guild/id_ivalide et #guild/nimporte_quoi
    this.$el.html(Handlebars.templates.guild())
    const fetch = async () => {
      // sécurité et séléction pour #guild/
      this.users.fetch()
      const response3 = this.guilds.fetch()
      try {
        await this.userLogged.fetchUser(this.userId) // Pour améliorer le temps de chargement de la page fetch plutôt un user que attendre toute la collection
        if (this.id === null || this.id === undefined) {
          this.id = this.userLogged.get('guild_id')
        }
        this.guild = new Guild({ id: this.id })
        await this.guild.fetch() // Améliore la rapidité du chargement par un fetch d'une seule guilde
      } catch (e) {
        this.$el.find('#guildContent').html(Handlebars.templates.contentNotFound({}))
        return
      }
      // this.guild = this.guilds.get(this.id)

      const response1 = this.members.fetchByGuildId(this.id)
      const response2 = this.wars.fetchByGuildId(this.id)
      const response4 = this.ladders.fetch()
      // const response6 = this.userLogged.fetchUser(this.userId)
      await response2

      for (let i = 0; i < this.wars.length; i++) {
        if (this.wars.at(i).get('opened') === true) {
          this.currentWar = this.wars.at(i)
          this.currentWarTimes = new WarTimes(this.wars.at(i).get('id'))
          try {
            await this.currentWarTimes.fetch()
          } catch (e) {
            console.log(e)
          }
        }
        if (this.wars.at(i).get('closed') === true) {
          this.lastWarsTimes.push(new WarTimes(this.wars.at(i).get('id')))
          await this.lastWarsTimes[this.lastWarsTimes.length - 1].fetch()
          this.lastWars.add(this.wars.at(i))
          this.initializeLastWarsGames(this.wars.at(i), this.lastWarsTimes[this.lastWarsTimes.length - 1])
        }
        if (this.wars.at(i).get('closed') === false &&
            this.wars.at(i).get('opened') === false) {
          this.calendarWarTimes.push(new WarTimes(this.wars.at(i).get('id')))
          this.calendarWarTimes[this.calendarWarTimes.length - 1].fetch()
          this.calendar.add(this.wars.at(i))
        }
      }

      await response3

      this.render()
    }
    fetch()
  },
  el: $('#app'),
  render: function () {
    const context = {}
    // if (this.id === null || this.id === undefined) {
    //   this.id = this.users.get(this.userId).get('guild_id')
    // }
    // this.guild = this.guilds.get(this.id)
    this.userLoggedGuild = undefined

    if (this.userLogged.get('guild_id') !== undefined) {
      this.userLoggedGuild = this.guilds.get(this.userLogged.get('guild_id'))
    }

    if (this.id === null || this.id === undefined) {
      this.id = this.users.get(this.userId).get('guild_id')
    }
    if ((this.guild.get('id') === this.userLogged.get('guild_id')) &&
      (this.userLoggedGuild.get('owner_id')[0] === this.userLogged.get('id') ||
      this.userLoggedGuild.get('officer_ids').some(el => el === this.userLogged.get('id')) === true)) {
      context.manage = true
    } else if ((this.userLoggedGuild !== undefined) &&
                (this.userLoggedGuild.get('owner_id')[0] === this.userLogged.get('id') ||
                this.userLoggedGuild.get('officer_ids').some(el => el === this.userLogged.get('id')) === true)) {
      context.fromId = this.userLogged.get('guild_id')
      context.onId = this.id
      context.declareWar = true
    }
    this.$el.html(Handlebars.templates.guild(context))

    // if (parseInt(this.id) > this.guilds.length || parseInt(this.id) <= 0) {
    //   this.$el.find('#guildContent').html(Handlebars.templates.contentNotFound({}))
    //   return
    // }
    this.$el.find('#guildSubNavBar').html(Handlebars.templates.guildSubNavBar(context))
    this.renderPannel()
    this.loadCurrentWar()
    return this
  },

  initializeLastWarsGames: function (war, warTimes) {
    this.lastWarsGames.push(new GameRecords())
    console.log(war)
    console.log(warTimes)
    console.log(warTimes.get('id'))
    this.warTimesGames = []
    for (let i = 0; i < warTimes.length; i++) {
      const warTime = warTimes.at(i)
      const warTimeId = WarTime.get('id')
      const games =
      this.warTimesGames.push({
        key: warTimeId,
        value: games
      })
    }
  },

  acceptWar: function (e) {
    const war = this.calendar.get(e.currentTarget.getAttribute('for'))
    war.acceptRefuseWar(true)
  },

  refuseWar: function (e) {
    const war = this.calendar.get(e.currentTarget.getAttribute('for'))
    war.acceptRefuseWar(false)
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

  initializeTimer: function (date, div) {
    const countDownDate = date.getTime()
    this.timer.push(setInterval(function () {
      const now = new Date().getTime()
      const distance = countDownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const secondes = Math.floor((distance % (1000 * 60)) / 1000)

      if (!(days < 0 && hours < 0 && minutes < 0 && secondes < 0)) {
        try {
          document.getElementById(div).innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + secondes + 's'
        } catch (e) {}
      }
      if (distance < 0) {
        clearInterval(this)

        // window.location.reload()
      }
    }, 1000))
  },

  loadCurrentWar: function () {
    this.destroy()
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
    this.destroy()
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
    this.destroy()
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

  loadCalendar: function (e) {
    this.destroy()
    document.getElementById('currentWar').classList.remove('open')
    document.getElementById('lastWars').classList.remove('open')
    document.getElementById('members').classList.remove('open')

    const div = document.getElementById('calendarWar')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())
    this.displayCalendar(e)
  },

  updateContextCurrentWar: function (context, war, warTimes, index) {
    const fromGuild = this.guilds.get(war.get('from_id'))
    const onGuild = this.guilds.get(war.get('on_id'))
    context.index = index
    context.id = war.get('id')
    context.fromId = war.get('from_id')
    context.fromName = fromGuild.get('name')
    context.onId = war.get('on_id')
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
    if (warTimes !== undefined) {
      for (let i = 0; i < warTimes.length; i++) {
        context.warTime.push({
          startDay: warTimes.at(i).get('day').charAt(0).toUpperCase() + warTimes.at(i).get('day').slice(1, 3),
          startHour: warTimes.at(i).get('start_hour'),
          endHour: warTimes.at(i).get('end_hour'),
          maxUnanswered: warTimes.at(i).get('max_unanswered'),
          tta: warTimes.at(i).get('time_to_answer')
        })
      }
    }
  },

  displayCurrentWar: function () {
    const context = {}
    if (this.currentWar === undefined) {
      context.war = false
    } else {
      context.war = true

      this.updateContextCurrentWar(context, this.currentWar, this.currentWarTimes, 0)
    }

    this.$el.find('#guildcontent').html(Handlebars.templates.currentWar(context))

    if (Number(context.fromScore) > Number(context.onScore)) {
      document.getElementById('from-score').classList.add('winner')
    } else if (Number(context.fromScore) < Number(context.onScore)) {
      document.getElementById('on-score').classList.add('winner')
    }

    try {
      this.initializeTimer(new Date(this.currentWar.get('war_end')), 'war-timer')
    } catch (e) {}

    const dates = []
    for (let i = 0; i < this.currentWarTimes.length; i++) {
      const date = new Date()
      date.setDate(date.getDate() + (this.getDay(this.currentWarTimes.at(i).get('day')) + 7 - date.getDay()) % 7)
      date.setHours(this.currentWarTimes.at(i).get('start_hour'))
      const now = new Date()
      now.setDate(now.getDate() + 7)
      // We are in war time
      if (date < now) {
        document.getElementById('next-war-time-in-title').style.display = 'none'

        this.countMatchesUnansewered()

        document.getElementById('accept-random-fight').innerHTML = 'Challenge'
        document.getElementById('accept-random-fight').style.backgroundColor = 'var(--primary-color);'
        document.getElementById('accept-random-fight').style.cursor = 'pointer'

        this.initializeWarTimesGames()

        return this
      }

      dates.push(date)
      dates.sort()
      this.initializeTimer(dates[0], 'next-war-time-in')

      document.getElementById('accept-random-fight').innerHTML = 'Challenge'
      document.getElementById('accept-random-fight').style.backgroundColor = '#C4C4C4'
      document.getElementById('accept-random-fight').style.cursor = 'auto'
    }
    return this
  },

  countMatchesUnansewered: function () {
    // TO DO
  },

  initializeWarTimesGames: function () {

  },

  getDay: function (date) {
    switch (date) {
      case 'sunday':
        return 0
      case 'monday':
        return 1
      case 'tuesday':
        return 2
      case 'wednesday':
        return 3
      case 'thursday':
        return 4
      case 'friday':
        return 5
      case 'saturday':
        return 6
    }
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

      this.updateContextCurrentWar(context.wars[i], this.lastWars.at(i), this.lastWarsTimes[i], i)
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
      members: [],
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
    for (let i = 0; i < this.wars.length; i++) {
      const war = this.wars.at(i)
      if (war.get('closed') === true) {
        context.totalWars += 1
        if ((war.get('from_id') == this.id &&
            war.get('from_score') > war.get('on_score')) ||
            (war.get('on_id') == this.id &&
            war.get('on_score') > war.get('from_score'))) {
          context.warsWon += 1
        }
      }
    }

    this.$el.find('#guildPannel').html(Handlebars.templates.guildPannel(context))
  },

  isProposal: function (context, war) {
    console.log(war)
    if ((war.get('from_id') == this.id &&
        war.get('from_agreement') === false) ||
        (war.get('on_id') == this.id &&
        war.get('on_agreement') === false)) {
      if (this.guild.get('owner_id')[0] == this.userId ||
              this.guild.get('officer_ids').some(el => el == this.userId) === true) {
        context.proposal = true
      } else {
        context.proposal = false
      }
      context.icon = './icons/question.svg'
      context.explanation = 'The other guild is waiting your approval'
    } else if ((war.get('from_id') != this.id &&
    war.get('from_agreement') === false) ||
    (war.get('on_id') != this.id &&
    war.get('on_agreement') === false)) {
      context.proposal = false
      context.icon = './icons/hourglass.svg'
      context.explanation = 'Awaiting approval from the other guild'
    } else {
      context.proposal = false
      context.icon = './icons/check_circle-yellow.svg'
      context.explanation = 'The war will start soon'
    }
  },

  displayCalendar: function (e) {
    const context = {}
    if (this.calendar.length > 0) {
      context.war = true

      context.wars = []
      for (let i = 0; i < this.calendar.length; i++) {
        context.wars.push({})

        if (this.calendarWarTimes[i].at(0).attributes.day === undefined) {
          this.updateContextCurrentWar(context.wars[i], this.calendar.at(i), undefined, i)
        } else {
          this.updateContextCurrentWar(context.wars[i], this.calendar.at(i), this.calendarWarTimes[i], i)
        }
        this.isProposal(context.wars[i], this.calendar.at(i))
      }
    } else {
      context.war = false
    }

    this.$el.find('#guildcontent').html(Handlebars.templates.calendar(context))

    // line
    if (this.calendar.length > 0) {
      e.currentTarget = document.getElementById('validation-container-0')
      const div1 = e.currentTarget
      const center1X = div1.clientLeft + div1.clientWidth / 2
      const center1Y = div1.clientTop + div1.clientHeight / 2
      e.currentTarget = document.getElementById('validation-container-' + (this.calendar.length - 1))
      const div2 = e.currentTarget
      const height = div2.offsetTop - div1.offsetTop
      const line = document.getElementById('line')
      line.style.top = center1Y
      line.style.left = center1X
      line.style.height = height
    }

    return this
  },

  displayExplanation: function (e) {
    const index = e.currentTarget.getAttribute('for')
    const explanation = document.getElementById('explanation-' + index)
    explanation.style.top = e.pageY
    explanation.style.left = e.pageX
  },

  updateContextForlist: function (user, i) {
    user.trophy = 'icons/' + this.ladders.get(user.ladder_id).get('name').toLowerCase() + '.svg'
    user.rank = i + 1
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
  },

  destroy: function () {
    for (let i = 0; i < this.timer.length; i++) {
      clearInterval(this.timer[i])
    }
  }
})
