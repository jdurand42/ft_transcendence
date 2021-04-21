(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['matchHistory'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<div class=\"el match\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":25,"column":29},"end":{"line":25,"column":37}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":25,"column":39},"end":{"line":25,"column":47}}}) : helper)))
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"match-done-container\">\n            <div class=\"match-done\">\n				<div class=\"nb\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nb") || (depth0 != null ? lookupProperty(depth0,"nb") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nb","hash":{},"data":data,"loc":{"start":{"line":35,"column":20},"end":{"line":35,"column":26}}}) : helper)))
    + "</div>\n				<div class=\"center\">\n					<div class=\"not-forfeit\">\n						<div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId1") || (depth0 != null ? lookupProperty(depth0,"opponentId1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId1","hash":{},"data":data,"loc":{"start":{"line":38,"column":69},"end":{"line":38,"column":84}}}) : helper)))
    + "/';\">\n							<div class=\"opponent opponent1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1") || (depth0 != null ? lookupProperty(depth0,"opponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1","hash":{},"data":data,"loc":{"start":{"line":39,"column":39},"end":{"line":39,"column":52}}}) : helper)))
    + "</div>\n							<div class=\"image-container\">\n								<img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent1") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent1","hash":{},"data":data,"loc":{"start":{"line":41,"column":36},"end":{"line":41,"column":55}}}) : helper)))
    + "\">\n							</div>\n						</div>\n						<div class=\"score score1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score1") || (depth0 != null ? lookupProperty(depth0,"score1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score1","hash":{},"data":data,"loc":{"start":{"line":44,"column":32},"end":{"line":44,"column":42}}}) : helper)))
    + "</div>\n						<div class=\"VS\">VS</div>\n						<div class=\"score score2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score2") || (depth0 != null ? lookupProperty(depth0,"score2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score2","hash":{},"data":data,"loc":{"start":{"line":46,"column":32},"end":{"line":46,"column":42}}}) : helper)))
    + "</div>\n						<div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId2") || (depth0 != null ? lookupProperty(depth0,"opponentId2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId2","hash":{},"data":data,"loc":{"start":{"line":47,"column":69},"end":{"line":47,"column":84}}}) : helper)))
    + "/';\">\n							<div class=\"image-container\">\n								<img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent2") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent2","hash":{},"data":data,"loc":{"start":{"line":49,"column":36},"end":{"line":49,"column":55}}}) : helper)))
    + "\">\n							</div>\n							<div class=\"opponent opponent2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2") || (depth0 != null ? lookupProperty(depth0,"opponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2","hash":{},"data":data,"loc":{"start":{"line":51,"column":39},"end":{"line":51,"column":52}}}) : helper)))
    + "</div>\n						</div>\n					</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"forfeit") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":56,"column":11}}})) != null ? stack1 : "")
    + "				</div>\n            </div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"forfeit\">Victory by forfeit</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"profileBlock\" id=\"matchHistoryBlock\">\n	<div class=\"filter matches-filter\" id=\"matches-filter\">\n		<div class=\"match-type\" id=\"match-type\">\n			"
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":17,"column":11}}}) : helper)))
    + "\n		</div>\n		<div class=\"arrow-down-container\">\n			<img src='./icons/arrow_down-black.svg' class=\"arrow-down\"></img>\n		</div>\n	</div>\n	<div class=\"matches-list\" id=\"matches-list\" style=\"display: none;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"match") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":26,"column":11}}})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"nb-matches\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbMatches") || (depth0 != null ? lookupProperty(depth0,"nbMatches") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbMatches","hash":{},"data":data,"loc":{"start":{"line":28,"column":25},"end":{"line":28,"column":38}}}) : helper)))
    + " matches</div>\n\n\n	<div class=\"match-history\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"myDone") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":60,"column":11}}})) != null ? stack1 : "")
    + "	</div>\n\n</div>";
},"useData":true});
})();