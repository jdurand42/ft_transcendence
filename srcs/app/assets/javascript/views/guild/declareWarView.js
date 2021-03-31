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
    const templateData = this.templateWarRules(this.context)
    this.$el.html(templateData)
    this.initializeCalendar()
  },

  validateWarTimes: function () {
    const hh = document.getElementsByClassName('hh')
    const mm = document.getElementsByClassName('mm')

    let res = true

    for (let i = 0; i < hh.length; i++) {
      if (!(hh[i].value >= 0 && hh[i].value <= 23) || hh[i].value === '') {
        hh[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      } else {
        hh[i].style.border = 'solid 1px #C4C4C4'
      }
    }

    for (let i = 0; i < mm.length; i++) {
      if (!(mm[i].value >= 0 && mm[i].value <= 59) || mm[i].value === '') {
        mm[i].style.border = 'solid 2px var(--error-message-color)'
        res = false
      } else {
        mm[i].style.border = 'solid 1px #C4C4C4'
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
        console.log(response)
      }
    }
    declareWar()
  },

  filterDay: function (e) {
    const id = e.currentTarget.id
    const dropList = document.getElementById(id + '-open')
    if (dropList.style.display === 'none') {
      const getOffsetLeft = element => {
        let offsetLeft = 0
        while (element) {
          offsetLeft += element.offsetLeft
          element = element.offsetParent
        }
        return offsetLeft
      }
      const Y = getOffsetLeft(e.currentTarget)
      dropList.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 125
      dropList.style.left = Y
      dropList.style.display = 'flex'
    } else {
      dropList.style.display = 'none'
    }
  },

  addWarTimeHTML: function (div) {
    console.log(div)
    const html = this.templateWarTimes(this.context)
    const found = $(html).find('#' + div)[0].innerHTML
    const currentDiv = document.getElementById('all-war-times')
    const el = document.createElement('div')
    el.setAttribute('id', div)
    el.setAttribute('class', 'war-time')
    el.innerHTML = found
    currentDiv.insertBefore(el, document.getElementById('add-war-time'))
  },

  updateHTML: function (div) {
    const html = this.templateWarTimes(this.context)
    const found = $(html).find('#' + div)[0].innerHTML
    const currentDiv = document.getElementById(div)
    currentDiv.innerHTML = found
  },

  selectDay: function (e) {
    const value = e.currentTarget.textContent
    const index = e.currentTarget.getAttribute('for')
    const id = e.currentTarget.id
    if (id.startsWith('from-')) {
      this.context.warTime[index].fromDay = value
    } else {
      this.context.warTime[index].toDay = value
    }
    this.updateHTML('day-name-' + id)
    const filters = document.getElementsByClassName('list-days')
    for (let i = 0; i < filters.length; i++) {
      filters[i].style.display = 'none'
    }
  },

  addWarTime: function () {
    const newDays = JSON.parse(JSON.stringify(this.days))
    for (const [key, value] of Object.entries(newDays)) {
      value.index = this.context.warTime.length
    }

    this.context.warTime.push({
      index: this.context.warTime.length,
      fromDay: 'Monday',
      toDay: 'Monday',
      days: newDays
    })

    this.addWarTimeHTML((this.context.warTime.length - 1).toString())
  },

  lessWarTime: function (e) {
    const index = e.currentTarget.getAttribute('for')
    delete this.context.warTime[index]
    for (let i = 0; i < this.context.warTime; i++) {
      for (const [key, value] of Object.entries(this.context.warTime[i])) {
        value.index = i
      }
    }
    this.updateHTML('all-war-times')
  }
})
