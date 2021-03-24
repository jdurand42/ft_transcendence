(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['guildsList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr class=\"tableBoard guildTable\" for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":47},"end":{"line":15,"column":53}}}) : helper)))
    + "\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":58},"end":{"line":15,"column":64}}}) : helper)))
    + " onclick=\"window.location='#guild/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":98},"end":{"line":15,"column":104}}}) : helper)))
    + "/';\">\n            <td class=\"first-th\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"rank") || (depth0 != null ? lookupProperty(depth0,"rank") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rank","hash":{},"data":data,"loc":{"start":{"line":16,"column":33},"end":{"line":16,"column":41}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":24}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"anagram") || (depth0 != null ? lookupProperty(depth0,"anagram") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"anagram","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":27}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"score") || (depth0 != null ? lookupProperty(depth0,"score") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":25}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"nbGamers") || (depth0 != null ? lookupProperty(depth0,"nbGamers") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nbGamers","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":28}}}) : helper)))
    + "</td>\n            <td id=\"warsWon"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":26,"column":27},"end":{"line":26,"column":33}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"warsWon") || (depth0 != null ? lookupProperty(depth0,"warsWon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"warsWon","hash":{},"data":data,"loc":{"start":{"line":26,"column":35},"end":{"line":26,"column":46}}}) : helper)))
    + "</td>\n            <td id=\"totalWars"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":27,"column":29},"end":{"line":27,"column":35}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalWars") || (depth0 != null ? lookupProperty(depth0,"totalWars") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalWars","hash":{},"data":data,"loc":{"start":{"line":27,"column":37},"end":{"line":27,"column":50}}}) : helper)))
    + "</td>\n        </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"listsBoard guildsList\" id=\"guildsList\">\n    <div class=\"nb-list nbGuilds\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"nbGuilds") || (depth0 != null ? lookupProperty(depth0,"nbGuilds") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"nbGuilds","hash":{},"data":data,"loc":{"start":{"line":2,"column":34},"end":{"line":2,"column":46}}}) : helper)))
    + " Guilds</div>\n    <table class=\"tablesBoard guildsTable\">\n        <tr>\n            <th class=\"first-th\"></th>\n            <th>Guild</th>\n            <th>Anagram</th>\n            <th>Score</th>\n            <th>Gamers</th>\n            <th>Wars won</th>\n            <th>Total wars</th>\n        </tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"guilds") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":29,"column":17}}})) != null ? stack1 : "")
    + "    </table>\n</div>";
},"useData":true});
})();