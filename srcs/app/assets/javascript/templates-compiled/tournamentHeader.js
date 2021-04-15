(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentHeader'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"register-button-container\" id=\"register-button-container\">\n            <button class=\"register-button\" id=\"register-button\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"register") || (depth0 != null ? lookupProperty(depth0,"register") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"register","hash":{},"data":data,"loc":{"start":{"line":30,"column":65},"end":{"line":30,"column":77}}}) : helper)))
    + "</button>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"create-tournament-container\">\n            <button class=\"create-new-tournament\" id=\"create-new-tournament\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"createTournament") || (depth0 != null ? lookupProperty(depth0,"createTournament") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"createTournament","hash":{},"data":data,"loc":{"start":{"line":36,"column":77},"end":{"line":36,"column":97}}}) : helper)))
    + "</button>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tournament-header\" id=\"tournament-header\">\n    <div class=\"winner\" id=\"winner\" style=\"display:none;\">\n        <div class=\"first-sentence\">Congratulations to "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"winner") || (depth0 != null ? lookupProperty(depth0,"winner") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"winner","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":65}}}) : helper)))
    + "!</div>\n        <div class=\"second-sentence\">The tournament is over, see you to the next one.</div>\n    </div>\n    <div class=\"second-floor\" id=\"second-floor\">\n        <div class=\"left\">\n        <div class=\"round-robin-tournament\">\n            ROUND-ROBIN TOURNAMENT\n            <div class=\"rules-icon-container\">\n                <img src=\"./icons/rules.svg\"></img>\n            </div>\n            <div class=\"rules\" id=\"rules\">\n                <div class=\"title\">Rules</div>\n                <ul>\n                    <li>A minimum of 4 players is required to begin the tournament<br>\n                        otherwise the tournament is cancelled.</li>\n                    <li>Every registered player has to play against all other players.</li>\n                    <li>The tournament ends when all matches are done.</li>\n                    <li>In the event of a tie, the players are separated according to<br>\n                        their respective gap points.</li>\n                    <li>If the leading players are ex aequo in number of victories at the end <br>\n                        of the tournament, there will be an ultime match between them.</li>\n                    <li>The winner earns points for his guild and a new achievement.</liv>\n                </ul>\n            </div>\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tournament") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"admin") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":38,"column":15}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"useData":true});
})();