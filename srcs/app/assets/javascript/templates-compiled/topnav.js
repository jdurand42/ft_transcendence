(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['topnav'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"active") || (depth0 != null ? lookupProperty(depth0,"active") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"active","hash":{},"data":data,"loc":{"start":{"line":3,"column":47},"end":{"line":3,"column":57}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"active") || (depth0 != null ? lookupProperty(depth0,"active") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"active","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":40}}}) : helper)))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <a class=\"btn admin\" href=\"#admin\">Admin</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"active") || (depth0 != null ? lookupProperty(depth0,"active") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"active","hash":{},"data":data,"loc":{"start":{"line":10,"column":28},"end":{"line":10,"column":38}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    return "unactive";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"topnav\">\n  <a class=\"btn logo\" href=\"#home\"></a>\n  <a class=\"btn tournaments"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tournaments") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":64}}})) != null ? stack1 : "")
    + "\" href=\"#tournaments\">Tournaments</a>\n  <a class=\"btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"leaderboard") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":52}}})) != null ? stack1 : "")
    + "\" href=\"#leaderboard\">Leaderboard</a>\n  <a class=\"btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guilds") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":15},"end":{"line":5,"column":48}}})) != null ? stack1 : "")
    + " guilds\" href=\"#guilds\">Guilds</a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"admin") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "  <a class=\"span\"></a>\n  <a class=\"btn "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"chat") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":45}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"chat") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":45},"end":{"line":10,"column":80}}})) != null ? stack1 : "")
    + "chat\" href=\"#chat\">\n    <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"chatIcon") || (depth0 != null ? lookupProperty(depth0,"chatIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatIcon","hash":{},"data":data,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":25}}}) : helper)))
    + " class=\"chat\">\n  </a>\n  <a class=\"btn user-page\" href=\"#user_page\">\n    <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"profile_pic") || (depth0 != null ? lookupProperty(depth0,"profile_pic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profile_pic","hash":{},"data":data,"loc":{"start":{"line":14,"column":13},"end":{"line":14,"column":28}}}) : helper)))
    + " class=\"profile_pic\"></img>\n    <div class=\"btn "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"user_page") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":20},"end":{"line":15,"column":56}}})) != null ? stack1 : "")
    + " user\" href=\"#user_page\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"user") || (depth0 != null ? lookupProperty(depth0,"user") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data,"loc":{"start":{"line":15,"column":81},"end":{"line":15,"column":89}}}) : helper)))
    + "</div>\n  </a>\n  <a class=\"exit\" href=\"#exit\"></a>\n</div>\n";
},"useData":true});
})();