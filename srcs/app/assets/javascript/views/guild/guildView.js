/* eslint-disable eqeqeq */
import { Users } from '../../collections/usersCollection'
import { Wars } from '../../collections/warCollection'
import { WarTimes } from '../../collections/warTimesCollection'
import { GameRecords } from '../../collections/gameRecords'
import { Guild } from '../../models/guildModel'
import { User } from '../../models/userModel'
import { WarTime } from '../../models/warTimesModel'
import { GameRecord } from '../../models/gameRecord'

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
    'click .negociate-button': 'negociateWar',
    'click .accept-random-fight': 'acceptRandomFight'
  },
  initialize: function () {
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.userLogged = new User()
    this.ladders = this.model.get('ladders').get('obj')
    this.socket = this.model.get('socket').get('obj')
    this.notifView = this.model.get('notifView').get('obj')
    this.userId = Number(this.model.get('userLoggedId'))
    this.router = this.model.get('router')
    this.members = new Users()
    this.wars = new Wars()
    this.userLogged = new User()
    this.currentWar = new Wars()
    this.currentWarTimes = []
    this.lastWars = new Wars()
    this.lastWarsTimes = []
    this.calendar = new Wars()
    this.calendarWarTimes = []
    this.timer = []
    this.guild = undefined
    this.warTimeId = undefined

    this.currentGames = []
    this.lastWarsGames = []

    this.socket.updateContext(this, this.notifView)

    // ce bloc est obligatoire pour la route /#guild/ et les checks pour #guild/id_ivalide et #guild/nimporte_quoi
    this.$el.html(Handlebars.templates.guild())
    const fetch = async () => {
      // sécurité et séléction pour #guild/
      const response9 = this.users.fetch()
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

      const response2 = this.wars.fetchByGuildId(this.id)
      const response1 = this.members.fetchByGuildId(this.id)
      const response4 = this.ladders.fetch()
      await response2

      for (let i = 0; i < this.wars.length; i++) {
        // GET CURRENT WAR
        if (this.wars.at(i).get('opened') === true) {
          this.currentWarTimes.push(new WarTimes(this.wars.at(i).get('id')))
          await this.currentWarTimes[this.currentWarTimes.length - 1].fetch()
          this.currentWar.add(this.wars.at(i))
          await this.initializeLastWarsGames(this.wars.at(i), this.currentWarTimes[this.currentWarTimes.length - 1], this.currentGames)
        }
        // GET LAST WARS -> LOAD ONE TIME ON CLICK ON LAST WARS
        // GET CALENDAR WARS
        if (this.wars.at(i).get('closed') === false &&
            this.wars.at(i).get('opened') === false) {
          this.calendarWarTimes.push(new WarTimes(this.wars.at(i).get('id')))
          this.calendarWarTimes[this.calendarWarTimes.length - 1].fetch()
          this.calendar.add(this.wars.at(i))
        }
      }

      await response3 && await response1 && await response9

      this.render()
    }
    fetch()
  },
  el: $('#app'),
  render: function () {
    const context = {}

    this.userLoggedGuild = undefined

    if (this.userLogged.get('guild_id') !== undefined) {
      this.userLoggedGuild = this.guilds.get(this.userLogged.get('guild_id'))
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
    if (this.userLogged.get('admin')) {
      context.admin = true
      context.guildId = this.id
    }
    this.$el.html(Handlebars.templates.guild(context))

    this.$el.find('#guildSubNavBar').html(Handlebars.templates.guildSubNavBar(context))
    this.renderPannel()
    this.loadCurrentWar()
    return this
  },

  initializeLastWarsGames: async function (war, warTimes, lastWarsGames) {
    const warId = war.get('id')
    const allGamesOfWar = []
    for (let i = 0; i < warTimes.length; i++) {
      const warTime = warTimes.at(i)
      const warTimeId = warTime.get('id')
      const games = new GameRecords()
      await games.fetchByWarTimeId(warTimeId)
      for (let i = 0; i < games.length; i++) {
        let games2 = new GameRecords()
        games2 = games.at(i)
        allGamesOfWar.push({
          warTimeId: warTimeId,
          games: games2
        })
      }
    }
    lastWarsGames.push({
      warId: warId,
      games: allGamesOfWar
    })
  },

  acceptRandomFight: function (e) {
    const challenge = e.currentTarget.innerHTML

    const randomFight = async () => {
      try {
        if (challenge === 'Challenge') {
          const game = new GameRecord()
          await game.randomFight()
          try {
            document.getElementById('error-message').style.display = 'none'
          } catch (e) {}
        } else if (challenge === 'Accept') {
          this.router.navigate('game/' + challenge.getAttribute('for'), { trigger: true })
        }
      } catch (error) {
        document.getElementById('error-message').innerHTML = error.responseJSON.errors
        document.getElementById('error-message').style.display = 'block'
        document.getElementById('error-message').style.color = 'var(--error-message-color)'
      }
    }
    randomFight()
  },

  acceptWar: async function (e) {
    const war = this.calendar.get(e.currentTarget.getAttribute('for'))
    try {
      war.acceptRefuseWar('true')

      if (this.guild.get('id') === war.get('from_id')) {
        war.set({ from_agreement: true })
      } else {
        war.set({ on_agreement: true })
      }
      this.displayCalendar()
    } catch (e) {
      alert(e.responseJSON.message)
    }
  },

  refuseWar: function (e) {
    const war = this.calendar.get(e.currentTarget.getAttribute('for'))
    war.acceptRefuseWar('false')
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

  initializeTimerTTA: function (createdAt, tta) {
    const date = new Date(createdAt)
    date.setSeconds(date.getSeconds() + tta)
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
          document.getElementById('war-time-timer').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + secondes + 's'
        } catch (e) {}
      }
      if (distance < 0) {
        clearInterval(this)
        try {
          document.getElementById('accept-random-fight').innerHTML = 'Challenge'
          document.getElementById('random-fight-title').innerHTML = 'No random fight pending'
          document.getElementById('random-fight-title').style.cursor = 'pointer'
          document.getElementById('accept-random-fight').style.backgroundColor = 'var(--primary-color)'
        } catch (e) {}
      }
    }, 1000))
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

    const fetch = async () => {
      if (this.lastWars.length === 0) {
        for (let i = 0; i < this.wars.length; i++) {
          if (this.wars.at(i).get('closed') === true) {
            this.lastWarsTimes.push(new WarTimes(this.wars.at(i).get('id')))
            await this.lastWarsTimes[this.lastWarsTimes.length - 1].fetch()
            this.lastWars.add(this.wars.at(i))
            await this.initializeLastWarsGames(this.wars.at(i), this.lastWarsTimes[this.lastWarsTimes.length - 1], this.lastWarsGames)
          }
        }
      }
      this.displayLastWars()
    }
    fetch()
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

  pushMatchesDone: function (context, game) {
    context.unshift({})
    const length = 0
    context[length].nb = context.length
    const opponentId1 = game.get('winner_id')
    const getOpponentId2 = function () {
      if (game.get('player_left_id') !== game.get('winner_id')) {
        return game.get('player_left_id')
      } else {
        return game.get('player_right_id')
      }
    }
    const getScore1 = function () {
      if (game.get('player_left_id') === game.get('winner_id')) {
        return game.get('player_left_points')
      }
      return game.get('player_right_points')
    }
    const getScore2 = function () {
      if (game.get('player_right_id') !== game.get('winner_id')) {
        return game.get('player_right_points')
      }
      return game.get('player_left_points')
    }
    const opponentId2 = getOpponentId2()
    try { // TO REMOVE
      const opponent1 = this.users.get(opponentId1)
      context[length].opponent1 = opponent1.get('nickname')
      context[length].avatarOpponent1 = opponent1.get('image_url')
    } catch (e) {}
    const opponent2 = this.users.get(opponentId2)
    context[length].opponentId1 = opponentId1
    context[length].opponent2 = opponent2.get('nickname')
    context[length].avatarOpponent2 = opponent2.get('image_url')
    context[length].opponentId2 = opponentId2
    context[length].score1 = getScore1()
    context[length].score2 = getScore2()
    if (context[length].score1 === 0 && context[length].score2 === 0) {
      context[length].forfeit = true
    }
  },

  updateContextCurrentWar: function (context, war, warTimes, games, index) {
    const fromGuild = this.guilds.get(war.get('from_id'))
    const onGuild = this.guilds.get(war.get('on_id'))
    context.index = index
    if (this.id == this.userLogged.get('guild_id')) {
      context.myPage = true
    }
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
    context.nbFromMissed = 0
    context.nbOnMissed = 0

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
          startHour: ('0' + warTimes.at(i).get('start_hour')).slice(-2),
          endHour: ('0' + warTimes.at(i).get('end_hour')).slice(-2),
          maxUnanswered: warTimes.at(i).get('max_unanswered'),
          tta: warTimes.at(i).get('time_to_answer')
        })
      }
    }

    context.lastMatches = []
    if (games) {
      for (let i = 0; i < games.length; i++) {
        const game = games[i].games
        if (game.get('status') === 'played' && game.get('winner_id') != null) {
          this.pushMatchesDone(context.lastMatches, game)
        } else if (game.get('status') === 'pending') {
          context.gameId = game.get('id')
        }
      }
    }
  },

  displayCurrentWar: function () {
    const context = {}
    if (this.currentWar.length === 0) {
      context.war = false
    } else {
      context.war = true

      const games = this.currentGames.find(el => {
        return el.warId == this.currentWar.at(0).get('id')
      })

      this.updateContextCurrentWar(context, this.currentWar.at(0), this.currentWarTimes[0], games.games, 0)
    }

    this.$el.find('#guildcontent').html(Handlebars.templates.currentWar(context))

    if (Number(context.fromScore) > Number(context.onScore)) {
      document.getElementById('from-score').classList.add('winner')
    } else if (Number(context.fromScore) < Number(context.onScore)) {
      document.getElementById('on-score').classList.add('winner')
    }

    try {
      this.initializeTimer(new Date(this.currentWar.at(0).get('war_end')), 'war-timer')
    } catch (e) {}

    if (this.currentWar.length > 0) {
      const dates = []
      for (let i = 0; i < this.currentWarTimes[0].length; i++) {
        const startDate = new Date()
        startDate.setDate(startDate.getDate() + (this.getDay(this.currentWarTimes[0].at(i).get('day').toLowerCase()) + 7 - startDate.getDay()) % 7)
        startDate.setHours(this.currentWarTimes[0].at(i).get('start_hour'))
        const endDate = new Date()
        endDate.setDate(endDate.getDate() + (this.getDay(this.currentWarTimes[0].at(i).get('day').toLowerCase()) + 7 - endDate.getDay()) % 7)
        endDate.setHours(this.currentWarTimes[0].at(i).get('end_hour'))
        dates.push({ day: this.currentWarTimes[0].at(i).get('day'), startDate: startDate, endDate: endDate, warTimeId: this.currentWarTimes[0].at(i).get('id') })
      }
      dates.sort(function (a, b) {
        if (a.startDate < b.startDate) { return -1 }
        if (a.startDate > b.startDate) { return 1 }
        return 0
      })

      try {
        document.getElementById('accept-random-fight').innerHTML = 'Challenge'
        document.getElementById('accept-random-fight').style.backgroundColor = '#C4C4C4'
        document.getElementById('accept-random-fight').style.cursor = 'auto'
      } catch (e) {}
      if (dates.length > 0) {
        const now = new Date()
        if (dates[0].startDate <= now && dates[0].endDate > now) { // We are in war time
          document.getElementById('next-war-time-in-title').style.display = 'none'

          try {
            document.getElementById('accept-random-fight').innerHTML = 'Challenge'
            document.getElementById('accept-random-fight').style.backgroundColor = 'var(--primary-color)'
            document.getElementById('accept-random-fight').style.cursor = 'pointer'
          } catch (e) {}
          this.warTimeId = dates[0].warTimeId
          this.countMatchesUnansewered(dates[0].warTimeId, this.currentWarTimes[0].find(el => el.id === dates[0].warTimeId))
          this.initalizeAcceptButton(dates[0].warTimeId, this.currentGames.find(el => el.warId === this.currentWar.at(0).get('id')))

          return this
        } else if (dates[0].startDate <= now) {
          while (dates[0].startDate <= now) {
            dates[0].startDate.setDate(dates[0].startDate.getDate() + 7)
            dates.sort(function (a, b) {
              if (a.startDate < b.startDate) { return -1 }
              if (a.startDate > b.startDate) { return 1 }
              return 0
            })
          }
        }
      }

      this.initializeTimer(dates[0].startDate, 'next-war-time-in')
    }
    return this
  },

  playerInWichGuild: function (winner) {
    let id
    const onId = this.currentWar.at(0).get('on_id')
    const fromId = this.currentWar.at(0).get('from_id')
    if (winner) {
      if (winner.get('guild_id') === fromId) {
        id = fromId
      } else {
        id = onId
      }
    } else {
      if (this.guild.get('id') === onId) {
        id = fromId
      } else {
        id = onId
      }
    }
    return id
  },

  countMatchesUnansewered: function (warTimeId, warTime) {
    document.getElementById('nb-matches-missed' + this.currentWar.at(0).get('from_id')).innerHTML = warTime.get('from_max_unanswered')
    document.getElementById('nb-matches-missed' + this.currentWar.at(0).get('on_id')).innerHTML = warTime.get('on_max_unanswered')
  },

  initalizeAcceptButton: function (warTimeId, currentGames) {
    for (let i = 0; i < currentGames.games.length; i++) {
      if (currentGames.games[i].warTimeId === warTimeId) {
        try {
          if (currentGames.games[i].games.get('status') === 'pending') {
            const game = currentGames.games[i].games
            const player = this.members.find(el => el.get('id') === game.get('player_left_id'))
            const id = this.playerInWichGuild(player)

            if (this.userId === game.get('player_right_id')) {
              document.getElementById('accept-random-fight').innerHTML = 'Accept'
              document.getElementById('accept-random-fight').style.backgroundColor = 'var(--primary-color)'
              document.getElementById('accept-random-fight').style.cursor = 'pointer'
              document.getElementById('accept-random-fight').setAttribute('onclick', 'window.location=\'#game/' + game.get('id') + '\';')
            } else {
              document.getElementById('accept-random-fight').innerHTML = 'Pending'
              document.getElementById('accept-random-fight').style.backgroundColor = '#C4C4C4'
              document.getElementById('accept-random-fight').style.cursor = 'auto'
            }

            if (id === this.guild.get('id') && this.userId != id) {
              document.getElementById('random-fight-title').innerHTML = 'Someone of you\'re guild has sent a challenge'
            } else {
              document.getElementById('random-fight-title').innerHTML = 'Someone of you\'re guild has been challenged'
            }
            const warTime = this.currentWarTimes[0].find(el => el.get('id') === warTimeId)
            this.initializeTimerTTA(game.get('created_at'), warTime.get('time_to_answer'), 'war-time-timer')
          }
        } catch (e) {}
      }
    }
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

      const games = this.lastWarsGames.find(el => el.warId === this.lastWars.at(i).get('id'))

      this.updateContextCurrentWar(context.wars[i], this.lastWars.at(i), this.lastWarsTimes[i], games.games, i)
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

  updateMembers: async function () {
    const context = {
      name: this.guild.get('name'),
      id: this.id,
      anagram: this.guilds.get(this.id).get('anagram'),
      members: [],
      membersNumber: 0
    }
    for (let i = 0; i < this.members.length; i++) {
      const member = this.members.at(i)

      const obj = await this.updateContextForlist(JSON.parse(JSON.stringify(member)), i)
      context.members.push(obj)

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
    const guild = this.guilds.get(this.id)
    const context = JSON.parse(JSON.stringify(guild))
    context.totalWars = 0
    context.warsWon = 0
    context.rank = this.guilds.indexOf(guild) + 1
    context.totalRank = this.guilds.length
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

  displayCalendar: async function (e) {
    const context = {}
    if (this.calendar.length > 0) {
      context.war = true

      context.wars = []
      for (let i = 0; i < this.calendar.length; i++) {
        context.wars.push({})

        this.updateContextCurrentWar(context.wars[i], this.calendar.at(i), this.calendarWarTimes[i], undefined, i)
        this.isProposal(context.wars[i], this.calendar.at(i))
      }
    } else {
      context.war = false
    }

    await this.$el.find('#guildcontent').html(Handlebars.templates.calendar(context))

    // line
    try {
      if (this.calendar.length > 1) {
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
      } else {
        document.getElementById('line').style.display = 'none'
      }
    } catch (e) {}

    return this
  },

  displayExplanation: function (e) {
    const index = e.currentTarget.getAttribute('for')
    const explanation = document.getElementById('explanation-' + index)
    explanation.style.top = e.pageY - 65
    explanation.style.left = e.pageX
  },

  updateContextForlist: async function (user, i) {
    user.trophy = 'icons/' + this.ladders.get(user.ladder_id).get('name').toLowerCase() + '.svg'
    user.rank = i + 1
    user.victories = user.ladder_games_won
    user.totalGames = user.victories + user.ladder_games_lost
    if (user.status === 'ingame') {
      user.slide_show = './icons/slideshow-ingame.svg'
      const games = new GameRecords()
      await games.fetchGameByUserIdStatus(user.id, 'inprogress')
      const game = games.at(0)
      user.ingame = true
      user.gameId = game.get('id')
    } else {
      user.slide_show = './icons/slideshow.svg'
    }
    user.follow = this.userLogged.get('friends').some(el => el.friend_id === user.id)
    if (user.guild_id) {
      user.guildName = this.guilds.get(user.guild_id).get('name')
    }
    return user
  },

  receiveMessage: function (msg) {
    const asyncFunc = async () => {
      if (msg.message.action === 'game_invitation') {
        const game = new GameRecord({ id: msg.message.id })
        await game.fetch()
        const warTime = this.currentWarTimes[0].find(el => el.get('id') === this.warTimeId)
        try {
          if (game != undefined && msg.message.sender_id !== this.userId) {
            this.initializeTimerTTA(game.get('created_at'), warTime.get('time_to_answer'), 'war-time-timer')
            document.getElementById('accept-random-fight').innerHTML = 'Accept'
            document.getElementById('random-fight-title').innerHTML = 'Someone of you\'re guild has been challenged'
            document.getElementById('accept-random-fight').setAttribute('onclick', 'window.location=\'#game/' + game.get('id') + '\';')
          } else if (game != undefined && msg.message.sender_id === this.userId) {
            const warTime = this.currentWarTimes[0].find(el => el.get('id') === this.warTimeId)
            this.initializeTimerTTA(game.get('created_at'), warTime.get('time_to_answer'), 'war-time-timer')
            document.getElementById('accept-random-fight').innerHTML = 'Pending'
            document.getElementById('accept-random-fight').style.backgroundColor = '#C4C4C4'
            document.getElementById('accept-random-fight').style.cursor = 'auto'
            document.getElementById('random-fight-title').innerHTML = 'You have sent an invitation to someone from the other guild'
          }
        } catch (e) {}
      } else if (msg.message.action === 'status_update') {
        const channelId = Number(JSON.parse(msg.identifier).id)
        try {
          this.users.get(msg.message.id).set({ status: msg.message.status })
        } catch (e) {}
        if (msg.message.id === this.userId) {
          this.userLogged.set({ status: msg.message.status })
        }
        let div = document.getElementById('pastille' + msg.message.id)
        try {
          div.classList.remove('offline')
        } catch (e) {}
        try {
          div.classList.remove('ingame')
        } catch (e) {}
        try {
          div.classList.remove('online')
        } catch (e) {
        }
        try {
          div.classList.add(msg.message.status)
        } catch (e) {}

        try {
          div = document.getElementById('status' + msg.message.id)
          if (msg.message.status === 'online') {
            div.innerHTML = 'ONLINE'
          } else if (msg.message.status === 'offline') {
            div.innerHTML = 'OFFLINE'
          } else {
            div.innerHTML = 'INGAME'
          }
        } catch (e) {}

        try {
          div = document.getElementById('slide-show' + msg.message.id)
          if (msg.message.status === 'ingame') {
            div.setAttribute('src', './icons/slideshow-ingame.svg')
          } else {
            div.setAttribute('src', './icons/slideshow.svg')
          }
        } catch (e) {}

        try {
          if (msg.message.status === 'ingame') {
            div = document.getElementById('status-container' + msg.message.id)
            div.setAttribute('onclick', 'window.location=\'#game/' + msg.message.game_id + '\';')
            div.style.cursor = 'pointer'
          }
        } catch (e) {}
      }
    }
    asyncFunc()
  },

  destroy: function () {
    for (let i = 0; i < this.timer.length; i++) {
      clearInterval(this.timer[i])
    }
  }
})
