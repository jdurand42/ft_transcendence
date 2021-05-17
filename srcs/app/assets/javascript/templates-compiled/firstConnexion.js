(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['firstConnexion'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"firstConnexion\">\n  <div class=\"nickname\">\n    <label class=\"status\" for=\"nickname\">Choose your nickname</label>\n    <input class=\"input\" type=\"text\" id=\"nickname\" name=\"nickname\" minlength=\"2\" maxlength=\"15\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"nickname") || (depth0 != null ? lookupProperty(depth0,"nickname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nickname","hash":{},"data":data,"loc":{"start":{"line":4,"column":103},"end":{"line":4,"column":115}}}) : helper)))
    + "\">\n    <p class=\"error-message\" id=\"error-message\" style=\"display: none;\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":5,"column":71},"end":{"line":5,"column":82}}}) : helper)))
    + "</p>\n  </div>\n\n  <div class=\"avatar\">\n    <label class=\"status\" >Choose your avatar</label>\n    <label>\n      <input type=\"file\"  accept=\"image/*\" name=\"image\" id=\"file\"  style=\"display: none;\">\n      <img class=\"image\" alt=\"avatar\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image_url") || (depth0 != null ? lookupProperty(depth0,"image_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_url","hash":{},"data":data,"loc":{"start":{"line":12,"column":43},"end":{"line":12,"column":56}}}) : helper)))
    + "\" id=\"output\" width=\"200\" style=\"cursor: pointer;\" />\n    </label>\n      <div id=\"twoFactor\">\n      <input type=\"checkbox\" class=\"checkbox checkbox2FA\" id=\"2FA\" name=\"2FA\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"two_factor") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":78},"end":{"line":15,"column":110}}})) != null ? stack1 : "")
    + "/>\n      <label class=\"activate2FA\">Activate Two-Factor via Email</label>\n      </div>\n  </div>\n  <button class=\"validate\">Validate</button>\n</div>\n";
},"useData":true});
})();