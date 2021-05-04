/* eslint-disable eqeqeq */
/* import { AchivementsView } from './achivementsView.js'
import { EditProfileView } from './editProfileView.js'
import { MatchHistoryView } from './matchHistoryView.js'
import { FriendsView } from './friendsView.js'
import { ProfileOverviewView } from './overviewView.js'
import { NoGuildView } from './noGuildView.js' */

import { Achievements } from '../../collections/achievements'
import { GameRecords } from '../../collections/gameRecords'
import { Users } from '../../collections/usersCollection'
import { Guild } from '../../models/guildModel'
import { User } from '../../models/userModel'

export const ProfileView = Backbone.View.extend({
  events: {
    'click #matchHistory': 'loadMatchHistory',
    'click #friends': 'loadFriends',
    'click #profileGuild': 'loadGuild',
    'click #achievements': 'loadAchievements',
    'click #leaveGuild': 'leaveGuild',
    'click #manageGuild': function (e) { Backbone.history.navigate('manage_guild', { trigger: true }) },
    'click #followUser': function (e) { this.followUser(e) },

    //    'click #followAnUser': function (e) { this.followAnUser(e) },
    'click #sendInvitation': 'sendInvitation',
    'click #playUser': 'playUser',
    'change input[type=file]': 'loadFile',
    'click #matches-filter': 'openFilters',
    'click #All': 'allMatches',
    'click #Tournament': 'tournamentMatches',
    'click #Duel': 'duelMatches',
    'click #Ladder': 'ladderMatches',
    'click #follow': 'follow'
  },

  initialize: function () {
    this.headerView = this.model.get('headerView').get('obj')
    this.guilds = this.model.get('guilds').get('obj')
    this.users = this.model.get('users').get('obj')
    this.ladders = this.model.get('ladders').get('obj')
    this.gameRecords = this.model.get('gameRecords').get('obj')
    this.achievements = this.model.get('achievements').get('obj')
    this.socket = this.model.get('socket').get('obj')
    this.notifView = this.model.get('notifView').get('obj')
    this.myAchievements = new Achievements()
    this.userId = Number(this.model.get('userLoggedId'))
    this.myTournamentGames = new GameRecords()
    this.myLadderGames = new GameRecords()
    this.myDuelGames = new GameRecords()
    this.membersGuild = new Users()
    this.guild = undefined
    this.userLogged = new User()
    this.id = Number(this.id)

    this.socket.updateContext(this, this.notifView)

    // this.myWarGames = new GameRecords()
    if (this.id === null) {
      this.id = this.userId
    }

    this.$el.html(Handlebars.templates.profile({}))
    const fetchUsers = async () => {
      try {
        await this.userLogged.fetchUser(this.id)
      } catch (e) {
        this.$el.find('#profileContent').html(Handlebars.templates.contentNotFound({}))
        return
      }
      const response1 = this.users.fetch()
      const response2 = this.ladders.fetch()
      const response3 = this.myTournamentGames.fetchMyGames(this.id, 'tournament')
      const response4 = this.myLadderGames.fetchMyGames(this.id, 'ladder')
      const response5 = this.myDuelGames.fetchMyGames(this.id, 'duel')
      const response6 = this.myAchievements.fetchByUserId(this.id)
      const response7 = this.achievements.fetch()
      this.guilds.fetch()
      await response1 && await response2 && await response3 && await response4 && await response5
      const response8 = this.membersGuild.fetchByGuildId(this.users.get(this.id).get('guild_id'))
      if (this.users.get(this.id).get('guild_id') != undefined) {
        this.guild = new Guild({ id: this.users.get(this.id).get('guild_id') })
        this.guild.fetch()
      }
      this.users.sort()
      this.render()
    }
    fetchUsers()
  },
  el: $('#app'),

  render: function () {
    Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
      switch (operator) {
        case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this)
        case '==':
          return (v1 === v2) ? options.fn(this) : options.inverse(this)
        default:
          return options.inverse(this)
      }
    })
    // if (isNaN(this.id) || this.id > this.users.length || this.id <= 0) {
    //   this.$el.find('#profileContent').html(Handlebars.templates.contentNotFound({}))
    //   return this
    // }
    this.renderPannel()
    this.loadMatchHistory()
    return this
  },

  loadFile: function (event) {
    this.fileObject = new FormData()
    const image = document.getElementById('profilePicture')
    image.src = URL.createObjectURL(event.target.files[0])
    const changeImage = async () => {
      try {
        await fetch(image.src)
          .then((response) => response.blob())
          .then((blob) => {
            this.fileObject.append('avatar',
              new File([blob], event.target.files[0].name, {
                type: event.target.files[0].type
              }))
          })
        const response = await this.users.get(this.userId).saveImage(this.fileObject)
        if (response.errors) { throw response }
        await this.users.get(this.userId).fetch()
        this.headerView.render('#profile/' + this.userId, this.users.get(this.userId).get('image_url'))
      } catch (e) {
        document.getElementById('profilePicture').src = this.users.get(this.userId).get('image_url')
      }
    }
    changeImage()
  },

  openFilters: function (e) {
    if (document.getElementById('matches-list').style.display === 'none') {
      const dropList = document.getElementById('matches-list')
      function getOffset (el) {
        let _x = 0
        let _y = 0
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
          _x += el.offsetLeft - el.scrollLeft
          // _y += el.offsetTop - el.scrollTop
          _y += el.offsetTop
          el = el.offsetParent
        }
        return { top: _y, left: _x }
      }
      const off = getOffset(e.currentTarget)
      dropList.style.top = e.pageY - 61
      dropList.style.position = 'absolute'
      dropList.style.left = off.left
      dropList.style.display = 'block'
    } else {
      document.getElementById('matches-list').style.display = 'none'
    }
  },

  ladderMatches: function () {
    this.matchHistory('Ladder')
  },

  tournamentMatches: function () {
    this.matchHistory('Tournament')
  },

  allMatches: function () {
    this.matchHistory('All')
  },

  duelMatches: function () {
    this.matchHistory('Duel')
  },

  loadMatchHistory: function () {
    this.$el.find('#profileSubNavBar').html(Handlebars.templates.profileSubNavBar({}))
    document.getElementById('friends').classList.remove('open')
    document.getElementById('achievements').classList.remove('open')
    document.getElementById('profileGuild').classList.remove('open')

    const div = document.getElementById('matchHistory')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())
    this.matchHistory('All')
  },

  loadFriends: function () {
    document.getElementById('matchHistory').classList.remove('open')
    document.getElementById('achievements').classList.remove('open')
    document.getElementById('profileGuild').classList.remove('open')

    const div = document.getElementById('friends')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())

    this.friends()
  },

  positionSquare: function (offsets) {
    document.getElementById('square').style.left = offsets.left - 24
  },

  loadAchievements: function () {
    document.getElementById('matchHistory').classList.remove('open')
    document.getElementById('profileGuild').classList.remove('open')
    document.getElementById('friends').classList.remove('open')

    const div = document.getElementById('achievements')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())

    this.achievementsView()
  },

  loadGuild: function () {
    document.getElementById('matchHistory').classList.remove('open')
    document.getElementById('achievements').classList.remove('open')
    document.getElementById('friends').classList.remove('open')

    const div = document.getElementById('profileGuild')
    div.classList.add('open')
    this.positionSquare(div.getBoundingClientRect())
    this.profileGuild()
  },

  renderPannel: async function () {
    const user = this.users.get(this.id)
    console.log(user)

    let slideShow
    if (user.get('status') === 'ingame') {
      slideShow = './icons/slideshow-ingame.svg'
    } else {
      slideShow = './icons/slideshow.svg'
    }

    // const rank = (el) => el.get('id') == this.id
    let index = this.users.findIndex(el => el.get('id') == this.id)
    index += 1

    const context = {
      trophy: 'icons/' + this.ladders.get(user.get('ladder_id')).get('name').toLowerCase() + '.svg',
      rank: index,
      generalRank: index,
      totalRank: this.users.length,
      // totalLeagueRank: this.users.length,
      // ratio: Math.round(user.get('ladder_games_won') / (user.get('ladder_games_won') + user.get('ladder_games_lost')) * 100 * 100) / 100,
      score: user.get('score'),
      victories: user.get('ladder_games_won'),
      totalGames: user.get('ladder_games_won') + user.get('ladder_games_lost'),
      nickname: user.get('nickname'),
      image_url: user.get('image_url'),
      status: user.get('status').toUpperCase(),
      status_class: user.get('status'),
      id: user.get('id'),
      slide_show: slideShow

    }
    // if (isNaN(context.ratio)) {
    //   context.ratio = 0
    // }

    if (this.id === this.userId) {
      context.myPage = true
    }
    this.$el.find('#profilePannel').html(Handlebars.templates.profilePannel(context))

    if (user.get('status') === 'ingame') {
      const games = new GameRecords()
      await games.fetchGameByUserIdStatus(user.get('id'), 'inprogress')
      const game = games.at(0)
      const div = document.getElementById('status-container' + user.get('id'))
      div.setAttribute('onclick', 'window.location=\'#game/' + game.get('id') + '\';')
      div.style.cursor = 'pointer'
    }

    if (this.id != this.userId) {
      this.renderProfileSubPannel()
    }
    // this.$el.find('#profilePictureContainer').html('<img id="profilePicture" src=\'' + this.users.get(this.id).get('image_url') + '\'></img>')
  },

  renderProfileSubPannel: function () {
    this.$el.find('#profileButtons').html(Handlebars.templates.profileButtons())
    const friends = this.users.get(this.userId).get('friends')
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].friend_id == this.id) {
        const div = document.getElementById('followUser')
        div.innerHTML = '<div>Unfollow</div>'
        div.style.backgroundColor = '#C4C4C4'
        div.style.border = '2px solid #606060'

        // document.getElementById('followUser').style = 'background: #DDD7D7;border: 2px solid #606060;box-sizing: border-box;border-radius: 10px;'
        return
      }
    }
    // document.getElementById('followUser').style = ''
  },

  follow: function (e) {
    const userId = Number(e.currentTarget.getAttribute('for'))
    let newFriends = this.userLogged.get('friends')
    if (e.currentTarget.className === 'follow') {
      e.currentTarget.classList.remove('follow')
      e.currentTarget.classList.add('unfollow')
      this.userLogged.follow(userId)
      newFriends.push({ friend_id: Number(userId) })
    } else {
      e.currentTarget.classList.remove('unfollow')
      e.currentTarget.classList.add('follow')
      this.userLogged.unfollow(userId)
      newFriends = newFriends.slice().filter(el => el.friend_id != userId)
    }
    this.userLogged.set({ friends: newFriends })
  },

  pushDone: function (context, game) {
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
    const opponent1 = this.users.get(opponentId1)
    const opponent2 = this.users.get(opponentId2)
    context[length].opponent1 = opponent1.get('nickname')
    context[length].avatarOpponent1 = opponent1.get('image_url')
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

  matchHistory: function (type) {
    const template = Handlebars.templates.matchHistory
    const context = {}
    context.match = []
    context.myDone = []
    context.type = type

    context.match.push({ type: 'All' })
    context.match.push({ type: 'Ladder' })
    context.match.push({ type: 'Duel' })
    context.match.push({ type: 'Tournament' })

    if (type === 'All' || type === 'Ladder') {
      for (let i = 0; i < this.myLadderGames.length; i++) {
        this.pushDone(context.myDone, this.myLadderGames.at(i))
      }
    }
    if (type === 'All' || type === 'Duel') {
      for (let i = 0; i < this.myDuelGames.length; i++) {
        this.pushDone(context.myDone, this.myDuelGames.at(i))
      }
    }
    if (type === 'All' || type === 'Tournament') {
      for (let i = 0; i < this.myTournamentGames.length; i++) {
        this.pushDone(context.myDone, this.myTournamentGames.at(i))
      }
    }

    context.nbMatches = context.myDone.length

    this.$el.find('#profileContent').html(Handlebars.templates.matchHistory(context))
  },

  friends: async function () {
    let friends
    if (this.id === this.userId) {
      friends = this.userLogged.get('friends')
    } else {
      friends = this.users.get(this.id).get('friends')
    }
    const userFriends = this.userLogged.get('friends')
    const context = { friends: [], friendsNumber: friends.length }
    for (let i = 0; i < friends.length; i++) {
      // context.friends.push(JSON.parse(JSON.stringify(this.users.get(friends[i].friend_id))))
      const obj = await this.updateContextForlist(JSON.parse(JSON.stringify(this.users.get(friends[i].friend_id))), i)
      context.friends.push(obj)
      // context.friends[i] = this.updateContextForlist(context.friends[i])
      if (this.id === this.userId) {
        context.friends[i].myPage = true
      } else {
        context.friends[i].myPage = false
      }
      if (userFriends.some(e => e.friend_id === friends[i].friend_id)) {
        context.friends[i].isFriend = true
      } else {
        context.friends[i].isFriend = false
      }
      if (this.users.get(friends[i].friend_id).get('guild_id')) {
        context.friends[i].guild = JSON.parse(JSON.stringify(this.guilds.get(this.users.get(friends[i].friend_id).get('guild_id'))))
      } else {
        context.friends[i].guild = false
      }
    }

    // sort
    context.friends = context.friends.sort(function (a, b) {
      if (a.score < b.score) { return 1 }
      if (a.score > b.score) { return -1 }
      return 0
    })
    for (let i = 0; i < context.friends.length; i++) {
      context.friends[i].rank = i + 1
    }

    this.$el.find('#profileContent').html(Handlebars.templates.friends(context))
    return this
  },

  updateContextForlist: async function (user, i) {
    user.trophy = 'icons/' + this.ladders.get(user.ladder_id).get('name').toLowerCase() + '.svg'
    user.rank = i + 1
    user.generalRank = '42'
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
    user.follow = this.users.get(this.userId).get('friends').some(el => el.friend_id === user.id)
    if (user.guild_id) {
      user.guildName = this.guilds.get(user.guild_id).get('name')
    }
    return user
  },

  achievementsView: function () {
    const context = {}
    context.achievement = []

    const getIcon = function (id) {
      if (id === 1) {
        return './icons/tournament.svg'
      } else if (id === 2) {
        return './icons/war.svg'
      } else if (id === 3) {
        return './icons/war.svg'
      } else if (id === 4) {
        return './icons/100.svg'
      } else if (id === 5) {
        return './icons/silver_achievement.svg'
      } else if (id === 6) {
        return './icons/gold_achievement.svg'
      } else if (id === 7) {
        return './icons/platinum_achievement.svg'
      } else if (id === 8) {
        return './icons/diamond_achievement.svg'
      } else if (id === 9) {
        return './icons/padlock.svg'
      }
    }

    for (let i = 0; i < this.myAchievements.length; i++) {
      context.achievement.push(JSON.parse(JSON.stringify(this.myAchievements.at(i))))
      context.achievement[i].icon = getIcon(this.myAchievements.at(i).get('id'))
      context.achievement[i].achieved = 'achieved'
    }
    for (let i = 0; i < this.achievements.length; i++) {
      if (this.myAchievements.some(el => el.get('id') === this.achievements.at(i).get('id')) === false) {
        context.achievement.push(JSON.parse(JSON.stringify(this.achievements.at(i))))
        const length = context.achievement.length - 1
        context.achievement[length].icon = getIcon(this.achievements.at(i).get('id'))
        context.achievement[length].achieved = 'not-achieved'
      }
    }
    this.$el.find('#profileContent').html(Handlebars.templates.achievements(context))
  },

  profileGuild: async function () {
    let guild
    if (this.users.get(this.id).get('guild_id')) {
      guild = this.guild
    } else if (this.userId == this.id) {
      this.$el.find('#profileContent').html(Handlebars.templates.userLoggedNoGuild(JSON.parse(JSON.stringify(this.users.get(this.id)))))
      return
    } else {
      this.$el.find('#profileContent').html(Handlebars.templates.userNoGuild(JSON.parse(JSON.stringify(this.users.get(this.id)))))
      if (this.users.get(this.userId).get('guild_id') &&
      (this.guilds.get(this.users.get(this.userId).get('guild_id')).get('owner_id').includes(parseInt(this.userId)) ||
      this.guilds.get(this.users.get(this.userId).get('guild_id')).get('owner_id').includes(parseInt(this.officer_ids)))) {
        this.$el.find('#sendInvitationButton').html('<button id=\"sendInvitation\">Send an Invitation to your guild</button>')
      }
      return
    }

    const context = {
      guild: JSON.parse(JSON.stringify(this.guild)),
      members: [],
      membersNumber: 0
    }

    for (let i = 0; i < this.membersGuild.length; i++) {
      const member = this.membersGuild.at(i)

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

    context.membersNumber = this.membersGuild.length

    this.$el.find('#profileContent').html(Handlebars.templates.profileGuild(context))
    if (this.userId == this.id) {
      if (guild.get('owner_id')[0] == this.userId || guild.get('officer_ids').some(el => el == this.userId) === true) {
        this.$el.find('#manageGuildButton').html('<button id="manageGuild">Manage guild</button>')
      }
      this.$el.find('#leaveGuildButton').html('<button id="leaveGuild">Leave guild</button>')
    }
  },

  leaveGuild: function () {
    if (this.users.get(this.userId).get('guild_id') == null) {
      return
    }
    const leave = async () => {
      const guild = this.guilds.get(this.users.get(this.id).get('guild_id'))
      const response = await guild.leave(this.id)
      if (response.status !== 204) {
        alert(response.error)
      }
      this.users.get(this.userId).set({ guild_id: null })
      this.$el.find('#profileContent').html(Handlebars.templates.userLoggedNoGuild(JSON.parse(JSON.stringify(this.users.get(this.userId)))))
    }
    leave()
  },

  requestDuel: async function () {
    return await $.ajax({
      url: '/api/games/',
      data: { mode: 'duel', opponent_id: this.id },
      method: 'POST',
      context: this,
      success: function (response) {
        // this.gameId = response.id
        // navigate to game/{{this.gameId}}
        console.log('game successfully created')
        console.log('Item game created in requestDuel: ')
        console.log(response)
      }
    })
  },

  playUser: function () {
    // not implemented yet
    try {
      this.requestDuel()
    } catch (e) {
      console.log(e)
      // gérer dans la notif l'erreur? genre un print error dedans?
    }
  },

  spectateUser: function () {
    // check if online
    // check if same user
    // get user game
    // go spectate
    const getGame = async () => {
      try {
        // pending ou en cours?
        const game = this.games.fetchInProgressGame(this.id)
        await game
        console.log(game)
        if (game) {
          window.location.href = '#game/' + game.get('id')
        }
      } catch (e) {
        console.log(e)
      }
    }
    getGame()
  },

  followUser: function (e) {
    if (e.target.value) {
      this.tid = e.target.value
    } else {
      this.tid = this.id
    }
    const follow = async () => {
      try {
        const friends = this.users.get(this.userId).get('friends')
        for (let i = 0; i < friends.length; i++) {
          if (friends[i].friend_id == this.tid) {
            const response = await this.users.get(this.userId).unfollow(this.tid)
            friends.splice(friends.indexOf({ friend_id: parseInt(this.tid) }), 1)
            this.users.get(this.userId).set({ friends: friends })
            const div = document.getElementById('followUser')
            div.innerHTML = 'Follow'
            div.style.backgroundColor = 'var(--primary-color)'
            div.style.border = '0px'
            // e.target.style = ''
            return
          }
        }
        const response = await this.users.get(this.userId).follow(this.tid)
        friends.push({ friend_id: parseInt(this.tid) })
        this.users.get(this.userId).set({ friends: friends })
        const div = document.getElementById('followUser')
        div.innerHTML = 'Unfollow'
        div.style.backgroundColor = '#C4C4C4'
        div.style.border = '2px solid #606060'
        // e.target.style = 'background: #DDD7D7;border: 2px solid #606060;box-sizing: border-box;border-radius: 10px;'
      } catch (e) {
      }
    }
    follow()
  },

  sendInvitation: function () {
    if (!this.users.get(this.userId).get('guild_id') || this.id === this.userId) { return }
    const guild = this.guilds.get(this.users.get(this.userId).get('guild_id'))
    const sendInvitation = async () => {
      try {
        const response = await guild.sendInvitation(this.id)
        this.$el.find('#sendInvitationButton').html('<div class="invitation">You have sent an invitation</div>')
      } catch (e) {
        document.getElementById('error-message').style.display = 'block'
        document.getElementById('error-message').innerHTML = e.responseJSON.errors
      }
    }
    sendInvitation()
  },

  checkLadderId: function () {
    if (this.users.get(this.id).get('ladder_id') === null) {
      this.users.get(this.id).set({ ladder_id: 1 })
    }
  },

  receiveMessage: function (msg) {
    const channelId = Number(JSON.parse(msg.identifier).id)
    this.users.get(msg.message.id).set({ status: msg.message.status })
    if (msg.message.id === this.userId) {
      this.userLogged.set({ status: msg.message.status })
    }

    try {
      let div = document.getElementById('pastille' + msg.message.id)
      div.classList.remove('offline')
      div.classList.remove('ingame')
      div.classList.remove('online')
      div.classList.add(msg.message.status)

      div = document.getElementById('status' + msg.message.id)
      if (msg.message.status === 'online') {
        div.innerHTML = 'ONLINE'
      } else if (msg.message.status === 'offline') {
        div.innerHTML = 'OFFLINE'
      } else {
        div.innerHTML = 'INGAME'
      }

      div = document.getElementById('slide-show' + msg.message.id)
      if (msg.message.status === 'ingame') {
        div.setAttribute('src', './icons/slideshow-ingame.svg')
      } else {
        div.setAttribute('src', './icons/slideshow.svg')
      }

      if (msg.message.status === 'ingame') {
        div = document.getElementById('status-container' + msg.message.id)
        div.setAttribute('onclick', 'window.location=\'#game/' + msg.message.game_id + '\';')
        div.style.cursor = 'pointer'
      }
    } catch (e) {}
  }
})
