(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentTimer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"timer-container\">\n    <div class=\"next-tournament-in\">Next tournament in</div>\n    <div class=\"timer\" id=\"timer\"></div>\n</div>";
},"useData":true});
})();