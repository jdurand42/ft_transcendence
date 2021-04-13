(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentNav'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"my-matches-nav\" id=\"my-matches-nav\">\n        MY MATCHES\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tournament-nav\" id=\"tournament-nav\">\n    <div class=\"square\" id=\"square\"></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isRegistered") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"all-matches-nav\" id=\"all-matches-nav\">\n        ALL MATCHES\n    </div>\n    <div class=\"classement-nav\" id=\"classement-nav\">\n        CLASSEMENT\n    </div>\n</div>";
},"useData":true});
})();