(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['currentWar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"current-war\">\n	<div class=\"scores\">\n		<div class=\"from-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":5,"column":25},"end":{"line":5,"column":37}}}) : helper)))
    + "</div>\n		<div class=\"from-score\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromScore") || (depth0 != null ? lookupProperty(depth0,"fromScore") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromScore","hash":{},"data":data,"loc":{"start":{"line":6,"column":26},"end":{"line":6,"column":39}}}) : helper)))
    + "</div>\n		<div class=\"vs\">VS</div>\n		<div class=\"on-score\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onScore") || (depth0 != null ? lookupProperty(depth0,"onScore") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onScore","hash":{},"data":data,"loc":{"start":{"line":8,"column":24},"end":{"line":8,"column":35}}}) : helper)))
    + "</div>\n		<div class=\"on-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":9,"column":23},"end":{"line":9,"column":33}}}) : helper)))
    + "</div>\n	</div>\n	<div class=\"war-informations\">\n		<div class=\"war-informations-container\">\n			<div class=\"war-informations-title\">War informations</div>\n			<div class=\"arrow-icon-container\">\n				<img src=\"./icons/arrow_down-white.svg\" class=\"arrow-icon\">\n			</div>\n		</div>\n		<div class=\"war-infos\" style=\"display: none;\">\n			<div class=\"war-schedule-container\">\n				<div class=\"war-schedule-title\">War schedule</div>\n				<div class=\"schedule-icon-container\">\n					<img src=\"./icons/schedule-yellow.svg\" class=\"schedule-icon\">\n				</div>\n				<div class=\"war-time\">\n					<div class=\"war-start\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warStart") || (depth0 != null ? lookupProperty(depth0,"warStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warStart","hash":{},"data":data,"loc":{"start":{"line":25,"column":28},"end":{"line":25,"column":40}}}) : helper)))
    + "</div>\n					<div class=\"hyphen\">-</div>\n					<div class=\"war-end\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warEnd") || (depth0 != null ? lookupProperty(depth0,"warEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warEnd","hash":{},"data":data,"loc":{"start":{"line":27,"column":26},"end":{"line":27,"column":36}}}) : helper)))
    + "</div>\n				</div>\n				<div class=\"timer\" id=\"war-timer\"></div>\n			</div>\n			<div class=\"war-rules-container\">\n				<div class=\"war-rules-title\">War rules</div>\n				<div class=\"war-rules-sub-container\">\n					<div class=\"win-reward\">\n						<div class=\"win-reward-title\">Win reward</div>\n						<div class=\"win-reward-points-container\">\n							<div class=\"icon-reward-container\">\n								<img src=\"./icons/cup.svg\">\n							</div>\n							<div class=\"points\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"prize") || (depth0 != null ? lookupProperty(depth0,"prize") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prize","hash":{},"data":data,"loc":{"start":{"line":40,"column":27},"end":{"line":40,"column":36}}}) : helper)))
    + " points</div>\n						</div>\n					</div>\n					<div class=\"accontable-matches\">\n						<div class=\"accontable-matches-title\">Accountable matches</div>\n						<div class=\"ladder-container\">\n							<div class=\"ladder-icon-container\">\n								<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ladderIcon") || (depth0 != null ? lookupProperty(depth0,"ladderIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ladderIcon","hash":{},"data":data,"loc":{"start":{"line":47,"column":18},"end":{"line":47,"column":32}}}) : helper)))
    + "\" class=\"check ladder-icon\">\n							</div>\n							<div class=\"ladder-name\">Ladder</div>\n						</div>\n						<div class=\"tournaments-container\">\n							<div class=\"tournaments-icon-container\">\n								<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tournamentsIcon") || (depth0 != null ? lookupProperty(depth0,"tournamentsIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tournamentsIcon","hash":{},"data":data,"loc":{"start":{"line":53,"column":18},"end":{"line":53,"column":37}}}) : helper)))
    + "\" class=\"check tournaments-icon\">\n							</div>\n							<div class=\"tournaments-name\">Tournaments</div>\n						</div>\n						<div class=\"interguild-container\">\n							<div class=\"interguild-icon-container\">\n								<img src=\"./icons/check_circle-yellow.svg\" class=\"check interguild-icon\">\n							</div>\n							<div class=\"tournaments-name\">Tournaments</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class=\"war-time-rules-container\">\n				<div class=\"war-time-rules-title\">War times rules</div>\n				<table class=\"war-time-table\">\n					<tr>\n						<th class=\"schedule-th\">Schedule</th>\n						<th class=\"max-unanswered-th\">Max unanswered<br>matches</th>\n						<th class=\"tta-th\">Time to answer</th>\n					</tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"warTime") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":4},"end":{"line":90,"column":13}}})) != null ? stack1 : "")
    + "				</table>\n				</div>\n			</div>\n		</div>\n		<div class=\"fights-container\">\n			<div class=\"timer-war-time-container\">\n				<div class=\"next-war-time-in\">Next war time in</div>\n				<div class=\"timer\"></div>\n			</div>\n			<div class=\"nb-matches-missed-container\">\n				<div class=\"nb-matches-missed-title\">Number of matches calls missed during this war time:</div>\n				<div class=\"matches-missed\">\n					<div class=\"from-matches-missed\">\n						<div class=\"from-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":104,"column":29},"end":{"line":104,"column":41}}}) : helper)))
    + "</div>\n						<div class=\"hyphen\">-</div>\n						<div class=\"from-nb-matches-missed\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbFromMissed") || (depth0 != null ? lookupProperty(depth0,"nbFromMissed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbFromMissed","hash":{},"data":data,"loc":{"start":{"line":106,"column":42},"end":{"line":106,"column":58}}}) : helper)))
    + "</div>\n					</div>\n					<div class=\"on-matches-missed\">\n						<div class=\"on-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":109,"column":27},"end":{"line":109,"column":37}}}) : helper)))
    + "</div>\n						<div class=\"hyphen\">-</div>\n						<div class=\"on-nb-matches-missed\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbOnMissed") || (depth0 != null ? lookupProperty(depth0,"nbOnMissed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbOnMissed","hash":{},"data":data,"loc":{"start":{"line":111,"column":40},"end":{"line":111,"column":54}}}) : helper)))
    + "</div>\n					</div>\n				</div>\n				<div class=\"random-fight\">\n					<div class=\"title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"randomFight") || (depth0 != null ? lookupProperty(depth0,"randomFight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"randomFight","hash":{},"data":data,"loc":{"start":{"line":115,"column":24},"end":{"line":115,"column":39}}}) : helper)))
    + "</div>\n					<div class=\"button-timer\">\n						<button class=\"accept-random-fight\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"accept") || (depth0 != null ? lookupProperty(depth0,"accept") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accept","hash":{},"data":data,"loc":{"start":{"line":117,"column":42},"end":{"line":117,"column":52}}}) : helper)))
    + "</button>\n						<div class=\"timer\" id=\"war-time-timer\"></div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\"last-matches-container\">\n			<div class=\"last-matches-title\">Last matches of war times</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lastMatches") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":125,"column":3},"end":{"line":153,"column":12}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<tr class=\"each-war-time\">\n					<td class=\"schedule-td\">\n						<div class=\"start\">\n							<div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startDay") || (depth0 != null ? lookupProperty(depth0,"startDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDay","hash":{},"data":data,"loc":{"start":{"line":78,"column":24},"end":{"line":78,"column":36}}}) : helper)))
    + "</div>\n							<div class=\"hour\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startHour") || (depth0 != null ? lookupProperty(depth0,"startHour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startHour","hash":{},"data":data,"loc":{"start":{"line":79,"column":25},"end":{"line":79,"column":38}}}) : helper)))
    + "</div>\n						</div>\n						<div class=\"hyphen\">-</div>\n						<div class=\"end\">\n							<div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endDay") || (depth0 != null ? lookupProperty(depth0,"endDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDay","hash":{},"data":data,"loc":{"start":{"line":83,"column":24},"end":{"line":83,"column":34}}}) : helper)))
    + "</div>\n							<div class=\"hour\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endHour") || (depth0 != null ? lookupProperty(depth0,"endHour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endHour","hash":{},"data":data,"loc":{"start":{"line":84,"column":25},"end":{"line":84,"column":36}}}) : helper)))
    + "</div>\n						</div>\n					</td>\n					<td class=\"max-unanswered-td\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxUnanswered") || (depth0 != null ? lookupProperty(depth0,"maxUnanswered") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxUnanswered","hash":{},"data":data,"loc":{"start":{"line":87,"column":35},"end":{"line":87,"column":52}}}) : helper)))
    + "</td>\n					<td class=\"tta-td\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tta") || (depth0 != null ? lookupProperty(depth0,"tta") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tta","hash":{},"data":data,"loc":{"start":{"line":88,"column":24},"end":{"line":88,"column":31}}}) : helper)))
    + " min</td>\n				</tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<div class=\"match-done-container\">\n				<div class=\"match-done\">\n					<div class=\"nb\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nb") || (depth0 != null ? lookupProperty(depth0,"nb") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nb","hash":{},"data":data,"loc":{"start":{"line":128,"column":21},"end":{"line":128,"column":27}}}) : helper)))
    + "</div>\n					<div class=\"center\">\n						<div class=\"not-forfeit\">\n							<div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId1") || (depth0 != null ? lookupProperty(depth0,"opponentId1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId1","hash":{},"data":data,"loc":{"start":{"line":131,"column":70},"end":{"line":131,"column":85}}}) : helper)))
    + "/';\">\n								<div class=\"opponent opponent1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1") || (depth0 != null ? lookupProperty(depth0,"opponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1","hash":{},"data":data,"loc":{"start":{"line":132,"column":40},"end":{"line":132,"column":53}}}) : helper)))
    + "</div>\n								<div class=\"image-container\">\n									<img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent1") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent1","hash":{},"data":data,"loc":{"start":{"line":134,"column":37},"end":{"line":134,"column":56}}}) : helper)))
    + "\">\n								</div>\n							</div>\n							<div class=\"score score1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score1") || (depth0 != null ? lookupProperty(depth0,"score1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score1","hash":{},"data":data,"loc":{"start":{"line":137,"column":33},"end":{"line":137,"column":43}}}) : helper)))
    + "</div>\n							<div class=\"VS\">VS</div>\n							<div class=\"score score2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score2") || (depth0 != null ? lookupProperty(depth0,"score2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score2","hash":{},"data":data,"loc":{"start":{"line":139,"column":33},"end":{"line":139,"column":43}}}) : helper)))
    + "</div>\n							<div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId2") || (depth0 != null ? lookupProperty(depth0,"opponentId2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId2","hash":{},"data":data,"loc":{"start":{"line":140,"column":70},"end":{"line":140,"column":85}}}) : helper)))
    + "/';\">\n								<div class=\"image-container\">\n									<img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent2") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent2","hash":{},"data":data,"loc":{"start":{"line":142,"column":37},"end":{"line":142,"column":56}}}) : helper)))
    + "\">\n								</div>\n								<div class=\"opponent opponent2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2") || (depth0 != null ? lookupProperty(depth0,"opponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2","hash":{},"data":data,"loc":{"start":{"line":144,"column":40},"end":{"line":144,"column":53}}}) : helper)))
    + "</div>\n							</div>\n						</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"forfeit") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":147,"column":5},"end":{"line":149,"column":12}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n			</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"forfeit\">Victory by forfeit</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"no-current-war\">NO WAR CURRENTLY GOING ON</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"guildBlock\" id=\"warBlock\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"war") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":157,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"war") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":158,"column":0},"end":{"line":160,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();