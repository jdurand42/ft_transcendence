(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['adminPannel'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<li>\n				<div class=\"image-container\">\n					<img class=\"memberProfilePicture\" src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "></img>\n				</div>\n				<span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</span><button class=\"button\" id=\"relegateMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Relegate</button>\n			</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<li>\n				<div class=\"image-container\">\n					<img class=\"memberProfilePicture\" src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "></img>\n				</div>\n\n				<span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</span><button class=\"button\" id=\"promoteMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Promote</button>\n			</li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>OWNER AND OFFICERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n	<li>\n		<div class=\"image-container\">\n			<img class=\"memberProfilePicture\" src="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"image_url") : stack1), depth0))
    + "></img>\n		</div>\n		<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"nickname") : stack1), depth0))
    + "</span><button class=\"button\" id=\"kickMember\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">Kick</button>\n	</li>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":1},"end":{"line":54,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<li>\n		<div class=\"image-container\">\n			<img class=\"memberProfilePicture\" src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "></img>\n		</div>\n		<span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</span><button class=\"button\" id=\"kickMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Kick</button>\n	</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"closeParams exitButton\" id=\"ManageGuildExitButton\" onclick=\"window.location='#guild';\">\n	<img src=\"./icons/esc.svg\" class=\"\">\n</div>\n<div class=\"manageGuildTitle\">\n	<div class=\"title\">\n	<span id=\"guildNameIntro\"> MANAGE\n		<a href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\n	</span> <span id=\"guildAnagram\">["
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"anagram") : stack1), depth0))
    + "]</span>\n	</div>\n\n	<div class=\"manageGuildForm\">\n\n		<div>OFFICERS</div>\n		<ul class=\"manageGuildMembersList\" id=\"officersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":22,"column":12}}})) != null ? stack1 : "")
    + "		</ul>\n\n		<div>MEMBERS</div>\n		<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":3},"end":{"line":35,"column":12}}})) != null ? stack1 : "")
    + "		</ul>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"ownerBool") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + "\n<div>MEMBERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":1},"end":{"line":67,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
})();