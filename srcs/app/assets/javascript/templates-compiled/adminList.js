(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['adminList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr class=\"tableBoard user\">\n                <td class=\"first-th\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + " </td>\n                <td>\n                    <div class=\"image-container\">\n                        <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "\" class=\"list-image\"></img>\n                    </div>\n                </td>\n                <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</td>\n                <td><input type=\"checkbox\" name=\"administrator\" for="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + " class=\"administrator checkbox\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"admin") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":111},"end":{"line":20,"column":145}}})) != null ? stack1 : "")
    + "</td>\n                <td><input type=\"checkbox\" name=\"banned\" for="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + " class=\"banned checkbox\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"banned") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":97},"end":{"line":21,"column":132}}})) != null ? stack1 : "")
    + "</td>\n            </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"listsBoard adminView\" id=\"adminView\">\n    <div class=\"nb-list nbAdmin\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"nbUsers") || (depth0 != null ? lookupProperty(depth0,"nbUsers") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"nbUsers","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":44}}}) : helper)))
    + " users</div>\n    <table class=\"tablesBoard adminTable\">\n        <tr>\n            <th class=\"first-th\">ID</th>\n            <th></th>\n            <th>Nickname</th>\n            <th>Administrator</th>\n            <th>Banned</th>\n        </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":23,"column":21}}})) != null ? stack1 : "")
    + "    </table>\n</div>";
},"useData":true});
})();