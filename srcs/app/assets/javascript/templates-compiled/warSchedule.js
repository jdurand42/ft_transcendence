(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['warSchedule'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"dates\">\n                <div class=\"date\">\n                    <div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startDay") || (depth0 != null ? lookupProperty(depth0,"startDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDay","hash":{},"data":data,"loc":{"start":{"line":16,"column":37},"end":{"line":16,"column":49}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"startDate") || (depth0 != null ? lookupProperty(depth0,"startDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data,"loc":{"start":{"line":16,"column":50},"end":{"line":16,"column":63}}}) : helper)))
    + "</div>\n                    <div class=\"tiret\"> - </div>\n                    <div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endDay") || (depth0 != null ? lookupProperty(depth0,"endDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDay","hash":{},"data":data,"loc":{"start":{"line":18,"column":37},"end":{"line":18,"column":47}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"endDate") || (depth0 != null ? lookupProperty(depth0,"endDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDate","hash":{},"data":data,"loc":{"start":{"line":18,"column":48},"end":{"line":18,"column":59}}}) : helper)))
    + "</div>\n                </div>\n                <div class=\"hours\">\n                    <div class=\"startHours\">at "
    + alias4(((helper = (helper = lookupProperty(helpers,"startHours") || (depth0 != null ? lookupProperty(depth0,"startHours") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startHours","hash":{},"data":data,"loc":{"start":{"line":21,"column":47},"end":{"line":21,"column":61}}}) : helper)))
    + "h"
    + alias4(((helper = (helper = lookupProperty(helpers,"startMin") || (depth0 != null ? lookupProperty(depth0,"startMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startMin","hash":{},"data":data,"loc":{"start":{"line":21,"column":62},"end":{"line":21,"column":74}}}) : helper)))
    + "m</div>\n                    <div class=\"endHours\">at "
    + alias4(((helper = (helper = lookupProperty(helpers,"endHours") || (depth0 != null ? lookupProperty(depth0,"endHours") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endHours","hash":{},"data":data,"loc":{"start":{"line":22,"column":45},"end":{"line":22,"column":57}}}) : helper)))
    + "h"
    + alias4(((helper = (helper = lookupProperty(helpers,"endMin") || (depth0 != null ? lookupProperty(depth0,"endMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endMin","hash":{},"data":data,"loc":{"start":{"line":22,"column":58},"end":{"line":22,"column":68}}}) : helper)))
    + "m</div>\n                </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"warSchedule declareWar\" id=\"warSchedule\">\n    <a class=\"close\" id=\"closeDeclareWar\" href='#guild/"
    + alias4(((helper = (helper = lookupProperty(helpers,"onId") || (depth0 != null ? lookupProperty(depth0,"onId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onId","hash":{},"data":data,"loc":{"start":{"line":2,"column":55},"end":{"line":2,"column":63}}}) : helper)))
    + "'>\n        <img src=\"./icons/esc.svg\">\n    </a>\n    <div class=\"title\">VS\n        <div class=\"guildsName from\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":6,"column":37},"end":{"line":6,"column":49}}}) : helper)))
    + "</div>\n        <div class=\"guildsName on\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":45}}}) : helper)))
    + "</div>\n    </div>\n    <div class=\"warScheduleMiddle\">\n        <div class=\"warsCalendar warsCalendarFrom\">\n            <div class=\"nextWars\">Next wars</div>\n            <div class=\"allDates allDatesFrom\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"fromWars") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":25,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"declareMiddle warCalendarNext\">\n            <div class=\"declareWarTitle warScheduleTitle\">War schedule</div>\n            <div class=\"schedule-container\">\n                <img src=\"./icons/schedule-yellow.svg\" class=\"schedule\">\n            </div>\n            <div class=\"input-container-from-to\">\n                <div class=\"input-container from\">\n                    <div class=\"text-input\">From</div>\n                    <input type=\"text\" class=\"input\" id=\"fromJJ\" placeholder=\"JJ\" maxlength=\"2\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"fromJJ") || (depth0 != null ? lookupProperty(depth0,"fromJJ") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromJJ","hash":{},"data":data,"loc":{"start":{"line":36,"column":103},"end":{"line":36,"column":113}}}) : helper)))
    + "\"></input>\n                    <input type=\"text\" class=\"input\" id=\"fromMM\" placeholder=\"MM\" maxlength=\"2\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"fromMM") || (depth0 != null ? lookupProperty(depth0,"fromMM") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromMM","hash":{},"data":data,"loc":{"start":{"line":37,"column":103},"end":{"line":37,"column":113}}}) : helper)))
    + "\"></input>\n                    <input type=\"text\" class=\"input\" id=\"fromYY\" placeholder=\"YYYY\" maxlength=\"4\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"fromYY") || (depth0 != null ? lookupProperty(depth0,"fromYY") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromYY","hash":{},"data":data,"loc":{"start":{"line":38,"column":105},"end":{"line":38,"column":115}}}) : helper)))
    + "\"></input>\n                    <div class=\"tiret\"> - </div>\n                    <input type=\"text\" class=\"input\" id=\"fromHH\" placeholder=\"HH\" maxlength=\"2\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"fromHH") || (depth0 != null ? lookupProperty(depth0,"fromHH") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromHH","hash":{},"data":data,"loc":{"start":{"line":40,"column":103},"end":{"line":40,"column":113}}}) : helper)))
    + "\"></input>\n                    <input type=\"text\" class=\"input\" id=\"fromMIN\" placeholder=\"MM\" maxlength=\"2\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"fromMIN") || (depth0 != null ? lookupProperty(depth0,"fromMIN") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromMIN","hash":{},"data":data,"loc":{"start":{"line":41,"column":104},"end":{"line":41,"column":115}}}) : helper)))
    + "\"></input>\n                </div>\n                <div class=\"input-container to\">\n                    <div class=\"text-input\">To</div>\n                    <input type=\"text\" class=\"input\" id=\"toJJ\" placeholder=\"JJ\" maxlength=\"2\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"toJJ") || (depth0 != null ? lookupProperty(depth0,"toJJ") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toJJ","hash":{},"data":data,"loc":{"start":{"line":45,"column":101},"end":{"line":45,"column":109}}}) : helper)))
    + "\"></input>\n                    <input type=\"text\" class=\"input\" id=\"toMM\" placeholder=\"MM\" maxlength=\"2\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"toMM") || (depth0 != null ? lookupProperty(depth0,"toMM") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toMM","hash":{},"data":data,"loc":{"start":{"line":46,"column":101},"end":{"line":46,"column":109}}}) : helper)))
    + "\"></input>\n                    <input type=\"text\" class=\"input\" id=\"toYY\" placeholder=\"YYYY\" maxlength=\"4\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"toYY") || (depth0 != null ? lookupProperty(depth0,"toYY") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toYY","hash":{},"data":data,"loc":{"start":{"line":47,"column":103},"end":{"line":47,"column":111}}}) : helper)))
    + "\"></input>\n                    <div class=\"tiret\"> - </div>\n                    <input type=\"text\" class=\"input\" id=\"toHH\" placeholder=\"HH\" maxlength=\"2\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"toHH") || (depth0 != null ? lookupProperty(depth0,"toHH") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toHH","hash":{},"data":data,"loc":{"start":{"line":49,"column":101},"end":{"line":49,"column":109}}}) : helper)))
    + "\"></input>\n                    <input type=\"text\" class=\"input\" id=\"toMIN\" placeholder=\"MM\" maxlength=\"2\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"toMIN") || (depth0 != null ? lookupProperty(depth0,"toMIN") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"toMIN","hash":{},"data":data,"loc":{"start":{"line":50,"column":102},"end":{"line":50,"column":111}}}) : helper)))
    + "\"></input>\n                </div>\n            </div>\n            <p id=\"error\" style=\"display: none;\"></p>\n            <div class=\"buttons\">\n                <button class=\"button next nextWarSchedule\">Next</button>\n            </div>\n        </div>\n        <div class=\"warsCalendar warsCalendarOn\">\n            <div class=\"nextWars\">Next wars</div>\n            <div class=\"allDates allDatesOn\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"onWars") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":74,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n\n</div>";
},"useData":true});
})();