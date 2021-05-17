(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profile'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"supraDiv\">\n<div class=\"pannel\" id=\"profilePannel\"></div>\n\n\n	<div class=\"contentWrapper\">\n		<div id=\"profileSubNavBar\"></div>\n		<div id=\"profileContent\"></div>\n		<div class=\"modal validationModal\" id=\"editNicknameModal\" style=\"display: none;\">\n			<div class=\"background\"></div>\n			<div class=\"modalOpen\">\n				<div class=\"close closeModal\">\n					<img src=\"./icons/close.svg\" id=\"close\"></img>\n				</div>\n				<label class=\"label\" for=\"search\">Edit nickname</label>\n				<input class=\"textInput\" id=\"newNicknameInput\" type=\"text\" placeholder=\"New nickname\" for=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":16,"column":95},"end":{"line":16,"column":101}}}) : helper)))
    + "\"></input>\n				<div id=\"editNicknameError\" ></div>\n				<div class=\"button-container buttons\">\n					<button class=\"validation-buttons button validate-add-friends editNickname\" id='editNicknameButton' for=\""
    + alias1(container.lambda((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">save</button>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n<div></div>\n";
},"useData":true});
})();