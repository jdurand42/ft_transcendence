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
    + "\" > \n    <div class=\"closeNotif\" id=\"closeSenderGameNotif-container\">\n        <img src=\"./icons/close.svg\" class=\"closeSenderGameNotif\" id=\"closeSenderGameNotif\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"gameId") || (depth0 != null ? lookupProperty(depth0,"gameId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gameId","hash":{},"data":data,"loc":{"start":{"line":3,"column":97},"end":{"line":3,"column":107}}}) : helper)))
    + "\"></img>\n    </div>\n    <p class=\"text\">You have sent an invitation to a match to "
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":5,"column":62},"end":{"line":5,"column":74}}}) : helper)))
    + ".</p>\n</div>";
},"useData":true});
})();