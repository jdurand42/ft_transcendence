(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['chat'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"clickable-discussions clikable-discussions"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":74},"end":{"line":17,"column":80}}}) : helper)))
    + "\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":86},"end":{"line":17,"column":92}}}) : helper)))
    + " id=\"channel"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":104},"end":{"line":17,"column":110}}}) : helper)))
    + "\">\n                        <p class=\"channelName\">#"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":21,"column":48},"end":{"line":21,"column":56}}}) : helper)))
    + "</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"admin") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":26,"column":31}}})) != null ? stack1 : "")
    + "                        <div class=\"close delete\">\n                            <img src='./icons/close.svg' class=\"close-icon\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":28,"column":80},"end":{"line":28,"column":86}}}) : helper)))
    + "></img>\n                        </div>\n                    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"admin_panel_settings\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":63},"end":{"line":23,"column":69}}}) : helper)))
    + "\">\n                            <img src='./icons/admin_panel_settings.svg' class=\"admin_panel_settings-icon\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":24,"column":110},"end":{"line":24,"column":116}}}) : helper)))
    + "></img>\n                        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"clickable-discussions user\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":41,"column":64},"end":{"line":41,"column":70}}}) : helper)))
    + " id=\"DM"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":41,"column":77},"end":{"line":41,"column":83}}}) : helper)))
    + "\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":43,"column":37},"end":{"line":43,"column":50}}}) : helper)))
    + " id="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":43,"column":54},"end":{"line":43,"column":60}}}) : helper)))
    + " class=\"blockViewProfile image_url\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":43,"column":100},"end":{"line":43,"column":110}}}) : helper)))
    + "></img>\n                        </div>\n                        <p class=\"anagram_nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":45,"column":52},"end":{"line":45,"column":64}}}) : helper)))
    + "</p>\n                    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"all-channels-admin\">\n                <div class=\"first-line\">\n                    <div class=\"sub-title\">ALL CHANNELS (ADMIN VIEW)</div>\n                </div>\n                <div class=\"all-channels\" id=\"all-channels\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"allChannels") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":16},"end":{"line":69,"column":25}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"clickable-discussions clikable-discussions"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":60,"column":74},"end":{"line":60,"column":80}}}) : helper)))
    + "\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":60,"column":86},"end":{"line":60,"column":92}}}) : helper)))
    + " id=\"all-channel"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":60,"column":108},"end":{"line":60,"column":114}}}) : helper)))
    + "\">\n                        <p class=\"channelName\">#"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":64,"column":48},"end":{"line":64,"column":56}}}) : helper)))
    + "</p>\n                        <div class=\"admin_panel_settings\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":65,"column":63},"end":{"line":65,"column":69}}}) : helper)))
    + "\">\n                            <img src='./icons/admin_panel_settings.svg' class=\"admin_panel_settings-icon\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":66,"column":110},"end":{"line":66,"column":116}}}) : helper)))
    + "></img>\n                        </div>\n                    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"image-container\">\n                    <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":80,"column":29},"end":{"line":80,"column":42}}}) : helper)))
    + " class=\"blockViewProfile image_url\"  id="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":80,"column":82},"end":{"line":80,"column":88}}}) : helper)))
    + " for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":80,"column":94},"end":{"line":80,"column":104}}}) : helper)))
    + "\"></img>\n                </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <p class=\"anagram\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":85,"column":39},"end":{"line":85,"column":50}}}) : helper)))
    + "</p>\n                    <p class=\"nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":86,"column":40},"end":{"line":86,"column":52}}}) : helper)))
    + "</p>\n                    <div class=\"pastille\" id=\"pastille\"></div>\n                    <p class=\"status\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":88,"column":38},"end":{"line":88,"column":48}}}) : helper)))
    + "</p>\n                    <div class=\"slide-show-container\">\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slide_show") || (depth0 != null ? lookupProperty(depth0,"slide_show") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slide_show","hash":{},"data":data,"loc":{"start":{"line":90,"column":34},"end":{"line":90,"column":48}}}) : helper)))
    + "\" class=\"slide-show\"></img>\n                    </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <p class=\"name\">#"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":94,"column":37},"end":{"line":94,"column":45}}}) : helper)))
    + "</p>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"owner") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":16},"end":{"line":104,"column":23}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"group_add-container\" for=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":101,"column":54},"end":{"line":101,"column":60}}}) : helper)))
    + "\">\n                    <img src=\"./icons/group_add.svg\" class=\"group_add\"></img>\n                </div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button class=\"play-button\" id=\"play-button\" for=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":107,"column":66},"end":{"line":107,"column":76}}}) : helper)))
    + "\">\n                    <img src=\"./icons/videogame.svg\" height=\"24\">\n                </button>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"message") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":16},"end":{"line":128,"column":23}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"message\">\n                    <div class=\"info\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":120,"column":37},"end":{"line":120,"column":50}}}) : helper)))
    + " class=\"blockViewProfile image_url\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":120,"column":89},"end":{"line":120,"column":95}}}) : helper)))
    + " for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":120,"column":101},"end":{"line":120,"column":107}}}) : helper)))
    + "\"></img>\n                        </div>\n                        <div class=\"anagram\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":122,"column":45},"end":{"line":122,"column":56}}}) : helper)))
    + "</div>\n                        <div class=\"nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":123,"column":46},"end":{"line":123,"column":58}}}) : helper)))
    + "</div>\n                        <div class=\"time\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":124,"column":42},"end":{"line":124,"column":50}}}) : helper)))
    + "</div>\n                    </div>\n                    <div class=\"output\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":126,"column":40},"end":{"line":126,"column":51}}}) : helper)))
    + "</div>\n                </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"user\">\n                    <div class=\"name\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":162,"column":37},"end":{"line":162,"column":50}}}) : helper)))
    + " class=\"blockViewProfile image_url\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"channelId") || (depth0 != null ? lookupProperty(depth0,"channelId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"channelId","hash":{},"data":data,"loc":{"start":{"line":162,"column":89},"end":{"line":162,"column":102}}}) : helper)))
    + " for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":162,"column":108},"end":{"line":162,"column":118}}}) : helper)))
    + "\"></img>\n                        </div>\n                        <div class=\"name anagram\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":164,"column":50},"end":{"line":164,"column":61}}}) : helper)))
    + "</div>\n                        <div class=\"name nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":165,"column":51},"end":{"line":165,"column":63}}}) : helper)))
    + "</div>\n                    </div>\n                    <div class=\"play-button-container\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":168,"column":60},"end":{"line":168,"column":70}}}) : helper)))
    + "\">\n                        <button class=\"play-button\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":169,"column":57},"end":{"line":169,"column":67}}}) : helper)))
    + "\">Play</button>         \n                    </div>\n                </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"user\">\n                    <div class=\"name\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":184,"column":37},"end":{"line":184,"column":50}}}) : helper)))
    + " class=\"blockViewProfile image_url\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"channelId") || (depth0 != null ? lookupProperty(depth0,"channelId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"channelId","hash":{},"data":data,"loc":{"start":{"line":184,"column":89},"end":{"line":184,"column":102}}}) : helper)))
    + " for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":184,"column":108},"end":{"line":184,"column":118}}}) : helper)))
    + "\"></img>\n                        </div>\n                        <div class=\"name anagram\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":186,"column":50},"end":{"line":186,"column":61}}}) : helper)))
    + "</div>\n                        <div class=\"name nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":187,"column":51},"end":{"line":187,"column":63}}}) : helper)))
    + "</div>\n                    </div>\n                    <div class=\"slide-show-container\">\n                        <img src=\"./icons/slideshow-ingame.svg\" class=\"slide-show-ingame\"></img>\n                    </div>\n                </div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"user\">\n                    <div class=\"name\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":204,"column":37},"end":{"line":204,"column":50}}}) : helper)))
    + " class=\"blockViewProfile image_url\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"channelId") || (depth0 != null ? lookupProperty(depth0,"channelId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"channelId","hash":{},"data":data,"loc":{"start":{"line":204,"column":89},"end":{"line":204,"column":102}}}) : helper)))
    + " for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"userId") || (depth0 != null ? lookupProperty(depth0,"userId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data,"loc":{"start":{"line":204,"column":108},"end":{"line":204,"column":118}}}) : helper)))
    + "\"></img>\n                        </div>\n                        <div class=\"name anagram\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":206,"column":50},"end":{"line":206,"column":61}}}) : helper)))
    + "</div>\n                        <div class=\"name nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":207,"column":51},"end":{"line":207,"column":63}}}) : helper)))
    + "</div>\n                    </div>\n                </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"eachFriend eachFriendModalCreateChannel\" for=\"friend"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":230,"column":80},"end":{"line":230,"column":86}}}) : helper)))
    + "\">\n                    <div class=\"left\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":233,"column":37},"end":{"line":233,"column":50}}}) : helper)))
    + " id=\"blockViewProfile image_url\" class=\"image_url\"></img>\n                        </div>\n                        <p class=\"anagram_nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":235,"column":52},"end":{"line":235,"column":63}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":235,"column":64},"end":{"line":235,"column":76}}}) : helper)))
    + "</p>\n                    </div>\n                    <div class=\"right\">\n                        <label class=\"checkboxlabel\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"checkboxId") || (depth0 != null ? lookupProperty(depth0,"checkboxId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"checkboxId","hash":{},"data":data,"loc":{"start":{"line":238,"column":58},"end":{"line":238,"column":72}}}) : helper)))
    + "\"></label>\n                        <input type=\"checkbox\" class=\"checkbox\" id=\"friend"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":239,"column":74},"end":{"line":239,"column":80}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":239,"column":89},"end":{"line":239,"column":95}}}) : helper)))
    + "\"></input>\n                    </div>\n                </div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"eachFriend eachFriendModalCreateDirectMessages\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":259,"column":81},"end":{"line":259,"column":87}}}) : helper)))
    + "\">\n                    <div class=\"left\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":262,"column":37},"end":{"line":262,"column":50}}}) : helper)))
    + " id=\"image_url\" class=\"image_url\"></img>\n                        </div>\n                        <p class=\"anagram_nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":264,"column":52},"end":{"line":264,"column":63}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":264,"column":64},"end":{"line":264,"column":76}}}) : helper)))
    + "</p>\n                    </div>\n                </div>\n";
},"33":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"eachFriend eachChannel\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":281,"column":57},"end":{"line":281,"column":63}}}) : helper)))
    + "\">\n                        <p class=\"channel anagram_nickname\">#"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":286,"column":61},"end":{"line":286,"column":69}}}) : helper)))
    + "</p>\n                </div>\n                <div class=\"modal validationModal modalPassword\" id=\"modalPassword"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":293,"column":82},"end":{"line":293,"column":88}}}) : helper)))
    + "\" style=\"display: none;\">\n                    <div class=\"background\"></div>\n                    <div class=\"modalOpen\">\n                        <div class=\"close closeModal\">\n                            <img src=\"./icons/close.svg\" id=\"close\"></img>\n                        </div>\n                        <label class=\"label labelModalPassword\" for=\"labelModalPassword\">Password</label>\n                        <input class=\"inputModalPassword\" type=\"password\" id=\"inputModalPassword"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":300,"column":96},"end":{"line":300,"column":102}}}) : helper)))
    + "\" placeholder=\"Password\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":300,"column":131},"end":{"line":300,"column":137}}}) : helper)))
    + "></input>\n                        <div class=\"button-container buttons\">\n                            <button class=\"validation-buttons button validate-password\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":302,"column":93},"end":{"line":302,"column":99}}}) : helper)))
    + "\">Validate</button>\n                        </div>\n                    </div>\n                </div>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"eachFriend eachFriendModalCreateChannel\" for=\"addfriends"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":335,"column":84},"end":{"line":335,"column":90}}}) : helper)))
    + "\">\n                    <div class=\"left\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":338,"column":37},"end":{"line":338,"column":50}}}) : helper)))
    + " id=\"image_url\" class=\"image_url\"></img>\n                        </div>\n                        <p class=\"anagram_nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":340,"column":52},"end":{"line":340,"column":63}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":340,"column":64},"end":{"line":340,"column":76}}}) : helper)))
    + "</p>\n                    </div>\n                    <div class=\"right\">\n                        <label class=\"checkboxlabel\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"checkboxId") || (depth0 != null ? lookupProperty(depth0,"checkboxId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"checkboxId","hash":{},"data":data,"loc":{"start":{"line":343,"column":58},"end":{"line":343,"column":72}}}) : helper)))
    + "\"></label>\n                        <input type=\"checkbox\" class=\"checkbox\" id=\"addfriends"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":344,"column":78},"end":{"line":344,"column":84}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":344,"column":93},"end":{"line":344,"column":99}}}) : helper)))
    + "\"></input>\n                    </div>\n                </div>\n";
},"37":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"sub-menu permissions-menu\"  id=\"permissions-menu\"><p class=\"p\">Permissions</p></div>\n";
},"39":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"deleteChannel\" >Delete channel</div>\n";
},"41":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"self owner\">\n                        <div class=\"image-container\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":423,"column":37},"end":{"line":423,"column":50}}}) : helper)))
    + " class=\"image_url\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"channelId") || (depth0 != null ? lookupProperty(depth0,"channelId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"channelId","hash":{},"data":data,"loc":{"start":{"line":423,"column":72},"end":{"line":423,"column":85}}}) : helper)))
    + " for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":423,"column":91},"end":{"line":423,"column":97}}}) : helper)))
    + "\"></img>\n                        </div>\n                        <div class=\"anagram\">\n                            <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":426,"column":44},"end":{"line":426,"column":55}}}) : helper)))
    + "</p>\n                        </div>\n                        <div class=\"nickname\">\n                            <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":429,"column":44},"end":{"line":429,"column":56}}}) : helper)))
    + "</p>\n                        </div>\n                    </div>\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"self admin\">\n                            <div class=\"image-container\">\n                                <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":439,"column":41},"end":{"line":439,"column":54}}}) : helper)))
    + " class=\"image_url\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"channelId") || (depth0 != null ? lookupProperty(depth0,"channelId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"channelId","hash":{},"data":data,"loc":{"start":{"line":439,"column":76},"end":{"line":439,"column":89}}}) : helper)))
    + " for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":439,"column":95},"end":{"line":439,"column":101}}}) : helper)))
    + "\"></img>\n                            </div>\n                            <div class=\"anagram\">\n                                <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":442,"column":48},"end":{"line":442,"column":59}}}) : helper)))
    + "</p>\n                            </div>\n                            <div class=\"nickname\">\n                                <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":445,"column":48},"end":{"line":445,"column":60}}}) : helper)))
    + "</p>\n                            </div>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"owner") : depth0),"||",(depth0 != null ? lookupProperty(depth0,"superAdmin") : depth0),{"name":"ifCond","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":447,"column":28},"end":{"line":457,"column":39}}})) != null ? stack1 : "")
    + "                        </div>\n                        <div class=\"modal validationModal modalValidationKick\" id=\"modalValidationKick"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":459,"column":102},"end":{"line":459,"column":108}}}) : helper)))
    + "\" style=\"display: none;\">\n                            <div class=\"background\"></div>\n                            <div class=\"modalOpen\">\n                                <p class=\"sure\">Kick this member</p>\n                                <p class=\"adminRights\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":463,"column":55},"end":{"line":463,"column":67}}}) : helper)))
    + " won't access this channel anymore.</p>\n                                <div class=\"buttons\">\n                                    <div class=\"validation-buttons button-container-yes\">\n                                        <button class=\"button yes yesKick\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":466,"column":80},"end":{"line":466,"column":86}}}) : helper)))
    + "\">Yes</button>\n                                    </div>\n                                    <div class=\"validation-buttons button-container-no\">\n                                        <button class=\"button no\">No</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"modal validationModal modalValidationBan\" id=\"modalValidationBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":474,"column":100},"end":{"line":474,"column":106}}}) : helper)))
    + "\" style=\"display: none;\">\n                            <div class=\"background\"></div>\n                            <div class=\"modalOpen\">\n                                <p class=\"sure\">Ban this member</p>\n                                <p class=\"adminRights\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":478,"column":55},"end":{"line":478,"column":67}}}) : helper)))
    + " won't be able to find, see or join this channel.</p>\n                                <div class=\"radio-buttons\" >\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"1minBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":481,"column":87},"end":{"line":481,"column":93}}}) : helper)))
    + "\" value=\"60\" checked>\n                                        <label for=\"1minBan\">1 minute</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"10minBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":485,"column":88},"end":{"line":485,"column":94}}}) : helper)))
    + "\" value=\"600\">\n                                        <label for=\"10minBan\">10 minutes</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"12hBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":489,"column":86},"end":{"line":489,"column":92}}}) : helper)))
    + "\" value=\"43200\">\n                                        <label for=\"12hBan\">12 hours</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"24hBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":493,"column":86},"end":{"line":493,"column":92}}}) : helper)))
    + "\" value=\"86400\">\n                                        <label for=\"24hBan\">24 hours</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"7daysBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":497,"column":88},"end":{"line":497,"column":94}}}) : helper)))
    + "\" value=\"604800\">\n                                        <label for=\"7daysBan\">7 days</label> \n                                    </div>\n                                </div>\n                                <div class=\"buttons\">\n                                    <div class=\"validation-buttons button-container-yes\">\n                                        <button class=\"button yes yesBan\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":503,"column":79},"end":{"line":503,"column":85}}}) : helper)))
    + "\">Ban</button>\n                                    </div>\n                                    <div class=\"validation-buttons button-container-no\">\n                                        <button class=\"button no\">Cancel</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"modal validationModal modalValidationMute\" id=\"modalValidationMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":511,"column":102},"end":{"line":511,"column":108}}}) : helper)))
    + "\" style=\"display: none;\">\n                            <div class=\"background\"></div>\n                            <div class=\"modalOpen\">\n                                <p class=\"sure\">Mute this member</p>\n                                <p class=\"adminRights\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":515,"column":55},"end":{"line":515,"column":67}}}) : helper)))
    + " will have access to this channel, but couldn't send messages.</p>\n                                <div class=\"radio-buttons\" >\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"1minBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":518,"column":88},"end":{"line":518,"column":94}}}) : helper)))
    + "\" value=\"60\" checked>\n                                        <label for=\"1minMute\">1 minute</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"10minBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":522,"column":89},"end":{"line":522,"column":95}}}) : helper)))
    + "\" value=\"600\">\n                                        <label for=\"10minMute\">10 minutes</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"12hBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":526,"column":87},"end":{"line":526,"column":93}}}) : helper)))
    + "\" value=\"43200\">\n                                        <label for=\"12hMute\">12 hours</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"24hBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":530,"column":87},"end":{"line":530,"column":93}}}) : helper)))
    + "\" value=\"86400\">\n                                        <label for=\"24hMute\">24 hours</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"7daysBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":534,"column":89},"end":{"line":534,"column":95}}}) : helper)))
    + "\" value=\"604800\">\n                                        <label for=\"7daysMute\">7 days</label> \n                                    </div>\n                                </div>\n                                <div class=\"buttons\">\n                                    <div class=\"validation-buttons button-container-yes\">\n                                        <button class=\"button yes yesMute\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":540,"column":80},"end":{"line":540,"column":86}}}) : helper)))
    + "\">Mute</button>\n                                    </div>\n                                    <div class=\"validation-buttons button-container-no\">\n                                        <button class=\"button no\">Cancel</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n";
},"44":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"dots-container\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":448,"column":61},"end":{"line":448,"column":67}}}) : helper)))
    + "\">\n                                <img src='./icons/dots.svg' class=\"dots\"></img>\n                            </div>\n                            <div class=\"admin-rights\" id=\"admin-rights"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":451,"column":70},"end":{"line":451,"column":76}}}) : helper)))
    + "\" style=\"display: none;\">\n                                <div class=\"el remove-admin-rights\" id=\"removeAdminRights\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":452,"column":96},"end":{"line":452,"column":102}}}) : helper)))
    + "\">Remove administrator rights</div>\n                                <div class=\"el mute\" id=\"mute\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":453,"column":68},"end":{"line":453,"column":74}}}) : helper)))
    + "\">Mute</div>\n                                <div class=\"el ban\" id=\"ban\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":454,"column":66},"end":{"line":454,"column":72}}}) : helper)))
    + "\">Ban</div>\n                                <div class=\"el kick\" id=\"kick\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":455,"column":68},"end":{"line":455,"column":74}}}) : helper)))
    + "\">Kick</div>\n                            </div>\n";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"self member\">\n                            <div class=\"image-container\">\n                                <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":555,"column":41},"end":{"line":555,"column":54}}}) : helper)))
    + " class=\"image_url\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"channelId") || (depth0 != null ? lookupProperty(depth0,"channelId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"channelId","hash":{},"data":data,"loc":{"start":{"line":555,"column":76},"end":{"line":555,"column":89}}}) : helper)))
    + " for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":555,"column":95},"end":{"line":555,"column":101}}}) : helper)))
    + "\"></img>\n                            </div>\n                            <div class=\"anagram\">\n                                <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":558,"column":48},"end":{"line":558,"column":59}}}) : helper)))
    + "</p>\n                            </div>\n                            <div class=\"nickname\">\n                                <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":561,"column":48},"end":{"line":561,"column":60}}}) : helper)))
    + "</p>\n                            </div>\n                            <div class=\"dots-container\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":563,"column":61},"end":{"line":563,"column":67}}}) : helper)))
    + "\">\n                                <img src='./icons/dots.svg' class=\"dots\"></img>\n                            </div>\n                            <div class=\"admin-rights\" id=\"admin-rights"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":566,"column":70},"end":{"line":566,"column":76}}}) : helper)))
    + "\" style=\"display: none;\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"owner") : depth0),"||",(depth0 != null ? lookupProperty(depth0,"superAdmin") : depth0),{"name":"ifCond","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":567,"column":32},"end":{"line":569,"column":43}}})) != null ? stack1 : "")
    + "                                <div class=\"el mute\" id=\"mute\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":570,"column":68},"end":{"line":570,"column":74}}}) : helper)))
    + "\">Mute</div>\n                                <div class=\"el ban\" id=\"ban\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":571,"column":66},"end":{"line":571,"column":72}}}) : helper)))
    + "\">Ban</div>\n                                <div class=\"el kick\" id=\"kick\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":572,"column":68},"end":{"line":572,"column":74}}}) : helper)))
    + "\">Kick</div>\n                            </div>\n                        </div>\n                        <div class=\"modal validationModal modalValidationAppointAsAdmin\" id=\"modalValidationAppointAsAdmin"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":575,"column":122},"end":{"line":575,"column":128}}}) : helper)))
    + "\" style=\"display: none;\">\n                            <div class=\"background\"></div>\n                            <div class=\"modalOpen\">\n                                <p class=\"sure\">Appoint this member as administrator</p>\n                                <p class=\"adminRights\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":579,"column":55},"end":{"line":579,"column":67}}}) : helper)))
    + " will be able to mute and ban other members.</p>\n                                <div class=\"buttons\">\n                                    <div class=\"validation-buttons button-container-yes\">\n                                        <button class=\"button yes yesAsAdmin\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":582,"column":83},"end":{"line":582,"column":89}}}) : helper)))
    + "\">Yes</button>\n                                    </div>\n                                    <div class=\"validation-buttons button-container-no\">\n                                        <button class=\"button no\">No</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"modal validationModal modalValidationKick\" id=\"modalValidationKick"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":590,"column":102},"end":{"line":590,"column":108}}}) : helper)))
    + "\" style=\"display: none;\">\n                            <div class=\"background\"></div>\n                            <div class=\"modalOpen\">\n                                <p class=\"sure\">Kick this member</p>\n                                <p class=\"adminRights\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":594,"column":55},"end":{"line":594,"column":67}}}) : helper)))
    + " won't access this channel anymore.</p>\n                                <div class=\"buttons\">\n                                    <div class=\"validation-buttons button-container-yes\">\n                                        <button class=\"button yes yesKick\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":597,"column":80},"end":{"line":597,"column":86}}}) : helper)))
    + "\">Yes</button>\n                                    </div>\n                                    <div class=\"validation-buttons button-container-no\">\n                                        <button class=\"button no\">No</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"modal validationModal modalValidationBan\" id=\"modalValidationBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":605,"column":100},"end":{"line":605,"column":106}}}) : helper)))
    + "\" style=\"display: none;\">\n                            <div class=\"background\"></div>\n                            <div class=\"modalOpen\">\n                                <p class=\"sure\">Ban this member</p>\n                                <p class=\"adminRights\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":609,"column":55},"end":{"line":609,"column":67}}}) : helper)))
    + " won't be able to find, see or join this channel.</p>\n                                <div class=\"radio-buttons\" >\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"1minBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":612,"column":87},"end":{"line":612,"column":93}}}) : helper)))
    + "\" value=\"60\" checked>\n                                        <label for=\"1minBan\">1 minute</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"10minBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":616,"column":88},"end":{"line":616,"column":94}}}) : helper)))
    + "\" value=\"600\">\n                                        <label for=\"10minBan\">10 minutes</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"12hBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":620,"column":86},"end":{"line":620,"column":92}}}) : helper)))
    + "\" value=\"43200\">\n                                        <label for=\"12hBan\">12 hours</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"24hBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":624,"column":86},"end":{"line":624,"column":92}}}) : helper)))
    + "\" value=\"86400\">\n                                        <label for=\"24hBan\">24 hours</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"7daysBan\" name=\"radioBan"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":628,"column":88},"end":{"line":628,"column":94}}}) : helper)))
    + "\" value=\"604800\">\n                                        <label for=\"7daysBan\">7 days</label> \n                                    </div>\n                                </div>\n                                <div class=\"buttons\">\n                                    <div class=\"validation-buttons button-container-yes\">\n                                        <button class=\"button yes yesBan\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":634,"column":79},"end":{"line":634,"column":85}}}) : helper)))
    + "\">Ban</button>\n                                    </div>\n                                    <div class=\"validation-buttons button-container-no\">\n                                        <button class=\"button no\">Cancel</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"modal validationModal modalValidationMute\" id=\"modalValidationMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":642,"column":102},"end":{"line":642,"column":108}}}) : helper)))
    + "\" style=\"display: none;\">\n                            <div class=\"background\"></div>\n                            <div class=\"modalOpen\">\n                                <p class=\"sure\">Mute this member</p>\n                                <p class=\"adminRights\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":646,"column":55},"end":{"line":646,"column":67}}}) : helper)))
    + " will have access to this channel, but couldn't send messages.</p>\n                                <div class=\"radio-buttons\" >\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"1minBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":649,"column":88},"end":{"line":649,"column":94}}}) : helper)))
    + "\" value=\"60\" checked>\n                                        <label for=\"1minMute\">1 minute</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"10minBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":653,"column":89},"end":{"line":653,"column":95}}}) : helper)))
    + "\" value=\"600\">\n                                        <label for=\"10minMute\">10 minutes</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"12hBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":657,"column":87},"end":{"line":657,"column":93}}}) : helper)))
    + "\" value=\"43200\">\n                                        <label for=\"12hMute\">12 hours</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"24hBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":661,"column":87},"end":{"line":661,"column":93}}}) : helper)))
    + "\" value=\"86400\">\n                                        <label for=\"24hMute\">24 hours</label> \n                                    </div>\n                                    <div class=\"radio-button\">\n                                        <input type=\"radio\" id=\"7daysBan\" name=\"radioMute"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":665,"column":89},"end":{"line":665,"column":95}}}) : helper)))
    + "\" value=\"604800\">\n                                        <label for=\"7daysMute\">7 days</label> \n                                    </div>\n                                </div>\n                                <div class=\"buttons\">\n                                    <div class=\"validation-buttons button-container-yes\">\n                                        <button class=\"button yes yesMute\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":671,"column":80},"end":{"line":671,"column":86}}}) : helper)))
    + "\">Mute</button>\n                                    </div>\n                                    <div class=\"validation-buttons button-container-no\">\n                                        <button class=\"button no\">Cancel</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n";
},"47":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"el appoint-as-admin\" id=\"appointAsAdministrator\" for=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":568,"column":98},"end":{"line":568,"column":104}}}) : helper)))
    + "\">Appoint as administrator</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"chat\" id=\"chat\">\n    <div class=\"discussions\" id=\"discussions\">\n        <div class=\"title\">\n            <h2 class=\"h2-discussions\">Discussions</h2>\n        </div>\n        <div class=\"discussions-container\">\n            <div class=\"channels\">\n                <div class=\"first-line\">\n                    <div class=\"sub-title\">CHANNELS</div>\n                    <div class=\"icons\">\n                        <img src=\"./icons/search-chat.svg\" class=\"search_channel\"></img>\n                        <img src=\"./icons/add_box.svg\" class=\"add_box add_channel\"></img>\n                    </div>\n                </div>\n                <div class=\"myChannels\" id=\"myChannels\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"myChannels") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":31,"column":25}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n            <div class=\"direct-messages\">\n                <div class=\"first-line\">\n                    <div class=\"sub-title\">DIRECT MESSAGES</div>\n                    <img src=\"./icons/add_box.svg\" class=\"add_box add_direct_messages\"></img>\n                </div>\n                <div class=\"DM\" id=\"DM\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"DM") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":16},"end":{"line":50,"column":25}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"superAdmin") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":12},"end":{"line":72,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"center\" id=\"center\"  style=\"display: none;\">\n        <div class=\"header\">\n            <div class=\"left-header\" id=\"left-header\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"channel") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":16},"end":{"line":82,"column":27}}})) != null ? stack1 : "")
    + "                <div class=\"info\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"channel") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":20},"end":{"line":92,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"channel") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":20},"end":{"line":95,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n            <div class=\"right-header\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"channel") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":16},"end":{"line":105,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"channel") : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":106,"column":16},"end":{"line":110,"column":27}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"messages\" id=\"messages"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":113,"column":42},"end":{"line":113,"column":48}}}) : helper)))
    + "\">\n            <div class=\"scrollable\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"messages") : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":16},"end":{"line":144,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        <div class=\"input-container\">\n            <input class=\"textInput input\" type=\"text\"  id=\"textInput\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":147,"column":75},"end":{"line":147,"column":81}}}) : helper)))
    + "></input>\n        </div>\n        </div>\n    </div>\n    <div class=\"right-side\" id=\"right-side\" style=\"display: none;\">\n        <div class=\"privacy\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"privacy") || (depth0 != null ? lookupProperty(depth0,"privacy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"privacy","hash":{},"data":data,"loc":{"start":{"line":152,"column":29},"end":{"line":152,"column":40}}}) : helper)))
    + " channel</div>\n        <div class=\"title online\">\n            <div class=\"pastille\"></div>\n            <div class=\"status ONLINE\">ONLINE-"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbOnline") || (depth0 != null ? lookupProperty(depth0,"nbOnline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbOnline","hash":{},"data":data,"loc":{"start":{"line":155,"column":46},"end":{"line":155,"column":58}}}) : helper)))
    + "</div>\n        </div>\n        <div class=\"users usersOnline\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"usersOnline") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":158,"column":12},"end":{"line":173,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"title inGame\">\n            <div class=\"pastille\"></div>\n            <div class=\"status IN_GAME\">IN GAME-"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbInGame") || (depth0 != null ? lookupProperty(depth0,"nbInGame") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbInGame","hash":{},"data":data,"loc":{"start":{"line":177,"column":48},"end":{"line":177,"column":60}}}) : helper)))
    + "</div>\n        </div>\n        <div class=\"users usersInGame\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"usersInGame") : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":180,"column":12},"end":{"line":193,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"title offline\">\n            <div class=\"pastille\"></div>\n            <div class=\"status OFFLINE\">OFFLINE-"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbOffline") || (depth0 != null ? lookupProperty(depth0,"nbOffline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbOffline","hash":{},"data":data,"loc":{"start":{"line":197,"column":48},"end":{"line":197,"column":61}}}) : helper)))
    + "</div>\n        </div>\n        <div class=\"users usersOffline\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"usersOffline") : depth0),{"name":"each","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":200,"column":12},"end":{"line":210,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"droplistBlockViewProfile\" id=\"droplistBlockViewProfile\" style=\"display: none;\">\n        <a class=\"el view-profile\" id=\"view-profile\">View profile</a>\n        <div class=\"el block\" id=\"block\"></div>\n    </div>\n    <div class=\"modal modalCreateChannel\" id=\"modalCreateChannel\" >\n        <div class=\"background\"></div>\n        <div class=\"modalOpen\">\n            <div class=\"close closeModal\">\n                <img src=\"./icons/close.svg\" id=\"close\"></img>\n            </div>\n            <label class=\"label labelChannelName\" for=\"channelName\">Channel name</label>\n            <input class=\"textInput channelName\" type=\"text\" id=\"channelName\" placeholder=\"New channel\"></input>\n            <p class=\"error-message\" id=\"error-message\"></p>\n            <label class=\"label labelSelectFriends\" for=\"search\">Select friends</label>\n            <input class=\"textInput search modalSearchChannels\" type=\"text\" id=\"modalSearchChannels\" placeholder=\"Research\"></input>\n            <div class=\"friends modalSearchChannels\" id=\"friendsmodalSearchChannels\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"friends") : depth0),{"name":"each","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":229,"column":16},"end":{"line":242,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"button-container\">\n                <button class=\"createChannel\">Create channel</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal modalCreateDirectMessages\" id=\"modalCreateDirectMessages\">\n        <div class=\"background\"></div>\n        <div class=\"modalOpen\">\n            <div class=\"close closeModal\">\n                <img src=\"./icons/close.svg\" id=\"close\"></img>\n            </div>\n            <label class=\"label labelSelectFriends\" for=\"search\">Select friends</label>\n            <input class=\"textInput search modalSearchDirectMessages\" type=\"text\" id=\"modalSearchDirectMessages\" placeholder=\"Research\"></input>\n            <div class=\"friends friendsmodalSearchDirectMessages\" id=\"friendsmodalSearchDirectMessages\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"friends") : depth0),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":258,"column":16},"end":{"line":267,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n    <div class=\"modal modalSearchChannel\" id=\"modalSearchAllChannels\">\n        <div class=\"background\"></div>\n        <div class=\"modalOpen\">\n            <div class=\"close closeModal\">\n                <img src=\"./icons/close.svg\" id=\"close\"></img>\n            </div>\n            <label class=\"label labelSelectChannel\" for=\"search\">Channels</label>\n            <input class=\"textInput inputModalSearchAllChannels\" type=\"text\" id=\"inputModalSearchAllChannels\" placeholder=\"Research\"></input>\n            <div class=\"friends searchAllChannel\" id=\"searchAllChannel\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"channels") : depth0),{"name":"each","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":280,"column":16},"end":{"line":306,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n    <div class=\"modal validationModal\" id=\"modalValidationDeleteChannel\">\n        <div class=\"background\"></div>\n        <div class=\"modalOpen\">\n            <p class=\"sure\">Are you sure to want to leave this channel?</p>\n            <p class=\"adminRights\">You will lose your administrator rights</p>\n            <div class=\"buttons\">\n                <div class=\"validation-buttons button-container-yes\">\n                    <button class=\"button yes yesDeleteChannel\">Yes</button>\n                </div>\n                <div class=\"validation-buttons button-container-no\">\n                    <button class=\"button no\">No</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal modalAddFriendsToChannel\" id=\"modalAddFriendsToChannel\" >\n        <div class=\"background\"></div>\n        <div class=\"modalOpen\">\n            <div class=\"close closeModal\">\n                <img src=\"./icons/close.svg\" id=\"close\"></img>\n            </div>\n            <label class=\"label labelSelectFriends\" for=\"search\">Select friends</label>\n            <input class=\"textInput  modalSearchChannels modalSearchAddFriendsToChannel\" type=\"text\" id=\"modalSearchAddFriendsToChannel\" placeholder=\"Research\" for="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":332,"column":164},"end":{"line":332,"column":170}}}) : helper)))
    + "></input>\n            <div class=\"friends modalSearchAddFriendsToChannel\" id=\"friendsmodalSearchAddFriendsToChannel\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"friends") : depth0),{"name":"each","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":334,"column":16},"end":{"line":347,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"button-container buttons\">\n                <button class=\"validation-buttons button validate-add-friends\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"chatId") || (depth0 != null ? lookupProperty(depth0,"chatId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatId","hash":{},"data":data,"loc":{"start":{"line":350,"column":84},"end":{"line":350,"column":94}}}) : helper)))
    + "\">Validate</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"parameters\" id=\"params\">\n        <div class=\"left-menu\">\n            <div class=\"menu\">\n                <div class=\"sub-menu overview-menu\" id=\"overview-menu\"><p class=\"p\">Overview</p></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"owner") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":358,"column":16},"end":{"line":360,"column":23}}})) != null ? stack1 : "")
    + "                <div class=\"sub-menu members-menu\" id=\"members-menu\"><p class=\"p\">Members</p></div>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"owner") : depth0),"||",(depth0 != null ? lookupProperty(depth0,"superAdmin") : depth0),{"name":"ifCond","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":362,"column":16},"end":{"line":364,"column":27}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"modal validationModal modalValidationDeleteDefinitivelyChannel\" id=\"modalValidationDeleteDefinitivelyChannel\" style=\"display: none;\">\n            <div class=\"background\"></div>\n            <div class=\"modalOpen\">\n                <p class=\"sure\">Are you sure to want to delete this channel?</p>\n                <p class=\"adminRights\">Any members won't have acces to this channel anymore</p>\n                <div class=\"buttons\">\n                    <div class=\"validation-buttons button-container-yes\">\n                        <button class=\"button yes yesDeleteDefinitivelyChannel\">Yes</button>\n                    </div>\n                    <div class=\"validation-buttons button-container-no\">\n                        <button class=\"button no\">No</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"right-menu\">\n            <div class=\"close closeParams\">\n                <img src=\"./icons/esc.svg\" class=\"\">\n            </div>\n            <div class=\"page overview\" id=\"params-overview\">\n                <div class=\"title\">OVERVIEW</div>\n                <div class=\"sub-title\">CHANNEL NAME</div>\n                <input type=\"text\" class=\"name\" id=\"inputName\" disabled value="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":389,"column":78},"end":{"line":389,"column":86}}}) : helper)))
    + "></input>\n            </div>\n            <div class=\"page permissions\" id=\"params-permissions\">\n                <div class=\"title\">PERMISSIONS</div>\n                <div class=\"sub-title\">CONFIDENTIALITY</div>\n                <div class=\"radio-button\">\n                    <input type=\"radio\" class=\"private\" id=\"private\" name=\"privacy\" value=\"private\" checked>\n                    <label for=\"private\">Private</label> \n                </div>\n                <div class=\"radio-button\">\n                    <input type=\"radio\" class=\"public\" id=\"public\" name=\"privacy\" value=\"public\">\n                    <label for=\"public\">Public</label> \n                </div>\n                <div class=\"radio-button\">\n                    <input type=\"radio\" class=\"protected\"  id=\"protected\" name=\"privacy\" value=\"protected\"></input>\n                    <label for=\"protected\">Protected</label> \n                </div>\n                <div class=\"password\" id=\"passwordDiv\" style=\"display: none;\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" name=\"password\"></input>\n                    <div class=\"passwordVisibility\" id=\"visibility\">\n                        <img src='./icons/visibility_off.svg' class=\"icon-visibility \" id=\"eyeVisibility\"></img>\n                    </div>\n                </div>\n                <p class=\"error-message error-password\" id=\"error-password\" style=\"display: none;\"></p>\n                <button class=\"save\">Save</button>\n            </div>\n            <div class=\"page members\" id=\"params-members\">\n                <div class=\"title\">MEMBERS</div>\n                <div class=\"sub-title\">OWNER</div>\n                <div class=\"list owner\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"owners") : depth0),{"name":"each","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":420,"column":20},"end":{"line":432,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"sub-title\">ADMINISTRATORS</div>\n                <div class=\"list admins\" id=\"admins\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"admins") : depth0),{"name":"each","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":436,"column":20},"end":{"line":548,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"sub-title\">OTHER MEMBERS</div>\n                <div class=\"list participants\" id=\"participants\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":552,"column":20},"end":{"line":679,"column":29}}})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();