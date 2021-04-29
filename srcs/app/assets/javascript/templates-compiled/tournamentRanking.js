(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentRanking'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr class=\"tableBoard rankingTable\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":55}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":61},"end":{"line":17,"column":67}}}) : helper)))
    + "\">\n            <td class=\"first-th\">\n                <div class=\"trophy-container\">\n                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":20,"column":45},"end":{"line":20,"column":55}}}) : helper)))
    + "\">\n                </div>\n            </td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":24}}}) : helper)))
    + "</td>\n            <td>\n                <div class=\"image-container\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":25,"column":80},"end":{"line":25,"column":86}}}) : helper)))
    + "/';\">\n                    <img class=\"list-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":26,"column":49},"end":{"line":26,"column":62}}}) : helper)))
    + "\">\n                </div>\n            </td>\n            <td class=\"tableBoard-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":29,"column":79},"end":{"line":29,"column":85}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":29,"column":90},"end":{"line":29,"column":102}}}) : helper)))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":32,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":35,"column":23}}})) != null ? stack1 : "")
    + "            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"victories") || (depth0 != null ? lookupProperty(depth0,"victories") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"victories","hash":{},"data":data,"loc":{"start":{"line":36,"column":16},"end":{"line":36,"column":29}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"defeats") || (depth0 != null ? lookupProperty(depth0,"defeats") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defeats","hash":{},"data":data,"loc":{"start":{"line":37,"column":16},"end":{"line":37,"column":27}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"gapPoints") || (depth0 != null ? lookupProperty(depth0,"gapPoints") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gapPoints","hash":{},"data":data,"loc":{"start":{"line":38,"column":16},"end":{"line":38,"column":29}}}) : helper)))
    + "</td>\n            <td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ingame") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":16},"end":{"line":42,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"ingame") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":16},"end":{"line":45,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"pastille "
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":46,"column":41},"end":{"line":46,"column":51}}}) : helper)))
    + "\" id=\"pastille"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":46,"column":65},"end":{"line":46,"column":71}}}) : helper)))
    + "\"></div>\n                    <p class=\"status\" id=\"status"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":47,"column":48},"end":{"line":47,"column":54}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":47,"column":56},"end":{"line":47,"column":66}}}) : helper)))
    + "</p>\n                    <div class=\"slide-show-container\"></div>\n                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":49,"column":30},"end":{"line":49,"column":44}}}) : helper)))
    + "\" class=\"slide-show\" id=\"slide-show"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":49,"column":79},"end":{"line":49,"column":85}}}) : helper)))
    + "\"></img>\n                </div>\n            </td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"itsNotMe") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":12},"end":{"line":59,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"itsNotMe") : depth0),{"name":"unless","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":12},"end":{"line":62,"column":23}}})) != null ? stack1 : "")
    + "        </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td class=\"tableBoard-guild\" onclick=\"window.location='#guild/"
    + alias4(((helper = (helper = lookupProperty(helpers,"guild_id") || (depth0 != null ? lookupProperty(depth0,"guild_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"guild_id","hash":{},"data":data,"loc":{"start":{"line":31,"column":74},"end":{"line":31,"column":86}}}) : helper)))
    + "/';\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"guild") || (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"guild","hash":{},"data":data,"loc":{"start":{"line":31,"column":91},"end":{"line":31,"column":100}}}) : helper)))
    + "</td>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"guild") || (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"guild","hash":{},"data":data,"loc":{"start":{"line":34,"column":16},"end":{"line":34,"column":25}}}) : helper)))
    + "</td>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"status-container ingame-container\" id=\"status-container"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":41,"column":83},"end":{"line":41,"column":89}}}) : helper)))
    + "\" onclick=\"window.location='#game/"
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":41,"column":123},"end":{"line":41,"column":133}}}) : helper)))
    + "';\">\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"status-container\" id=\"status-container"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":44,"column":66},"end":{"line":44,"column":72}}}) : helper)))
    + "\">\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"follow") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":16},"end":{"line":55,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"follow") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":16},"end":{"line":58,"column":23}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <td><button class=\"follow\" id=\"follow\" for="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":54,"column":59},"end":{"line":54,"column":65}}}) : helper)))
    + "></button></td>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <td><button class=\"unfollow\" id=\"follow\" for="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":57,"column":61},"end":{"line":57,"column":67}}}) : helper)))
    + "></button></td>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "            <td></td>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"listsBoard rankingList\" id=\"rankingList\">\n    <div class=\"nb-list nbGamers\" id=\"nbRegistered\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"nbRegistered") || (depth0 != null ? lookupProperty(depth0,"nbRegistered") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"nbRegistered","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":68}}}) : helper)))
    + " players</div>\n    <table class=\"tablesBoard rankingTables\" id=\"rankingTables\">\n        <tr>\n            <th class=\"first-th\"></th>\n            <th></th>\n            <th></th>\n            <th>Nickname</th>\n            <th>Guild</th>\n            <th>Victories</th>\n            <th>Defeats</th>\n            <th>Gap points</th>\n            <th>Status</th>\n            <th></th>\n        </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"ranked") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":64,"column":17}}})) != null ? stack1 : "")
    + "    </table>\n</div>";
},"useData":true});
})();