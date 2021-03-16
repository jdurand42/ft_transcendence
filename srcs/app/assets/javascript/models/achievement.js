export const Achievement = Backbone.Model.extend({
  defaults: {
    id: undefined,
    name: undefined,
    desc: undefined
  },

  intialize: function () {

  },

  urlRoot: 'api/achievements',
  url: function () {
    if (this.id !== undefined) { return this.urlRoot + this.id }
    return this.urlRoot
  }

})
