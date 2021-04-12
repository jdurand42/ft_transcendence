import { Tournament } from '../../models/tournamentModel'
import { User } from '../../models/userModel'
import { GameRecords } from '../../collections/gameRecords'
import { Tournaments } from '../../collections/tournamentCollection'
import { Users } from '../../collections/usersCollection'
import { Ladders } from '../../collections/laddersCollection'

export const TournamentView = Backbone.View.extend({
  events: {
    'mouseover .rules-icon-container': 'mouseoverRules',
    'click .create-new-tournament': 'createTournamentButton',
    'click .create-tournament': 'valideCreationTournament',
    'click .register-button': 'registerButton'
  },
  initialize: function () {
    this.userLogged = new User()
    this.tournaments = new Tournaments()
    this.tournament = new Tournament()
    this.games = new GameRecords()
    this.ladders = new Ladders()
    this.registered = new Users()
    this.participantIds = []
    this.userId = undefined

    const fetch = async () => {
      const response1 = this.userLogged.fetchUser(window.localStorage.getItem('user_id'))
      const response2 = this.tournaments.fetch()
      const response3 = this.ladders.fetch()
      await response1 && await response2 && await response3
      this.userId = this.userLogged.get('id')
      if (this.tournaments.length > 0) {
        this.tournament = this.tournaments.at(0)
        await this.games.fetchByTournament(this.tournament.get('id'))
      }
      this.render()
    }
    fetch()
  },

  el: $('#app'),
  render: function () {
    this.context = {}
    this.context.registered = []
    this.context.allToDo = []
    this.context.allDone = []
    this.context.nbDone = 0
    this.context.nbToDo = 0
    this.matchesToDo = []

    this.templateTournamentMain = Handlebars.templates.tournamentMain
    const templateData = this.templateTournamentMain(this.context)
    this.$el.html(templateData)

    const render = async () => {
      this.context.admin = this.userLogged.get('admin')
      this.context.createTournament = 'Create new tournament'
      this.context.register = undefined

      if (this.tournament.get('start_date') === undefined) {
        this.context.tournament = false
        this.$el.find('#tournament-content-container').html(Handlebars.templates.tournamentNoTournament(this.context))
      } else {
        this.context.tournament = true
        this.participantIds = this.tournament.get('participant_ids')

        for (let i = 1; i < 30; i++) { // TEST
          this.participantIds.push(i) // TEST
        } // TEST

        await this.registerAllParticipants()

        if (this.tournament.get('start_date') > new Date().toISOString()) {
          if (this.participantIds && this.participantIds.find(el => el === this.userLogged.get('id')) !== undefined) {
            this.context.register = 'Unregister'
          } else {
            this.context.register = 'Register'
          }
          this.tournament.status = 'pending'

          this.$el.find('#tournament-nav-container').html(Handlebars.templates.tournamentTimer(this.context))
          this.initializeTimer()

          this.context.nbRegistered = this.participantIds.length
          // const fetchUser = async () => {
          //   for (let i = 0; i < this.participantIds.length; i++) {
          //     await this.registerUser(this.participantIds[i], this.context, this.ladders)
          //   }
          console.log(this.context)
          this.$el.find('#tournament-content-container').html(Handlebars.templates.tournamentRegistration(this.context))
          // }
          // fetchUser()
        } else {
          const nbParticipants = this.tournament.get('participant_ids').length
          this.context.maxToDo = (nbParticipants / 2) * (nbParticipants - 1)

          this.initializeAllMatches()

          console.log(this.context)
          this.tournament.status = 'inprogress'
          this.$el.find('#tournament-nav-container').html(Handlebars.templates.tournamentNav(this.context))
          if (this.participantIds.some(el => el === this.userId) === true) {
            this.initializeContent(true, 'Rage quit', Handlebars.templates.tournamentMyMatches, 'my-matches-nav')
          } else {
            this.initializeContent(false, undefined, Handlebars.templates.tournamentAllMatches, 'all-matches-nav')
          }
        }
        this.context.createTournament = 'Cancel tournament'

        let nbPlayed = 0
        for (let i = 0; i < this.games.length; i++) {
          if (this.games.get('status') === 'played') {
            nbPlayed++
          }
        }

        const nbParticipants = this.tournament.get('participant_ids').length
        if (nbPlayed === ((nbParticipants / 2) * (nbParticipants - 1)) && nbPlayed !== 0) {
          this.context.status = 'finish'
          this.context.createTournament = 'Create new tournament'

          this.context.winner = 'jdurand' // TEST TO DO DYNAMICALLY
          document.getElementById('winner').style.display = 'flex'
        }
      }

      Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
        switch (operator) {
          case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this)
          case '==':
            return (v1 === v2) ? options.fin(this) : options.inverse(this)
          default:
            return options.inverse(this)
        }
      })

      this.$el.find('#tournament-header-container').html(Handlebars.templates.tournamentHeader(this.context))

      if (this.tournament.status === 'inprogress' &&
              this.participantIds.some(el => el === this.userId) === false) {
        document.getElementById('register-button-container').remove()
      }

      this.handleButtonsColor()

      return this
    }
    render()
  },

  initializeAllMatches: function () {
    for (let i = 0; i < this.participantIds.length - 1; i++) {
      for (let j = i; j < this.participantIds.length; j++) {
        if (this.participantIds[i] !== this.participantIds[j]) {
          this.matchesToDo.push({ opponent1: this.participantIds[i], opponent2: this.participantIds[j] })
        }
      }
    }

    console.log(this.matchesToDo)

    this.initializeAllMatchesDone()
    this.initializeAllMatchesToDo()
  },

  initializeAllMatchesDone: function () {
    for (let i = 0; i < this.games.length; i++) {
      const game = this.games.at(i)
      if (game.get('status') === 'played') {
        this.context.allDone.push({})
        const length = this.context.allDone.length - 1
        const opponent1 = this.registered.get(game.get('player_left_id'))
        const opponent2 = this.registered.get(game.get('player_right_id'))
        this.context.allDone[length].opponent1 = opponent1.get('nickname')
        this.context.allDone[length].avatarOpponent1 = opponent1.get('image_url')
        this.context.allDone[length].opponent2 = opponent2.get('nickname')
        this.context.allDone[length].avatarOpponent2 = opponent2.get('image_url')
        this.context.allDone[length].score1 = 11
        this.context.allDone[length].score2 = 11
        this.context.nbDone += 1
        let index
        const found = this.matchesToDo.some(function (el, i) {
          index = i
          return ((el.opponent1 === game.get('player_left_id') &&
          el.opponent2 === game.get('player_right_id')) ||
          (el.opponent1 === game.get('player_right_id') &&
          el.opponent2 === game.get('player_left_id')))
        })
        this.matchesToDo.slice(index, 1)
      }
    }
  },

  initializeAllMatchesToDo: function () {
    for (let i = 0; i < this.matchesToDo.length; i++) {
      const opponent1 = this.registered.get(this.matchesToDo[i].opponent1)
      const opponent2 = this.registered.get(this.matchesToDo[i].opponent2)

      this.context.allToDo.push({})
      const length = this.context.allToDo.length - 1
      this.context.allToDo[length].opponent1Id = opponent1.get('id')
      this.context.allToDo[length].opponent2Id = opponent2.get('id')
      this.context.allToDo[length].opponent1 = opponent1.get('nickname')
      this.context.allToDo[length].opponent2 = opponent2.get('nickname')
      this.context.allToDo[length].opponent1Trophy = this.getTrophy(opponent1)
      this.context.allToDo[length].opponent2Trophy = this.getTrophy(opponent2)
      this.context.allToDo[length].opponent1Avatar = opponent1.get('image_url')
      this.context.allToDo[length].opponent2Avatar = opponent2.get('image_url')
      this.context.nbToDo += 1
    }
  },

  registerAllParticipants: async function () {
    for (let i = 0; i < this.participantIds.length; i++) {
      console.log(this.participantIds[i])
      await this.registerUser(this.participantIds[i])
    }
  },

  initializeContent: function (isRegistered, str, template, div) {
    this.context.isRegistered = isRegistered
    this.context.register = str
    console.log(this.context)
    this.$el.find('#tournament-content-container').html(template(this.context))
    const nav = document.getElementById(div)
    nav.classList.add('open')
    this.positionSquare(nav.getBoundingClientRect())
  },

  positionSquare: function (offsets) {
    document.getElementById('square').style.top = offsets.top - 8
    document.getElementById('square').style.left = offsets.left - 32
  },

  initializeCalendar: function () {
    const $j = jQuery.noConflict()
    $('#datepicker').daterangepicker({
      singleDatePicker: true,
      minDate: new Date(),
      timePicker: true,
      locale: {
        format: 'DD/MM/YYYY hh:mm A'
      }
    })
  },

  initializeTimer: function () {
    const countDownDate = new Date(this.tournament.get('start_date')).getTime()
    this.x = setInterval(function () {
      const now = new Date().getTime()
      const distance = countDownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const secondes = Math.floor((distance % (1000 * 60)) / 1000)

      if (!(days < 0 && hours < 0 && minutes < 0 && secondes < 0)) {
        document.getElementById('timer').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + secondes + 's'
      }
      if (distance < 0) {
        clearInterval(this.x)
        window.location.reload()
      }
    }, 1000)
  },

  handleButtonsColor: function () {
    if (document.getElementById('create-new-tournament') &&
        document.getElementById('create-new-tournament').innerHTML === 'Cancel tournament') {
      document.getElementById('create-new-tournament').style.backgroundColor = '#C4C4C4'
    }
    if (document.getElementById('register-button')) {
      if ((document.getElementById('register-button').innerHTML === 'Rage quit' ||
        document.getElementById('register-button').innerHTML === 'Unregister')) {
        document.getElementById('register-button').style.backgroundColor = '#C4C4C4'
      } else {
        document.getElementById('register-button').style.backgroundColor = 'var(--primary-color)'
      }
    }
  },

  mouseoverRules: function (e) {
    const rules = document.getElementById('rules')
    rules.style.top = e.pageY
    rules.style.left = e.pageX
  },

  createTournamentButton: function (e) {
    if (e.currentTarget.innerHTML === 'Create new tournament') {
      this.createNewTournament()
    } else {
      this.cancelTournament()
    }
  },

  createNewTournament: function () {
    this.$el.find('#tournament-content-container').html(Handlebars.templates.tournamentCreation(this.context))
    this.initializeCalendar()
  },

  cancelTournament: function () {
    this.tournament.cancelTournament()
    this.tournament = new Tournament()
    this.context = {}
    clearInterval(this.x)
    this.render()
  },

  updateHTML: function (parent, child, template) {
    const html = template(this.context)
    // document.getElementById(child).remove()
    document.getElementById(parent).appendChild($(html).find('#' + child)[0])
  },

  valideCreationTournament: function () {
    this.tournament = new Tournament()

    const createTournament = async () => {
      await this.tournament.createTournament($('#datepicker').data('daterangepicker').startDate.toISOString())
      this.context.tournament = true
      this.render()
    }
    createTournament()
  },

  registerButton: function (e) {
    if (e.currentTarget.innerHTML === 'Register') {
      this.register(e)
    } else {
      this.unregister(e)
    }
    this.handleButtonsColor()
  },

  registerUser: async function (userId) {
    const newRegistered = new User()
    newRegistered.set({ id: userId })
    await newRegistered.fetch()
    this.context.registered.push(newRegistered.attributes)
    this.registered.add(newRegistered)
    if (newRegistered.get('ladder_id') === null) { // BUG IN BACK
      newRegistered.set({ ladder_id: 1 }) // NO NEED TO DO THAT IF BACK IS GOOD
    }
    this.context.registered[this.context.registered.length - 1].trophy = this.getTrophy(newRegistered)
  },

  getTrophy: function (user) {
    console.log(user)
    return 'icons/' + this.ladders.get(user.get('ladder_id')).get('name').toLowerCase() + '.svg'
  },

  register: function (e) {
    const userId = this.userLogged.get('id')
    this.tournament.register(userId)
    this.participantIds.push(userId)
    this.tournament.set({
      participant_ids: this.participantIds
    })
    this.context.nbRegistered = this.participantIds.length
    e.currentTarget.innerHTML = 'Unregister'
    const register = async () => {
      await this.registerUser(userId, this.context, this.ladders)
      this.updateHTML('all-registered', 'registered' + userId, Handlebars.templates.tournamentRegistration)
      document.getElementById('number-registered').innerHTML = this.context.nbRegistered + ' registered players'
    }
    register()
  },

  unregister: function (e) {
    const userId = this.userLogged.get('id')
    this.tournament.unregister(this.userLogged.get('id'))
    this.participantIds = this.participantIds.slice().filter(el => el != userId)
    this.tournament.set({
      participant_ids: this.participantIds
    })
    this.context.nbRegistered = this.participantIds.length
    e.currentTarget.innerHTML = 'Register'
    let index
    const found = this.context.registered.some(function (el, i) {
      i = index
      return el.id === userId
    })
    this.context.registered.slice(index, 1)
    this.context.nbRegistered = this.participantIds.length
    document.getElementById('registered' + userId).remove()
    document.getElementById('number-registered').innerHTML = this.context.nbRegistered + ' registered players'
  },

  destroy: function () {
    clearInterval(this.x)
  }
})
