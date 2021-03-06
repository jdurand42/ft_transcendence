import { SuperHeaders } from '../services/headers'

export const ChatModel = Backbone.Model.extend({
  defaults: {
    id: undefined,
    name: undefined,
    privacy: undefined,
    owner_id: undefined,
    admin_ids: undefined,
    participant_ids: undefined,
    timeout_ids: undefined,
    ban_ids: undefined
  },
  initialize: function () {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },
  urlRoot: '/api/chats/',
  url: function () {
    if (this.id !== undefined) {
      return this.urlRoot + this.id
    }
    return this.urlRoot
  },
  createChannel: function (name, participantIds, privacy = 'private') {
    return this.save({
      name: name,
      privacy: privacy,
      participant_ids: participantIds,
      success: function (response) {
      },
      error: function (response) {
      }
    })
  },
  leaveRoom: async function () {
    const url = this.urlRoot + this.id + '/participants'
    return fetch(url, {
      method: 'DELETE',
      headers: this.headers
    })
  },
  subscribeChannel: async function (password = '') {
    const url = this.urlRoot + this.id + '/participants?password=' + password
    return $.ajax({
      url: url,
      method: 'POST'
    })
  },
  invitesToChannel: function (participantsIds) {
    const url = this.urlRoot + this.id + '/invites'
    fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        participant_ids: participantsIds
      })
    })
  },
  deleteDefinitivelyChannel: function () {
    this.destroy()
  },
  appointAsAdmin: function (userId) {
    const url = this.urlRoot + this.id + '/admins/' + userId
    fetch(url, {
      method: 'POST',
      headers: this.headers
    })
  },
  removeAdminRights: function (userId) {
    const url = this.urlRoot + this.id + '/admins/' + userId
    fetch(url, {
      method: 'DELETE',
      headers: this.headers
    })
  },
  banUser: function (value, userId) {
    const url = this.urlRoot + this.id + '/bans'
    fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        user_id: userId,
        duration: value
      })
    })
  },
  muteUser: function (value, userId) {
    const url = this.urlRoot + this.id + '/mutes'
    fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        user_id: userId,
        duration: value
      })
    })
  },
  kickUser: function (userId) {
    const url = this.urlRoot + this.id + '/participants/' + userId
    fetch(url, {
      method: 'DELETE',
      headers: this.headers
    })
  },
  updatePrivacy: function (privacy, password) {
    return this.save({
      privacy: privacy,
      password: password
    },
    { patch: true })
  },
  sendMessage: async function (message) {
    const url = this.urlRoot + this.id + '/messages'
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        content: message
      })
    })
  },
  getMessages: async function () {
    const url = this.urlRoot + this.id + '/messages'
    let data
    const response = await fetch(url, {
      headers: this.headers
    })
    const json = await response.json()
    return json
  }
})
