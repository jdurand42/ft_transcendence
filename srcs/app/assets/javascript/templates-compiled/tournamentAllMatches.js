(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentAllMatches'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"opponent1\" id=\"opponent"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":43},"end":{"line":6,"column":49}}}) : helper)))
    + "\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":86},"end":{"line":6,"column":92}}}) : helper)))
    + "/';\">\n            <div class=\"trophy-container\">\n                <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":8,"column":41},"end":{"line":8,"column":51}}}) : helper)))
    + "\">\n            </div>\n            <div class=\"image-container\">\n                <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":11,"column":44},"end":{"line":11,"column":57}}}) : helper)))
    + "\">\n            </div>\n            <div class=\"nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":13,"column":34},"end":{"line":13,"column":46}}}) : helper)))
    + "</div>\n        </div>\n        <div class=\"VS\">VS</div>\n        <div class=\"opponent2\" id=\"opponent"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":43},"end":{"line":16,"column":49}}}) : helper)))
    + "\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":86},"end":{"line":16,"column":92}}}) : helper)))
    + "/';\">\n            <div class=\"trophy-container\">\n                <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"trophy") || (depth0 != null ? lookupProperty(depth0,"trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trophy","hash":{},"data":data,"loc":{"start":{"line":18,"column":41},"end":{"line":18,"column":51}}}) : helper)))
    + "\">\n            </div>\n            <div class=\"image-container\">\n                <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":21,"column":44},"end":{"line":21,"column":57}}}) : helper)))
    + "\">\n            </div>\n            <div class=\"nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":23,"column":34},"end":{"line":23,"column":46}}}) : helper)))
    + "</div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"match-done\" id=\"match-done\">\n            <div class=\"opponent1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1") || (depth0 != null ? lookupProperty(depth0,"opponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1","hash":{},"data":data,"loc":{"start":{"line":33,"column":35},"end":{"line":33,"column":48}}}) : helper)))
    + "</div>\n            <div class=\"image-container\">\n                <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent1") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent1","hash":{},"data":data,"loc":{"start":{"line":35,"column":44},"end":{"line":35,"column":63}}}) : helper)))
    + "\">\n            </div>\n            <div class=\"score1\">11</div>\n            <div class=\"VS\">VS</div>\n            <div class=\"score2\" id=\"score2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score") || (depth0 != null ? lookupProperty(depth0,"score") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":39,"column":44},"end":{"line":39,"column":53}}}) : helper)))
    + "</div>\n            <div class=\"image-container\">\n                <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent1") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent1","hash":{},"data":data,"loc":{"start":{"line":41,"column":44},"end":{"line":41,"column":63}}}) : helper)))
    + "\">\n            </div>\n            <div class=\"opponent2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2") || (depth0 != null ? lookupProperty(depth0,"opponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2","hash":{},"data":data,"loc":{"start":{"line":43,"column":35},"end":{"line":43,"column":48}}}) : helper)))
    + "</div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"all-matches\" id=\"all-matches\">\n    <div class=\"to-do-container container\" id=\"to-do-container\">\n        <div class=\"to-do title\" id=\"to-do\">To do "
    + alias4(((helper = (helper = lookupProperty(helpers,"nbToDo") || (depth0 != null ? lookupProperty(depth0,"nbToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbToDo","hash":{},"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":60}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxToDo") || (depth0 != null ? lookupProperty(depth0,"maxToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxToDo","hash":{},"data":data,"loc":{"start":{"line":3,"column":61},"end":{"line":3,"column":72}}}) : helper)))
    + "</div>\n        <div class=\"all-opponent\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"allToDo") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"done-container container\" id=\"done-container\">\n        <div class=\"done title\" id=\"done\">Done "
    + alias4(((helper = (helper = lookupProperty(helpers,"nbDone") || (depth0 != null ? lookupProperty(depth0,"nbDone") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbDone","hash":{},"data":data,"loc":{"start":{"line":29,"column":47},"end":{"line":29,"column":57}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxToDo") || (depth0 != null ? lookupProperty(depth0,"maxToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxToDo","hash":{},"data":data,"loc":{"start":{"line":29,"column":58},"end":{"line":29,"column":69}}}) : helper)))
    + "</div>\n        <div class=\"all-done\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"allDone") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":45,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"useData":true});
})();