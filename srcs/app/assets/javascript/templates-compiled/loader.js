(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['loader'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"waiting-page\">\n    <div class=\"loader-container\">\n        <img src=\"./gif/loader.gif\" class=\"loader\">\n    </div>\n    <div class=\"loading-sentence\">Looking for suitable opponent</div>\n</div>";
},"useData":true});
})();