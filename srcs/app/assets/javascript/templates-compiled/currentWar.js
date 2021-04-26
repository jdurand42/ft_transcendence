(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['currentWar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"current-war\" id=\"current-war\">\n	<div class=\"scores\">\n		<div class=\"name from-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":42}}}) : helper)))
    + "</div>\n		<div class=\"score from-score\" id=\"from-score\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromScore") || (depth0 != null ? lookupProperty(depth0,"fromScore") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromScore","hash":{},"data":data,"loc":{"start":{"line":6,"column":48},"end":{"line":6,"column":61}}}) : helper)))
    + "</div>\n		<div class=\"vs\">VS</div>\n		<div class=\"score on-score\" id=\"on-score\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onScore") || (depth0 != null ? lookupProperty(depth0,"onScore") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onScore","hash":{},"data":data,"loc":{"start":{"line":8,"column":44},"end":{"line":8,"column":55}}}) : helper)))
    + "</div>\n		<div class=\"name on-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":9,"column":28},"end":{"line":9,"column":38}}}) : helper)))
    + "</div>\n	</div>\n	<div class=\"war-informations\">\n		<div class=\"war-informations-container\">\n			<div class=\"war-informations-title\">War informations</div>\n			<div class=\"arrow-icon-container\">\n				<img src=\"./icons/arrow_down-white.svg\" class=\"arrow-icon\" id=\"arrow-icon\">\n			</div>\n		</div>\n		<div class=\"war-infos\" id=\"war-infos\" style=\"display: none;\">\n			<div class=\"war-info war-schedule-container\">\n				<div class=\"title war-schedule-title\">War schedule</div>\n				<div class=\"schedule-icon-container\">\n					<img src=\"./icons/schedule-yellow.svg\" class=\"schedule-icon\">\n				</div>\n				<div class=\"war-time\">\n					<div class=\"war-start\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warStart") || (depth0 != null ? lookupProperty(depth0,"warStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warStart","hash":{},"data":data,"loc":{"start":{"line":25,"column":28},"end":{"line":25,"column":40}}}) : helper)))
    + "</div>\n					<div class=\"hyphen\">-</div>\n					<div class=\"war-end\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warEnd") || (depth0 != null ? lookupProperty(depth0,"warEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warEnd","hash":{},"data":data,"loc":{"start":{"line":27,"column":26},"end":{"line":27,"column":36}}}) : helper)))
    + "</div>\n				</div>\n\n				<div class=\"timer-war-time-container\">\n					<div class=\"next-war-time-in\">En of war in</div>\n					<div class=\"timer\" id=\"war-timer\"></div>\n				</div>\n			</div>\n			<div class=\"war-info war-rules-container\">\n				<div class=\"title war-rules-title\">War rules</div>\n				<div class=\"war-rules-sub-container\">\n					<div class=\"war-rules-sub win-reward\">\n						<div class=\"sub-title win-reward-title\">Win reward</div>\n						<div class=\"win-reward-points-container\">\n							<div class=\"icon-reward-container\">\n								<img src=\"./icons/cup.svg\">\n							</div>\n							<div class=\"points\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"prize") || (depth0 != null ? lookupProperty(depth0,"prize") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prize","hash":{},"data":data,"loc":{"start":{"line":44,"column":27},"end":{"line":44,"column":36}}}) : helper)))
    + " points</div>\n						</div>\n					</div>\n					<div class=\"war-rules-sub accontable-matches\">\n						<div class=\"sub-title accontable-matches-title\">Accountable matches</div>\n						<div class=\"accountable-matches-sub-container ladder-container\">\n							<div class=\"icon-container ladder-icon-container\">\n								<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ladderIcon") || (depth0 != null ? lookupProperty(depth0,"ladderIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ladderIcon","hash":{},"data":data,"loc":{"start":{"line":51,"column":18},"end":{"line":51,"column":32}}}) : helper)))
    + "\" class=\"check ladder-icon\">\n							</div>\n							<div class=\"ladder-name\">Ladder</div>\n						</div>\n						<div class=\"accountable-matches-sub-container tournaments-container\">\n							<div class=\"icon-container tournaments-icon-container\">\n								<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tournamentsIcon") || (depth0 != null ? lookupProperty(depth0,"tournamentsIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tournamentsIcon","hash":{},"data":data,"loc":{"start":{"line":57,"column":18},"end":{"line":57,"column":37}}}) : helper)))
    + "\" class=\"check tournaments-icon\">\n							</div>\n							<div class=\"tournaments-name\">Tournaments</div>\n						</div>\n						<div class=\"accountable-matches-sub-container interguild-container\">\n							<div class=\"icon-container interguild-icon-container\">\n								<img src=\"./icons/check_circle-yellow.svg\" class=\"check interguild-icon\">\n							</div>\n							<div class=\"tournaments-name\">Interguild duels</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class=\"war-info war-time-rules-container\">\n				<div class=\"title war-time-rules-title\">War times rules</div>\n				<table class=\"war-time-table\">\n					<tr>\n						<th class=\"sub-title schedule-th\">Schedule</th>\n						<th class=\"sub-title max-unanswered-th\">Max unanswered<br>matches</th>\n						<th class=\"sub-title tta-th\">Time to answer</th>\n					</tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"warTime") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":4},"end":{"line":93,"column":13}}})) != null ? stack1 : "")
    + "				</table>\n				</div>\n			</div>\n		</div>\n	<div class=\"fights-container\">\n		<div class=\"timer-war-time-container\">\n			<div class=\"next-war-time-in\" id=\"next-war-time-in-title\">Next war time in</div>\n			<div class=\"timer\" id=\"next-war-time-in\"></div>\n		</div>\n		<div class=\"nb-matches-missed-container\">\n			<div class=\"nb-matches-missed-title\">Number of matches calls missed during this war time:</div>\n			<div class=\"matches-missed\">\n				<div class=\"each-matches-missed from-matches-missed\">\n					<div class=\"name from-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":107,"column":33},"end":{"line":107,"column":45}}}) : helper)))
    + "</div>\n					<div class=\"hyphen\">-</div>\n					<div class=\"nb-matches-missed from-nb-matches-missed\" id=\"nb-matches-missed"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromId") || (depth0 != null ? lookupProperty(depth0,"fromId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromId","hash":{},"data":data,"loc":{"start":{"line":109,"column":80},"end":{"line":109,"column":90}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbFromMissed") || (depth0 != null ? lookupProperty(depth0,"nbFromMissed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbFromMissed","hash":{},"data":data,"loc":{"start":{"line":109,"column":92},"end":{"line":109,"column":108}}}) : helper)))
    + "</div>\n				</div>\n				<div class=\"each-matches-missed on-matches-missed\">\n					<div class=\"name on-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":112,"column":31},"end":{"line":112,"column":41}}}) : helper)))
    + "</div>\n					<div class=\"hyphen\">-</div>\n					<div class=\"nb-matches-missed on-nb-matches-missed\" id=\"nb-matches-missed"
    + alias4(((helper = (helper = lookupProperty(helpers,"onId") || (depth0 != null ? lookupProperty(depth0,"onId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onId","hash":{},"data":data,"loc":{"start":{"line":114,"column":78},"end":{"line":114,"column":86}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbOnMissed") || (depth0 != null ? lookupProperty(depth0,"nbOnMissed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbOnMissed","hash":{},"data":data,"loc":{"start":{"line":114,"column":88},"end":{"line":114,"column":102}}}) : helper)))
    + "</div>\n				</div>\n			</div>\n			<div class=\"random-fight\">\n				<div class=\"random-fight-title\" id=\"random-fight-title\">No random fight pending</div>\n				<div class=\"button-timer\">\n					<button class=\"accept-random-fight\" id=\"accept-random-fight\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"accept") || (depth0 != null ? lookupProperty(depth0,"accept") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accept","hash":{},"data":data,"loc":{"start":{"line":121,"column":66},"end":{"line":121,"column":76}}}) : helper)))
    + "</button>\n					<div class=\"timer\" id=\"war-time-timer\">00j 00h 00m 00s</div>\n				</div>\n				<div class=\"error-message\" id=\"error-message\" style=\"display: none;\"></div>\n			</div>\n		</div>\n	</div>\n	<div class=\"match-history last-matches-container\">\n		<div class=\"title last-matches-title\">Last matches of war times</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lastMatches") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":2},"end":{"line":158,"column":11}}})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<tr class=\"each-war-time\">\n					<td class=\"row schedule-td\">\n						<div class=\"row start\">\n							<div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startDay") || (depth0 != null ? lookupProperty(depth0,"startDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDay","hash":{},"data":data,"loc":{"start":{"line":82,"column":24},"end":{"line":82,"column":36}}}) : helper)))
    + "</div>\n							<div class=\"hour\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startHour") || (depth0 != null ? lookupProperty(depth0,"startHour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startHour","hash":{},"data":data,"loc":{"start":{"line":83,"column":25},"end":{"line":83,"column":38}}}) : helper)))
    + "h:00m</div>\n						</div>\n						<div class=\"hyphen\">-</div>\n						<div class=\"row end\">\n							<div class=\"hour\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endHour") || (depth0 != null ? lookupProperty(depth0,"endHour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endHour","hash":{},"data":data,"loc":{"start":{"line":87,"column":25},"end":{"line":87,"column":36}}}) : helper)))
    + "h:00m</div>\n						</div>\n					</td>\n					<td class=\"max-unanswered-td\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxUnanswered") || (depth0 != null ? lookupProperty(depth0,"maxUnanswered") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxUnanswered","hash":{},"data":data,"loc":{"start":{"line":90,"column":35},"end":{"line":90,"column":52}}}) : helper)))
    + "</td>\n					<td class=\"tta-td\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tta") || (depth0 != null ? lookupProperty(depth0,"tta") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tta","hash":{},"data":data,"loc":{"start":{"line":91,"column":24},"end":{"line":91,"column":31}}}) : helper)))
    + " min</td>\n				</tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"match-done-container\">\n			<div class=\"match-done\">\n				<div class=\"nb\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nb") || (depth0 != null ? lookupProperty(depth0,"nb") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nb","hash":{},"data":data,"loc":{"start":{"line":133,"column":20},"end":{"line":133,"column":26}}}) : helper)))
    + "</div>\n				<div class=\"center\">\n					<div class=\"not-forfeit\">\n						<div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId1") || (depth0 != null ? lookupProperty(depth0,"opponentId1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId1","hash":{},"data":data,"loc":{"start":{"line":136,"column":69},"end":{"line":136,"column":84}}}) : helper)))
    + "/';\">\n							<div class=\"opponent opponent1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1") || (depth0 != null ? lookupProperty(depth0,"opponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1","hash":{},"data":data,"loc":{"start":{"line":137,"column":39},"end":{"line":137,"column":52}}}) : helper)))
    + "</div>\n							<div class=\"image-container\">\n								<img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent1") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent1","hash":{},"data":data,"loc":{"start":{"line":139,"column":36},"end":{"line":139,"column":55}}}) : helper)))
    + "\">\n							</div>\n						</div>\n						<div class=\"score score1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score1") || (depth0 != null ? lookupProperty(depth0,"score1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score1","hash":{},"data":data,"loc":{"start":{"line":142,"column":32},"end":{"line":142,"column":42}}}) : helper)))
    + "</div>\n						<div class=\"VS\">VS</div>\n						<div class=\"score score2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score2") || (depth0 != null ? lookupProperty(depth0,"score2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score2","hash":{},"data":data,"loc":{"start":{"line":144,"column":32},"end":{"line":144,"column":42}}}) : helper)))
    + "</div>\n						<div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId2") || (depth0 != null ? lookupProperty(depth0,"opponentId2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId2","hash":{},"data":data,"loc":{"start":{"line":145,"column":69},"end":{"line":145,"column":84}}}) : helper)))
    + "/';\">\n							<div class=\"image-container\">\n								<img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent2") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent2","hash":{},"data":data,"loc":{"start":{"line":147,"column":36},"end":{"line":147,"column":55}}}) : helper)))
    + "\">\n							</div>\n							<div class=\"opponent opponent2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2") || (depth0 != null ? lookupProperty(depth0,"opponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2","hash":{},"data":data,"loc":{"start":{"line":149,"column":39},"end":{"line":149,"column":52}}}) : helper)))
    + "</div>\n						</div>\n					</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"forfeit") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":152,"column":5},"end":{"line":154,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"forfeit\">Victory by forfeit</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"no-current-war\">NO WAR CURRENTLY GOING ON</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"guildBlock\" id=\"warBlock\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"war") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":161,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"war") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":162,"column":0},"end":{"line":164,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();