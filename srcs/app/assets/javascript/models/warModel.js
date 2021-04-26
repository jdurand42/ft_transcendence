import { SuperHeaders } from '../services/headers'

export const War = Backbone.Model.extend({
  defaults: {
    closed: undefined,
    from_agreement: undefined,
    from_id: undefined,
    from_score: undefined,
    id: undefined,
    ladder_effort: undefined,
    last_negotiation: undefined,
    max_unanswared: undefined,
    on_agreement: undefined,
    on_id: undefined,
    opened: undefined,
    prize: undefined,
    terms_agreed: undefined,
    tournament_effort: undefined,
    war_start: undefined,
    war_end: undefined
  },

  initialize: function () {
    this.superHeaders = new SuperHeaders()
    this.headers = this.superHeaders.getHeaders()
  },

  urlRoot: 'api/wars',

  url: function () {
    if (this.id !== undefined) { return this.urlRoot + '/' + this.id }
    return this.urlRoot
  },

  createWar: function (onId, warStart, warEnd, prize, tournamentEffort, ladderEffort) {
    return this.save({
      on_id: onId,
      war_start: warStart,
      war_end: warEnd,
      prize: prize,
      tournament_effort: tournamentEffort,
      ladder_effort: ladderEffort
    })
  },

  createWarTime: function (day, startHour, endHour, timeToAnswer, maxUnanswered) {
    const header = this.superHeaders.getHeaders()
    const url = this.urlRoot + '/' + this.id + '/times'

    // return this.save({
    //   url: url,
    //   day: day,
    //   start_hour: startHour,
    //   end_hour: endHour,
    //   time_to_answer: timeToAnswer,
    //   max_unanswered: maxUnanswered
    // })
    return fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        day: day,
        start_hour: startHour,
        end_hour: endHour,
        time_to_answer: timeToAnswer,
        max_unanswered: maxUnanswered
      })
    })
  },

  acceptRefuseWar: function (agree) {
    const header = this.superHeaders.getHeaders()
    const url = this.urlRoot + '/' + this.id + '/agreements'
    return fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        agree_terms: agree
      })
    })
  }

})
