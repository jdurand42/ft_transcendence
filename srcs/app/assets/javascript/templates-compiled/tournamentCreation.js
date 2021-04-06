(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentCreation'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tournament-creation-container\">\n    <div class=\"title\">CREATE TOURNAMENT</div>\n    <div class=\"sub-title\">Tournament schedule</div>\n    <div class=\"schedule-container\">\n        <img src=\"./icons/schedule-yellow.svg\" class=\"schedule\">\n    </div>\n    <input type=\"text\" class=\"input datepicker\" id=\"datepicker\"></input>\n    <div class=\"create-tournament-container\">\n        <button class=\"create-tournament\" id=\"create-tournament\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"createTournament") || (depth0 != null ? lookupProperty(depth0,"createTournament") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"createTournament","hash":{},"data":data,"loc":{"start":{"line":9,"column":65},"end":{"line":9,"column":85}}}) : helper)))
    + "</button>\n    </div>\n</div>";
},"useData":true});
})();