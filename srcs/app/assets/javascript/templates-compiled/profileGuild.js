(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profileGuild'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<tr class=\"usersListEl\">\n			<td>Gold</td>\n			<td>1</td>\n			<td>profilePic</td>\n			<td><a href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":39,"column":25},"end":{"line":39,"column":31}}}) : helper)))
    + "/\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":39,"column":34},"end":{"line":39,"column":46}}}) : helper)))
    + "</a></td>\n			<td>2</td>\n			<td>3500</td>\n			<td>12</td>\n			<td>50</td>\n			<td>offline</td>\n			<td>Officer</td>\n	</tr>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<tr class=\"usersListEl\">\n			<td>Gold</td>\n			<td>1</td>\n			<td>profilePic</td>\n			<td><a href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":54,"column":25},"end":{"line":54,"column":31}}}) : helper)))
    + "/\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":54,"column":34},"end":{"line":54,"column":46}}}) : helper)))
    + "</a></td>\n			<td>2</td>\n			<td>4</td>\n			<td>1</td>\n			<td>2</td>\n			<td>offline</td>\n			<td>Member</td>\n	</tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"profileBlock\" id=\"profileGuildBlock\">\n<a id=\"guildName\" href=\"#guild/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\n<span id=\"manageGuildButton\"></span>\n<span id=\"leaveGuildButton\"></span>\n\n<section>\n<table class=\"usersList\">\n<tr class=\"usersListIndex\">\n	<th>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"membersNumber") : depth0), depth0))
    + " members</th>\n	<th></th>\n	<th></th>\n	<th>Pseudo</th>\n	<th>league Rank</th>\n	<th>General Rank</th>\n	<th>Victories</th>\n	<th>Total Games</th>\n	<th>Status</th>\n	<th>Status</th>\n</tr>\n\n<tr class=\"usersListEl\">\n	<td>Gold</td>\n	<td>1</td>\n	<td>profilePic</td>\n	<td><a href=\"#profile/"
    + alias2(((helper = (helper = lookupProperty(helpers,"owner_id") || (depth0 != null ? lookupProperty(depth0,"owner_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"owner_id","hash":{},"data":data,"loc":{"start":{"line":25,"column":23},"end":{"line":25,"column":35}}}) : helper)))
    + "/\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"owner") : depth0)) != null ? lookupProperty(stack1,"nickname") : stack1), depth0))
    + "</a></td>\n	<td>1</td>\n	<td>1000</td>\n	<td>42</td>\n	<td>1001</td>\n	<td>online</td>\n	<td>Owner</td>\n</tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":1},"end":{"line":47,"column":10}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":1},"end":{"line":62,"column":10}}})) != null ? stack1 : "")
    + "</table>\n</section>\n\n</section>>\n";
},"useData":true});
})();