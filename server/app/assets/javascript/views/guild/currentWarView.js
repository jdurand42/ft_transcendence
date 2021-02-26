export const CurrentWarView = Backbone.View.extend({
  el: $('#app'),
  initialize: function () {
    this.template = Handlebars.templates.currentWar
    this.guilds = this.model.get('guilds').get('obj')
    this.listenTo(this.guilds, 'sync', function () { this.render() }, this)
  },
  render: function () {
    const context = JSON.parse(JSON.stringify(this.guilds.get(this.id)))
    this.$el.html(this.template(context))
    return this
  }
})
