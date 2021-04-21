(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guildSubNavBar'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"calendar-nav\" id=\"calendarWar\">\n			CALENDAR\n		</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"subNavBar subNavBarGuild\">\n	<div class=\"square\" id=\"square\"></div>\n	<div class=\"nav\">\n		<div class=\"currentWar-nav\" id=\"currentWar\">\n			WAR\n		</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"manage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "		<div class=\"lastWars-nav\" id=\"lastWars\">\n			LAST WARS\n		</div>\n		<div class=\"members-nav\" id=\"members\">\n			MEMBERS\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();