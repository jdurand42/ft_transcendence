(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profileGuild'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <span id=\"manageGuildButton\"></span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	        <tr class=\"tableBoard gamerTable\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":32,"column":48},"end":{"line":32,"column":54}}}) : helper)))
    + "\">\n	            <td class=\"first-th\">\n	                <div class=\"trophy-container\">\n	                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":35,"column":46},"end":{"line":35,"column":56}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":38,"column":17},"end":{"line":38,"column":25}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":40,"column":81},"end":{"line":40,"column":87}}}) : helper)))
    + "/';\">\n	                    <img class=\"list-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":41,"column":50},"end":{"line":41,"column":63}}}) : helper)))
    + "\">\n	                </div>\n	            </td>\n	            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":44,"column":80},"end":{"line":44,"column":86}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":44,"column":91},"end":{"line":44,"column":103}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"score") || (depth0 != null ? lookupProperty(depth0,"score") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":45,"column":17},"end":{"line":45,"column":26}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"victories") || (depth0 != null ? lookupProperty(depth0,"victories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"victories","hash":{},"data":data,"loc":{"start":{"line":46,"column":17},"end":{"line":46,"column":30}}}) : helper)))
    + "</td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalGames") || (depth0 != null ? lookupProperty(depth0,"totalGames") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalGames","hash":{},"data":data,"loc":{"start":{"line":47,"column":17},"end":{"line":47,"column":31}}}) : helper)))
    + "</td>\n	            <td>\n	                <div class=\"status-container\">\n	                    <div class=\"pastille "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":50,"column":42},"end":{"line":50,"column":52}}}) : helper)))
    + "\" id=\"pastille\"></div>\n	                    <p class=\"status\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":51,"column":39},"end":{"line":51,"column":49}}}) : helper)))
    + "</p>\n	                    <div class=\"slide-show-container\"></div>\n	                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":53,"column":31},"end":{"line":53,"column":45}}}) : helper)))
    + "\" class=\"slide-show\"></img>\n	                </div>\n	            </td>\n	            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"member") || (depth0 != null ? lookupProperty(depth0,"member") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"member","hash":{},"data":data,"loc":{"start":{"line":56,"column":17},"end":{"line":56,"column":27}}}) : helper)))
    + "</td>\n	        </tr>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<tr class=\"usersListEl\">\n			<td>Gold</td>\n			<td>1</td>\n			<td>profilePic</td>\n			<td><a href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":219,"column":25},"end":{"line":219,"column":31}}}) : helper)))
    + "/\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":219,"column":34},"end":{"line":219,"column":46}}}) : helper)))
    + "</a></td>\n			<td>2</td>\n			<td>3500</td>\n			<td>12</td>\n			<td>50</td>\n			<td>offline</td>\n			<td>Officer</td>\n	</tr>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<tr class=\"usersListEl\">\n			<td>Gold</td>\n			<td>1</td>\n			<td>profilePic</td>\n			<td><a href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":234,"column":25},"end":{"line":234,"column":31}}}) : helper)))
    + "/\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":234,"column":34},"end":{"line":234,"column":46}}}) : helper)))
    + "</a></td>\n			<td>2</td>\n			<td>4</td>\n			<td>1</td>\n			<td>2</td>\n			<td>offline</td>\n			<td>Member</td>\n	</tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"profileBlock\" id=\"profileGuildBlock\">\n<div id=\"guildOptionsContainer\">\n<div id=\"guildOptions\">\n    <div id=\"guildName-container\">\n    <a id=\"guildNameLabel\" href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "<span> ["
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"anagram") : stack1), depth0))
    + "]</span></a>\n    </div>\n    <div class=\"buttons\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"owner") : depth0),"||",(depth0 != null ? lookupProperty(depth0,"officer") : depth0),{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":10,"column":19}}})) != null ? stack1 : "")
    + "        <span id=\"leaveGuildButton\"></span>\n    </div>\n</div>\n\n<div class=\"listsBoard leaderboardList\" id=\"leaderboardList\">\n	<div class=\"listsBoard leaderboardList\" id=\"memberGuildList\">\n	    <div class=\"nb-list nbMemberGuildProfile\">"
    + alias2(((helper = (helper = lookupProperty(helpers,"membersNumber") || (depth0 != null ? lookupProperty(depth0,"membersNumber") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"membersNumber","hash":{},"data":data,"loc":{"start":{"line":17,"column":47},"end":{"line":17,"column":64}}}) : helper)))
    + " members</div>\n		<div class=\"table-container\" id=\"memberGuildListTable\">\n	    <table class=\"tablesBoard gamersTable\">\n	        <tr>\n	            <th class=\"first-th\"></th>\n	            <th></th>\n	            <th></th>\n	            <th>Nickname</th>\n	            <th>Score</th>\n	            <th>Victories</th>\n	            <th>Total games</th>\n	            <th>Status</th>\n	            <th></th>\n	        </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":3},"end":{"line":58,"column":18}}})) != null ? stack1 : "")
    + "	    </table>\n		</div>\n	</div>\n</div>\n\n\n\n<!--<section>\n<table class=\"usersList\">\n<tr class=\"usersListIndex\">\n	<th>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"membersNumber") : depth0), depth0))
    + " members</th>\n	<th></th>\n	<th></th>\n	<th>Pseudo</th>\n	<th>league Rank</th>\n	<th>General Rank</th>\n	<th>Victories</th>\n	<th>Total Games</th>\n	<th>Status</th>\n	<th>Status</th>\n</tr>\n\n<tr class=\"usersListEl\">\n	<td>Gold</td>\n	<td>1</td>\n	<td>profilePic</td>\n	<td><a href=\"#profile/"
    + alias2(((helper = (helper = lookupProperty(helpers,"owner_id") || (depth0 != null ? lookupProperty(depth0,"owner_id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"owner_id","hash":{},"data":data,"loc":{"start":{"line":205,"column":23},"end":{"line":205,"column":35}}}) : helper)))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"nickname") : stack1), depth0))
    + "</a></td>\n	<td>1</td>\n	<td>1000</td>\n	<td>42</td>\n	<td>1001</td>\n	<td>online</td>\n	<td>Owner</td>\n</tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":214,"column":1},"end":{"line":227,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":229,"column":1},"end":{"line":242,"column":10}}})) != null ? stack1 : "")
    + "</table>\n</section>\n-->\n</div>\n";
},"useData":true});
})();