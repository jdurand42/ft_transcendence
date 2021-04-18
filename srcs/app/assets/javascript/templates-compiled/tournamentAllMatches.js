(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentAllMatches'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"match thumbnail\">\n            <div class=\"opponent1 registered\" id=\"opponent"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1Id") || (depth0 != null ? lookupProperty(depth0,"opponent1Id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1Id","hash":{},"data":data,"loc":{"start":{"line":7,"column":58},"end":{"line":7,"column":73}}}) : helper)))
    + "\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1Id") || (depth0 != null ? lookupProperty(depth0,"opponent1Id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1Id","hash":{},"data":data,"loc":{"start":{"line":7,"column":110},"end":{"line":7,"column":125}}}) : helper)))
    + "/';\">\n                <div class=\"trophy-container\">\n                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1Trophy") || (depth0 != null ? lookupProperty(depth0,"opponent1Trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1Trophy","hash":{},"data":data,"loc":{"start":{"line":9,"column":45},"end":{"line":9,"column":64}}}) : helper)))
    + "\">\n                </div>\n                <div class=\"image-container\">\n                    <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1Avatar") || (depth0 != null ? lookupProperty(depth0,"opponent1Avatar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1Avatar","hash":{},"data":data,"loc":{"start":{"line":12,"column":48},"end":{"line":12,"column":67}}}) : helper)))
    + "\">\n                </div>\n                <div class=\"nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1") || (depth0 != null ? lookupProperty(depth0,"opponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1","hash":{},"data":data,"loc":{"start":{"line":14,"column":38},"end":{"line":14,"column":51}}}) : helper)))
    + "</div>\n            </div>\n            <div class=\"VS\">VS</div>\n            <div class=\"opponent2 registered\" id=\"opponent"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2Id") || (depth0 != null ? lookupProperty(depth0,"opponent2Id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2Id","hash":{},"data":data,"loc":{"start":{"line":17,"column":58},"end":{"line":17,"column":73}}}) : helper)))
    + "\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2Id") || (depth0 != null ? lookupProperty(depth0,"opponent2Id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2Id","hash":{},"data":data,"loc":{"start":{"line":17,"column":110},"end":{"line":17,"column":125}}}) : helper)))
    + "/';\">\n                <div class=\"trophy-container\">\n                    <img class=\"trophy\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2Trophy") || (depth0 != null ? lookupProperty(depth0,"opponent2Trophy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2Trophy","hash":{},"data":data,"loc":{"start":{"line":19,"column":45},"end":{"line":19,"column":64}}}) : helper)))
    + "\">\n                </div>\n                <div class=\"image-container\">\n                    <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2Avatar") || (depth0 != null ? lookupProperty(depth0,"opponent2Avatar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2Avatar","hash":{},"data":data,"loc":{"start":{"line":22,"column":48},"end":{"line":22,"column":67}}}) : helper)))
    + "\">\n                </div>\n                <div class=\"nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2") || (depth0 != null ? lookupProperty(depth0,"opponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2","hash":{},"data":data,"loc":{"start":{"line":24,"column":38},"end":{"line":24,"column":51}}}) : helper)))
    + "</div>\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"match-done-container\">\n            <div class=\"match-done\">\n                <div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId1") || (depth0 != null ? lookupProperty(depth0,"opponentId1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId1","hash":{},"data":data,"loc":{"start":{"line":36,"column":79},"end":{"line":36,"column":94}}}) : helper)))
    + "/';\">\n                    <div class=\"opponent1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent1") || (depth0 != null ? lookupProperty(depth0,"opponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent1","hash":{},"data":data,"loc":{"start":{"line":37,"column":43},"end":{"line":37,"column":56}}}) : helper)))
    + "</div>\n                    <div class=\"image-container\">\n                        <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent1") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent1","hash":{},"data":data,"loc":{"start":{"line":39,"column":52},"end":{"line":39,"column":71}}}) : helper)))
    + "\">\n                    </div>\n                </div>\n                <div class=\"score score1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score1") || (depth0 != null ? lookupProperty(depth0,"score1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score1","hash":{},"data":data,"loc":{"start":{"line":42,"column":42},"end":{"line":42,"column":52}}}) : helper)))
    + "</div>\n                <div class=\"VS\">VS</div>\n                <div class=\"score score2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"score2") || (depth0 != null ? lookupProperty(depth0,"score2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score2","hash":{},"data":data,"loc":{"start":{"line":44,"column":42},"end":{"line":44,"column":52}}}) : helper)))
    + "</div>\n                <div class=\"image-nickname\" onclick=\"window.location='#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponentId2") || (depth0 != null ? lookupProperty(depth0,"opponentId2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponentId2","hash":{},"data":data,"loc":{"start":{"line":45,"column":79},"end":{"line":45,"column":94}}}) : helper)))
    + "/';\">\n                    <div class=\"image-container\">\n                        <img class=\"image-url\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarOpponent2") || (depth0 != null ? lookupProperty(depth0,"avatarOpponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarOpponent2","hash":{},"data":data,"loc":{"start":{"line":47,"column":52},"end":{"line":47,"column":71}}}) : helper)))
    + "\">\n                    </div>\n                    <div class=\"opponent2\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"opponent2") || (depth0 != null ? lookupProperty(depth0,"opponent2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opponent2","hash":{},"data":data,"loc":{"start":{"line":49,"column":43},"end":{"line":49,"column":56}}}) : helper)))
    + "</div>\n                </div>\n            </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"forfeit") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":12},"end":{"line":54,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"forfeit\">Victory by forfeit</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"all-matches  matches-page\" id=\"all-matches\">\n    <div class=\"to-do-container container\" id=\"to-do-container\">\n        <div class=\"to-do title\" id=\"to-do\">To do "
    + alias4(((helper = (helper = lookupProperty(helpers,"nbToDo") || (depth0 != null ? lookupProperty(depth0,"nbToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbToDo","hash":{},"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":60}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxToDo") || (depth0 != null ? lookupProperty(depth0,"maxToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxToDo","hash":{},"data":data,"loc":{"start":{"line":3,"column":61},"end":{"line":3,"column":72}}}) : helper)))
    + "</div>\n        <div class=\"all-opponent\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"allToDo") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"done-container container\" id=\"done-container\">\n        <div class=\"done title\" id=\"done\">Done "
    + alias4(((helper = (helper = lookupProperty(helpers,"nbDone") || (depth0 != null ? lookupProperty(depth0,"nbDone") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbDone","hash":{},"data":data,"loc":{"start":{"line":31,"column":47},"end":{"line":31,"column":57}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"maxToDo") || (depth0 != null ? lookupProperty(depth0,"maxToDo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxToDo","hash":{},"data":data,"loc":{"start":{"line":31,"column":58},"end":{"line":31,"column":69}}}) : helper)))
    + "</div>\n        <div class=\"all-done\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"allDone") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":57,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"useData":true});
})();