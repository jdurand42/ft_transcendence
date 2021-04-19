(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guildSubNavBar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subNavBar subNavBarGuild\">\n	<div class=\"square\" id=\"square\"></div>\n	<div class=\"nav\">\n		<div class=\"currentWar-nav\" id=\"currentWar\">\n			WAR\n		</div>\n		<div class=\"lastWars-nav\" id=\"lastWars\">\n			LAST WARS\n		</div>\n		<div class=\"members-nav\" id=\"members\">\n			MEMBERS\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();