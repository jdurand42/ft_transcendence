import { SuperHeaders } from '../services/headers'

export const Guild = Backbone.Model.extend({
  defaults: {
    id: undefined,
    name: undefined,
    anagram: undefined,
    owner_id: undefined,
    score: undefined,
    officer_ids: undefined,
    member_ids: undefined
  },

  initialize: function (id) {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },

  urlRoot: 'api/guilds/',
  url: function () {
    if (this.id !== undefined) { return this.urlRoot + this.id }
    return this.urlRoot
  },

  create: function (name, anagram) {
    return this.save({
      name: name,
      anagram: anagram,
      success: function (response) {
      },
      error: function (response) {
      }
    })
  },

  leave: async function (id) {
    const url = '/api/guilds/' + this.id + '/members/' + id
    const response = await fetch(url, {
      method: 'DELETE',
      headers: this.headers
    })
    const json = await response.json()
    return json
  },

  sendInvitation: function (id) {
    return $.ajax({
      url: '/api/guilds/' + this.id + '/invitations',
      method: 'POST',
      data: { user_id: id }
    })
  },

  refuseInvitation: function () {
    return $.ajax({
      url: this.urlRoot + this.id + '/invitations',
      method: 'DELETE'
    })
  },

  acceptInvitation: function (userId) {
    return $.ajax({
      url: this.urlRoot + this.id + '/members',
      method: 'POST',
      data: {
        user_id: userId
      }
    })
  }

})

// const guildsCollection = new Guilds()
// const guild = new Guild()

// async function fetchGuilds () {
//   await guild.fetch({
//     url: guild.urlRoot + '1',
//     success: function (response) {
//       console.log(response)
//     },
//     error: function (errorResponse) {
//       console.log('error')
//       console.log(errorResponse)
//     }
//   })
//   guildsCollection.add(guild)
// }

// fetchGuilds()

// into fetch after url
// type: 'post',
// contentType: 'application/json',
// data: JSON.stringify({
//  // Change `*****` and `#####` with your own credentials.
//  'appId': '*****',
//  'appKey': '#####',
//  'query': 'Starbucks OR frapp*',
//  'fields': [
//  'item_name',
//  'brand_name',
//  'nf_calories',
//  'nf_serving_weight_grams']
// }),
// reset: true,
