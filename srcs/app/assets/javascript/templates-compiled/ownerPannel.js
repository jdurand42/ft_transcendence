(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ownerPannel'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<li>\n		<img class=\"memberProfilePicture\" src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "></img><span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</span><button id=\"relegateMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Relegate</button>\n	</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<li>\n		<img class=\"memberProfilePicture\" src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "></img><span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</span><button id=\"promoteMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Promote</button>\n	</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"manageGuildTitle\"><span id=\"guildNameIntro\"> MANAGE <a href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a></span> <span id=\"guildAnagramIntro\">["
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"anagram") : stack1), depth0))
    + "]</span>\n<span><a id=\"ManageGuildExitButton\" class=\"exitButton\" href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">ESC</a><span></div>\n	<div class=\"manageGuildForm\">\n\n<div class=\"manageGuildForm\">\n<div>Guild name</div>\n<label for=\"guildName\">\n<div>	<input id=\"guildName\" class=\"manageGuildTextInput\" type=\"text\"></input> </div>\n</label>\n<div id=\"nameError\" class=\"errorMessage\"></div>\n<div><button class=\"updateGuildName\">Save</button></div>\n<div></div>\n<div>Anagram</div>\n<label for=\"guildAnagram\">\n	<div><input id=\"guildAnagram\" class=\"manageGuildTextInput\" type=\"text\"></input></div>\n</label>\n<div id=\"anagramError\" class=\"errorMessage\"></div>\n<div><button class=\"updateGuildAnagram\">Save</button></div>\n<div></div>\n</div>\n\n<div>OFFICERS</div>\n<ul class=\"manageGuildMembersList\" id=\"officersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":1},"end":{"line":29,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n\n<div>MEMBERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":1},"end":{"line":38,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n<!--\n<label for=\"memberToPromote\" class=\"labelGuildField\">\n	<input class=\"nicknameSearch\" type=\"text\" id=\"memberToPromote\"></input>\n</label>\n<button class=\"promoteMember\">Promote officer</button>\n<div class=\"nicknameSearchResult\" id=\"promoteMemberResult\"></div>\n\n<label for=\"memberToRelegate\" class=\"labelGuildField\">\n	<input class=\"nicknameSearch\" type=\"text\" id=\"memberToRelegate\"></input>\n</label>\n<button class=\"relegateMember\">Relegate to member</button>\n<div class=\"nicknameSearchResult\" id=\"relegateMemberResult\"></div>\n-->\n";
},"useData":true});
})();