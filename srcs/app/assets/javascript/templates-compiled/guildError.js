(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guildError'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<style>\n#guildError {\ncolor: red;\n}\n</style>\n<span class=\"error-message\" id=\"guildError\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"body") : depth0), depth0))
    + "</span>\n";
},"useData":true});
})();