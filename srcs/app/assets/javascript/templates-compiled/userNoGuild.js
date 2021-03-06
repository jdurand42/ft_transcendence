(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['userNoGuild'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"profileBlock\">\n<div class=\"bigMessage\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":2,"column":24},"end":{"line":2,"column":36}}}) : helper)))
    + " doesn't have a guild</div>\n<div id=\"sendInvitationButton\"></div>\n<p class=\"error-message\" id=\"error-message\" style=\"display: none;\"></p>\n</div>\n";
},"useData":true});
})();