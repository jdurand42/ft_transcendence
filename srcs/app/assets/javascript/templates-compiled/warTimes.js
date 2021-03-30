(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['warTimes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"war-time\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":13,"column":38},"end":{"line":13,"column":47}}}) : helper)))
    + "\">\n                <div class=\"text-input\">From</div>\n                <div class=\"filter filter-days\" id=\"filter-days-from-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":15,"column":69},"end":{"line":15,"column":78}}}) : helper)))
    + "\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":15,"column":84},"end":{"line":15,"column":93}}}) : helper)))
    + "> \n                    <div class=\"day-name\" id=\"day-name-from-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":69}}}) : helper)))
    + "\">\n                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"fromDay") || (depth0 != null ? lookupProperty(depth0,"fromDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromDay","hash":{},"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":17,"column":35}}}) : helper)))
    + "\n                    </div>\n                    <div class=\"arrow-down-container\">\n                        <img src='./icons/arrow_down-black.svg' class=\"arrow-down\"></img>\n                    </div>\n                </div>\n                <div class=\"list-days\" id=\"filter-days-from-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":60},"end":{"line":23,"column":69}}}) : helper)))
    + "-open\" style=\"display: none;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"days") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":26,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n                <input type=\"text\" class=\"input hh\" id=\"fromHH"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":28,"column":62},"end":{"line":28,"column":71}}}) : helper)))
    + "\" placeholder=\"HH\" maxlength=\"2\"></input>\n                <input type=\"text\" class=\"input mm\" id=\"fromMM"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":62},"end":{"line":29,"column":71}}}) : helper)))
    + "\" placeholder=\"MM\" maxlength=\"2\"></input>\n                <div class=\"text-input\">To</div>\n                    <div class=\"filter filter-days\" id=\"filter-days-to-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":31,"column":71},"end":{"line":31,"column":80}}}) : helper)))
    + "\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":31,"column":86},"end":{"line":31,"column":95}}}) : helper)))
    + "> \n                    <div class=\"day-name\" id=\"day-name-to-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":32,"column":58},"end":{"line":32,"column":67}}}) : helper)))
    + "\">\n                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"toDay") || (depth0 != null ? lookupProperty(depth0,"toDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toDay","hash":{},"data":data,"loc":{"start":{"line":33,"column":24},"end":{"line":33,"column":33}}}) : helper)))
    + " \n                    </div>\n                    <div class=\"arrow-down-container\">\n                        <img src='./icons/arrow_down-black.svg' class=\"arrow-down\"></img>\n                    </div>\n                </div>\n                <div class=\"list-days\" id=\"filter-days-to-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":39,"column":58},"end":{"line":39,"column":67}}}) : helper)))
    + "-open\" style=\"display: none;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"days") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":20},"end":{"line":42,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n                <input type=\"text\" class=\"input hh\" id=\"toHH"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":44,"column":60},"end":{"line":44,"column":69}}}) : helper)))
    + "\" placeholder=\"HH\" maxlength=\"2\"></input>\n                <input type=\"text\" class=\"input mm\" id=\"toMM"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":45,"column":60},"end":{"line":45,"column":69}}}) : helper)))
    + "\" placeholder=\"MM\" maxlength=\"2\"></input>\n                <div class=\"minus-circular-container\" id=\"minus-circular-container\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":46,"column":89},"end":{"line":46,"column":98}}}) : helper)))
    + "\">\n                    <img src=\"./icons/minus-circular.svg\" class=\"minus-circular\">\n                </div>\n            </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"day\" id=\"from-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":46},"end":{"line":25,"column":55}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":62},"end":{"line":25,"column":71}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"day") || (depth0 != null ? lookupProperty(depth0,"day") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data,"loc":{"start":{"line":25,"column":73},"end":{"line":25,"column":80}}}) : helper)))
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"day\" id=\"to-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":41,"column":44},"end":{"line":41,"column":53}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":41,"column":60},"end":{"line":41,"column":69}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"day") || (depth0 != null ? lookupProperty(depth0,"day") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data,"loc":{"start":{"line":41,"column":71},"end":{"line":41,"column":78}}}) : helper)))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"warTimes declareWar\" id=\"warSchedule\">\n    <a class=\"close\" id=\"closeDeclareWar\" href='#guild/"
    + alias4(((helper = (helper = lookupProperty(helpers,"onId") || (depth0 != null ? lookupProperty(depth0,"onId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onId","hash":{},"data":data,"loc":{"start":{"line":2,"column":55},"end":{"line":2,"column":63}}}) : helper)))
    + "'>\n        <img src=\"./icons/esc.svg\">\n    </a>\n    <div class=\"title\">VS\n        <div class=\"guildsName from\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":6,"column":37},"end":{"line":6,"column":49}}}) : helper)))
    + "</div>\n        <div class=\"guildsName on\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":45}}}) : helper)))
    + "</div>\n    </div>\n    <div class=\"declareMiddle warRulesMiddle\">\n        <div class=\"declareWarTitle warTimesTitle\">War times</div>\n        <div class=\"all-war-times\" id=\"all-war-times\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"warTime") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":50,"column":21}}})) != null ? stack1 : "")
    + "            <div class=\"add-war-time\", id=\"add-war-time\">\n            <a class=\"add-war-time-container\" id=\"add-war-time-container\">\n                <img src=\"./icons/plus.svg\" class=\"add-war-time-icon\">\n            </a>\n            Add war time\n            </div>\n        </div>\n    </div>\n    <p id=\"error\" style=\"display: none;\"></p>\n    <div class=\"buttons\">\n        <button class=\"button prev prevWarTimes\">Previous</button>\n        <button class=\"button next validateWarTimes\">Validate</button>\n    </div>\n</div>";
},"useData":true});
})();