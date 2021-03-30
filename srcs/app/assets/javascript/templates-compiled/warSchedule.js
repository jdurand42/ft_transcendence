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
    + alias4(((helper = (helper = lookupProperty(helpers,"startDay") || (depth0 != null ? lookupProperty(depth0,"startDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDay","hash":{},"data":data,"loc":{"start":{"line":17,"column":37},"end":{"line":17,"column":49}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"startDate") || (depth0 != null ? lookupProperty(depth0,"startDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data,"loc":{"start":{"line":17,"column":50},"end":{"line":17,"column":63}}}) : helper)))
    + "</div>\n                    <div class=\"tiret\"> - </div>\n                    <div class=\"day\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endDay") || (depth0 != null ? lookupProperty(depth0,"endDay") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDay","hash":{},"data":data,"loc":{"start":{"line":19,"column":37},"end":{"line":19,"column":47}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"endDate") || (depth0 != null ? lookupProperty(depth0,"endDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDate","hash":{},"data":data,"loc":{"start":{"line":19,"column":48},"end":{"line":19,"column":59}}}) : helper)))
    + "</div>\n                </div>\n                <div class=\"hours\">\n                    <div class=\"startHours\">at "
    + alias4(((helper = (helper = lookupProperty(helpers,"startHours") || (depth0 != null ? lookupProperty(depth0,"startHours") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startHours","hash":{},"data":data,"loc":{"start":{"line":22,"column":47},"end":{"line":22,"column":61}}}) : helper)))
    + "h"
    + alias4(((helper = (helper = lookupProperty(helpers,"startMin") || (depth0 != null ? lookupProperty(depth0,"startMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startMin","hash":{},"data":data,"loc":{"start":{"line":22,"column":62},"end":{"line":22,"column":74}}}) : helper)))
    + "m</div>\n                    <div class=\"endHours\">at "
    + alias4(((helper = (helper = lookupProperty(helpers,"endHours") || (depth0 != null ? lookupProperty(depth0,"endHours") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endHours","hash":{},"data":data,"loc":{"start":{"line":23,"column":45},"end":{"line":23,"column":57}}}) : helper)))
    + "h"
    + alias4(((helper = (helper = lookupProperty(helpers,"endMin") || (depth0 != null ? lookupProperty(depth0,"endMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endMin","hash":{},"data":data,"loc":{"start":{"line":23,"column":58},"end":{"line":23,"column":68}}}) : helper)))
    + "m</div>\n                </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"warSchedule declareWar\" id=\"warSchedule\">\n    <div class=\"close\">\n        <img src=\"./icons/esc.svg\" class=\"\">\n    </div>\n    <div class=\"title\">\n        <div class=\"guildsName from\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fromName") || (depth0 != null ? lookupProperty(depth0,"fromName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromName","hash":{},"data":data,"loc":{"start":{"line":6,"column":37},"end":{"line":6,"column":49}}}) : helper)))
    + "</div>\n        <div class=\"vs\">VS</div>\n        <div class=\"guildsName on\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"onName") || (depth0 != null ? lookupProperty(depth0,"onName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"onName","hash":{},"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":45}}}) : helper)))
    + "</div>\n    </div>\n    <div class=\"warScheduleMiddle\">\n        <div class=\"warsCalendar warsCalendarFrom\">\n            <div class=\"nextWars\">Next wars</div>\n            <div class=\"allDates allDatesFrom\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"fromWars") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":26,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"warCalendarNext\">\n        </div>\n        <div class=\"warsCalendar warsCalendarOn\">\n            <div class=\"nextWars\">Next wars</div>\n            <div class=\"allDates allDatesOn\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"onWars") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":46,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n    <div class=\"buttons\">\n\n    </div>\n</div>";
},"useData":true});
})();