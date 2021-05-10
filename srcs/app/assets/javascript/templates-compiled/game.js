(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='gameSupraDiv'>\n	<h1 id=\"gameTitle\">LOADING ...</h1>\n	<div id=\"gameContainer\">\n		<canvas id=\"gameWindow\" width="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"width") : depth0), depth0))
    + " height="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"height") : depth0), depth0))
    + " style=\"font-family: PressStart2P-Regular\">\n		</canvas>\n	</div>\n</div>\n<div></div>\n";
},"useData":true});
})();