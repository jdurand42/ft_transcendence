import { FetchAPI } from '../services/fetchAPI'
import { SuperHeaders } from '../services/headers'

export const User = Backbone.Model.extend({
  defaults: {
    email: undefined,
    admin: undefined,
    first_login: undefined,
    guild_id: undefined,
    image_url: undefined,
    ladder_games_lost: undefined,
    ladder_games_won: undefined,
    ladder_id: 0,
    nickname: undefined,
    status: undefined,
    two_factor: false,
    uid: undefined,
    created_at: undefined,
    updated_at: undefined,
    id: undefined,
    friends: [],
    ignores: [],
    score: undefined
  },

  initialize: function (url) {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },

  urlRoot: '/api/users/',

  url: function () {
    if (this.id !== undefined) {
      return this.urlRoot + this.id
    }
    if (this.avatar !== undefined) {
      return this.urlRoot + this.id + '/avatar'
    }
    return this.urlRoot
  },

  fetchUser: function (userId) {
    return this.fetch({
      url: this.urlRoot + userId,
      success: function (response) {
      },
      error: function (errorResponse) {
      }
    })
  },

  saveNickname: function (nickname) {
    this.set({ nickname: nickname })
    return this.save({ nickname: this.get('nickname') }, {
      patch: true,
      success: function (response) {
      },
      error: function (data, statusText) {
      }
    })
  },

  saveImage: async function (data) {
    const headers = new Headers()
    headers.append('access-token', window.localStorage.getItem('access-token'))
    headers.append('uid', window.localStorage.getItem('uid'))
    headers.append('client', window.localStorage.getItem('client_id'))
    headers.append('accept', 'application/json')
    const url = this.urlRoot + this.id + '/avatar'
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: data
    })
    const json = await response.json()
    return json
  },

  saveFirstLogin: function (firstLogin) {
    this.set({ first_login: firstLogin })
    this.save({ first_login: firstLogin }, { patch: true })
  },

  saveTwoFactor: function (twoFactor) {
    this.set({ two_factor: twoFactor })
    this.save({ two_factor: twoFactor }, { patch: true })
  },

  updateBanned: function (banned) {
    this.set({ banned: banned })
    this.save({ banned: banned }, { patch: true })
  },

  setAsWebsiteAdmin: function (admin) {
    this.set({ admin: admin })
    this.save({ admin: admin }, { patch: true })
  },

  block: function (id) {
    const header = this.superHeaders.getHeaders()
    const url = '/api/users/' + this.id + '/ignores'
    fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        ignored_id: id
      })
    })
  },
  unblock: function (id) {
    const header = this.superHeaders.getHeaders()
    const url = '/api/users/' + this.id + '/ignores/' + id
    fetch(url, {
      method: 'DELETE',
      headers: header
    })
  },

  follow: function (id) {
    return $.ajax({
      url: '/api/users/' + this.id + '/friends',
      method: 'POST',
      data: { friend_id: id }
    })
  },

  unfollow: function (id) {
    return $.ajax({
      url: '/api/users/' + this.id + '/friends/' + id,
      method: 'DELETE'
    })
  }
})
