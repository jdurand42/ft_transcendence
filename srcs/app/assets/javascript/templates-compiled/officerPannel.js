(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['officerPannel'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>OFFICERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":1},"end":{"line":12,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
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
    + "</span><span><button id=\"kickMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Kick</button></span>\n	</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"manageGuildTitle\"><span> MANAGE <a href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>  |  "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"anagram") : stack1), depth0))
    + "</span>\n<span><a id=\"ManageGuildExitButton\" class=\"exitButton\" href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">ESC</a><span></div>\n	<div class=\"manageGuildForm\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"ownerBool") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + "\n<div>MEMBERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":1},"end":{"line":22,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n\n<button id=\"inviteMemberModalButton\">Invite Someone</button>\n<div id=\"inviteMemberModal\" class=\"manageGuildModal\">\n	<div id=\"inviteMemberModalContent\">\n	<span class=\"close\">&times;</span>\n	<label for=\"nonMemberToInvite\" class=\"labelGuildField\">\n		<input class=\"nicknameSearch\" type=\"text\" id=\"nonMemberToInvite\"></input>\n	</label>\n	<div class=\"nicknameSearchResult\" id=\"inviteMemberResult\"></div>\n	<button class=\"inviteMember\">Invite member</button>\n	</div>\n</div>\n\n<!--<label for=\"memberToInvite\" class=\"labelGuildField\">\n	<input class=\"nicknameSearch\" type=\"text\" id=\"nonMemberToInvite\"></input>\n</label>\n<button class=\"inviteMember\">Invite member</button>\n\n<div class=\"nicknameSearchResult\" id=\"inviteMemberResult\"></div>-->\n\n<!--<label for=\"nonMemberToInvite\" class=\"labelGuildField\">\n	<input class=\"nicknameSearch\" type=\"text\" id=\"nonMemberToSendInvitation\"></input>\n</label>\n<button class=\"sendInvitation\">Send invitation</button>-->\n<!--\n<div class=\"nicknameSearchResult\" id=\"sendInvitationResult\"></div>\n\n<label for=\"memberToKick\" class=\"labelGuildField\">\n	<input class=\"nicknameSearch\" type=\"text\" id=\"memberToKick\"></input>\n</label>\n<button class=\"kickMember\">Kick member</button>\n<div class=\"nicknameSearchResult\" id=\"kickMemberResult\"></div>\n-->\n";
},"useData":true});
})();