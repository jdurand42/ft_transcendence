(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['adminPannel'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"eachFriend eachFriendModalCreateChannel\" for=\"addfriends"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":43,"column":72},"end":{"line":43,"column":78}}}) : helper)))
    + "\">\n					<div class=\"left\">\n						<div class=\"image-container\">\n							<img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":46,"column":16},"end":{"line":46,"column":29}}}) : helper)))
    + " id=\"image_url\" class=\"image_url\"></img>\n						</div>\n						<p class=\"anagram_nickname\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":48,"column":34},"end":{"line":48,"column":45}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":48,"column":46},"end":{"line":48,"column":58}}}) : helper)))
    + "</p>\n					</div>\n					<div class=\"right\">\n						<label class=\"checkboxlabel\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"checkboxId") || (depth0 != null ? lookupProperty(depth0,"checkboxId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"checkboxId","hash":{},"data":data,"loc":{"start":{"line":51,"column":40},"end":{"line":51,"column":54}}}) : helper)))
    + "\"></label>\n						<input type=\"checkbox\" class=\"checkbox\" id=\"addfriends"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":52,"column":60},"end":{"line":52,"column":66}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":52,"column":75},"end":{"line":52,"column":81}}}) : helper)))
    + "\"></input>\n					</div>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
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
},"5":function(container,depth0,helpers,partials,data) {
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
},"7":function(container,depth0,helpers,partials,data) {
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
    + " (Owner)</span><button class=\"button\" id=\"kickMember\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">Kick</button>\n	</li>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":1},"end":{"line":106,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n";
},"8":function(container,depth0,helpers,partials,data) {
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
    + " </span><button class=\"button\" id=\"kickMember\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Kick</button>\n	</li>\n";
},"10":function(container,depth0,helpers,partials,data) {
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
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"closeParams exitButton\" id=\"ManageGuildExitButton\" onclick=\"window.location='#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "';\">\n	<img src=\"./icons/esc.svg\" class=\"\">\n</div>\n<div class=\"manageGuildTitle\">\n	<div class=\"title\">\n	<span id=\"guildNameIntro\"> ADMIN MODE:\n		<a href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\n	</span> <span id=\"guildAnagram\">["
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"anagram") : stack1), depth0))
    + "]</span>\n	<div id='manageGuildErrorDiv'></div>\n	</div>\n\n	<div class=\"manageGuildForm\">\n	<div class=\"subtitle\">GUILD NAME</div>\n	<label for=\"guildName\">\n	<div>	<input id=\"guildName\" class=\"manageGuildTextInput\" type=\"text\"></input> </div>\n	</label>\n	<div id=\"nameError\" class=\"errorMessage\"></div>\n	<div><button class=\"updateGuildName save\">Save</button></div>\n	<div></div>\n	<div class=\"subtitle\">ANAGRAM</div>\n	<label for=\"guildAnagram\">\n		<div><input id=\"guildAnagram\" class=\"manageGuildTextInput\" type=\"text\"></input></div>\n	</label>\n	<div id=\"anagramError\" class=\"errorMessage\"></div>\n	<div><button class=\"updateGuildAnagram save\">Save</button></div>\n	<div></div>\n	</div>\n\n\n	<button class=\"button\" id=\"inviteMemberModalButton\">Invite someone</button>\n\n\n	<div class=\"modal modalAddFriendsToGuild\" id=\"inviteMemberModal\" style=\"display: none;\">\n		<div class=\"background\"></div>\n		<div class=\"modalOpen\">\n			<div class=\"close closeModal\">\n				<img src=\"./icons/close.svg\" id=\"close\"></img>\n			</div>\n			<label class=\"label labelSelectFriends\" for=\"search\">Select friends</label>\n			<input class=\"textInput modalSearchChannels modalSearchAddFriendsToChannel\" type=\"text\" id=\"nonMemberToInvite\" placeholder=\"Research\" for="
    + alias2(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":40,"column":141},"end":{"line":40,"column":147}}}) : helper)))
    + "></input>\n			<div class=\"friends modalSearchAddFriendsToChannel\" id=\"inviteMemberResult\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"member") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":4},"end":{"line":55,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n			<div class=\"button-container buttons\">\n				<button class=\"validation-buttons button validate-add-friends inviteMember\" for=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"guildId") || (depth0 != null ? lookupProperty(depth0,"guildId") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"guildId","hash":{},"data":data,"loc":{"start":{"line":58,"column":85},"end":{"line":58,"column":96}}}) : helper)))
    + "\">Invite</button>\n			</div>\n		</div>\n	</div>\n\n	<div class=\"manageGuildForm\">\n\n		<div>OFFICERS</div>\n		<ul class=\"manageGuildMembersList\" id=\"officersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":3},"end":{"line":74,"column":12}}})) != null ? stack1 : "")
    + "		</ul>\n\n		<div>MEMBERS</div>\n		<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":3},"end":{"line":87,"column":12}}})) != null ? stack1 : "")
    + "		</ul>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"ownerBool") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":0},"end":{"line":108,"column":7}}})) != null ? stack1 : "")
    + "\n<div>MEMBERS</div>\n<ul class=\"manageGuildMembersList\" id=\"membersList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":112,"column":1},"end":{"line":119,"column":10}}})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
})();