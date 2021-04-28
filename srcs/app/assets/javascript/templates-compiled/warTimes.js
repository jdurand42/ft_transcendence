(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['warTimes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":27},"end":{"line":30,"column":36}}}) : helper)))
    + "\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":41},"end":{"line":30,"column":50}}}) : helper)))
    + ">\n                    <td>\n                        <div class=\"filter filter-days\" id=\"filter-days-from-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":32,"column":77},"end":{"line":32,"column":86}}}) : helper)))
    + "\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":32,"column":92},"end":{"line":32,"column":101}}}) : helper)))
    + "> \n                            <div class=\"day-name\" id=\"day-name-from-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":33,"column":68},"end":{"line":33,"column":77}}}) : helper)))
    + "\">\n                                "
    + alias4(((helper = (helper = lookupProperty(helpers,"fromDay") || (depth0 != null ? lookupProperty(depth0,"fromDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromDay","hash":{},"data":data,"loc":{"start":{"line":34,"column":32},"end":{"line":34,"column":43}}}) : helper)))
    + "\n                            </div>\n                            <div class=\"arrow-down-container\">\n                                <img src='./icons/arrow_down-black.svg' class=\"arrow-down\"></img>\n                            </div>\n                            <div class=\"list-days\" id=\"filter-days-from-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":39,"column":72},"end":{"line":39,"column":81}}}) : helper)))
    + "-open\" style=\"display: none;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"days") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":28},"end":{"line":42,"column":37}}})) != null ? stack1 : "")
    + "                            </div>\n                        </div>\n                    </td>\n                    <td class=\"td-text-input\">\n                        <div class=\"text-input\">From</div>\n                    </td>\n                    <td class=\"td-inputHH\">\n                        <input type=\"text\" class=\"inputHH inputWarTimes hh fromHH\" id=\"fromHH"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":50,"column":93},"end":{"line":50,"column":102}}}) : helper)))
    + "\" placeholder=\"HH\" maxlength=\"2\" value="
    + alias4(((helper = (helper = lookupProperty(helpers,"fromHH") || (depth0 != null ? lookupProperty(depth0,"fromHH") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromHH","hash":{},"data":data,"loc":{"start":{"line":50,"column":141},"end":{"line":50,"column":151}}}) : helper)))
    + "></input>\n                    </td>\n                    <td class=\"td-inputHH\">:00min\n                    </td>\n                    <td class=\"td-text-input\">\n                        <div class=\"text-input\">To</div>\n                    </td>\n                    <td class=\"td-inputHH\">\n                        <input type=\"text\" class=\"inputHH inputWarTimes hh toHH\" id=\"toHH"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":59,"column":89},"end":{"line":59,"column":98}}}) : helper)))
    + "\" placeholder=\"HH\" maxlength=\"2\" value="
    + alias4(((helper = (helper = lookupProperty(helpers,"toHH") || (depth0 != null ? lookupProperty(depth0,"toHH") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toHH","hash":{},"data":data,"loc":{"start":{"line":59,"column":137},"end":{"line":59,"column":145}}}) : helper)))
    + "></input>\n                    </td>\n                    <td class=\"td-inputHH\">:00min\n                    </td>\n                    <td class=\"td-input\">\n                        <input type=\"text\" class=\"input inputWarTimes max-unanswered\" id=\"max-unanswered"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":65,"column":104},"end":{"line":65,"column":113}}}) : helper)))
    + "\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":65,"column":119},"end":{"line":65,"column":128}}}) : helper)))
    + " value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"maxUnanswered") || (depth0 != null ? lookupProperty(depth0,"maxUnanswered") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxUnanswered","hash":{},"data":data,"loc":{"start":{"line":65,"column":136},"end":{"line":65,"column":153}}}) : helper)))
    + "\"></input>\n                    </td>\n                    <td class=\"td-input\">\n                        <input type=\"text\" class=\"input inputWarTimes time-to-answer\" id=\"time-to-answer"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":68,"column":104},"end":{"line":68,"column":113}}}) : helper)))
    + "\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":68,"column":119},"end":{"line":68,"column":128}}}) : helper)))
    + " value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"timeToAnswer") || (depth0 != null ? lookupProperty(depth0,"timeToAnswer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeToAnswer","hash":{},"data":data,"loc":{"start":{"line":68,"column":136},"end":{"line":68,"column":152}}}) : helper)))
    + "\"></input>\n                    </td>\n                    <td class=\"td-minus\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"index") : depth0),"!=",0,{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":24},"end":{"line":75,"column":35}}})) != null ? stack1 : "")
    + "                    </td>\n                </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"day\" id=\"from-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":41,"column":54},"end":{"line":41,"column":63}}}) : helper)))
    + "\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":41,"column":70},"end":{"line":41,"column":79}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"day") || (depth0 != null ? lookupProperty(depth0,"day") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data,"loc":{"start":{"line":41,"column":81},"end":{"line":41,"column":88}}}) : helper)))
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"minus-circular-container\" id=\"minus-circular-container\" for=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":72,"column":97},"end":{"line":72,"column":106}}}) : helper)))
    + "\">\n                            <img src=\"./icons/minus-circular.svg\" class=\"minus-circular\"></img>\n                        </div>\n";
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
    + "</div>\n    </div>\n    <div class=\"declareMiddle warRulesMiddle\">\n        <div class=\"declareWarTitle warTimesTitle\">War times</div>\n        <div class=\"all-war-times\" id=\"all-war-times\">\n            <table class=\"war-times-table\" id=\"war-times-table\">\n                <tr>\n                    <th></th>\n                    <th></th>\n                    <th></th>\n                    <th></th>\n                    <th></th>\n                    <th></th>\n                    <th></th>\n                    <th>                    \n                        Max<br>unanswered<br>matches\n                    </th>\n                    <th>                    \n                        Time<br>to answer<br>(seconds)\n                    </th>\n                    <th></th>\n                </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"warTime") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":78,"column":25}}})) != null ? stack1 : "")
    + "            </table>\n        </div>\n        <div class=\"add-war-time\" id=\"add-war-time\">\n            <a class=\"add-war-time-container\" id=\"add-war-time-container\">\n                <img src=\"./icons/plus.svg\" class=\"add-war-time-icon\">\n            </a>\n            Add war time\n        </div>\n    </div>\n    <p id=\"error\" style=\"display: none;\"></p>\n    <div class=\"buttons\">\n        <button class=\"button prev prevWarTimes\">Previous</button>\n        <button class=\"button next validateWarTimes\">Validate</button>\n    </div>\n</div>";
},"useData":true});
})();