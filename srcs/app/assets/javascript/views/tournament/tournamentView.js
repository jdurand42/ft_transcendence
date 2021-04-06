import { Tournament } from '../../models/tournamentModel'
import { User } from '../../models/userModel'
import { GameRecords } from '../../collections/gameRecords'

export const TournamentView = Backbone.View.extend({
  events: {
    'mouseover .rules-icon-container': 'mouseoverRules'
  },
  initialize: function () {
    this.context = {}
    this.userLogged = new User()
    this.tournament = new Tournament()
    this.games = new GameRecords()

    const fetch = async () => {
      const response1 = this.userLogged.fetchUser(window.localStorage.getItem('user_id'))
      const response2 = this.tournament.fetch()
      await response1 && await response2
      console.log(this.tournament)
      // const response3 = this.games.fetchByTournament(this.tournament.get('id')) // routes to modify

      this.render()
    }
    fetch()
  },

  el: $('#app'),
  render: function () {
    this.templateTournamentMain = Handlebars.templates.tournamentMain
    const templateData = this.templateTournamentMain(this.context)

    this.context.admin = this.userLogged.get('admin')
    this.context.createTournament = 'Create new tournament'
    this.context.register = undefined
    // this.tournament.set({ start_date: new Date(new Date()) }) // TEST
    if (this.tournament.get('start_date') === undefined) {
      this.context.tournament = false
    } else {
      this.context.tournament = true
      if (this.tournament.get('start_date') < new Date()) {
        if (this.tournament.get('participant_ids') && this.tournament.get('participant_ids').find(el => el.get('id') === this.userLogged.get('id')) !== undefined) {
          this.context.register = 'Unregister'
        } else {
          this.context.register = 'Register'
        }
        this.tournament.status = 'pending'
      } else {
        this.context.register = 'Rage quit'
        this.context.createTournament = 'Cancel tournament'
        this.tournament.status = 'inprogress'
      }

      const nbPlayed = 0
      // for (let i = 0; i < this.games.length(); i++) {
      //   if (this.games.get('status') === 'played') {
      //     nbPlayed++
      //   }
      // }

      if (this.tournament.get('participant_ids')) { // TEST
        const nbParticipants = this.tournament.get('participant_ids').length
        if (nbPlayed === ((nbParticipants / 2) * (nbParticipants - 1))) {
          this.context.status = 'finish'
          this.context.createTournament = 'Create new tournament'

          this.context.winner = 'jdurand' // TEST TO DO DYNAMICALLY
          document.getElementById('winner').style.display = 'flex'
        }
      }
    }

    this.context.winner = 'jdurand' // TEST TO DO DYNAMICALLY

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

    this.$el.html(templateData)
    this.$el.find('#tournament-header-container').html(Handlebars.templates.tournamentHeader(this.context))

    if (this.context.tournament === false) {
      this.$el.find('#tournament-content-container').html(Handlebars.templates.tournamentNoTournament(this.context))
    }

    this.handleButtonsColor()
    document.getElementById('winner').style.display = 'flex' // TEST
    return this
  },

  handleButtonsColor: function () {
    if (this.context.admin === true && this.context.createTournament === 'Cancel tournament') {
      document.getElementById('create-tournament').style.backgroundColor = '#C4C4C4'
    }
    if (this.context.register === 'Rage quit' || this.context.register === 'Unregister') {
      document.getElementById('register-button').style.backgroundColor = '#C4C4C4'
    }
  },

  mouseoverRules: function (e) {
    const rules = document.getElementById('rules')
    rules.style.top = e.pageY
    rules.style.left = e.pageX
  }
})
