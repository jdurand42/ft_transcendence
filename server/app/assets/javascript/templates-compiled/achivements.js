(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['achivements'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"content\">\n	<div id=\"profilePannel\"></div>\n	<div id=\"profileSubNavBar\"></div>\n	<span> I'm "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":20}}}) : helper)))
    + " and i'm in "
    + alias4(((helper = (helper = lookupProperty(helpers,"ladder_name") || (depth0 != null ? lookupProperty(depth0,"ladder_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ladder_name","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":47}}}) : helper)))
    + " and this is just a test </span>\n</div>\n";
},"useData":true});
})();