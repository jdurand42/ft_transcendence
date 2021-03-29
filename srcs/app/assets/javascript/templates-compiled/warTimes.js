(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['warTimes'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"warRules declareWar\" id=\"warSchedule\">\n    <a class=\"close\" id=\"closeDeclareWar\" href='#guild/"
    + alias4(((helper = (helper = lookupProperty(helpers,"onId") || (depth0 != null ? lookupProperty(depth0,"onId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onId","hash":{},"data":data,"loc":{"start":{"line":2,"column":55},"end":{"line":2,"column":63}}}) : helper)))
    + "'>\n        <img src=\"./icons/esc.svg\">\n    </a>\n    <div class=\"title\">VS\n        <div class=\"guildsName from\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":6,"column":37},"end":{"line":6,"column":49}}}) : helper)))
    + "</div>\n        <div class=\"guildsName on\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":45}}}) : helper)))
    + "</div>\n    </div>\n    <div class=\"declareMiddle warRulesMiddle\">\n        <div class=\"declareWarTitle warRulesTitle\">War times</div>\n        <div class=\"container\">\n            <div id=\"scheduler\"></div>\n        </div>\n    </div>\n    <div class=\"buttons\">\n        <button class=\"button prev prevWarTimes\">Previous</button>\n        <button class=\"button next nextWarRules\">Validate</button>\n    </div>\n</div>";
},"useData":true});
})();