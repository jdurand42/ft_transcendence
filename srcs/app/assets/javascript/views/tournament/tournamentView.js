import { Tournament } from '../../models/tournamentModel'
import { User } from '../../models/userModel'
import { GameRecords } from '../../collections/gameRecords'
import { Tournaments } from '../../collections/tournamentCollection'
import { Users } from '../../collections/usersCollection'
import { Ladders } from '../../collections/laddersCollection'
import { Guilds } from '../../collections/guildsCollection'
import { TournamentParticipants } from '../../collections/tournamentParticipantCollection'
import { GameRecord } from '../../models/gameRecord'

export const TournamentView = Backbone.View.extend({
  events: {
    'mouseover .rules-icon-container': 'mouseoverRules',
    'click .create-new-tournament': 'createTournamentButton',
    'click .create-tournament': 'valideCreationTournament',
    'click .register-button': 'registerButton',
    'click .ranking-nav': 'rankingNav',
    'click .all-matches-nav': 'allMatchesNav',
    'click .my-matches-nav': 'myMatchesNav',
    'click .play-my-matches': 'play'
  },
  initialize: function (options) {
    this.userLogged = new User()
    this.tournaments = new Tournaments()
    this.tournament = new Tournament()
    this.games = new GameRecords()
    this.myGamesDone = new GameRecords()
    this.myGamesPending = new GameRecords()
    this.guilds = new Guilds()
    this.ladders = new Ladders()
    this.registered = new Users()
    this.participantIds = []
    this.userId = undefined
    this.tournamentParticipants = undefined

    this.socket = options.socket
    this.socket.updateContext(this, options.notifView)

    const fetch = async () => {
      const response1 = this.userLogged.fetchUser(window.localStorage.getItem('user_id'))
      const response2 = this.tournaments.fetch()
      const response3 = this.ladders.fetch()
      const response4 = this.guilds.fetch()
      await response1 && await response2 && await response3
      this.userId = this.userLogged.get('id')
      if (this.tournaments.length > 0) {
        this.tournament = this.tournaments.at(0)
        const response5 = this.games.fetchByTournament(this.tournament.get('id'))
        const response6 = this.myGamesDone.fetchTournamentMyGames(this.userLogged.get('id'), 'played', this.tournament.get('id'))
        const response7 = this.myGamesPending.fetchTournamentMyGames(this.userLogged.get('id'), 'pending', this.tournament.get('id'))
        await response5 && await response6 && await response7
        console.log('this.games')
        console.log(this.games)
        console.log('this.myGamesDone')
        console.log(this.myGamesDone)
        console.log('this.myGamesPending')
        console.log(this.myGamesPending)
        this.tournamentParticipants = new TournamentParticipants({ tournament_id: this.tournament.get('id') })
        await this.tournamentParticipants.fetch()
        console.log('this.tournamentParticipants')
        console.log(this.tournamentParticipants)
        console.log(this.userLogged.get('id'))
        console.log(this.tournamentParticipants.get(this.userLogged.get('id')))
      }
      await response4
      this.render()
    }
    fetch()
  },

  el: $('#app'),
  render: function () {
    this.context = {}
    this.context.registered = []
    this.context.ranked = []
    this.context.allToDo = []
    this.context.allDone = []
    this.context.myToDo = []
    this.context.myDone = []
    this.context.nbDone = 0
    this.context.nbToDo = 0
    this.context.nbMyToDo = 0
    this.context.nbMyDone = 0
    this.matchesToDo = []

    this.templateTournamentMain = Handlebars.templates.tournamentMain
    const templateData = this.templateTournamentMain(this.context)
    this.$el.html(templateData)

    const render = async () => {
      this.context.admin = this.userLogged.get('admin')
      this.context.createTournament = 'Create new tournament'
      this.context.register = undefined

      // If tournament tournament is not scheduled
      if (this.tournament.get('start_date') === undefined) {
        this.context.tournament = false
        this.$el.find('#tournament-content-container').html(Handlebars.templates.tournamentNoTournament(this.context))
      } else { // Tournament is scheduled or finished
        this.context.tournament = true
        this.participantIds = this.tournament.get('participant_ids')
        this.context.nbRegistered = this.participantIds.length

        await this.registerAllParticipants()

        // If tournament has not started yet
        if (this.tournament.get('start_date') > new Date().toISOString()) {
          if (this.participantIds && this.participantIds.find(el => el === this.userLogged.get('id')) !== undefined) {
            this.context.register = 'Unregister'
          } else {
            this.context.register = 'Register'
          }
          this.tournament.status = 'pending'

          this.$el.find('#tournament-nav-container').html(Handlebars.templates.tournamentTimer(this.context))
          this.initializeTimer()

          this.$el.find('#tournament-content-container').html(Handlebars.templates.tournamentRegistration(this.context))
        } else { // Tournament is pending
          this.initializeRanking()

          this.context.pending = true

          const nbParticipants = this.tournament.get('participant_ids').length
          this.context.maxToDo = (nbParticipants / 2) * (nbParticipants - 1)
          this.context.maxMyToDo = (nbParticipants - 1)

          this.initializeAllMatches()

          this.tournament.status = 'inprogress'
          this.context.isRegistered = this.participantIds.some(el => el === this.userId)
          this.$el.find('#tournament-nav-container').html(Handlebars.templates.tournamentNav(this.context))
          this.context.isRegistered = this.participantIds.some(el => el === this.userId)
          if (this.context.isRegistered === true) {
            this.context.register = 'Rage quit'
            this.initializeContent(Handlebars.templates.tournamentMyMatches, 'my-matches-nav')
            this.initializePlayButtons()
          } else {
            this.context.register = undefined
            this.initializeContent(Handlebars.templates.tournamentAllMatches, 'all-matches-nav')
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

  initializePlayButtons: function () {
    const playButtons = document.getElementsByClassName('play-my-matches')
    for (let i = 0; i < playButtons.length; i++) {
      const user = this.registered.get(Number(playButtons[i].getAttribute('for')))
      if (user.get('status') !== 'online') {
        playButtons[i].style.backgroundColor = '#C4C4C4'
        playButtons[i].style.cursor = 'auto'
      }
    }
  },

  play: function (e) {
    e.stopPropagation()
    const userId = Number(e.currentTarget.getAttribute('for'))
    const newGame = new GameRecord()

    newGame.inviteTournamentGame(userId)
  },

  listAllUsers: function () {
    for (let i = 0; i < this.registered.length; i++) {
      const user = this.registered.at(i)
      this.context.ranked.push(JSON.parse(JSON.stringify(user)))
      if (user.get('status') === 'ingame') {
        this.context.ranked[i].slide_show = './icons/slideshow-ingame.svg'
      } else {
        this.context.ranked[i].slide_show = './icons/slideshow.svg'
      }
      // eslint-disable-next-line eqeqeq
      if (user.get('guild_id') == undefined) {
        this.context.ranked[i].guild = 'N/A'
      } else {
        this.context.ranked[i].guild = this.guilds.get(user.get('guild_id')).get('name')
      }
      this.context.ranked[i].victories = 0
      this.context.ranked[i].defeats = 0
      this.context.ranked[i].follow = this.userLogged.get('friends').some(el => el.friend_id === user.get('id'))
    }
  },

  fillVictoriesDefeats: function () {
    for (let i = 0; i < this.games.length; i++) {
      const game = this.games.at(i)
      if (game.get('status') === 'played') {
        let index = 0
        this.context.ranked.some(el => {
          index += 1
          return el.id === game.get('winner_id')
        })
        this.context.ranked[index].victories += 1
        let id
        if (game.get('player_left_id') !== game.get('winner_id')) {
          id = game.get('player_left_id')
        } else {
          id = game.get('player_right_id')
        }
        index = 0
        this.context.ranked.some(el => {
          index += 1
          return el.id === game.get(id)
        })
        this.context.ranked[index].defeats += 1
      }
    }
  },

  sortUsers: function () {
    this.context.ranked = this.context.ranked.sort(function (el1, el2) {
      if (el1.victories === el2.victories) {
        return (el1.gapPoints < el2.gapPoints ? 1 : -1)
      }
      return (el1.victories < el2.victories ? 1 : -1)
    })
    for (let i = 0; i < this.context.ranked.length; i++) {
      this.context.ranked[i].rank = i + 1
    }
  },

  fillGapPoints: function () {
    for (let i = 0; i < this.context.ranked.length; i++) {
      this.context.ranked[i].gapPoints = 0 // TO DO
    }
  },

  initializeRanking: function () {
    // List all users
    this.listAllUsers()

    // Fill victories / defeats
    this.fillVictoriesDefeats()

    // Fill Gap points
    this.fillGapPoints()

    // Sort users
    this.sortUsers()
  },

  myMatchesNav: function () {
    this.initializeContent(Handlebars.templates.tournamentMyMatches, 'my-matches-nav')
    this.initializePlayButtons()
  },

  allMatchesNav: function () {
    this.initializeContent(Handlebars.templates.tournamentAllMatches, 'all-matches-nav')
  },

  rankingNav: function () {
    this.initializeContent(Handlebars.templates.tournamentRanking, 'ranking-nav')
  },

  initializeAllMatches: function () {
    for (let i = 0; i < this.participantIds.length - 1; i++) {
      for (let j = i; j < this.participantIds.length; j++) {
        if (this.participantIds[i] !== this.participantIds[j]) {
          this.matchesToDo.push({ opponent1: this.participantIds[i], opponent2: this.participantIds[j] })
        }
      }
    }

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
        if (index !== -1) {
          this.matchesToDo.slice(index, 1)
        }
      } else if (game.get('status') === 'pending') {
        if (game.get('player_left_id') === this.userLogged.get('id')) {
          const found = this.context.myToDo.find(el => el.opponentId === game.get('player_right_id'))
          found.play = 'Pending'
        } else {
          const found = this.context.myToDo.find(el => el.opponentId === game.get('player_left_id'))
          found.play = 'Accept'
          found.waiting = true

          // To do create function
          const countDownDate = new Date(this.tournament.get('time_to_answer') + game.get('created_at')).getTime()
          this.x = setInterval(function () {
            const now = new Date().getTime()
            const distance = countDownDate - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const secondes = Math.floor((distance % (1000 * 60)) / 1000)

            if (!(days < 0 && hours < 0 && minutes < 0 && secondes < 0)) {
              document.getElementById('timer' + game.get('player_left_id')).innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + secondes + 's'
            }
            if (distance < 0) {
              clearInterval(this.x)
              window.location.reload()
            }
          }, 1000)
        }
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
      this.context.allToDo[length].opponent1 = opponent1.get('nickname').substring(0, 11)
      this.context.allToDo[length].opponent2 = opponent2.get('nickname').substring(0, 11)
      this.context.allToDo[length].opponent1Trophy = this.getTrophy(opponent1)
      this.context.allToDo[length].opponent2Trophy = this.getTrophy(opponent2)
      this.context.allToDo[length].opponent1Avatar = opponent1.get('image_url')
      this.context.allToDo[length].opponent2Avatar = opponent2.get('image_url')
      this.context.nbToDo += 1
      if (opponent1.get('id') === this.userLogged.get('id') || opponent2.get('id') === this.userLogged.get('id')) {
        let opponent
        if (opponent1.get('id') === this.userLogged.get('id')) {
          opponent = opponent2
        } else {
          opponent = opponent1
        }
        this.context.myToDo.push({})
        const length = this.context.myToDo.length - 1
        this.context.myToDo[length].opponentId = opponent.get('id')
        this.context.myToDo[length].opponent = opponent.get('nickname').substring(0, 15)
        this.context.myToDo[length].opponentTrophy = this.getTrophy(opponent)
        this.context.myToDo[length].opponentAvatar = opponent.get('image_url')
        this.context.myToDo[length].play = 'Challenged'
        this.context.nbMyToDo += 1
      }
    }
  },

  registerAllParticipants: async function () {
    for (let i = 0; i < this.participantIds.length; i++) {
      await this.registerUser(this.participantIds[i])
    }
  },

  initializeContent: function (template, div) {
    this.$el.find('#tournament-content-container').html(template(this.context))
    try {
      document.getElementById('all-matches-nav').classList.remove('open')
      document.getElementById('ranking-nav').classList.remove('open')
      document.getElementById('my-matches-nav').classList.remove('open')
    } catch (e) {
    }
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
    const name = newRegistered.get('nickname')
    this.context.registered.push(newRegistered.attributes)
    this.context.registered[this.context.registered.length - 1].nickname = name.substring(0, 13)
    this.context.registered[this.context.registered.length - 1].trophy = this.getTrophy(newRegistered)
    this.registered.add(newRegistered)
  },

  getTrophy: function (user) {
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

  receiveMessage: function (msg) {
    if (msg.message.action && msg.message.action === 'user_update_status') {
      this.registered.set({ status: msg.message.status })
      let div = document.getElementById('play-my-matches' + msg.message.id)
      if (div !== null) {
        if (msg.message.status === 'online') {
          div.style.backgroundColor = 'var(--primary-color)'
          div.style.cursor = 'pointer'
        } else {
          div.style.backgroundColor = '#C4C4C4'
          div.style.cursor = 'auto'
        }
      }
      div = document.getElementById('pastille' + msg.message.id)
      if (div !== null) {
        div.classList.remove('offline')
        div.classList.remove('ingame')
        div.classList.remove('online')
        div.classList.add(msg.message.status)
      }
      div = document.getElementById('status' + msg.message.id)
      if (msg.message.status === 'online') {
        div.innerHTML = 'ONLINE'
      } else if (msg.message.status === 'offline') {
        div.innerHTML = 'OFFLINE'
      } else {
        div.innerHTML = 'IN GAME'
      }

      div = document.getElementById('slide-show' + msg.message.id)
      if (msg.message.status === 'ingame') {
        div.setAttribute('src', './icons/slideshow-ingame.svg')
      } else {
        div.setAttribute('src', './icons/slideshow.svg')
      }
    }
  },

  destroy: function () {
    clearInterval(this.x)
  }
})
