(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['officerPannel'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div>OFFICERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":1},"end":{"line":24,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
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
},"4":function(container,depth0,helpers,partials,data) {
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
    + "</span><button class=\"button\" id=\"relegateMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Relegate</button>\n	</li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<li>\n		<div class=\"image-container\">\n			<img class=\"memberProfilePicture\" src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image_url") : depth0), depth0))
    + "></img>\n		</div>\n\n		<span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"nickname") : depth0), depth0))
    + "</span><button class=\"button\" id=\"promoteMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Promote</button>\n	</li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<div class=\"eachFriend eachFriendModalCreateChannel\" for=\"addfriends"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":96,"column":71},"end":{"line":96,"column":77}}}) : helper)))
    + "\">\n				<div class=\"left\">\n					<div class=\"image-container\">\n						<img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":99,"column":15},"end":{"line":99,"column":28}}}) : helper)))
    + " id=\"image_url\" class=\"image_url\"></img>\n					</div>\n					<p class=\"anagram_nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":101,"column":33},"end":{"line":101,"column":44}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":101,"column":45},"end":{"line":101,"column":57}}}) : helper)))
    + "</p>\n				</div>\n				<div class=\"right\">\n					<label class=\"checkboxlabel\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"checkboxId") || (depth0 != null ? lookupProperty(depth0,"checkboxId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"checkboxId","hash":{},"data":data,"loc":{"start":{"line":104,"column":39},"end":{"line":104,"column":53}}}) : helper)))
    + "\"></label>\n					<input type=\"checkbox\" class=\"checkbox\" id=\"addfriends"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":105,"column":59},"end":{"line":105,"column":65}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":105,"column":74},"end":{"line":105,"column":80}}}) : helper)))
    + "\"></input>\n				</div>\n			</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
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
    + "]</span>\n	<div id='manageGuildErrorDiv'></div>\n	</div>\n\n	<div class=\"manageGuildForm\">\n\n<!--"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"ownerBool") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":26,"column":7}}})) != null ? stack1 : "")
    + "-->\n<div> RELEGATE OFFICERS</div>\n<ul class=\"manageGuildMembersList\" id=\"officersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":1},"end":{"line":36,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n\n<div>PROMOTE MEMBERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":1},"end":{"line":49,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n\n<div>KICK MEMBERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":1},"end":{"line":61,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":1},"end":{"line":69,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n\n<button class=\"button\" id=\"inviteMemberModalButton\">Invite someone</button>\n\n\n<div class=\"modal modalAddFriendsToGuild\" id=\"inviteMemberModal\" style=\"display: none;\">\n	<div class=\"background\"></div>\n	<div class=\"modalOpen\">\n		<div class=\"close closeModal\">\n			<img src=\"./icons/close.svg\" id=\"close\"></img>\n		</div>\n		<label class=\"label labelSelectFriends\" for=\"search\">Select friends</label>\n		<input class=\"textInput modalSearchChannels modalSearchAddFriendsToChannel\" type=\"text\" id=\"nonMemberToInvite\" placeholder=\"Research\" for="
    + alias2(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":93,"column":140},"end":{"line":93,"column":146}}}) : helper)))
    + "></input>\n		<div class=\"friends modalSearchAddFriendsToChannel\" id=\"inviteMemberResult\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"member") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":3},"end":{"line":108,"column":12}}})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"button-container buttons\">\n			<button class=\"validation-buttons button validate-add-friends inviteMember\" for=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"guildId") || (depth0 != null ? lookupProperty(depth0,"guildId") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"guildId","hash":{},"data":data,"loc":{"start":{"line":111,"column":84},"end":{"line":111,"column":95}}}) : helper)))
    + "\">Invite</button>\n		</div>\n	</div>\n</div>\n\n<!--<label for=\"memberToInvite\" class=\"labelGuildField\">\n	<input class=\"nicknameSearch\" type=\"text\" id=\"nonMemberToInvite\"></input>\n</label>\n<button class=\"inviteMember\">Invite member</button>\n\n<div class=\"nicknameSearchResult\" id=\"inviteMemberResult\"></div>-->\n\n<!--<label for=\"nonMemberToInvite\" class=\"labelGuildField\">\n	<input class=\"nicknameSearch\" type=\"text\" id=\"nonMemberToSendInvitation\"></input>\n</label>\n<button class=\"sendInvitation\">Send invitation</button>-->\n<!--\n<div class=\"nicknameSearchResult\" id=\"sendInvitationResult\"></div>\n\n<label for=\"memberToKick\" class=\"labelGuildField\">\n	<input class=\"nicknameSearch\" type=\"text\" id=\"memberToKick\"></input>\n</label>\n<button class=\"kickMember\">Kick member</button>\n<div class=\"nicknameSearchResult\" id=\"kickMemberResult\"></div>\n-->\n";
},"useData":true});
})();