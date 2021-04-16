(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['userLoggedNoGuild'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"profileBlock\">\n<div class=\"bigMessage\">You're not a member of a guild</div>\n<div class=\"button\">\n<button ><a href=\"#manage_guild\">Create a guild</a></button>\n</div>\n</div>\n";
},"useData":true});
})();