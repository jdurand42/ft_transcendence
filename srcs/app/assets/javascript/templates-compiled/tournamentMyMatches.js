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
    + "</div>\n                    </div>\n                    <div class=\"button-timer\" id=\"button-timer"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId") || (depth0 != null ? lookupProperty(depth0,"opponentId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId","hash":{},"data":data,"loc":{"start":{"line":18,"column":62},"end":{"line":18,"column":76}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"waiting") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":24},"end":{"line":21,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"waiting") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":31,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"waiting") : depth0),"||",(depth0 != null ? lookupProperty(depth0,"pending") : depth0),{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":24},"end":{"line":34,"column":35}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <button class=\"play play-my-matches "
    + alias4(((helper = (helper = lookupProperty(helpers,"play") || (depth0 != null ? lookupProperty(depth0,"play") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"play","hash":{},"data":data,"loc":{"start":{"line":20,"column":60},"end":{"line":20,"column":68}}}) : helper)))
    + "\" id=\"play-my-matches"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId") || (depth0 != null ? lookupProperty(depth0,"opponentId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId","hash":{},"data":data,"loc":{"start":{"line":20,"column":89},"end":{"line":20,"column":103}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId") || (depth0 != null ? lookupProperty(depth0,"opponentId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId","hash":{},"data":data,"loc":{"start":{"line":20,"column":110},"end":{"line":20,"column":124}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"play") || (depth0 != null ? lookupProperty(depth0,"play") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"play","hash":{},"data":data,"loc":{"start":{"line":20,"column":126},"end":{"line":20,"column":134}}}) : helper)))
    + "</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"buttons\">\n                            <div class=\"accept-container check-container\" onclick=\"window.location='#game/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":24,"column":106},"end":{"line":24,"column":116}}}) : helper)))
    + "';\">\n                                <img class=\"accept-button check-button\" src=\"./icons/check.svg\">\n                            </div>\n                            <div class=\"accept-container close-container\">\n                                <img class=\"accept-button close-button\" src=\"./icons/close.svg\">\n                            </div>\n                        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"timer\" id=\"timer"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"opponentId") || (depth0 != null ? lookupProperty(depth0,"opponentId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"opponentId","hash":{},"data":data,"loc":{"start":{"line":33,"column":52},"end":{"line":33,"column":66}}}) : helper)))
    + "\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"match-done-container\">\n            <div class=\"match-done\">\n                <div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId1") || (depth0 != null ? lookupProperty(depth0,"opponentId1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId1","hash":{},"data":data,"loc":{"start":{"line":48,"column":79},"end":{"line":48,"column":94}}}) : helper)))
    + "/';\">\n                    <div class=\"opponent opponent1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1") || (depth0 != null ? lookupProperty(depth0,"opponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1","hash":{},"data":data,"loc":{"start":{"line":49,"column":52},"end":{"line":49,"column":65}}}) : helper)))
    + "</div>\n                    <div class=\"image-container\">\n                        <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent1") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent1","hash":{},"data":data,"loc":{"start":{"line":51,"column":52},"end":{"line":51,"column":71}}}) : helper)))
    + "\">\n                    </div>\n                </div>\n                <div class=\"score score1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score1") || (depth0 != null ? lookupProperty(depth0,"score1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score1","hash":{},"data":data,"loc":{"start":{"line":54,"column":42},"end":{"line":54,"column":52}}}) : helper)))
    + "</div>\n                <div class=\"VS\">VS</div>\n                <div class=\"score score2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score2") || (depth0 != null ? lookupProperty(depth0,"score2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score2","hash":{},"data":data,"loc":{"start":{"line":56,"column":42},"end":{"line":56,"column":52}}}) : helper)))
    + "</div>\n                <div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId2") || (depth0 != null ? lookupProperty(depth0,"opponentId2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId2","hash":{},"data":data,"loc":{"start":{"line":57,"column":79},"end":{"line":57,"column":94}}}) : helper)))
    + "/';\">\n                    <div class=\"image-container\">\n                        <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent2") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent2","hash":{},"data":data,"loc":{"start":{"line":59,"column":52},"end":{"line":59,"column":71}}}) : helper)))
    + "\">\n                    </div>\n                    <div class=\"opponent opponent2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2") || (depth0 != null ? lookupProperty(depth0,"opponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2","hash":{},"data":data,"loc":{"start":{"line":61,"column":52},"end":{"line":61,"column":65}}}) : helper)))
    + "</div>\n                </div>\n            </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"forfeit") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":66,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"forfeit\">Victory by forfeit</div>\n";
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
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"myToDo") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"done-container container\" id=\"done-container\">\n        <div class=\"done title\" id=\"done\">Done "
    + alias4(((helper = (helper = lookupProperty(helpers,"nbMyDone") || (depth0 != null ? lookupProperty(depth0,"nbMyDone") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbMyDone","hash":{},"data":data,"loc":{"start":{"line":43,"column":47},"end":{"line":43,"column":59}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxMyToDo") || (depth0 != null ? lookupProperty(depth0,"maxMyToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxMyToDo","hash":{},"data":data,"loc":{"start":{"line":43,"column":60},"end":{"line":43,"column":73}}}) : helper)))
    + "</div>\n        <div class=\"all-done\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"myDone") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":8},"end":{"line":68,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"useData":true});
})();