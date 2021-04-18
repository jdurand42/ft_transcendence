(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guildPannel'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pannelContent\">\n	<div class=\"pannelLine\" id=\"pannelFirstLine\">\n	<div class=\"pannelEl pannelUl\" id=\"pannelScore\">\n		<div class=\"pannelUlEl profilePanneEl pannelUlFirstEL\" id=\"guildScore\">\n			"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"score") : depth0), depth0))
    + "</div>\n		<div class=\"pannelUlEl profilePanneEl pannelUlLegend\" id=GuildScoreLegend>\n			SCORE</div>\n	</div>\n\n	<div class=\"pannelEl pannelUl\" id=\"pannelRank\">\n		<div class=\"pannelUlEl profilePanneEl pannelUlFirstEl\" id=\"guildRank\">\n			"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "</div>\n		<div class=\"pannelUlEl profilePanneEl pannelUlLegend\" id=\"guildRankLegend\">\n			RANK</div>\n	</div>\n	</div>\n\n	<div class=\"pannelLine\" id=\"pannelSecondLine\">\n		<div class=\"pannelEl pannelUl\" id=\"pannelWarsWon\">\n			<div class=\"pannelUlEl profilePanneEl pannelUlFirstEl\" id=\"guildWarsWon\">\n				"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"warsWon") : depth0), depth0))
    + "</div>\n			<div class=\"pannelUlEl profilePanneEl pannelUlLegend\" id=\"guildWarsWonLegend\">\n				WARS WON</div>\n		</div>\n\n		<div class=\"pannelEl pannelUl\" id=\"pannelTotalWars\">\n			<div class=\"pannelUlEl profilePanneEl pannelUlFirstEL\" id=\"guildTotalWars\">\n				"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"totalWars") : depth0), depth0))
    + "</div>\n			<div class=\"pannelUlEl profilePanneEl pannelUlLegend\" id=\"guildTotalWarsLegend\">\n				TOTAL WARS</div>\n		</div>\n	</div>\n	<div class=\"pannelLine guildInfos\" id=\"guildInfos\"><span id =\"guildName\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</span><span class=\"pannelEl\" id=\"guildAnagram\"> ["
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"anagram") : depth0), depth0))
    + "]</span>\n</div>\n</div>\n";
},"useData":true});
})();