(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profileButtons'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button id=\"followUser\">Follow</button>\n<button class=\"play-button\" id=\"playUser\" for=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":3,"column":47},"end":{"line":3,"column":57}}}) : helper)))
    + "\">\n    <img src=\"./icons/videogame.svg\" height=\"24\">\n</button>";
},"useData":true});
})();