(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calendar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"line-fixed\" id=\"line-fixed\">\n	<div class=\"line\" id=\"line\"></div>\n</div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"wars") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":0},"end":{"line":107,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"each-war\">\n	<div class=\"validation-container\" id=\"validation-container-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":60},"end":{"line":8,"column":69}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":76},"end":{"line":8,"column":85}}}) : helper)))
    + "\">\n		<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":20}}}) : helper)))
    + "\" class=\"validation-icon\">\n	</div>\n	<div class=\"explanation explanation-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":37},"end":{"line":11,"column":46}}}) : helper)))
    + "\" id=\"explanation-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":64},"end":{"line":11,"column":73}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"explanation") || (depth0 != null ? lookupProperty(depth0,"explanation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"explanation","hash":{},"data":data,"loc":{"start":{"line":11,"column":75},"end":{"line":11,"column":90}}}) : helper)))
    + "</div>\n	<div class=\"current-war\">\n	<div class=\"scores\" id=\"scores-last-wars-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":13,"column":42},"end":{"line":13,"column":48}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":13,"column":55},"end":{"line":13,"column":61}}}) : helper)))
    + "\">\n		<div class=\"center\">\n			<div class=\"name from-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":15,"column":31},"end":{"line":15,"column":43}}}) : helper)))
    + "</div>\n			<div class=\"vs\">VS</div>\n			<div class=\"name on-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":17,"column":29},"end":{"line":17,"column":39}}}) : helper)))
    + "</div>\n		</div>\n	</div>\n	<div class=\"war-informations\" id=\"war-informations-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":52},"end":{"line":20,"column":58}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":65},"end":{"line":20,"column":71}}}) : helper)))
    + "\">\n		<div class=\"war-infos\" id=\"war-infos\">\n			<div class=\"war-info war-schedule-container\">\n				<div class=\"title war-schedule-title\">War schedule</div>\n				<div class=\"schedule-icon-container\">\n					<img src=\"./icons/schedule-yellow.svg\" class=\"schedule-icon\">\n				</div>\n				<div class=\"war-time\">\n					<div class=\"war-start\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warStart") || (depth0 != null ? lookupProperty(depth0,"warStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warStart","hash":{},"data":data,"loc":{"start":{"line":28,"column":28},"end":{"line":28,"column":40}}}) : helper)))
    + "</div>\n					<div class=\"hyphen\">-</div>\n					<div class=\"war-end\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warEnd") || (depth0 != null ? lookupProperty(depth0,"warEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warEnd","hash":{},"data":data,"loc":{"start":{"line":30,"column":26},"end":{"line":30,"column":36}}}) : helper)))
    + "</div>\n				</div>\n				<div class=\"timer\" id=\"war-timer\"></div>\n			</div>\n			<div class=\"war-info war-rules-container\">\n				<div class=\"title war-rules-title\">War rules</div>\n				<div class=\"war-rules-sub-container\">\n					<div class=\"war-rules-sub win-reward\">\n						<div class=\"sub-title win-reward-title\">Win reward</div>\n						<div class=\"win-reward-points-container\">\n							<div class=\"icon-reward-container\">\n								<img src=\"./icons/cup.svg\">\n							</div>\n							<div class=\"points\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"prize") || (depth0 != null ? lookupProperty(depth0,"prize") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prize","hash":{},"data":data,"loc":{"start":{"line":43,"column":27},"end":{"line":43,"column":36}}}) : helper)))
    + " points</div>\n						</div>\n					</div>\n					<div class=\"war-rules-sub accontable-matches\">\n						<div class=\"sub-title accontable-matches-title\">Accountable matches</div>\n						<div class=\"accountable-matches-sub-container ladder-container\">\n							<div class=\"icon-container ladder-icon-container\">\n								<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ladderIcon") || (depth0 != null ? lookupProperty(depth0,"ladderIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ladderIcon","hash":{},"data":data,"loc":{"start":{"line":50,"column":18},"end":{"line":50,"column":32}}}) : helper)))
    + "\" class=\"check ladder-icon\">\n							</div>\n							<div class=\"ladder-name\">Ladder</div>\n						</div>\n						<div class=\"accountable-matches-sub-container tournaments-container\">\n							<div class=\"icon-container tournaments-icon-container\">\n								<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tournamentsIcon") || (depth0 != null ? lookupProperty(depth0,"tournamentsIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tournamentsIcon","hash":{},"data":data,"loc":{"start":{"line":56,"column":18},"end":{"line":56,"column":37}}}) : helper)))
    + "\" class=\"check tournaments-icon\">\n							</div>\n							<div class=\"tournaments-name\">Tournaments</div>\n						</div>\n						<div class=\"accountable-matches-sub-container interguild-container\">\n							<div class=\"icon-container interguild-icon-container\">\n								<img src=\"./icons/check_circle-yellow.svg\" class=\"check interguild-icon\">\n							</div>\n							<div class=\"tournaments-name\">Interguild duels</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class=\"war-info war-time-rules-container\">\n				<div class=\"title war-time-rules-title\">War times rules</div>\n				<table class=\"war-time-table\">\n					<tr>\n						<th class=\"sub-title schedule-th\">Schedule</th>\n						<th class=\"sub-title max-unanswered-th\">Max unanswered<br>matches</th>\n						<th class=\"sub-title tta-th\">Time to answer</th>\n					</tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"warTime") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":5},"end":{"line":93,"column":13}}})) != null ? stack1 : "")
    + "				</table>\n			</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"proposal") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":96,"column":3},"end":{"line":102,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	</div>\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<tr class=\"each-war-time\">\n						<td class=\"schedule-td\">\n							<div class=\"start\">\n								<div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startDay") || (depth0 != null ? lookupProperty(depth0,"startDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDay","hash":{},"data":data,"loc":{"start":{"line":81,"column":25},"end":{"line":81,"column":37}}}) : helper)))
    + "</div>\n								<div class=\"hour\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startHour") || (depth0 != null ? lookupProperty(depth0,"startHour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startHour","hash":{},"data":data,"loc":{"start":{"line":82,"column":26},"end":{"line":82,"column":39}}}) : helper)))
    + "</div>\n							</div>\n							<div class=\"hyphen\">-</div>\n							<div class=\"end\">\n								<div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endDay") || (depth0 != null ? lookupProperty(depth0,"endDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDay","hash":{},"data":data,"loc":{"start":{"line":86,"column":25},"end":{"line":86,"column":35}}}) : helper)))
    + "</div>\n								<div class=\"hour\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endHour") || (depth0 != null ? lookupProperty(depth0,"endHour") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endHour","hash":{},"data":data,"loc":{"start":{"line":87,"column":26},"end":{"line":87,"column":37}}}) : helper)))
    + "</div>\n							</div>\n						</td>\n						<td class=\"max-unanswered-td\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxUnanswered") || (depth0 != null ? lookupProperty(depth0,"maxUnanswered") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxUnanswered","hash":{},"data":data,"loc":{"start":{"line":90,"column":36},"end":{"line":90,"column":53}}}) : helper)))
    + "</td>\n						<td class=\"tta-td\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tta") || (depth0 != null ? lookupProperty(depth0,"tta") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tta","hash":{},"data":data,"loc":{"start":{"line":91,"column":25},"end":{"line":91,"column":32}}}) : helper)))
    + " min</td>\n					</tr>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"negociation-buttons\">\n				<button class=\"negociation-button accept-button\">Accept</button>\n				<button class=\"negociation-button negociate-button\">Negociate</button>\n				<button class=\"negociation-button refuse-button\">Refuse</button>\n			</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"no-current-war\">NO WAR SCHEDULED</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"guildBlock\" id=\"calendarWarPage\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"war") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":108,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"war") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":0},"end":{"line":111,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();