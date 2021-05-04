(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['senderGameNotif'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notif senderGameNotif\" id=\"senderGameNotif"
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":64}}}) : helper)))
    + "\" >\n    <div class=\"closeNotif\" id=\"closeSenderGameNotif-container\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":78}}}) : helper)))
    + ">\n        <img src=\"./icons/close.svg\" class=\"closeSenderGameNotif\" id=\"closeSenderGameNotif\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":3,"column":97},"end":{"line":3,"column":107}}}) : helper)))
    + "\"></img>\n    </div>\n    <p class=\"text\">You have sent an invitation to a match.</p>\n    <div class=\"buttons-notif-container\">\n        <div class=\"acceptGame-container\" id=\"acceptGame-container\">\n            <button class=\"button-notif acceptGame\" id=\"acceptGame\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":8,"column":73},"end":{"line":8,"column":83}}}) : helper)))
    + "\">Go to game</button>\n        </div>\n        <div class=\"refuseGame-container\" id=\"refuseGame-container\">\n            <button class=\"button-notif refuseGame\" id=\"refuseGame\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":11,"column":73},"end":{"line":11,"column":83}}}) : helper)))
    + "\">Cancel invitation</button>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
})();