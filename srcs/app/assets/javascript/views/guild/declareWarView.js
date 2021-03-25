export const DeclareWar = Backbone.View.extend({
  initialize: function (options) {
    this.fromId = options.fromId
    this.onId = options.onId
    this.context = {}
    this.render()
  },
  el: $('#app'),
  render: function () {
    this.templateWarSchedule = Handlebars.templates.warSchedule

    this.context.fromName = '42'
    this.context.onName = 'Warrior'

    const templateData = this.templateWarSchedule(this.context)
    this.$el.html(templateData)
    return this
  }
})
