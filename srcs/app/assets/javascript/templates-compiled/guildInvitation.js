(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guildInvitation'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notif guildNotif\" id=\"guildNotif"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":44},"end":{"line":1,"column":50}}}) : helper)))
    + "\" > \n    <div class=\"closeNotif refuseGame\" id=\"closeGameNotif-container\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":73},"end":{"line":2,"column":79}}}) : helper)))
    + ">\n        <img src=\"./icons/close.svg\" class=\"refuseGame\" id=\"closeGameNotif\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":81},"end":{"line":3,"column":87}}}) : helper)))
    + "\"></img>\n    </div>\n    <p class=\"text\">You have been invited to join "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":50},"end":{"line":5,"column":58}}}) : helper)))
    + " guild.</p>\n    <div class=\"buttons-notif-container\">\n        <div class=\"acceptGame-container\" id=\"acceptGame-container\">\n            <button class=\"button-notif acceptGame\" id=\"acceptGuild\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":74},"end":{"line":8,"column":80}}}) : helper)))
    + "\">Accept</button>\n        </div>\n        <div class=\"refuseGame-container\" id=\"refuseGame-container\">\n            <button class=\"button-notif refuseGame\" id=\"refuseGuild\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":74},"end":{"line":11,"column":80}}}) : helper)))
    + "\">Refuse</button>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();