(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['adminHeader'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"adminHeader\">\n    <input type=\"text\" class=\"search-list\" id=\"searchAdmin\" placeholder=\"Research\"></input>\n</div>";
},"useData":true});
})();