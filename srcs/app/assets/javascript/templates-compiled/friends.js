(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['friends'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<tr class=\"usersListEl\">\n		<td>Gold</td>\n		<td>1</td>\n		<td>profilePic</td>\n		<td><a href=\"#profile/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":24},"end":{"line":23,"column":30}}}) : helper)))
    + "/\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":23,"column":33},"end":{"line":23,"column":45}}}) : helper)))
    + "</a></td>\n		<td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"guild_id") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":3},"end":{"line":27,"column":10}}})) != null ? stack1 : "")
    + "		<td>\n		<td>1</td>\n		<td>1000</td>\n		<td>42</td>\n		<td>1001</td>\n		<td>online</td>\n		<td><a href=\"#spectate/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":34,"column":25},"end":{"line":34,"column":31}}}) : helper)))
    + "\">spectate</a></td>\n		<td>follow</td>\n	</tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<a href=\"#/guild/"
    + alias1(((helper = (helper = lookupProperty(helpers,"guild_id") || (depth0 != null ? lookupProperty(depth0,"guild_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"guild_id","hash":{},"data":data,"loc":{"start":{"line":26,"column":21},"end":{"line":26,"column":33}}}) : helper)))
    + "/\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"guild") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"profileBlock\" id=\"friendsBlock\">\n	<table class=\"usersList\">\n	<tr id=\"profileList\" class=\"usersListIndex\">\n		<th>"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"friendsNumber") : depth0), depth0))
    + " friends</th>\n		<th></th>\n		<th></th>\n		<th>Pseudo</th>\n		<th>Guild</th>\n		<th>league Rank</th>\n		<th>General Rank</th>\n		<th>Victories</th>\n		<th>Total Games</th>\n		<th>Status</th>\n		<th></th>\n		<th></th>\n	</tr>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"friends") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":1},"end":{"line":37,"column":10}}})) != null ? stack1 : "")
    + "</table>\n</section>\n";
},"useData":true});
})();