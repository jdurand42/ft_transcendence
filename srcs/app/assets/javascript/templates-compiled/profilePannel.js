(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profilePannel'] = template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<input type=\"file\"  accept=\"image/*\" name=\"image\" id=\"file\"  style=\"display: none;\">\n		<img id=\"profilePicture\" alt=\"avatar\" src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "\" width=\"200\" style=\"cursor: pointer;\" />\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<img id=\"profilePicture\" alt=\"avatar\" src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "\" width=\"200\" style=\"cursor: auto;\" />\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pannelContent\">\n\n	<div class=\"paint line white-line\"></div>\n	<div class=\"paint red-ball\"></div>\n	<div class=\"paint line yellow-line\"></div>\n\n	<div class=\"pannelLine\" id=\"pannelFirstLineProfile\">\n\n	<div class=\"pannelEl pannelUl\" id=\"pannelLeagueRank\">\n		<div class=\"pannelUlEl profilePanneEl pannelUlFirstEL\" id=\"leagueRank\">\n			"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"score") : depth0), depth0))
    + "</div>\n		<!--<div class=\"pannelUlEl profilePanneEl pannelUlTotal\" id=\"totalLeagueRank\">\n		/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"totalLeagueRank") : depth0), depth0))
    + "</div>-->\n		<div class=\"pannelUlEl profilePanneEl pannelUlLegend\" id=totalLeagueRankLegend>\n			SCORE</div>\n	</div>\n\n	<div class=\"pannelEl pannelUl\" id=\"pannelGeneralRank\">\n		<div class=\"pannelUlEl profilePanneEl pannelUlFirstEl\" id=\"generalRank\">\n			"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"generalRank") : depth0), depth0))
    + "</div>\n		<div class=\"pannelUlEl profilePanneEl pannelUlTotal\" id=\"totalGeneralRank\">\n		/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"totalRank") : depth0), depth0))
    + "</div>\n		<div class=\"pannelUlEl profilePanneEl pannelUlLegend\" id=\"totalGeneralRankLegend\">\n			GENERAL RANK</div>\n	</div>\n	</div>\n\n	<div class=\"pannelLine\" id=\"pannelSecondLineProfile\">\n		<div class=\"pannelEl pannelUl\" id=\"pannelVictories\">\n			<div class=\"pannelUlEl profilePanneEl pannelUlFirstEl\" id=\"victories\">\n				"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"victories") : depth0), depth0))
    + "</div>\n			<div class=\"pannelUlEl profilePanneEl pannelUlLegend\" id=\"victoriesLegend\">\n				VICTORIES</div>\n		</div>\n\n		<div class=\"pannelEl pannelUl\" id=\"pannelTotalGames\">\n			<div class=\"pannelUlEl profilePanneEl pannelUlFirstEL\" id=\"totalGames\">\n				"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"totalGames") : depth0), depth0))
    + "</div>\n			<div class=\"pannelUlEl profilePanneEl pannelUlLegend\" id=\"totalGamesLegend\">\n				TOTAL GAMES</div>\n		</div>\n	</div>\n	<div class=\"image-nickname\">\n		<div class=\"\" id=\"pannelTrophyContainer\">\n			<img id=\"pannelTrophy\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"trophy") : depth0), depth0))
    + "\">\n		</div>\n		<div class=\"\" id =\"Pannelnickname\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</div>\n\n		<label class=\"image-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"myPage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":2},"end":{"line":56,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,(depth0 != null ? lookupProperty(depth0,"myPage") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":2},"end":{"line":59,"column":13}}})) != null ? stack1 : "")
    + "		</label>\n\n\n		<div id=\"profileButtons\" class=\"savageButtons\"></div>\n	</div>\n	<div class=\"status-container\">\n		<div class=\"pastille "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"status_class") : depth0), depth0))
    + "\" id=\"pastille"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\"></div>\n		<p class=\"status\" id=\"status"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"status") : depth0), depth0))
    + "</p>\n		<div class=\"slide-show-container\"></div>\n		<img src=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":69,"column":12},"end":{"line":69,"column":26}}}) : helper)))
    + "\" id=\"slide-show"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"slide-show\"></img>\n	</div>\n</div>\n";
},"useData":true});
})();