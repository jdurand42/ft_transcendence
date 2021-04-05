(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profileGuild'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td class=\"tableBoard-guild\" onclick=\"window.location='#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"guild_id") : stack1), depth0))
    + "/';\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"guildName") : stack1), depth0))
    + "</td>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <td>N/A</td>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr class=\"tableBoard gamerTable\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":57,"column":47},"end":{"line":57,"column":53}}}) : helper)))
    + "\">\n            <td class=\"first-th\">\n                <div class=\"trophy-container\">\n                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":60,"column":45},"end":{"line":60,"column":55}}}) : helper)))
    + "\">\n                </div>\n            </td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":63,"column":16},"end":{"line":63,"column":24}}}) : helper)))
    + "</td>\n            <td>\n                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":65,"column":80},"end":{"line":65,"column":86}}}) : helper)))
    + "/';\">\n                    <img class=\"list-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":66,"column":49},"end":{"line":66,"column":62}}}) : helper)))
    + "\">\n                </div>\n            </td>\n            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":69,"column":79},"end":{"line":69,"column":85}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":69,"column":90},"end":{"line":69,"column":102}}}) : helper)))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":72,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":75,"column":23}}})) != null ? stack1 : "")
    + "            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"generalRank") || (depth0 != null ? lookupProperty(depth0,"generalRank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"generalRank","hash":{},"data":data,"loc":{"start":{"line":76,"column":16},"end":{"line":76,"column":31}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"victories") || (depth0 != null ? lookupProperty(depth0,"victories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"victories","hash":{},"data":data,"loc":{"start":{"line":77,"column":16},"end":{"line":77,"column":29}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalGames") || (depth0 != null ? lookupProperty(depth0,"totalGames") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalGames","hash":{},"data":data,"loc":{"start":{"line":78,"column":16},"end":{"line":78,"column":30}}}) : helper)))
    + "</td>\n            <td>\n                <div class=\"status-container\">\n                    <div class=\"pastille "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":81,"column":41},"end":{"line":81,"column":51}}}) : helper)))
    + "\" id=\"pastille\"></div>\n                    <p class=\"status\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":82,"column":38},"end":{"line":82,"column":48}}}) : helper)))
    + "</p>\n                    <div class=\"slide-show-container\"></div>\n                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":84,"column":30},"end":{"line":84,"column":44}}}) : helper)))
    + "\" class=\"slide-show\"></img>\n                </div>\n            </td>\n            <td>Officer</td>\n        </tr>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td class=\"tableBoard-guild\" onclick=\"window.location='#guild/"
    + alias4(((helper = (helper = lookupProperty(helpers,"guild_id") || (depth0 != null ? lookupProperty(depth0,"guild_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"guild_id","hash":{},"data":data,"loc":{"start":{"line":71,"column":74},"end":{"line":71,"column":86}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"guildName") || (depth0 != null ? lookupProperty(depth0,"guildName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"guildName","hash":{},"data":data,"loc":{"start":{"line":71,"column":91},"end":{"line":71,"column":104}}}) : helper)))
    + "</td>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr class=\"tableBoard gamerTable\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":91,"column":47},"end":{"line":91,"column":53}}}) : helper)))
    + "\">\n            <td class=\"first-th\">\n                <div class=\"trophy-container\">\n                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":94,"column":45},"end":{"line":94,"column":55}}}) : helper)))
    + "\">\n                </div>\n            </td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":97,"column":16},"end":{"line":97,"column":24}}}) : helper)))
    + "</td>\n            <td>\n                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":99,"column":80},"end":{"line":99,"column":86}}}) : helper)))
    + "/';\">\n                    <img class=\"list-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":100,"column":49},"end":{"line":100,"column":62}}}) : helper)))
    + "\">\n                </div>\n            </td>\n            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":103,"column":79},"end":{"line":103,"column":85}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":103,"column":90},"end":{"line":103,"column":102}}}) : helper)))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":12},"end":{"line":106,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":12},"end":{"line":109,"column":23}}})) != null ? stack1 : "")
    + "            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"generalRank") || (depth0 != null ? lookupProperty(depth0,"generalRank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"generalRank","hash":{},"data":data,"loc":{"start":{"line":110,"column":16},"end":{"line":110,"column":31}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"victories") || (depth0 != null ? lookupProperty(depth0,"victories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"victories","hash":{},"data":data,"loc":{"start":{"line":111,"column":16},"end":{"line":111,"column":29}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalGames") || (depth0 != null ? lookupProperty(depth0,"totalGames") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalGames","hash":{},"data":data,"loc":{"start":{"line":112,"column":16},"end":{"line":112,"column":30}}}) : helper)))
    + "</td>\n            <td>\n                <div class=\"status-container\">\n                    <div class=\"pastille "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":115,"column":41},"end":{"line":115,"column":51}}}) : helper)))
    + "\" id=\"pastille\"></div>\n                    <p class=\"status\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":116,"column":38},"end":{"line":116,"column":48}}}) : helper)))
    + "</p>\n                    <div class=\"slide-show-container\"></div>\n                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":118,"column":30},"end":{"line":118,"column":44}}}) : helper)))
    + "\" class=\"slide-show\"></img>\n                </div>\n            </td>\n            <td>Member</td>\n        </tr>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<tr class=\"usersListEl\">\n			<td>Gold</td>\n			<td>1</td>\n			<td>profilePic</td>\n			<td><a href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":159,"column":25},"end":{"line":159,"column":31}}}) : helper)))
    + "/\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":159,"column":34},"end":{"line":159,"column":46}}}) : helper)))
    + "</a></td>\n			<td>2</td>\n			<td>3500</td>\n			<td>12</td>\n			<td>50</td>\n			<td>offline</td>\n			<td>Officer</td>\n	</tr>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<tr class=\"usersListEl\">\n			<td>Gold</td>\n			<td>1</td>\n			<td>profilePic</td>\n			<td><a href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":174,"column":25},"end":{"line":174,"column":31}}}) : helper)))
    + "/\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":174,"column":34},"end":{"line":174,"column":46}}}) : helper)))
    + "</a></td>\n			<td>2</td>\n			<td>4</td>\n			<td>1</td>\n			<td>2</td>\n			<td>offline</td>\n			<td>Member</td>\n	</tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"profileBlock\" id=\"profileGuildBlock\">\n<div id=\"guildOptionsContainer\">\n<span id=\"guildOptions\">\n<a id=\"guildNameLabel\" href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "<span> ["
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"anagram") : stack1), depth0))
    + "]</span></a>\n</span>\n<span id=\"manageGuildButton\"></span>\n<span id=\"leaveGuildButton\"></span>\n</div>\n<div class=\"listsBoard leaderboardList\" id=\"leaderboardList\">\n    <div class=\"nb-list nbGamers\">"
    + alias2(((helper = (helper = lookupProperty(helpers,"membersNumber") || (depth0 != null ? lookupProperty(depth0,"membersNumber") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"membersNumber","hash":{},"data":data,"loc":{"start":{"line":10,"column":34},"end":{"line":10,"column":51}}}) : helper)))
    + " members</div>\n    <table class=\"tablesBoard gamersTable\">\n        <tr>\n            <th class=\"first-th\"></th>\n            <th></th>\n            <th></th>\n            <th>Nickname</th>\n            <th>Guild</th>\n            <th>General Rank</th>\n            <th>Victories</th>\n            <th>Total games</th>\n            <th>Status</th>\n            <th></th>\n        </tr>\n        <tr class=\"tableBoard gamerTable\" for=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">\n            <td class=\"first-th\">\n                <div class=\"trophy-container\">\n                    <img class=\"trophy\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"trophy") : stack1), depth0))
    + "\">\n                </div>\n            </td>\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"rank") : stack1), depth0))
    + "</td>\n            <td>\n                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias2(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":32,"column":80},"end":{"line":32,"column":86}}}) : helper)))
    + "/';\">\n                    <img class=\"list-image\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"image_url") : stack1), depth0))
    + "\">\n                </div>\n            </td>\n            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "/';\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"nickname") : stack1), depth0))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"guild_id") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":39,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"guild_id") : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":42,"column":23}}})) != null ? stack1 : "")
    + "            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"generalRank") : stack1), depth0))
    + "</td>\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"victories") : stack1), depth0))
    + "</td>\n            <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"totalGames") : stack1), depth0))
    + "</td>\n            <td>\n                <div class=\"status-container\">\n                    <div class=\"pastille "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"status") : stack1), depth0))
    + "\" id=\"pastille\"></div>\n                    <p class=\"status\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"status") : stack1), depth0))
    + "</p>\n                    <div class=\"slide-show-container\"></div>\n                    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"slide_show") : stack1), depth0))
    + "\" class=\"slide-show\"></img>\n                </div>\n            </td>\n            <td>Owner</td>\n        </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":8},"end":{"line":89,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":4},"end":{"line":123,"column":17}}})) != null ? stack1 : "")
    + "    </table>\n</div>\n<!--<section>\n<table class=\"usersList\">\n<tr class=\"usersListIndex\">\n	<th>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"membersNumber") : depth0), depth0))
    + " members</th>\n	<th></th>\n	<th></th>\n	<th>Pseudo</th>\n	<th>league Rank</th>\n	<th>General Rank</th>\n	<th>Victories</th>\n	<th>Total Games</th>\n	<th>Status</th>\n	<th>Status</th>\n</tr>\n\n<tr class=\"usersListEl\">\n	<td>Gold</td>\n	<td>1</td>\n	<td>profilePic</td>\n	<td><a href=\"#profile/"
    + alias2(((helper = (helper = lookupProperty(helpers,"owner_id") || (depth0 != null ? lookupProperty(depth0,"owner_id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"owner_id","hash":{},"data":data,"loc":{"start":{"line":145,"column":23},"end":{"line":145,"column":35}}}) : helper)))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"nickname") : stack1), depth0))
    + "</a></td>\n	<td>1</td>\n	<td>1000</td>\n	<td>42</td>\n	<td>1001</td>\n	<td>online</td>\n	<td>Owner</td>\n</tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":154,"column":1},"end":{"line":167,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":169,"column":1},"end":{"line":182,"column":10}}})) != null ? stack1 : "")
    + "</table>\n</section>\n-->\n</section>>\n";
},"useData":true});
})();