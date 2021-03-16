(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gameNotif'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notif gameNotif\" id=\"gameNotif"
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":52}}}) : helper)))
    + "\" > \n    <div class=\"closeNotif\" id=\"closeGameNotif-container\">\n        <img src=\"./icons/close.svg\" class=\"refuseGame\" id=\"closeGameNotif\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":3,"column":81},"end":{"line":3,"column":91}}}) : helper)))
    + "\"></img>\n    </div>\n    <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":5,"column":20},"end":{"line":5,"column":32}}}) : helper)))
    + " send you an invitation to a match.</p>\n    <div class=\"buttons-notif-container\">\n        <div class=\"acceptGame-container\" id=\"acceptGame-container\">\n            <button class=\"button-notif acceptGame\" id=\"acceptGame\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":8,"column":73},"end":{"line":8,"column":83}}}) : helper)))
    + "\">Accept</button>\n        </div>\n        <div class=\"refuseGame-container\" id=\"refuseGame-container\">\n            <button class=\"button-notif refuseGame\" id=\"refuseGame\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":11,"column":73},"end":{"line":11,"column":83}}}) : helper)))
    + "\">Refuse</button>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();