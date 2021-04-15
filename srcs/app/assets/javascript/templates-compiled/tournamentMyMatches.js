(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentMyMatches'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"match thumbnail thumbnail-my-matches\">\n            <div class=\"opponent1 registered\" id=\"opponent"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId") || (depth0 != null ? lookupProperty(depth0,"opponentId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId","hash":{},"data":data,"loc":{"start":{"line":7,"column":58},"end":{"line":7,"column":72}}}) : helper)))
    + "\">\n                <div class=\"trophy-container\">\n                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentTrophy") || (depth0 != null ? lookupProperty(depth0,"opponentTrophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentTrophy","hash":{},"data":data,"loc":{"start":{"line":9,"column":45},"end":{"line":9,"column":63}}}) : helper)))
    + "\">\n                </div>\n                <div class=\"right-side\">\n                    <div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId") || (depth0 != null ? lookupProperty(depth0,"opponentId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId","hash":{},"data":data,"loc":{"start":{"line":12,"column":83},"end":{"line":12,"column":97}}}) : helper)))
    + "/';\">\n                        <div class=\"image-container\">\n                            <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentAvatar") || (depth0 != null ? lookupProperty(depth0,"opponentAvatar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentAvatar","hash":{},"data":data,"loc":{"start":{"line":14,"column":56},"end":{"line":14,"column":74}}}) : helper)))
    + "\">\n                        </div>\n                        <div class=\"nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent") || (depth0 != null ? lookupProperty(depth0,"opponent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent","hash":{},"data":data,"loc":{"start":{"line":16,"column":46},"end":{"line":16,"column":58}}}) : helper)))
    + "</div>\n                    </div>\n                    <button class=\"play play-my-matches\" id=\"play-my-matches"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId") || (depth0 != null ? lookupProperty(depth0,"opponentId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId","hash":{},"data":data,"loc":{"start":{"line":18,"column":76},"end":{"line":18,"column":90}}}) : helper)))
    + "\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId") || (depth0 != null ? lookupProperty(depth0,"opponentId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId","hash":{},"data":data,"loc":{"start":{"line":18,"column":96},"end":{"line":18,"column":110}}}) : helper)))
    + ">"
    + alias4(((helper = (helper = lookupProperty(helpers,"play") || (depth0 != null ? lookupProperty(depth0,"play") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"play","hash":{},"data":data,"loc":{"start":{"line":18,"column":111},"end":{"line":18,"column":119}}}) : helper)))
    + "</button>\n                </div>\n            </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"waiting") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":23,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"timer\" id=\"timer"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":22,"column":40},"end":{"line":22,"column":46}}}) : helper)))
    + "\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
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
    + "\">\n            </div>\n            <div class=\"score1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score1") || (depth0 != null ? lookupProperty(depth0,"score1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score1","hash":{},"data":data,"loc":{"start":{"line":37,"column":32},"end":{"line":37,"column":42}}}) : helper)))
    + "</div>\n            <div class=\"VS\">VS</div>\n            <div class=\"score2\" id=\"score2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score2") || (depth0 != null ? lookupProperty(depth0,"score2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score2","hash":{},"data":data,"loc":{"start":{"line":39,"column":44},"end":{"line":39,"column":54}}}) : helper)))
    + "</div>\n            <div class=\"image-container\">\n                <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent2") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent2","hash":{},"data":data,"loc":{"start":{"line":41,"column":44},"end":{"line":41,"column":63}}}) : helper)))
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

  return "<div class=\"my-matches matches-page\" id=\"my-matches\">\n    <div class=\"to-do-container container\" id=\"to-do-container\">\n        <div class=\"to-do title\" id=\"to-do\">To do "
    + alias4(((helper = (helper = lookupProperty(helpers,"nbMyToDo") || (depth0 != null ? lookupProperty(depth0,"nbMyToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbMyToDo","hash":{},"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":62}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxMyToDo") || (depth0 != null ? lookupProperty(depth0,"maxMyToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxMyToDo","hash":{},"data":data,"loc":{"start":{"line":3,"column":63},"end":{"line":3,"column":76}}}) : helper)))
    + "</div>\n        <div class=\"all-opponent\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"myToDo") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"done-container container\" id=\"done-container\">\n        <div class=\"done title\" id=\"done\">Done "
    + alias4(((helper = (helper = lookupProperty(helpers,"nbMyDone") || (depth0 != null ? lookupProperty(depth0,"nbMyDone") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbMyDone","hash":{},"data":data,"loc":{"start":{"line":29,"column":47},"end":{"line":29,"column":59}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxMyToDo") || (depth0 != null ? lookupProperty(depth0,"maxMyToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxMyToDo","hash":{},"data":data,"loc":{"start":{"line":29,"column":60},"end":{"line":29,"column":73}}}) : helper)))
    + "</div>\n        <div class=\"all-done\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"myDone") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":45,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});
})();