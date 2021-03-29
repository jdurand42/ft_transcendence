import { Guild } from '../../models/guildModel'
import { Wars } from '../../collections/warCollection'

export const DeclareWar = Backbone.View.extend({
  events: {
    'click .nextWarRules': 'nextWarRules',
    'click .prevWarTimes': 'prevWarTimes'
  },
  initialize: function (options) {
    this.templateWarRules = Handlebars.templates.warRules
    this.templateWarTimes = Handlebars.templates.warTimes
    this.startDate = undefined
    this.endDate = undefined

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
    this.fromWars.sort()
    this.onWars.sort()

    this.context.fromName = this.fromGuild.get('name')
    this.context.onName = this.onGuild.get('name')
    this.context.onId = this.onId
    this.context.winReward = '1000'
    this.context.maxUnanswered = '2'
    this.context.ladder = 'checked'
    this.context.tournaments = 'checked'

    const templateData = this.templateWarRules(this.context)
    this.$el.html(templateData)

    this.disableDates()

    return this
  },

  disableDates: function () {
    const dates = []
    for (let i = 0; i < this.fromWars.length; i++) {
      const startDate = new Date(this.fromWars.at(i).get('war_start'))
      const endDate = new Date(this.fromWars.at(i).get('war_end'))
      // eslint-disable-next-line no-unmodified-loop-condition
      while (startDate <= endDate) {
        dates.push(startDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' }))
        startDate.setDate(startDate.getDate() + 1)
      }
    }
    for (let i = 0; i < this.onWars.length; i++) {
      const startDate = new Date(this.onWars.at(i).get('war_start'))
      const endDate = new Date(this.onWars.at(i).get('war_end'))
      // eslint-disable-next-line no-unmodified-loop-condition
      while (startDate <= endDate) {
        dates.push(startDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' }))
        startDate.setDate(startDate.getDate() + 1)
      }
    }

    const now = new Date()
    while (1) {
      if (dates.some(el => {
        return el === now.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' })
      }) === true) {
        now.setDate(now.getDate() + 1)
      } else {
        break
      }
    }

    const endDate = new Date(now)
    endDate.setHours(endDate.getHours() + 1)

    const $j = jQuery.noConflict()
    $('#daterangepicker').daterangepicker({
      minDate: new Date(),
      timePicker: true,
      locale: {
        format: 'DD/MM/YYYY hh:mm A'
      },
      startDate: now,
      endDate: endDate,
      isInvalidDate: function (date) {
        date = date.toDate().toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' })
        if (dates.some(el => el === date) === true) { return true }
        return false
      }
    })
  },

  nextWarRules: function () {
    this.startDate = $('#daterangepicker').data('daterangepicker').startDate
    this.endDate = $('#daterangepicker').data('daterangepicker').endDate
    this.context.winReward = document.getElementById('win-reward').value
    this.context.maxUnanswered = document.getElementById('max-unanswered').value
    if (document.getElementById('ladder').checked) {
      this.context.ladder = 'checked'
    } else {
      this.context.ladder = undefined
    }
    if (document.getElementById('tournaments').checked) {
      this.context.tournaments = 'checked'
    } else {
      this.context.tournaments = undefined
    }

    const templateData = this.templateWarTimes(this.context)
    this.$el.html(templateData)
    const $j = jQuery.noConflict()
    $('#scheduler').weekly_schedule()
  },

  prevWarTimes: function () {
    const templateData = this.templateWarRules(this.context)
    this.$el.html(templateData)
    this.disableDates()
  }
})
