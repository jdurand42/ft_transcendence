(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guildMembers'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	            <td class=\"tableBoard-guild\" onclick=\"window.location='#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"guild_id") : stack1), depth0))
    + "/';\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"guildName") : stack1), depth0))
    + "</td>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	            <td>N/A</td>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	        <tr class=\"tableBoard gamerTable\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":50,"column":48},"end":{"line":50,"column":54}}}) : helper)))
    + "\">\n	            <td class=\"first-th\">\n	                <div class=\"trophy-container\">\n	                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":53,"column":46},"end":{"line":53,"column":56}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":56,"column":17},"end":{"line":56,"column":25}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":58,"column":81},"end":{"line":58,"column":87}}}) : helper)))
    + "/';\">\n	                    <img class=\"list-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":59,"column":50},"end":{"line":59,"column":63}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":62,"column":80},"end":{"line":62,"column":86}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":62,"column":91},"end":{"line":62,"column":103}}}) : helper)))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":13},"end":{"line":65,"column":20}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":13},"end":{"line":68,"column":24}}})) != null ? stack1 : "")
    + "	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"generalRank") || (depth0 != null ? lookupProperty(depth0,"generalRank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"generalRank","hash":{},"data":data,"loc":{"start":{"line":69,"column":17},"end":{"line":69,"column":32}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"victories") || (depth0 != null ? lookupProperty(depth0,"victories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"victories","hash":{},"data":data,"loc":{"start":{"line":70,"column":17},"end":{"line":70,"column":30}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalGames") || (depth0 != null ? lookupProperty(depth0,"totalGames") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalGames","hash":{},"data":data,"loc":{"start":{"line":71,"column":17},"end":{"line":71,"column":31}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"status-container\">\n	                    <div class=\"pastille "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":74,"column":42},"end":{"line":74,"column":52}}}) : helper)))
    + "\" id=\"pastille\"></div>\n	                    <p class=\"status\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":75,"column":39},"end":{"line":75,"column":49}}}) : helper)))
    + "</p>\n	                    <div class=\"slide-show-container\"></div>\n	                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":77,"column":31},"end":{"line":77,"column":45}}}) : helper)))
    + "\" class=\"slide-show\"></img>\n	                </div>\n	            </td>\n	            <td>Officer</td>\n	        </tr>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	            <td class=\"tableBoard-guild\" onclick=\"window.location='#guild/"
    + alias4(((helper = (helper = lookupProperty(helpers,"guild_id") || (depth0 != null ? lookupProperty(depth0,"guild_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"guild_id","hash":{},"data":data,"loc":{"start":{"line":64,"column":75},"end":{"line":64,"column":87}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"guildName") || (depth0 != null ? lookupProperty(depth0,"guildName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"guildName","hash":{},"data":data,"loc":{"start":{"line":64,"column":92},"end":{"line":64,"column":105}}}) : helper)))
    + "</td>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	        <tr class=\"tableBoard gamerTable\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":84,"column":48},"end":{"line":84,"column":54}}}) : helper)))
    + "\">\n	            <td class=\"first-th\">\n	                <div class=\"trophy-container\">\n	                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":87,"column":46},"end":{"line":87,"column":56}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":90,"column":17},"end":{"line":90,"column":25}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":92,"column":81},"end":{"line":92,"column":87}}}) : helper)))
    + "/';\">\n	                    <img class=\"list-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":93,"column":50},"end":{"line":93,"column":63}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":96,"column":80},"end":{"line":96,"column":86}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":96,"column":91},"end":{"line":96,"column":103}}}) : helper)))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":13},"end":{"line":99,"column":20}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":13},"end":{"line":102,"column":24}}})) != null ? stack1 : "")
    + "	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"generalRank") || (depth0 != null ? lookupProperty(depth0,"generalRank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"generalRank","hash":{},"data":data,"loc":{"start":{"line":103,"column":17},"end":{"line":103,"column":32}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"victories") || (depth0 != null ? lookupProperty(depth0,"victories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"victories","hash":{},"data":data,"loc":{"start":{"line":104,"column":17},"end":{"line":104,"column":30}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalGames") || (depth0 != null ? lookupProperty(depth0,"totalGames") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalGames","hash":{},"data":data,"loc":{"start":{"line":105,"column":17},"end":{"line":105,"column":31}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"status-container\">\n	                    <div class=\"pastille "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":108,"column":42},"end":{"line":108,"column":52}}}) : helper)))
    + "\" id=\"pastille\"></div>\n	                    <p class=\"status\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":109,"column":39},"end":{"line":109,"column":49}}}) : helper)))
    + "</p>\n	                    <div class=\"slide-show-container\"></div>\n	                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":111,"column":31},"end":{"line":111,"column":45}}}) : helper)))
    + "\" class=\"slide-show\"></img>\n	                </div>\n	            </td>\n	            <td>Member</td>\n	        </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"guildBlock\" id=\"lastWarsBlock\">\n	<div class=\"listsBoard leaderboardList\" id=\"leaderboardList\">\n	    <div class=\"nb-list nbGamers\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"membersNumber") || (depth0 != null ? lookupProperty(depth0,"membersNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"membersNumber","hash":{},"data":data,"loc":{"start":{"line":3,"column":35},"end":{"line":3,"column":52}}}) : helper)))
    + " members</div>\n	    <table class=\"tablesBoard gamersTable\">\n	        <tr>\n	            <th class=\"first-th\"></th>\n	            <th></th>\n	            <th></th>\n	            <th>Nickname</th>\n	            <th>Guild</th>\n	            <th>General Rank</th>\n	            <th>Victories</th>\n	            <th>Total games</th>\n	            <th>Status</th>\n	            <th></th>\n	        </tr>\n	        <tr class=\"tableBoard gamerTable\" for=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">\n	            <td class=\"first-th\">\n	                <div class=\"trophy-container\">\n	                    <img class=\"trophy\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"trophy") : stack1), depth0))
    + "\">\n	                </div>\n	            </td>\n	            <td>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"rank") : stack1), depth0))
    + "</td>\n	            <td>\n	                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":25,"column":81},"end":{"line":25,"column":87}}}) : helper)))
    + "/';\">\n	                    <img class=\"list-image\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"image_url") : stack1), depth0))
    + "\">\n	                </div>\n	            </td>\n	            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "/';\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"nickname") : stack1), depth0))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"guild_id") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":13},"end":{"line":32,"column":20}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"guild_id") : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":13},"end":{"line":35,"column":24}}})) != null ? stack1 : "")
    + "	            <td>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"generalRank") : stack1), depth0))
    + "</td>\n	            <td>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"victories") : stack1), depth0))
    + "</td>\n	            <td>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"totalGames") : stack1), depth0))
    + "</td>\n	            <td>\n	                <div class=\"status-container\">\n	                    <div class=\"pastille "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"status") : stack1), depth0))
    + "\" id=\"pastille\"></div>\n	                    <p class=\"status\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"status") : stack1), depth0))
    + "</p>\n	                    <div class=\"slide-show-container\"></div>\n	                    <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"slide_show") : stack1), depth0))
    + "\" class=\"slide-show\"></img>\n	                </div>\n	            </td>\n	            <td>Owner</td>\n	        </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":9},"end":{"line":82,"column":18}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":5},"end":{"line":116,"column":18}}})) != null ? stack1 : "")
    + "	    </table>\n	</div>\n</section>\n";
},"useData":true});
})();