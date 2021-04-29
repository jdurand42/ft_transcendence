(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guildMembers'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	        <tr class=\"tableBoard gamerTable\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":48},"end":{"line":18,"column":54}}}) : helper)))
    + "\">\n	            <td class=\"first-th\">\n	                <div class=\"trophy-container\">\n	                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":21,"column":46},"end":{"line":21,"column":56}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":24,"column":17},"end":{"line":24,"column":25}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":26,"column":81},"end":{"line":26,"column":87}}}) : helper)))
    + "/';\">\n	                    <img class=\"list-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":27,"column":50},"end":{"line":27,"column":63}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":30,"column":80},"end":{"line":30,"column":86}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":30,"column":91},"end":{"line":30,"column":103}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"score") || (depth0 != null ? lookupProperty(depth0,"score") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":31,"column":17},"end":{"line":31,"column":26}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"victories") || (depth0 != null ? lookupProperty(depth0,"victories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"victories","hash":{},"data":data,"loc":{"start":{"line":32,"column":17},"end":{"line":32,"column":30}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalGames") || (depth0 != null ? lookupProperty(depth0,"totalGames") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalGames","hash":{},"data":data,"loc":{"start":{"line":33,"column":17},"end":{"line":33,"column":31}}}) : helper)))
    + "</td>\n	            <td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ingame") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":5},"end":{"line":37,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"ingame") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":5},"end":{"line":40,"column":16}}})) != null ? stack1 : "")
    + "	                    <div class=\"pastille "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":41,"column":42},"end":{"line":41,"column":52}}}) : helper)))
    + "\" id=\"pastille"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":41,"column":66},"end":{"line":41,"column":72}}}) : helper)))
    + "\"></div>\n	                    <p class=\"status\" id=\"status"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":42,"column":49},"end":{"line":42,"column":55}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":42,"column":57},"end":{"line":42,"column":67}}}) : helper)))
    + "</p>\n	                    <div class=\"slide-show-container\">\n	                    	<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":44,"column":32},"end":{"line":44,"column":46}}}) : helper)))
    + "\" class=\"slide-show\" id=\"slide-show"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":44,"column":81},"end":{"line":44,"column":87}}}) : helper)))
    + "\"></img>\n	                	</div>\n					</div>\n	            </td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"member") || (depth0 != null ? lookupProperty(depth0,"member") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"member","hash":{},"data":data,"loc":{"start":{"line":48,"column":17},"end":{"line":48,"column":27}}}) : helper)))
    + "</td>\n	        </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"status-container ingame-container\" id=\"status-container"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":36,"column":72},"end":{"line":36,"column":78}}}) : helper)))
    + "\" onclick=\"window.location='#game/"
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":36,"column":112},"end":{"line":36,"column":122}}}) : helper)))
    + "';\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"status-container\" id=\"status-container"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":39,"column":55},"end":{"line":39,"column":61}}}) : helper)))
    + "\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"guildBlock\" id=\"lastWarsBlock\">\n	<div class=\"listsBoard leaderboardList\" id=\"memberGuildList\">\n	    <div class=\"nb-list nbMembers\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"membersNumber") || (depth0 != null ? lookupProperty(depth0,"membersNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"membersNumber","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":53}}}) : helper)))
    + " members</div>\n		<div class=\"\" id=\"memberGuildListTable\">\n	    <table class=\"tablesBoard gamersTable\">\n	        <tr>\n	            <th class=\"first-th\"></th>\n	            <th></th>\n	            <th></th>\n	            <th>Nickname</th>\n	            <th>Score</th>\n	            <th>Victories</th>\n	            <th>Total games</th>\n	            <th>Status</th>\n	            <th></th>\n	        </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":50,"column":18}}})) != null ? stack1 : "")
    + "	    </table>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();