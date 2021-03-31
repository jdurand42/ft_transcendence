import { Guild } from '../../models/guildModel'
import { Wars } from '../../collections/warCollection'
import { War } from '../../models/warModel'

export const DeclareWar = Backbone.View.extend({
  events: {
    'click .nextWarRules': 'nextWarRules',
    'click .prevWarTimes': 'prevWarTimes',
    'click .validateWarTimes': 'validateWarTimes',
    'click .filter-days': 'filterDay',
    'click .day': 'selectDay',
    'click .add-war-time': 'addWarTime',
    'click .minus-circular-container': 'lessWarTime'
  },
  initialize: function (options) {
    this.templateWarRules = Handlebars.templates.warRules
    this.templateWarTimes = Handlebars.templates.warTimes
    this.startDate = undefined
    this.endDate = undefined
    this.dates = []

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

    this.context.warTime = []
    this.context.warTime.days = []
    this.days = [
      { day: 'Monday' },
      { day: 'Tuesday' },
      { day: 'Wednesday' },
      { day: 'Thursday' },
      { day: 'Friday' },
      { day: 'Saturday' },
      { day: 'Sunday' }
    ]

    const newDays = JSON.parse(JSON.stringify(this.days))
    for (const [key, value] of Object.entries(newDays)) {
      value.index = this.context.warTime.length
    }
    this.context.warTime.push({
      index: this.context.warTime.length,
      maxUnanswered: 5,
      timeToAnswer: 60,
      fromHH: undefined,
      fromMM: undefined,
      toHH: undefined,
      toMM: undefined,
      fromDay: 'Monday',
      toDay: 'Monday',
      days: newDays
    })

    const templateData = this.templateWarRules(this.context)
    this.$el.html(templateData)

    this.disableDates()
    this.defineStartEndDate()
    this.initializeCalendar()
    return this
  },

  disableDates: function () {
    // dates table

    const fromWars = this.fromWars.slice().filter(el => el.get('terms_agreed') === true)
    const onWars = this.onWars.slice().filter(el => el.get('terms_agreed') === true)
    for (let i = 0; i < fromWars.length; i++) {
      const startDate = new Date(fromWars.at(i).get('war_start'))
      const endDate = new Date(fromWars.at(i).get('war_end'))
      // eslint-disable-next-line no-unmodified-loop-condition
      while (startDate <= endDate) {
        this.dates.push(startDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' }))
        startDate.setDate(startDate.getDate() + 1)
      }
    }
    for (let i = 0; i < onWars.length; i++) {
      const startDate = new Date(onWars.at(i).get('war_start'))
      const endDate = new Date(onWars.at(i).get('war_end'))
      // eslint-disable-next-line no-unmodified-loop-condition
      while (startDate <= endDate) {
        this.dates.push(startDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' }))
        startDate.setDate(startDate.getDate() + 1)
      }
    }
  },

  defineStartEndDate: function () {
    const now = new Date()
    while (1) {
      if (this.dates.some(el => {
        return el === now.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' })
      }) === true) {
        now.setDate(now.getDate() + 1)
      } else {
        break
      }
    }

    const endDate = new Date(now)
    endDate.setHours(endDate.getHours() + 1)

    this.startDate = now
    this.endDate = endDate
  },

  initializeCalendar: function () {
    const dates = this.dates
    const $j = jQuery.noConflict()
    $('#daterangepicker').daterangepicker({
      minDate: new Date(),
      timePicker: true,
      locale: {
        format: 'DD/MM/YYYY hh:mm A'
      },
      startDate: this.startDate,
      endDate: this.endDate,
      isInvalidDate: function (date) {
        date = date.toDate().toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' })
        if (dates.some(el => el === date) === true) { return true }
        return false
      }
    })
  },

  error: function (str, display) {
    document.getElementById('error').textContent = str
    document.getElementById('error').style.display = display
  },

  nextWarRules: function () {
    const winReward = document.getElementById('win-reward').value
    // const maxUnanswered = document.getElementById('max-unanswered').value
    this.startDate = $('#daterangepicker').data('daterangepicker').startDate
    this.endDate = $('#daterangepicker').data('daterangepicker').endDate
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

    let div
    if (isNaN(winReward) === false && winReward >= 0) {
      this.context.winReward = document.getElementById('win-reward').value
    } else {
      div = document.getElementById('win-reward')
      div.style.border = 'solid 2px var(--error-message-color)'
    }
    // if (isNaN(maxUnanswered) === false && maxUnanswered >= 0) {
    //   this.context.maxUnanswered = document.getElementById('max-unanswered').value
    // } else {
    //   div = document.getElementById('max-unanswered')
    //   div.style.border = 'solid 2px var(--error-message-color)'
    // }
    if (div) {
      this.error('Input should be a positive number', 'flex')
    } else {
      const templateData = this.templateWarTimes(this.context)
      this.$el.html(templateData)
    }
  },

  prevWarTimes: function () {
    const maxUnanswered = document.getElementsByClassName('max-unanswered')
    const timeToAnswer = document.getElementsByClassName('time-to-answer')
    const fromHH = document.getElementsByClassName('fromHH')
    const fromMM = document.getElementsByClassName('fromMM')
    const toHH = document.getElementsByClassName('toHH')
    const toMM = document.getElementsByClassName('toMM')

    for (let i = 0; i < fromHH.length; i++) {
      this.context.warTime[i].fromHH = document.getElementById('fromHH' + i).value
    }

    for (let i = 0; i < fromMM.length; i++) {
      this.context.warTime[i].fromMM = document.getElementById('fromMM' + i).value
    }

    for (let i = 0; i < toHH.length; i++) {
      this.context.warTime[i].toHH = document.getElementById('toHH' + i).value
    }

    for (let i = 0; i < toMM.length; i++) {
      this.context.warTime[i].toMM = document.getElementById('toMM' + i).value
    }

    for (let i = 0; i < maxUnanswered.length; i++) {
      this.context.warTime[maxUnanswered[i].getAttribute('for')].maxUnanswered = maxUnanswered[i].value
    }

    for (let i = 0; i < timeToAnswer.length; i++) {
      this.context.warTime[timeToAnswer[i].getAttribute('for')].timeToAnswer = timeToAnswer[i].value
    }

    const templateData = this.templateWarRules(this.context)
    this.$el.html(templateData)
    this.initializeCalendar()
  },

  validateWarTimes: function () {
    const fromHH = document.getElementsByClassName('fromHH')
    const fromMM = document.getElementsByClassName('fromMM')
    const toHH = document.getElementsByClassName('toHH')
    const toMM = document.getElementsByClassName('toMM')
    const maxUnanswered = document.getElementsByClassName('max-unanswered')
    const timeToAnswer = document.getElementsByClassName('time-to-answer')

    let res = true

    for (let i = 0; i < fromHH.length; i++) {
      if (!(fromHH[i].value >= 0 && fromHH[i].value <= 23) || fromHH[i].value === '') {
        fromHH[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      } else {
        fromHH[i].style.border = 'solid 1px #C4C4C4'
        this.context.warTime[i].fromHH = document.getElementById('fromHH' + i).value
      }
    }

    for (let i = 0; i < toHH.length; i++) {
      if (!(toHH[i].value >= 0 && toHH[i].value <= 23) || toHH[i].value === '') {
        toHH[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      } else {
        toHH[i].style.border = 'solid 1px #C4C4C4'
        this.context.warTime[i].toHH = document.getElementById('toHH' + i).value
      }
    }

    for (let i = 0; i < fromMM.length; i++) {
      if (!(fromMM[i].value >= 0 && fromMM[i].value <= 59) || fromMM[i].value === '') {
        fromMM[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      } else {
        fromMM[i].style.border = 'solid 1px #C4C4C4'
        this.context.warTime[i].fromMM = document.getElementById('fromMM' + i).value
      }
    }

    for (let i = 0; i < toMM.length; i++) {
      if (!(toMM[i].value >= 0 && toMM[i].value <= 59) || toMM[i].value === '') {
        toMM[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      } else {
        toMM[i].style.border = 'solid 1px #C4C4C4'
        this.context.warTime[i].toMM = document.getElementById('toMM' + i).value
      }
    }

    for (let i = 0; i < maxUnanswered.length; i++) {
      if ((isNaN(Number((maxUnanswered[i].value))) === false || Number((maxUnanswered[i].value)) === 0) && Number(maxUnanswered[i].value) >= 0) {
        this.context.warTime[i].maxUnanswered = maxUnanswered[i].value
        maxUnanswered[i].style.border = '1px solid #000'
      } else {
        maxUnanswered[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      }
    }

    for (let i = 0; i < timeToAnswer.length; i++) {
      if ((isNaN(Number((timeToAnswer[i].value))) === false || Number((timeToAnswer[i].value)) === 0) && Number(timeToAnswer[i].value) >= 0) {
        this.context.warTime[i].timeToAnswer = timeToAnswer[i].value
        timeToAnswer[i].style.border = '1px solid #000'
      } else {
        timeToAnswer[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      }
    }

    if (res === false) {
      document.getElementById('error').style.display = 'flex'
      document.getElementById('error').textContent = 'Please fill the war times correctly'
    } else {
      this.declareWar()
    }
  },

  declareWar: function () {
    let tournamentEffort = false
    if (this.context.ladder === 'checked') {
      tournamentEffort = true
    }
    let ladderEffort = false
    if (this.context.ladder === 'checked') {
      ladderEffort = true
    }

    const war = new War()
    const declareWar = async () => {
      try {
        const response = await war.createWar(
          Number(this.context.onId),
          this.startDate.toISOString(),
          this.endDate.toISOString(),
          Number(this.context.winReward),
          Number(this.context.maxUnanswered),
          tournamentEffort,
          ladderEffort)
      } catch (response) {
      }
    }
    declareWar()
  },

  filterDay: function (e) {
    const id = e.currentTarget.id
    const dropList = document.getElementById(id + '-open')
    if (dropList.style.display === 'none') {
      function getOffset (el) {
        let _x = 0
        let _y = 0
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
          _x += el.offsetLeft - el.scrollLeft
          _y += el.offsetTop - el.scrollTop
          el = el.offsetParent
        }
        return { top: _y, left: _x }
      }
      const off = getOffset(e.currentTarget)
      dropList.style.top = off.top + 45 - document.getElementById('all-war-times').scrollTop
      dropList.style.position = 'fixed'
      dropList.style.left = off.left
      dropList.style.display = 'flex'
    } else {
      dropList.style.display = 'none'
    }
  },

  addWarTimeHTML: function (div) {
    const html = this.templateWarTimes(this.context)
    const found = $(html).find('#' + div)[0].innerHTML
    const currentDiv = document.getElementById((Number(div) - 1).toString())
    const el = document.createElement('tr')
    el.setAttribute('class', div)
    el.setAttribute('id', div)
    el.innerHTML = found
    document.getElementById('war-times-table').appendChild(el)
  },

  updateHTML: function (div) {
    const html = this.templateWarTimes(this.context)
    const found = $(html).find('#' + div)[0].innerHTML
    const currentDiv = document.getElementById(div)
    currentDiv.innerHTML = found
  },

  selectDay: function (e) {
    e.stopPropagation()
    const value = e.currentTarget.textContent
    const index = e.currentTarget.getAttribute('for')
    const id = e.currentTarget.id
    if (id.startsWith('from-')) {
      this.context.warTime[index].fromDay = value
    } else {
      this.context.warTime[index].toDay = value
    }
    this.updateHTML('day-name-' + id)
    const dropList = document.getElementById('filter-days-from-' + index + '-open')
    dropList.style.display = 'none'
  },

  addWarTime: function () {
    const newDays = JSON.parse(JSON.stringify(this.days))
    for (const [key, value] of Object.entries(newDays)) {
      value.index = this.context.warTime.length
    }

    this.context.warTime.push({
      index: this.context.warTime.length,
      maxUnanswered: 5,
      timeToAnswer: 60,
      fromHH: undefined,
      fromMM: undefined,
      toHH: undefined,
      toMM: undefined,
      fromDay: 'Monday',
      toDay: 'Monday',
      days: newDays
    })

    this.addWarTimeHTML((this.context.warTime.length - 1).toString())
  },

  lessWarTime: function (e) {
    const index = e.currentTarget.getAttribute('for')
    this.context.warTime.splice(index, 1)

    for (let i = 0; i < this.context.warTime.length; i++) {
      this.context.warTime[i].index = i
    }
    this.updateHTML('war-times-table')
  }
})
