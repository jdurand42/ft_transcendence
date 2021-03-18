(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['userLoggedNoGuild'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span>You're not a member of a guild</span>\n<button><a href=\"#manage_guild\">Create a guild</a></button>\n<span>Here's a list of pending invitations</span>\n";
},"useData":true});
})();