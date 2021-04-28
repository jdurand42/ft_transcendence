(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lastWars'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"wars") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":150,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"current-war\">\n	<div class=\"scores scores-last-wars\" id=\"scores-last-wars-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":59},"end":{"line":5,"column":65}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":72},"end":{"line":5,"column":78}}}) : helper)))
    + "\">\n		<div class=\"center\">\n			<div class=\"name from-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":13,"column":31},"end":{"line":13,"column":43}}}) : helper)))
    + "</div>\n			<div class=\"score from-score\" id=\"from-score-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":14,"column":48},"end":{"line":14,"column":54}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromScore") || (depth0 != null ? lookupProperty(depth0,"fromScore") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromScore","hash":{},"data":data,"loc":{"start":{"line":14,"column":56},"end":{"line":14,"column":69}}}) : helper)))
    + "</div>\n			<div class=\"vs\">VS</div>\n			<div class=\"score on-score\" id=\"on-score-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":44},"end":{"line":16,"column":50}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onScore") || (depth0 != null ? lookupProperty(depth0,"onScore") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onScore","hash":{},"data":data,"loc":{"start":{"line":16,"column":52},"end":{"line":16,"column":63}}}) : helper)))
    + "</div>\n			<div class=\"name on-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":17,"column":29},"end":{"line":17,"column":39}}}) : helper)))
    + "</div>\n		</div>\n	</div>\n	<div class=\"war-informations\" id=\"war-informations-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":52},"end":{"line":23,"column":58}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":65},"end":{"line":23,"column":71}}}) : helper)))
    + "\" style=\"display: none;\">\n		<div class=\"war-infos\" id=\"war-infos\">\n			<div class=\"war-info war-schedule-container\">\n				<div class=\"title war-schedule-title\">War schedule</div>\n				<div class=\"schedule-icon-container\">\n					<img src=\"./icons/schedule-yellow.svg\" class=\"schedule-icon\">\n				</div>\n				<div class=\"war-time\">\n					<div class=\"war-start\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warStart") || (depth0 != null ? lookupProperty(depth0,"warStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warStart","hash":{},"data":data,"loc":{"start":{"line":31,"column":28},"end":{"line":31,"column":40}}}) : helper)))
    + "</div>\n					<div class=\"hyphen\">-</div>\n					<div class=\"war-end\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warEnd") || (depth0 != null ? lookupProperty(depth0,"warEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warEnd","hash":{},"data":data,"loc":{"start":{"line":33,"column":26},"end":{"line":33,"column":36}}}) : helper)))
    + "</div>\n				</div>\n			</div>\n			<div class=\"war-info war-rules-container\">\n				<div class=\"title war-rules-title\">War rules</div>\n				<div class=\"war-rules-sub-container\">\n					<div class=\"war-rules-sub win-reward\">\n						<div class=\"sub-title win-reward-title\">Win reward</div>\n						<div class=\"win-reward-points-container\">\n							<div class=\"icon-reward-container\">\n								<img src=\"./icons/cup.svg\">\n							</div>\n							<div class=\"points\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"prize") || (depth0 != null ? lookupProperty(depth0,"prize") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prize","hash":{},"data":data,"loc":{"start":{"line":46,"column":27},"end":{"line":46,"column":36}}}) : helper)))
    + " points</div>\n						</div>\n					</div>\n					<div class=\"war-rules-sub accontable-matches\">\n						<div class=\"sub-title accontable-matches-title\">Accountable matches</div>\n						<div class=\"accountable-matches-sub-container ladder-container\">\n							<div class=\"icon-container ladder-icon-container\">\n								<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ladderIcon") || (depth0 != null ? lookupProperty(depth0,"ladderIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ladderIcon","hash":{},"data":data,"loc":{"start":{"line":53,"column":18},"end":{"line":53,"column":32}}}) : helper)))
    + "\" class=\"check ladder-icon\">\n							</div>\n							<div class=\"ladder-name\">Ladder</div>\n						</div>\n						<div class=\"accountable-matches-sub-container tournaments-container\">\n							<div class=\"icon-container tournaments-icon-container\">\n								<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tournamentsIcon") || (depth0 != null ? lookupProperty(depth0,"tournamentsIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tournamentsIcon","hash":{},"data":data,"loc":{"start":{"line":59,"column":18},"end":{"line":59,"column":37}}}) : helper)))
    + "\" class=\"check tournaments-icon\">\n							</div>\n							<div class=\"tournaments-name\">Tournaments</div>\n						</div>\n						<div class=\"accountable-matches-sub-container interguild-container\">\n							<div class=\"icon-container interguild-icon-container\">\n								<img src=\"./icons/check_circle-yellow.svg\" class=\"check interguild-icon\">\n							</div>\n							<div class=\"tournaments-name\">Interguild duels</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class=\"war-info war-time-rules-container\">\n				<div class=\"title war-time-rules-title\">War times rules</div>\n				<table class=\"war-time-table\">\n					<tr>\n						<th class=\"sub-title schedule-th\">Schedule</th>\n						<th class=\"sub-title max-unanswered-th\">Max unanswered<br>matches</th>\n						<th class=\"sub-title tta-th\">Time to answer</th>\n					</tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"warTime") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":4},"end":{"line":95,"column":13}}})) != null ? stack1 : "")
    + "				</table>\n				</div>\n			</div>\n		<div class=\"match-history last-matches-container\">\n			<div class=\"title last-matches-title\">Matches of war times</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lastMatches") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":118,"column":3},"end":{"line":146,"column":12}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<tr class=\"each-war-time\">\n					<td class=\"row schedule-td\">\n						<div class=\"row start\">\n							<div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startDay") || (depth0 != null ? lookupProperty(depth0,"startDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDay","hash":{},"data":data,"loc":{"start":{"line":84,"column":24},"end":{"line":84,"column":36}}}) : helper)))
    + "</div>\n							<div class=\"hour\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startHour") || (depth0 != null ? lookupProperty(depth0,"startHour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startHour","hash":{},"data":data,"loc":{"start":{"line":85,"column":25},"end":{"line":85,"column":38}}}) : helper)))
    + "h:00m</div>\n						</div>\n						<div class=\"hyphen\">-</div>\n						<div class=\"row end\">\n							<div class=\"hour\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endHour") || (depth0 != null ? lookupProperty(depth0,"endHour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endHour","hash":{},"data":data,"loc":{"start":{"line":89,"column":25},"end":{"line":89,"column":36}}}) : helper)))
    + "h:00m</div>\n						</div>\n					</td>\n					<td class=\"max-unanswered-td\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxUnanswered") || (depth0 != null ? lookupProperty(depth0,"maxUnanswered") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxUnanswered","hash":{},"data":data,"loc":{"start":{"line":92,"column":35},"end":{"line":92,"column":52}}}) : helper)))
    + "</td>\n					<td class=\"tta-td\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tta") || (depth0 != null ? lookupProperty(depth0,"tta") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tta","hash":{},"data":data,"loc":{"start":{"line":93,"column":24},"end":{"line":93,"column":31}}}) : helper)))
    + " seconds</td>\n				</tr>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<div class=\"match-done-container\">\n				<div class=\"match-done\">\n					<div class=\"nb\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nb") || (depth0 != null ? lookupProperty(depth0,"nb") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nb","hash":{},"data":data,"loc":{"start":{"line":121,"column":21},"end":{"line":121,"column":27}}}) : helper)))
    + "</div>\n					<div class=\"center\">\n						<div class=\"not-forfeit\">\n							<div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId1") || (depth0 != null ? lookupProperty(depth0,"opponentId1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId1","hash":{},"data":data,"loc":{"start":{"line":124,"column":70},"end":{"line":124,"column":85}}}) : helper)))
    + "/';\">\n								<div class=\"opponent opponent1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1") || (depth0 != null ? lookupProperty(depth0,"opponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1","hash":{},"data":data,"loc":{"start":{"line":125,"column":40},"end":{"line":125,"column":53}}}) : helper)))
    + "</div>\n								<div class=\"image-container\">\n									<img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent1") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent1","hash":{},"data":data,"loc":{"start":{"line":127,"column":37},"end":{"line":127,"column":56}}}) : helper)))
    + "\">\n								</div>\n							</div>\n							<div class=\"score score1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score1") || (depth0 != null ? lookupProperty(depth0,"score1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score1","hash":{},"data":data,"loc":{"start":{"line":130,"column":33},"end":{"line":130,"column":43}}}) : helper)))
    + "</div>\n							<div class=\"VS\">VS</div>\n							<div class=\"score score2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score2") || (depth0 != null ? lookupProperty(depth0,"score2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score2","hash":{},"data":data,"loc":{"start":{"line":132,"column":33},"end":{"line":132,"column":43}}}) : helper)))
    + "</div>\n							<div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId2") || (depth0 != null ? lookupProperty(depth0,"opponentId2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId2","hash":{},"data":data,"loc":{"start":{"line":133,"column":70},"end":{"line":133,"column":85}}}) : helper)))
    + "/';\">\n								<div class=\"image-container\">\n									<img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent2") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent2","hash":{},"data":data,"loc":{"start":{"line":135,"column":37},"end":{"line":135,"column":56}}}) : helper)))
    + "\">\n								</div>\n								<div class=\"opponent opponent2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2") || (depth0 != null ? lookupProperty(depth0,"opponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2","hash":{},"data":data,"loc":{"start":{"line":137,"column":40},"end":{"line":137,"column":53}}}) : helper)))
    + "</div>\n							</div>\n						</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"forfeit") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":140,"column":6},"end":{"line":142,"column":13}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n			</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "						<div class=\"forfeit\">Victory by forfeit</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"no-current-war\">NO WAR REGISTERED</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"guildBlock\" id=\"lastWarsBlock\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"war") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":151,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"war") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":152,"column":0},"end":{"line":154,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();