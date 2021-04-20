(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guild'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "	<button onclick=\"window.location='#manage_guild'\" class=\"manageGuildButton\" id=\"manageGuildButton\">Manage guild</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<button onclick=\"window.location='#declare_war/"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromId") || (depth0 != null ? lookupProperty(depth0,"fromId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromId","hash":{},"data":data,"loc":{"start":{"line":8,"column":48},"end":{"line":8,"column":58}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"onId") || (depth0 != null ? lookupProperty(depth0,"onId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onId","hash":{},"data":data,"loc":{"start":{"line":8,"column":59},"end":{"line":8,"column":67}}}) : helper)))
    + "';\" class=\"manageGuildButton\" id=\"declareWarButton\">\n			<img src=\"./icons/war_black.svg\">\n			Declare war\n	</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"supraDiv\" id=\"supraDiv\">\n	<div class=\"pannel\" id=\"guildPannel\"></div>\n	<div class=\"contentWrapper\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"manage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":6,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"declareWar") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":1},"end":{"line":14,"column":8}}})) != null ? stack1 : "")
    + "		<div id=\"guildSubNavBar\"></div>\n		<div id=\"guildContent\"></div>\n	</div>\n</div>\n<div></div>\n";
},"useData":true});
})();