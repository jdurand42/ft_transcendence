(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='gameSupraDiv'>\n	<h1 class=\"gameTitle\">Play pong</h1>\n	<canvas id=\"gameWindow\" width=\"512\" height=\"256\">\n	</canvas>\n</div>\n";
},"useData":true});
})();