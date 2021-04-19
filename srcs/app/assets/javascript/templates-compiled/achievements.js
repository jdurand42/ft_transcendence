(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['achievements'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"achievement "
    + alias4(((helper = (helper = lookupProperty(helpers,"achieved") || (depth0 != null ? lookupProperty(depth0,"achieved") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"achieved","hash":{},"data":data,"loc":{"start":{"line":4,"column":28},"end":{"line":4,"column":40}}}) : helper)))
    + "\">\n        <div class=\"image-container\" id=\"achievement-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":53},"end":{"line":5,"column":59}}}) : helper)))
    + "\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":6,"column":22},"end":{"line":6,"column":30}}}) : helper)))
    + "\" class=\"image\">\n        </div>\n        <div class=\"right\">\n            <div class=\"name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":30},"end":{"line":9,"column":38}}}) : helper)))
    + "</div>\n            <div class=\"description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":10,"column":37},"end":{"line":10,"column":52}}}) : helper)))
    + "</div>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"achieved") : depth0),"==","achieved",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":18,"column":23}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"achieved\">\n                <div class=\"check-container\">\n                    <img src=\"./icons/check.svg\" class=\"check\">\n                </div>\n                <div class=\"achieved-text\">Achieved</div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"profileBlock\" id=\"achievementsBlock\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"achievement") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();