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
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"active") || (depth0 != null ? lookupProperty(depth0,"active") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"active","hash":{},"data":data,"loc":{"start":{"line":7,"column":50},"end":{"line":7,"column":60}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"active") || (depth0 != null ? lookupProperty(depth0,"active") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"active","hash":{},"data":data,"loc":{"start":{"line":13,"column":34},"end":{"line":13,"column":44}}}) : helper)))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"btn-container\">\n      <a class=\"btn"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"administration") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":19},"end":{"line":17,"column":60}}})) != null ? stack1 : "")
    + "\" href=\"#administration\">Admin</a>\n    </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"active") || (depth0 != null ? lookupProperty(depth0,"active") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"active","hash":{},"data":data,"loc":{"start":{"line":26,"column":32},"end":{"line":26,"column":42}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    return "unactive";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"topnav\">\n  <div class=\"btn-container\">\n    <a class=\"btn logo\" href=\"#home\"></a>\n  </div>\n  <div class=\"container menu\">\n    <div class=\"btn-container\">\n      <a class=\"btn tournaments"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tournament") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":67}}})) != null ? stack1 : "")
    + "\" href=\"#tournament\">Tournament</a>\n    </div>\n    <div class=\"btn-container\">\n      <a class=\"btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"leaderboard") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":19},"end":{"line":10,"column":56}}})) != null ? stack1 : "")
    + "\" href=\"#leaderboard\">Leaderboard</a>\n    </div>\n    <div class=\"btn-container\">\n      <a class=\"btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guilds") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":19},"end":{"line":13,"column":52}}})) != null ? stack1 : "")
    + " guilds\" href=\"#guilds\">Guilds</a>\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"admin") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":19,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"container chat-profile\">\n    <div class=\"btn-container\">\n      <a class=\"span\"></a>\n    </div>\n    <div class=\"btn-container\">\n      <a class=\"btn "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"chat") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":49}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"chat") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":49},"end":{"line":26,"column":84}}})) != null ? stack1 : "")
    + "chat\" href=\"#chat\">\n        <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"chatIcon") || (depth0 != null ? lookupProperty(depth0,"chatIcon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatIcon","hash":{},"data":data,"loc":{"start":{"line":27,"column":17},"end":{"line":27,"column":29}}}) : helper)))
    + " class=\"chat\">\n      </a>\n    </div>\n    <div class=\"btn-container\">\n      <a class=\"btn user-page\" href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":46},"end":{"line":31,"column":52}}}) : helper)))
    + "\">\n        <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"profile_pic") || (depth0 != null ? lookupProperty(depth0,"profile_pic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profile_pic","hash":{},"data":data,"loc":{"start":{"line":32,"column":17},"end":{"line":32,"column":32}}}) : helper)))
    + " class=\"profile_pic\"></img>\n        <div class=\"btn "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"profile") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":24},"end":{"line":33,"column":58}}})) != null ? stack1 : "")
    + " user\" href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":33,"column":80},"end":{"line":33,"column":86}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"user") || (depth0 != null ? lookupProperty(depth0,"user") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data,"loc":{"start":{"line":33,"column":88},"end":{"line":33,"column":96}}}) : helper)))
    + "</div>\n      </a>\n    </div>\n\n  <div class=\"btn-container\">\n    <a class=\"exit\" href=\"#exit\">\n      <img src=\"icons/exit.svg\" class=\"exit\">\n    </a>\n  </div>\n\n  \n</div>\n";
},"useData":true});
})();