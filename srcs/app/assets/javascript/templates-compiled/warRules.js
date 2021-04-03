(function () {
  const template = Handlebars.template; const templates = Handlebars.templates = Handlebars.templates || {}
  templates.warRules = template({
    compiler: [8, '>= 4.3.0'],
    main: function (container, depth0, helpers, partials, data) {
      let helper; const alias1 = depth0 != null ? depth0 : (container.nullContext || {}); const alias2 = container.hooks.helperMissing; const alias3 = 'function'; const alias4 = container.escapeExpression; const lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      }

      return "<div class=\"warRules declareWar\" id=\"warSchedule\">\n    <a class=\"close\" id=\"closeDeclareWar\" href='#guild/" +
    alias4(((helper = (helper = lookupProperty(helpers, 'onId') || (depth0 != null ? lookupProperty(depth0, 'onId') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { name: 'onId', hash: {}, data: data, loc: { start: { line: 2, column: 55 }, end: { line: 2, column: 63 } } }) : helper))) +
    "'>\n        <img src=\"./icons/esc.svg\">\n    </a>\n    <div class=\"title\">VS\n        <div class=\"guildsName from\">" +
    alias4(((helper = (helper = lookupProperty(helpers, 'fromName') || (depth0 != null ? lookupProperty(depth0, 'fromName') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { name: 'fromName', hash: {}, data: data, loc: { start: { line: 6, column: 37 }, end: { line: 6, column: 49 } } }) : helper))) +
    '</div>\n        <div class="guildsName on">' +
    alias4(((helper = (helper = lookupProperty(helpers, 'onName') || (depth0 != null ? lookupProperty(depth0, 'onName') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { name: 'onName', hash: {}, data: data, loc: { start: { line: 7, column: 35 }, end: { line: 7, column: 45 } } }) : helper))) +
    '</div>\n    </div>\n    <div class="declareMiddle warRulesMiddle">\n        <div class="declareWarTitle warRulesTitle">War rules</div>\n        <div class="boxes">\n            <div class="box win-schedule-box">\n                <div class="sub-title win-schedule-title">War schedule</div>\n                <div class="schedule-container">\n                    <img src="./icons/schedule-yellow.svg" class="schedule">\n                </div>\n                <input type="text" class="input datepicker" id="daterangepicker"></input>\n            </div>\n            <div class="box win-reward-box">\n                <div class="sub-title win-reward-title">Win reward</div>\n                <div class="win-reward-points-container">\n                    <div class="cup-container">\n                        <img src="./icons/cup.svg" class="cup">\n                    </div>\n                    <input type="text" class="input win-reward" id="win-reward" value="' +
    alias4(((helper = (helper = lookupProperty(helpers, 'winReward') || (depth0 != null ? lookupProperty(depth0, 'winReward') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { name: 'winReward', hash: {}, data: data, loc: { start: { line: 25, column: 87 }, end: { line: 25, column: 100 } } }) : helper))) +
    '"></input>\n                    <div class="points">points</div>\n                </div>\n            </div>\n            <div class="box accountable-matches-box">\n                <div class="sub-title accountable-matches-title">Accountable matches</div>\n                <div class="checkboxes-container">\n                    <div class="checkboxes">\n                        <input type="checkbox" class="checkbox" id="ladder" value="ladder" name="ladder" ' +
    alias4(((helper = (helper = lookupProperty(helpers, 'ladder') || (depth0 != null ? lookupProperty(depth0, 'ladder') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { name: 'ladder', hash: {}, data: data, loc: { start: { line: 33, column: 105 }, end: { line: 33, column: 115 } } }) : helper))) +
    '></input>\n                        <label for="ladder">Ladder</label>\n                    </div>\n                    <div class="checkboxes">\n                        <input type="checkbox" class="checkbox" id="tournaments" value="tournaments" ' +
    alias4(((helper = (helper = lookupProperty(helpers, 'tournaments') || (depth0 != null ? lookupProperty(depth0, 'tournaments') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { name: 'tournaments', hash: {}, data: data, loc: { start: { line: 37, column: 101 }, end: { line: 37, column: 116 } } }) : helper))) +
    '></input>\n                        <label for="tournaments">Tournaments</label>\n                    </div>\n                    <div class="checkboxes">\n                        <input type="checkbox" class="checkbox" id="interguilds-duels" value="interguilds-duels" checked disabled></input>\n                        <label for="interguilds-duels">Interguilds duels</label>\n                    </div>\n                </div>\n            </div>\n            <div class="box max-unanswered-box">\n                <div class="sub-title max-unanswered-title">Max unanswered<br>matches during war times</div>\n                <input type="text" class="input max-unanswered" id="max-unanswered" value="' +
    alias4(((helper = (helper = lookupProperty(helpers, 'maxUnanswered') || (depth0 != null ? lookupProperty(depth0, 'maxUnanswered') : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, { name: 'maxUnanswered', hash: {}, data: data, loc: { start: { line: 48, column: 91 }, end: { line: 48, column: 108 } } }) : helper))) +
    '"></input>\n            </div>\n        </div>\n    </div>\n    <p id="error" style="display: none;"></p>\n    <div class="buttons">\n        <button class="button next nextWarRules">Next</button>\n    </div>\n</div>'
    },
    useData: true
  })
})()