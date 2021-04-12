(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['notMemberOfAGuild'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notFoundMessage\">It seems you aren't member of a guild</div>\n<div class=\"manageGuildButtonContainer\" id=\"goToCreateGuildButtonContainer\">\n	<button class=\"manageGuildButton\" id=\"goToCreateGuildButton\"><a href=\"#manage_guild\">Create a guild</a></button>\n</div>\n";
},"useData":true});
})();