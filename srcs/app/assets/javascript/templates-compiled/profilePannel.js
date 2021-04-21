(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profilePannel'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
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
    + "</div>\n\n		<label class=\"image-container\">\n		<input type=\"file\"  accept=\"image/*\" name=\"image\" id=\"file\"  style=\"display: none;\">\n		<img id=\"profilePicture\" alt=\"avatar\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "\" width=\"200\" style=\"cursor: pointer;\" />\n		</label>\n\n		<div id=\"profileButtons\" class=\"savageButtons\"></div>\n	</div>\n</div>\n";
},"useData":true});
})();