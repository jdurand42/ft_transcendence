(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profileSubNavBar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subNavBar\">\n		<li id=\"matchHistory\"> <span class=\"subNavBarEl\">Matches</span></li>\n		<li id=\"achievements\"> <span class=\"subNavBarEl\">Achievements</span></li>\n		<li id=\"profileGuild\"> <span class=\"subNavBarEl\">Guild</span></li>\n		<li id=\"friends\"> <span class=\"subNavBarEl\">Friends</span></li>\n</div>\n";
},"useData":true});
})();