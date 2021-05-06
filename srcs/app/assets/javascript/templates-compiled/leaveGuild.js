(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['leaveGuild'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"leaveGuildPage\">\n\n<div id=\"leaveGuildConfirmation\">Are you sure you want to leave "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "?</div>\n<div><button class=\"button\" id=\"leaveGuild\">Yes</button></div>\n<div id='manageGuildErrorDiv'></div>\n</div>\n";
},"useData":true});
})();