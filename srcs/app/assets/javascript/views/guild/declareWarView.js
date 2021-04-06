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
    this.router = options.router
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
    // const fromMM = document.getElementsByClassName('fromMM')
    const toHH = document.getElementsByClassName('toHH')
    // const toMM = document.getElementsByClassName('toMM')
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
    // if (this.validateHours(fromMM, 0, 59) === false) {
    //   res = false
    // }
    // if (this.validateHours(toMM, 0, 59) === false) {
    //   res = false
    // }
    if (this.validateNumbers(maxUnanswered) === false) {
      message = 'Max unsanswered and Time to Answer have to be a positive number'
      res = false
    }
    if (this.validateNumbers(timeToAnswer) === false) {
      message = 'Max unsanswered and Time to Answer have to be a positive number'
      res = false
    }

    for (let i = 0; i < fromHH.length; i++) {
      // const fromHours = new Date()
      // fromHours.setHours(fromHH[i].value, fromMM[i].value, 0)
      // const toHours = new Date()
      // toHours.setHours(toHH[i].value, toMM[i].value, 0)
      if (Number(fromHH[i].value) >= Number(toHH[i].value)) {
        message = 'A start hour war time is greater or equal to an end hour war time'
        fromHH[i].style.border = 'solid 2px var(--error-message-color)'
        // fromMM[i].style.border = 'solid 2px var(--error-message-color)'
        toHH[i].style.border = 'solid 2px var(--error-message-color)'
        // toMM[i].style.border = 'solid 2px var(--error-message-color)'
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

  declareWar: function () {
    const fromHH = document.getElementsByClassName('fromHH')
    const toHH = document.getElementsByClassName('toHH')
    const maxUnanswered = document.getElementsByClassName('max-unanswered')
    const timeToAnswer = document.getElementsByClassName('time-to-answer')
    const day = document.getElementsByClassName('day-name')

    console.log(day)
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
          tournamentEffort,
          ladderEffort)
        console.log(day)
        for (let i = 0; i < fromHH.length; i++) {
          const response2 = await war.createWarTime(
            day[i].innerText,
            Number(fromHH[i].value),
            Number(toHH[i].value),
            Number(maxUnanswered[i].value),
            Number(timeToAnswer[i].value)
          )
          this.router.navigate('#guild/' + this.onId, true)
        }
      } catch (error) {
        document.getElementById('error').style.display = 'flex'
        document.getElementById('error').textContent = error.responseJSON.message
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

    let j = 0
    for (let i = 0; i < this.context.warTime.length; i++) {
      if (this.context.warTime[i] !== undefined) {
        const newDays = JSON.parse(JSON.stringify(this.days))
        for (const [key, value] of Object.entries(newDays)) {
          value.index = j
        }
        this.context.warTime[i].index = j
        this.context.warTime[i].days = newDays
        j++
      }
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
