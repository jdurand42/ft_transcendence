(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['manageGuild'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"manageGuildSideBarContentEl\" id=\"owner\">\n					<p>Edit guild</p>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"manageGuildSideBarContentEl\" id=\"officer\">\n					<p>Manage Members</p>\n				</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"\" id=\"leaveGuildSideBar\">Leave Guild</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"manageGuildContainer\" id=\"createGuildContainer\">\n	<div class=\"manageGuildSideBar\">\n		<div class=\"manageGuildSideBarContent\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"owner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"officer") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":13,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"member") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":3},"end":{"line":16,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<div class=\"manageGuildContentContainer\">\n		<div class=\"manageGuildContent\">\n			<div id=\"guildGlobalError\"></div>\n			<div id=\"manageGuildContent\"></div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();