(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tournamentCreation'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tournament-creation-container\">\n    <div class=\"title\">CREATE TOURNAMENT</div>\n    <div class=\"sub-title\">Tournament schedule</div>\n    <div class=\"schedule-container\">\n        <img src=\"./icons/schedule-yellow.svg\" class=\"schedule\">\n    </div>\n    <input type=\"text\" class=\"input datepicker\" id=\"datepicker\"></input>\n    <div class=\"create-tournament-container\">\n        <button class=\"create-tournament\" id=\"create-tournament\">Create tournament</button>\n    </div>\n</div>";
},"useData":true});
})();