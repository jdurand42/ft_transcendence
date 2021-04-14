(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='gameSupraDiv'>\n	<h1 class=\"gameTitle\">Play "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"mode") || (depth0 != null ? lookupProperty(depth0,"mode") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"mode","hash":{},"data":data,"loc":{"start":{"line":2,"column":28},"end":{"line":2,"column":36}}}) : helper)))
    + "</h1>\n	<div id=\"gameContainer\">\n		<canvas id=\"gameWindow\" width=\"512\" height=\"256\">\n		</canvas>\n	</div>\n</div>\n";
},"useData":true});
})();