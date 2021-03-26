import { Guild } from '../../models/guildModel'
import { Wars } from '../../collections/warCollection'

export const DeclareWar = Backbone.View.extend({
  events: {
    'click .nextWarSchedule': 'nextWarSchedule'
  },
  initialize: function (options) {
    this.templateWarSchedule = Handlebars.templates.warSchedule
    this.templateWarRules = Handlebars.templates.warRules

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

    this.updateContextWarCalendar()

    const templateData = this.templateWarSchedule(this.context)
    this.$el.html(templateData)
    return this
  },

  areFill: function () {
    const array = []
    const input = document.getElementsByClassName('input')
    let res = true
    // if value is fill
    for (let i = 0; i < input.length; i++) {
      input[i].style.border = 'solid 1px #C4C4C4'
      if (input[i].value === '') {
        input[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      }
    }
    const fromDate = new Date()
    let day = Number(document.getElementById('fromJJ').value)
    let month = Number(document.getElementById('fromMM').value)
    let year = Number(document.getElementById('fromYY').value)
    fromDate.setFullYear(year, month - 1, day)
    if (year.toString().length != 4) {
      document.getElementById('fromYY').style.border = 'solid 2px var(--error-message-color)'
      res = false
    }
    if (fromDate == 'Invalid Date' || fromDate < Date.now()) {
      document.getElementById('fromYY').style.border = 'solid 2px var(--error-message-color)'
      document.getElementById('fromMM').style.border = 'solid 2px var(--error-message-color)'
      document.getElementById('fromJJ').style.border = 'solid 2px var(--error-message-color)'
      res = false
    }
    day = Number(document.getElementById('toJJ').value)
    month = Number(document.getElementById('toMM').value)
    year = Number(document.getElementById('toYY').value)
    const toDate = new Date()
    toDate.setFullYear(year, month - 1, day)
    if (year.toString().length != 4) {
      document.getElementById('toYY').style.border = 'solid 2px var(--error-message-color)'
      res = false
    }
    if (toDate == 'Invalid Date' || toDate < Date.now()) {
      document.getElementById('toJJ').style.border = 'solid 2px var(--error-message-color)'
      document.getElementById('toMM').style.border = 'solid 2px var(--error-message-color)'
      document.getElementById('toYY').style.border = 'solid 2px var(--error-message-color)'
      res = false
    }

    let hh = Number(document.getElementById('fromHH').value)
    let mm = Number(document.getElementById('fromMIN').value)
    if (!(hh >= 0 && hh <= 23)) {
      document.getElementById('fromHH').style.border = 'solid 2px var(--error-message-color)'
      res = false
    }
    if (!(mm >= 0 && mm <= 59)) {
      document.getElementById('fromMIN').style.border = 'solid 2px var(--error-message-color)'
      res = false
    }
    fromDate.setHours(hh, mm, 0)

    hh = Number(document.getElementById('toHH').value)
    mm = Number(document.getElementById('toMIN').value)
    if (!(hh >= 0 && hh <= 23)) {
      document.getElementById('toHH').style.border = 'solid 2px var(--error-message-color)'
      res = false
    }
    if (!(mm >= 0 && mm <= 59)) {
      document.getElementById('toMIN').style.border = 'solid 2px var(--error-message-color)'
      res = false
    }
    toDate.setHours(hh, mm, 0)

    array.push(fromDate)
    array.push(toDate)
    return array
  },

  nextWarSchedule: function () {
    const date = this.areFill()
    if (date) {
      let res = true
      if (date[0] >= date[1]) {
        document.getElementById('error').style.display = 'flex'
        document.getElementById('error').textContent = 'The dates are invalid'
        res = false
      }
      for (let i = 0; i < this.fromWars.length; i++) {
        if (new Date(this.fromWars.at(i).get('war_start')) <= date[1] && new Date(this.fromWars.at(i).get('war_end')) >= date[0]) {
          document.getElementById('error').style.display = 'flex'
          document.getElementById('error').textContent = this.fromGuild.get('name') + ' has already a war schedule to this date'
          res = false
        }
      }
      for (let i = 0; i < this.onWars.length; i++) {
        if (new Date(this.onWars.at(i).get('war_start')) <= date[1] && new Date(this.onWars.at(i).get('war_end')) >= date[0]) {
          document.getElementById('error').style.display = 'flex'
          document.getElementById('error').textContent = this.onGuild.get('name') + ' has already a war schedule to this date'
          res = false
        }
      }
      if (res === true) {
        const templateData = this.templateWarRules(this.context)
        this.$el.html(templateData)
      }
    }
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
