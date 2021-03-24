import { War } from '../models/warModel'

export const Wars = Backbone.Collection.extend({
    initialize: function () {
    },
    model: War,
    urlRoot: '/api/wars',
    url: function () {
      return this.urlRoot
    },
    fetchByGuildId: function (id) {
        return $.ajax({
            url: this.urlRoot + '?guild_id=' + id,
            method: 'GET'
        })
    }
})
