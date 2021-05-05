/* eslint-disable eqeqeq */
import { Guild } from '../../models/guildModel'
import { Wars } from '../../collections/warCollection'
import { War } from '../../models/warModel'
import { WarTimes } from '../../collections/warTimesCollection'

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
    this.context = {}

    this.fromId = options.fromId
    this.onId = options.onId
    this.warId = options.warId
    this.router = options.router
    this.notifView = options.notifView
    this.socket = options.socket
    this.negoWar = undefined
    this.fromGuild = new Guild({ id: this.fromId })
    this.onGuild = new Guild({ id: this.onId })
    this.fromWars = new Wars({ id: this.fromId })
    this.onWars = new Wars({ id: this.onId })
    this.warTimes = undefined

    this.socket.updateContext(this, this.notifView)

    const fetchGuilds = async () => {
      const response1 = this.fromGuild.fetch()
      const response2 = this.onGuild.fetch()
      const response3 = this.fromWars.fetch()
      const response4 = this.onWars.fetch()
      await response1 && await response2 && await response3 && await response4
      if (this.warId != undefined) {
        this.negoWar = this.fromWars.get(this.warId)
        this.warTimes = new WarTimes(this.warId)
        await this.warTimes.fetch()
      }
      this.render()
    }
    fetchGuilds()
  },
  el: $('#app'),

  render: function () {
    this.fromWars.sort()
    this.onWars.sort()

    this.context.fromName = this.fromGuild.get('name')
    this.context.onName = this.onGuild.get('name')
    this.context.onId = this.onId
    if (this.warId == undefined) {
      this.context.winReward = '1000'
      this.context.maxUnanswered = '2'
      this.context.ladder = 'checked'
      this.context.tournaments = 'checked'
    } else {
      this.context.winReward = this.negoWar.get('prize')
      if (this.negoWar.get('ladder_effort') === true) {
        this.context.ladder = 'checked'
      }
      if (this.negoWar.get('tournament_effort') === true) {
        this.context.tournaments = 'checked'
      }
    }

    this.days = [
      { day: 'Monday' },
      { day: 'Tuesday' },
      { day: 'Wednesday' },
      { day: 'Thursday' },
      { day: 'Friday' },
      { day: 'Saturday' },
      { day: 'Sunday' }
    ]

    Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
      switch (operator) {
        case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this)
        case '==':
          return (v1 === v2) ? options.fn(this) : options.inverse(this)
        case '!=':
          return (v1 != v2) ? options.fn(this) : options.inverse(this)
        default:
          return options.inverse(this)
      }
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

    const fromWars = this.fromWars.slice().filter(el => (el.get('terms_agreed') === true && el.get('closed') === false))
    const onWars = this.onWars.slice().filter(el => (el.get('terms_agreed') === true && el.get('closed') === false))
    for (let i = 0; i < fromWars.length; i++) {
      const startDate = new Date(fromWars[i].get('war_start'))
      const endDate = new Date(fromWars[i].get('war_end'))
      // eslint-disable-next-line no-unmodified-loop-condition
      while (startDate <= endDate) {
        this.dates.push(startDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' }))
        startDate.setDate(startDate.getDate() + 1)
      }
    }
    for (let i = 0; i < onWars.length; i++) {
      const startDate = new Date(onWars[i].get('war_start'))
      const endDate = new Date(onWars[i].get('war_end'))
      // eslint-disable-next-line no-unmodified-loop-condition
      while (startDate <= endDate) {
        this.dates.push(startDate.toLocaleDateString('fr', { year: 'numeric', month: '2-digit', day: '2-digit' }))
        startDate.setDate(startDate.getDate() + 1)
      }
    }
  },

  defineStartEndDate: function () {
    if (this.warId == undefined) {
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
    } else {
      this.startDate = new Date(this.negoWar.get('war_start'))
      this.endDate = new Date(this.negoWar.get('war_end'))
    }
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

  nextWarRules: async function () {
    const winReward = await document.getElementById('win-reward').value
    this.startDate = await $('#daterangepicker').data('daterangepicker').startDate
    this.endDate = await $('#daterangepicker').data('daterangepicker').endDate
    if (await document.getElementById('ladder').checked) {
      this.context.ladder = 'checked'
    } else {
      this.context.ladder = undefined
    }
    if (await document.getElementById('tournaments').checked) {
      this.context.tournaments = 'checked'
    } else {
      this.context.tournaments = undefined
    }

    let div
    if (isNaN(winReward) === false && winReward >= 0) {
      this.context.winReward = await document.getElementById('win-reward').value
    } else {
      div = document.getElementById('win-reward')
      div.style.border = 'solid 2px var(--error-message-color)'
    }

    if (div) {
      this.error('Input should be a positive number', 'flex')
    } else {
      if (this.warId != undefined && this.context.warTime === undefined) {
        this.context.warTime = []
        this.context.warTime.days = []
        for (let i = 0; i < this.warTimes.length; i++) {
          const newDays = JSON.parse(JSON.stringify(this.days))
          for (const [key, value] of Object.entries(newDays)) {
            value.index = this.context.warTime.length
          }
          this.context.warTime.push({
            index: this.context.warTime.length,
            maxUnanswered: this.warTimes.at(i).get('max_unanswered'),
            timeToAnswer: this.warTimes.at(i).get('time_to_answer'),
            fromHH: this.warTimes.at(i).get('start_hour'),
            toHH: this.warTimes.at(i).get('end_hour'),
            fromDay: this.warTimes.at(i).get('day').charAt(0).toUpperCase() + this.warTimes.at(i).get('day').slice(1),
            days: newDays
          })
        }
      } else if (this.context.warTime === undefined) {
        this.context.warTime = []
        this.context.warTime.days = []
        const newDays = JSON.parse(JSON.stringify(this.days))
        for (const [key, value] of Object.entries(newDays)) {
          value.index = this.context.warTime.length
        }
        this.context.warTime.push({
          index: this.context.warTime.length,
          maxUnanswered: 5,
          timeToAnswer: 60,
          fromHH: undefined,
          toHH: undefined,
          fromDay: 'Monday',
          days: newDays
        })
      }

      const templateData = this.templateWarTimes(this.context)
      this.$el.html(templateData)
    }
  },

  saveContextWarTimes: async function () {
    const maxUnanswered = document.getElementsByClassName('max-unanswered')
    const timeToAnswer = document.getElementsByClassName('time-to-answer')
    const fromHH = document.getElementsByClassName('fromHH')
    const fromMM = document.getElementsByClassName('fromMM')
    const toHH = document.getElementsByClassName('toHH')
    const toMM = document.getElementsByClassName('toMM')

    for (let i = 0; i < fromHH.length; i++) {
      this.context.warTime[i].fromHH = await document.getElementById('fromHH' + i).value
    }

    for (let i = 0; i < fromMM.length; i++) {
      this.context.warTime[i].fromMM = await document.getElementById('fromMM' + i).value
    }

    for (let i = 0; i < toHH.length; i++) {
      this.context.warTime[i].toHH = await document.getElementById('toHH' + i).value
    }

    for (let i = 0; i < toMM.length; i++) {
      this.context.warTime[i].toMM = await document.getElementById('toMM' + i).value
    }

    for (let i = 0; i < maxUnanswered.length; i++) {
      this.context.warTime[maxUnanswered[i].getAttribute('for')].maxUnanswered = maxUnanswered[i].value
    }

    for (let i = 0; i < timeToAnswer.length; i++) {
      this.context.warTime[timeToAnswer[i].getAttribute('for')].timeToAnswer = timeToAnswer[i].value
    }
  },

  prevWarTimes: async function () {
    await this.saveContextWarTimes()
    const templateData = this.templateWarRules(this.context)
    this.$el.html(templateData)
    this.initializeCalendar()
  },

  validateHours: function (div, nb1, nb2) {
    let res = true
    for (let i = 0; i < div.length; i++) {
      if (!(div[i].value >= nb1 && div[i].value <= nb2) || div[i].value === '') {
        div[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      } else {
        div[i].style.border = 'solid 1px #C4C4C4'
        this.context.warTime[i].fromHH = document.getElementById('fromHH' + i).value
      }
    }
    return res
  },

  validateNumbers: function (div) {
    let res = true

    for (let i = 0; i < div.length; i++) {
      if ((isNaN(Number((div[i].value))) === false || Number((div[i].value)) === 0) && Number(div[i].value) >= 0) {
        this.context.warTime[i].maxUnanswered = div[i].value
        div[i].style.border = '1px solid #000'
      } else {
        div[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      }
    }
    return res
  },

  dateRangeOverlaps: function (aStart, aEnd, bStart, bEnd) {
    if ((bStart >= aStart && bStart < aEnd) ||
      (bStart < aStart && bEnd > aStart)) {
      return true
    }
    return false
  },

  multipleDateRangeOverlaps: function (dates) {
    let i = 0; let j = 0

    if (dates != null && dates.length > 1) {
      for (i = 0; i < dates.length - 1; i += 1) {
        for (j = i + 1; j < dates.length; j += 1) {
          if (this.dateRangeOverlaps(
            dates[i].from, dates[i].to,
            dates[j].from, dates[j].to) === true) {
            return false
          }
        }
      }
    }
    return true
  },

  validateWarTimes: function () {
    let message

    const fromHH = document.getElementsByClassName('fromHH')
    const toHH = document.getElementsByClassName('toHH')
    const maxUnanswered = document.getElementsByClassName('max-unanswered')
    const timeToAnswer = document.getElementsByClassName('time-to-answer')
    const day = document.getElementsByClassName('day-name')

    let res = true

    if (this.validateHours(fromHH, 0, 23) === false) {
      message = 'Hours have to be a number between 0 and 23'
      res = false
    }
    if (this.validateHours(toHH, 0, 23) === false) {
      message = 'Hours have to be a number between 0 and 23'
      res = false
    }
    if (this.validateNumbers(maxUnanswered) === false) {
      message = 'Max unsanswered and Time to Answer have to be a positive number'
      res = false
    }
    if (this.validateNumbers(timeToAnswer) === false) {
      message = 'Max unsanswered and Time to Answer have to be a positive number'
      res = false
    }

    for (let i = 0; i < fromHH.length; i++) {
      if (Number(fromHH[i].value) >= Number(toHH[i].value)) {
        message = 'A start hour war time is greater or equal to an end hour war time'
        fromHH[i].style.border = 'solid 2px var(--error-message-color)'
        toHH[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      }
    }

    if (res === true) {
      const dates = []
      for (let i = 0; i < fromHH.length; i++) {
        const dayNumber = this.getDay(day[i].innerText)
        const date = new Date()
        while (date.getDay() !== dayNumber) {
          date.setDate(date.getDate() + 1)
        }
        const startDate = new Date(date)
        const endDate = new Date(date)
        startDate.setHours(Number(fromHH[i].value), 0, 0)
        endDate.setHours(Number(toHH[i].value), 0, 0)
        dates.push({ from: startDate, to: endDate })
      }
      if (this.multipleDateRangeOverlaps(dates) === false) {
        message = 'War times are overlapping'
        res = false
      }
    }

    if (res === false) {
      document.getElementById('error').style.display = 'flex'
      document.getElementById('error').textContent = message
    } else {
      this.declareWar()
    }
  },

  declareWar: async function () {
    const fromHH = document.getElementsByClassName('fromHH')
    const toHH = document.getElementsByClassName('toHH')
    const maxUnanswered = document.getElementsByClassName('max-unanswered')
    const timeToAnswer = document.getElementsByClassName('time-to-answer')
    const day = document.getElementsByClassName('day-name')

    let tournamentEffort = false
    if (this.context.tournaments === 'checked') {
      tournamentEffort = true
    }
    let ladderEffort = false
    if (this.context.ladder === 'checked') {
      ladderEffort = true
    }

    let war
    if (this.warId == undefined) {
      war = new War()
    } else {
      war = this.negoWar
      await this.negoWar.acceptRefuseWar('false')
      for (let i = 0; i < this.warTimes.length; i++) {
        await this.warTimes.at(i).delete(this.negoWar.get('id'))
      }
    }
    try {
      const response = await war.createWar(
        Number(this.context.onId),
        this.startDate.toString(),
        this.endDate.toString(),
        Number(this.context.winReward),
        tournamentEffort,
        ladderEffort)
      for (let i = 0; i < fromHH.length; i++) {
        const response2 = await war.createWarTime(
          day[i].innerText,
          Number(fromHH[i].value),
          Number(toHH[i].value),
          Number(timeToAnswer[i].value),
          Number(maxUnanswered[i].value)
        )
      }
      await war.acceptRefuseWar('true')
      this.router.navigate('#guild/' + this.fromId, true)
    } catch (error) {
      console.log(error)
      document.getElementById('error').style.display = 'flex'
      document.getElementById('error').textContent = error.responseJSON.message
    }
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
    this.context.warTime[index].fromDay = value
    this.updateHTML('day-name-from-' + index)
    const dropList = document.getElementById('filter-days-from-' + index + '-open')
    dropList.style.display = 'none'
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

  addWarTime: function (e) {
    e.stopPropagation()

    const newDays = JSON.parse(JSON.stringify(this.days))
    for (const [key, value] of Object.entries(newDays)) {
      value.index = this.context.warTime.length
    }

    this.context.warTime.push({
      index: this.context.warTime.length,
      maxUnanswered: 5,
      timeToAnswer: 60,
      fromHH: undefined,
      toHH: undefined,
      fromDay: 'Monday',
      days: newDays
    })

    this.addWarTimeHTML((this.context.warTime.length - 1).toString())
  },

  lessWarTime: async function (e) {
    await this.saveContextWarTimes()

    const index = e.currentTarget.getAttribute('for')
    this.context.warTime.splice(index, 1)
    const tmp = this.context.warTime
    this.context.warTime = []

    for (let i = 0; i < tmp.length; i++) {
      const newDays = JSON.parse(JSON.stringify(this.days))
      for (const [key, value] of Object.entries(newDays)) {
        value.index = i
      }
      this.context.warTime.push({
        index: this.context.warTime.length,
        maxUnanswered: tmp[i].maxUnanswered,
        timeToAnswer: tmp[i].timeToAnswer,
        fromHH: tmp[i].fromHH,
        toHH: tmp[i].toHH,
        fromDay: tmp[i].fromDay,
        days: newDays
      })
    }
    this.updateHTML('war-times-table')
  },

  getDay: function (date) {
    switch (date) {
      case 'Sunday':
        return 0
      case 'Monday':
        return 1
      case 'Tuesday':
        return 2
      case 'Wednesday':
        return 3
      case 'Thursday':
        return 4
      case 'Friday':
        return 5
      case 'Saturday':
        return 6
    }
  }
})
