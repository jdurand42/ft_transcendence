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

    const fetch = async () => {
      const response1 = this.userLogged.fetchUser(window.localStorage.getItem('user_id'))
      const response2 = this.tournaments.fetch()
      const response3 = this.ladders.fetch()
      await response1 && await response2 && await response3
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
    this.templateTournamentMain = Handlebars.templates.tournamentMain
    const templateData = this.templateTournamentMain(this.context)
    this.$el.html(templateData)

    this.context.admin = this.userLogged.get('admin')
    this.context.createTournament = 'Create new tournament'
    this.context.register = undefined
    if (this.tournament.get('start_date') === undefined) {
      this.context.tournament = false
    } else {
      this.context.tournament = true
      if (this.tournament.get('participant_ids')) {
        this.participantIds = this.tournament.get('participant_ids')
      }
      if (this.tournament.get('start_date') > new Date().toISOString()) {
        if (this.participantIds && this.participantIds.find(el => el.get('id') === this.userLogged.get('id')) !== undefined) {
          this.context.register = 'Unregister'
        } else {
          this.context.register = 'Register'
        }
        this.tournament.status = 'pending'

        this.$el.find('#tournament-nav-container').html(Handlebars.templates.tournamentTimer(this.context))
        this.initializeTimer()

        for (let i = 1; i < 5; i++) { // TEST
          this.participantIds.push(i) // TEST
        } // TEST

        this.context.nbRegistered = this.participantIds.length
        const fetchUser = async () => {
          for (let i = 0; i < this.participantIds.length; i++) {
            await this.registerUser(this.participantIds[i], this.context, this.ladders)
          }
          this.$el.find('#tournament-content-container').html(Handlebars.templates.tournamentRegistration(this.context))
        }
        fetchUser()
      } else {
        this.context.register = 'Rage quit'
        this.tournament.status = 'inprogress'
      }
      this.context.createTournament = 'Cancel tournament'

      let nbPlayed = 0
      for (let i = 0; i < this.games.length; i++) {
        if (this.games.get('status') === 'played') {
          nbPlayed++
        }
      }

      if (this.tournament.get('participant_ids')) {
        const nbParticipants = this.tournament.get('participant_ids').length
        if (nbPlayed === ((nbParticipants / 2) * (nbParticipants - 1)) && nbPlayed !== 0) {
          this.context.status = 'finish'
          this.context.createTournament = 'Create new tournament'

          this.context.winner = 'jdurand' // TEST TO DO DYNAMICALLY
          document.getElementById('winner').style.display = 'flex'
        }
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

    if (this.context.tournament === false) {
      this.$el.find('#tournament-content-container').html(Handlebars.templates.tournamentNoTournament(this.context))
    }

    this.handleButtonsColor()

    return this
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

      document.getElementById('timer').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + secondes + 's'
      if (distance < 0) {
        clearInterval(this.x)
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
    console.log(html)
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

  registerUser: async (userId, context, ladders) => {
    const newRegistered = new User()
    newRegistered.set({ id: userId })
    await newRegistered.fetch()
    context.registered.push(newRegistered.attributes)
    if (newRegistered.get('ladder_id') === null) { // BUG IN BACK
      newRegistered.set({ ladder_id: 1 }) // NO NEED TO DO THAT IF BACK IS GOOD
    }
    context.registered[context.registered.length - 1].trophy = 'icons/' + ladders.get(newRegistered.get('ladder_id')).get('name').toLowerCase() + '.svg'
  },

  register: function (e) {
    const userId = this.userLogged.get('id')
    this.tournament.register(userId)
    this.participantIds.push(userId)
    this.tournament.set({
      participant_ids: this.participantIds
    })
    e.currentTarget.innerHTML = 'Unregister'
    const register = async () => {
      await this.registerUser(userId, this.context, this.ladders)
      this.updateHTML('all-registered', 'registered' + userId, Handlebars.templates.tournamentRegistration)
    }
    register()
  },

  unregister: function (e) {
    const userId = this.userLogged.get('id')
    this.tournament.unregister(this.userLogged.get('id'))
    this.participantIds.slice().filter(el => el != userId)
    this.tournament.set({
      participant_ids: this.participantIds
    })
    e.currentTarget.innerHTML = 'Register'
    let index
    console.log(this.context.registered)
    const found = this.context.registered.some(function (el, i) {
      i = index
      return el.id === userId
    })
    // const index = this.context.register.findIndex(el => el.id === userId)
    this.context.registered.slice(index, 1)
    document.getElementById('registered' + userId).remove()
  },

  destroy: function () {
    clearInterval(this.x)
  }
})
