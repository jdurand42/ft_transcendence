export const Guild = Backbone.Model.extend({
  defaults: {
    id: undefined,
    name: undefined,
    anagram: undefined,
    owner_id: undefined,
    score: undefined,
    oauthService: undefined,
    officers_ids: undefined,
    war_records: undefined
  },

  initialize: function (id) {
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
        console.log('Success while creating guild')
        console.log(response)
      },
      error: function (response) {
        console.log('error while creating guild')
        console.log(response)
      }
    })
  },

  leave: function (id) {
    return $.ajax({
      url: '/api/guilds/' + this.id + '/members/' + id,
      method: 'DELETE'
    })
  },

  sendInvitation: function (id) {
    return $.ajax({
      url: '/api/guilds/' + this.id + '/invitations',
      method: 'POST',
      data: { user_id: id }
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
