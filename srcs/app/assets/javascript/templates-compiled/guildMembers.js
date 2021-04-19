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
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":19,"column":48},"end":{"line":19,"column":54}}}) : helper)))
    + "\">\n	            <td class=\"first-th\">\n	                <div class=\"trophy-container\">\n	                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":22,"column":46},"end":{"line":22,"column":56}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":25,"column":17},"end":{"line":25,"column":25}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":27,"column":81},"end":{"line":27,"column":87}}}) : helper)))
    + "/';\">\n	                    <img class=\"list-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":28,"column":50},"end":{"line":28,"column":63}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":80},"end":{"line":31,"column":86}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":31,"column":91},"end":{"line":31,"column":103}}}) : helper)))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":13},"end":{"line":34,"column":20}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":13},"end":{"line":37,"column":24}}})) != null ? stack1 : "")
    + "	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"victories") || (depth0 != null ? lookupProperty(depth0,"victories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"victories","hash":{},"data":data,"loc":{"start":{"line":39,"column":17},"end":{"line":39,"column":30}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalGames") || (depth0 != null ? lookupProperty(depth0,"totalGames") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalGames","hash":{},"data":data,"loc":{"start":{"line":40,"column":17},"end":{"line":40,"column":31}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"status-container\">\n	                    <div class=\"pastille "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":43,"column":42},"end":{"line":43,"column":52}}}) : helper)))
    + "\" id=\"pastille\"></div>\n	                    <p class=\"status\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":44,"column":39},"end":{"line":44,"column":49}}}) : helper)))
    + "</p>\n	                    <div class=\"slide-show-container\"></div>\n	                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":46,"column":31},"end":{"line":46,"column":45}}}) : helper)))
    + "\" class=\"slide-show\"></img>\n	                </div>\n	            </td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"member") || (depth0 != null ? lookupProperty(depth0,"member") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"member","hash":{},"data":data,"loc":{"start":{"line":49,"column":17},"end":{"line":49,"column":27}}}) : helper)))
    + "</td>\n	        </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	            <td class=\"tableBoard-guild\" onclick=\"window.location='#guild/"
    + alias4(((helper = (helper = lookupProperty(helpers,"guild_id") || (depth0 != null ? lookupProperty(depth0,"guild_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"guild_id","hash":{},"data":data,"loc":{"start":{"line":33,"column":75},"end":{"line":33,"column":87}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"guildName") || (depth0 != null ? lookupProperty(depth0,"guildName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"guildName","hash":{},"data":data,"loc":{"start":{"line":33,"column":92},"end":{"line":33,"column":105}}}) : helper)))
    + "</td>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "	            <td>N/A</td>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"guildBlock\" id=\"lastWarsBlock\">\n	<div class=\"listsBoard leaderboardList\" id=\"memberGuildList\">\n	    <div class=\"nb-list nbMembers\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"membersNumber") || (depth0 != null ? lookupProperty(depth0,"membersNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"membersNumber","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":53}}}) : helper)))
    + " members</div>\n		<div class=\"\" id=\"memberGuildListTable\">\n	    <table class=\"tablesBoard gamersTable\">\n	        <tr>\n	            <th class=\"first-th\"></th>\n	            <th></th>\n	            <th></th>\n	            <th>Nickname</th>\n	            <th>Guild</th>\n	            <th>Victories</th>\n	            <th>Total games</th>\n	            <th>Status</th>\n	            <th></th>\n	        </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":51,"column":18}}})) != null ? stack1 : "")
    + "	    </table>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();