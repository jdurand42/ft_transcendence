(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profileSubNavBar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subNavBar\">\n	    <div class=\"square\" id=\"square\"></div>\n		<div class=\"match-history-nav subNavBarEl\" id=\"matchHistory\">\n			MATCHES\n		</div>\n		<div class=\"achievements-nav\" id=\"achievements\">\n			ACHIEVEMENTS\n		</div>\n		<div class=\"profile-guild-nav\" id=\"profileGuild\">\n			GUILD\n		</div>\n		<div class=\"friends-nav\" id=\"friends\">\n			FRIENDS\n		</div>\n</div>\n";
},"useData":true});
})();