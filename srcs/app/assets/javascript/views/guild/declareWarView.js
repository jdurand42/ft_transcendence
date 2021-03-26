import { Guild } from '../../models/guildModel'
import { Wars } from '../../collections/warCollection'

export const DeclareWar = Backbone.View.extend({
  initialize: function (options) {
    this.fromId = options.fromId
    this.onId = options.onId
    this.fromGuild = new Guild({ id: this.fromId })
    this.onGuild = new Guild({ id: this.onId })
    this.fromWars = new Wars({ id: this.fromId })
    this.onWars = new Wars({ id: this.onId })

    const fetchGuilds = async () => {
      const response1 = this.fromGuild.fetch()
      const response2 = this.onGuild.fetch()
      const response3 = this.fromWars.fetch()
      const response4 = this.onWars.fetch()
      await response1 && await response2 && await response3 && await response4
      this.render()
    }
    fetchGuilds()
    this.context = {}
  },
  el: $('#app'),

  render: function () {
    this.templateWarSchedule = Handlebars.templates.warSchedule

    this.fromWars.sort()
    this.onWars.sort()

    this.context.fromName = this.fromGuild.get('name')
    this.context.onName = this.onGuild.get('name')

    this.updateContextWarCalendar()

    const templateData = this.templateWarSchedule(this.context)
    this.$el.html(templateData)
    return this
  },

  updateContextWarCalendar: function () {
    const now = new Date()
    this.context.fromWars = []
    for (let i = 0; i < this.fromWars.length; i++) {
      const startDate = new Date(this.fromWars.at(i).get('war_start'))
      const endDate = new Date(this.fromWars.at(i).get('war_end'))

      if (startDate > now) {
        this.context.fromWars.push(JSON.parse(JSON.stringify(this.fromWars.at(i))))
        const length = this.context.fromWars.length - 1
        this.context.fromWars[length].startDay = this.getDay(startDate.getDay())
        this.context.fromWars[length].startDate = startDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' })
        this.context.fromWars[length].startHours = startDate.getHours()
        this.context.fromWars[length].startMin = startDate.getMinutes()
        this.context.fromWars[length].endDay = this.getDay(endDate.getDay())
        this.context.fromWars[length].endDate = endDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' })
        this.context.fromWars[length].endHours = endDate.getHours()
        this.context.fromWars[length].endMin = endDate.getMinutes()
      }
    }
    this.context.onWars = []
    for (let i = 0; i < this.onWars.length; i++) {
      const startDate = new Date(this.onWars.at(i).get('war_start'))
      const endDate = new Date(this.onWars.at(i).get('war_end'))
      if (startDate > now) {
        this.context.onWars.push(JSON.parse(JSON.stringify(this.onWars.at(i))))
        const length = this.context.onWars.length - 1
        this.context.onWars[length].startDay = this.getDay(startDate.getDay())
        this.context.onWars[length].startDate = startDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' })
        this.context.onWars[length].startHours = startDate.getHours()
        this.context.onWars[length].startMin = startDate.getMinutes()
        this.context.onWars[length].endDay = this.getDay(endDate.getDay())
        this.context.onWars[length].endDate = endDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' })
        this.context.onWars[length].endHours = endDate.getHours()
        this.context.onWars[length].endMin = endDate.getMinutes()
      }
    }
  },

  getDay: function (day) {
    switch (day) {
      case 0:
        return 'Sun'
      case 1:
        return 'Mon'
      case 2:
        return 'Tue'
      case 3:
        return 'Wed'
      case 4:
        return 'Thu'
      case 5:
        return 'Fri'
      case 6:
        return 'Sat'
    }
  }
})
