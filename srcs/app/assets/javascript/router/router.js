// views
import { HomeView } from '../views/home_view.js'
import { PongView } from '../views/pong/pong_view.js'
import { HeaderView } from '../views/header_view'
import { LeaderboardView } from '../views/leaderboard/leaderboardView.js'
import { TournamentsView } from '../views/tournaments/tournamentsView.js'
import { OauthView } from '../views/oauth/oauthView.js'
import { GuildsView } from '../views/guild/guildsView.js'
import { FirstConnexionView } from '../views/oauth/firstConnexionView.js'
import { TwoFactorView } from '../views/oauth/twoFactorView.js'
import { SearchView } from '../views/search/searchView.js'
import { ChatView } from '../views/chatView'
import { ManageGuildView } from '../views/guild/manageGuildView.js'
import { AdminView } from '../views/admin/adminView.js'
import { NotifView } from '../views/notifView'

// models
import { User } from '../models/userModel'
import { Guild } from '../models/guild_model.js'

// controlers
import { ProfileController } from '../views/profile/profileController.js'
import { GuildController } from '../views/guild/guildController.js'

// models and collection
import { Guilds } from '../collections/guilds_collection.js'
import { Users } from '../collections/usersCollection.js'
import { Ladders } from '../collections/laddersCollection.js'
import { Wrapper } from '../models/wrapper.js'
import { SuperWrapper } from '../collections/superWrapper.js'
import { Channels } from '../collections/channels'
import { GameRecords } from '../collections/gameRecords.js'
import { Achievements } from '../collections/achievements.js'

// services
import { OauthService } from '../services/oauthService.js'
import { MyWebSocket } from '../services/websocket'

// Views for test only
import { TestView } from '../views/testView.js'
import { FetchAPI } from '../services/fetchAPI.js'

export const Router = Backbone.Router.extend({
  initialize: function () {
    this.userLogged = new User()
    this.headerView = new HeaderView({ model: this.userLogged })
    this.profileController = new ProfileController()
    this.guildController = new GuildController()
    this.superWrapper = undefined
    this.oauthService = new OauthService()
    this.chatView = undefined
    this.socket = undefined
    this.users = new Users()
    this.notifView = new NotifView({ collection: this.users })
    this.view = undefined
  },

  routes:
  {
    admin: 'admin_view',
    home: 'home_view',
    pong: 'pong_view',
    'profile/(:id)': 'profile_view',
    'profile/(:id)/': 'profile_view',
    guilds: 'guilds_view',
    'guild/(:id)': 'guild_view',
    'guild/(:id)/': 'guild_view',
    'chat/:id(/:page)': 'chat_view',
    chat: 'chat_view',
    leaderboard: 'leaderboard_view',
    tournaments: 'tournaments_view',
    manage_guild: 'manage_guild_view',
    connexion: 'connexion',
    exit: 'exit',
    firstConnexion: 'firstConnexion_view',
    two_factor_connexion: 'two_factor_connexion',
    twoFactor: 'twoFactor_view',
    'search(/:item)': 'search_view',
    'search(/:item)/': 'search_view',
    '': 'oauth_view'
  },

  connexion: function (url) {
    // Two-Factor redirection
    this.urlParams = new URLSearchParams(window.location.search)
    if (this.urlParams.get('two_factor')) {
      window.localStorage.setItem('user_id', this.urlParams.get('user_id'))
      this.navigate('#twoFactor', { trigger: true })
      return
    }

    const fetchUser = async () => {
      this.oauthService.setAjaxEnvironnement()
      console.log(this.users)
      await this.setUpUser(this.oauthService, this.userLogged, this.users)
      this.socket = new MyWebSocket(window.localStorage.getItem('user_id'), 'UserChannel', this.notifView)
      if (this.userLogged.get('first_login')) { this.navigate('#firstConnexion', { trigger: true }) } else {
        this.navigate('#home', { trigger: true })
      }
    }
    fetchUser()
  },

  setUpUser: async (oauthService, userLogged, users) => {
    oauthService.ajaxSetup()
    users.fetch()
    await userLogged.fetchUser(window.localStorage.getItem('user_id'))
  },

  two_factor_connexion: function (url) {
    const fetchUser = async () => {
      await this.setUpUser(this.oauthService, this.userLogged, this.users)
      this.socket = new MyWebSocket(window.localStorage.getItem('user_id'), 'UserChannel', this.notifView)
      this.navigate('#home', { trigger: true })
    }
    fetchUser()
  },

  accessPage: function (url) {
    if (this.view != undefined) { this.view.undelegateEvents() }
    if (window.localStorage.getItem('access-token') === null) {
      this.oauth_view()
      return 1
    } else if (performance.navigation.type >= 0 && performance.navigation.type <= 2) {
      const fetchUser = async () => {
        await this.setUpUser(this.oauthService, this.userLogged, this.users)
        if (url !== 'firstConnexion' || url !== 'twoFactor') { this.headerView.render() }
      }
      fetchUser()
    }
    this.socket = new MyWebSocket(window.localStorage.getItem('user_id'), 'UserChannel', this.notifView)
  },

  firstConnexion_view: function () {
    if (this.accessPage('firstConnexion')) { return }
    const firstConnexionView = new FirstConnexionView({ model: this.userLogged })
  },

  twoFactor_view: function () {
    const twoFactorView = new TwoFactorView()
  },

  exit: function () {
    const fetchAPI = new FetchAPI()
    console.log(this.socket)
    this.socket.getSocket().close()
    fetchAPI.exit()
    window.localStorage.clear()
    this.oauth_view()
  },

  admin_view: function () {
    const adminView = new AdminView({ model: this.loadWrapper() })
  },

  oauth_view: function (url) {
    if (this.headerView !== undefined) { this.headerView.remove() }
    history.replaceState({}, null, '/')
    const oauthView = new OauthView()
  },

  home_view: function (url) {
    if (this.accessPage()) { return }
    this.headerView.render()
    const homeView = new HomeView()
  },

  pong_view: function (url) {
    if (this.accessPage()) { return }
    const pongView = new PongView()
  },

  profile_view: function (id, page) {
    if (this.accessPage()) { return }
    console.log('profile view')
    if (this.view != undefined) { this.view.undelegateEvents() }
    this.view = this.profileController.loadView(id, this.loadWrapper())
  },

  guilds_view: function () {
    if (this.accessPage()) { return }
    if (this.view != undefined) { this.view.undelegateEvents() }
    this.view = new GuildsView({ model: this.loadWrapper() })
  },

  guild_view: function (id, page) {
    if (this.accessPage()) { return }
    this.guildController.loadView(id, this.loadWrapper())
  },

  chat_view: function (id, page) {
    if (this.accessPage()) { return }
    const chatView = new ChatView()
  },

  leaderboard_view: function () {
    if (this.accessPage()) { return }
    const leaderboardView = new LeaderboardView({ model: this.loadWrapper() })
  },

  tournaments_view: function () {
    if (this.accessPage()) { return }
    const tournamentsView = new TournamentsView({ model: this.loadWrapper() })
  },

  test_view: function () {
    if (this.accessPage()) { return }
    const testView = new TestView({ model: this.loadWrapper() })
  },

  search_view: function (item) {
    if (this.accessPage()) { }
    // let searchView
    // const searchView = new SearchView({ model: this.loadWraper(item) })
    // console.log(searchView.item)
  },

  manage_guild_view: function () {
    if (this.accessPage()) { }
    if (this.view != undefined) { this.view.undelegateEvents() }
    this.view = new ManageGuildView({ model: this.loadWrapper() })
  },

  loadWrapper: function () {
    return new SuperWrapper({
      users: new Wrapper({ obj: new Users() }),
      guilds: new Wrapper({ obj: new Guilds() }),
      ladders: new Wrapper({ obj: new Ladders() }),
      gameRecords: new Wrapper({ obj: new GameRecords() }),
      achievements: new Wrapper({ obj: new Achievements() }),
      userLoggedId: window.localStorage.getItem('user_id'),
      router: this
    })
  }

  // loadChannelWrapper: function () {
  //   const userId = window.localStorage.getItem('user_id')
  //   const superWrapper = new SuperWrapper({
  //     users: new Wrapper({ obj: new Users() }),
  //     myChannels: new Wrapper({ obj: new Channels() }),
  //     channels: new Wrapper({ obj: new Channels() })
  //   })
  //   superWrapper.get('myChannels').get('obj').fetchByUserId(userId)
  //   superWrapper.get('channels').get('obj').fetchAllChannels()
  //   return superWrapper
  // }
})
