this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["author"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<section id=\"author-profile\" class=\"author-profile\">\n		<div class=\"container\">\n			<div class=\"row\">\n			<div class=\"light-overlay\"></div>\n				<div class=\"col-xs-12 col-md-2 author-img\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"profile_image") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":14,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"col-xs-12 col-md-8\">\n					<div class=\"author-details\">\n						<h3>"
    + alias3(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":18}}}) : helper)))
    + "</h3>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"bio") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n				<div class=\"col-xs-12 col-md-2\">\n					<div class=\"author-meta\">\n						<div class=\"post-count\">\n							<i class=\"glyphicon glyphicon-list-alt\"></i>\n							"
    + alias3((lookupProperty(helpers,"plural")||(depth0 && lookupProperty(depth0,"plural"))||alias2).call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"pagination") : depths[1])) != null ? lookupProperty(stack1,"total") : stack1),{"name":"plural","hash":{"plural":"% posts","singular":"% post","empty":"No posts"},"data":data,"loc":{"start":{"line":28,"column":7},"end":{"line":28,"column":89}}}))
    + "\n						</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"location") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"website") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":6},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "					</div>\n				</div>\n			</div>\n		</div>\n	</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"profile_image") || (depth0 != null ? lookupProperty(depth0,"profile_image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profile_image","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":33}}}) : helper)))
    + "\" class=\"author-img-avatar\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":66},"end":{"line":11,"column":74}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":83},"end":{"line":11,"column":91}}}) : helper)))
    + "\" />\n";
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<img src=\""
    + container.escapeExpression((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/no-image.jpg",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":47}}}))
    + "\" class=\"author-img-avatar\"  />\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<div class=\"author-bio\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"bio") || (depth0 != null ? lookupProperty(depth0,"bio") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bio","hash":{},"data":data,"loc":{"start":{"line":20,"column":31},"end":{"line":20,"column":38}}}) : helper)))
    + "</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<div class=\"location\"><i class=\"glyphicon glyphicon-map-marker\"></i>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"location","hash":{},"data":data,"loc":{"start":{"line":31,"column":75},"end":{"line":31,"column":87}}}) : helper)))
    + "</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<div class=\"website\"><a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"website") || (depth0 != null ? lookupProperty(depth0,"website") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"website","hash":{},"data":data,"loc":{"start":{"line":34,"column":37},"end":{"line":34,"column":48}}}) : helper)))
    + "\" target=\"_blank\"><i class=\"glyphicon glyphicon-link\"></i>Website</a></div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "                        <article class=\"col-sm-12 post-other-list\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-4 post-image\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":54,"column":36},"end":{"line":58,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"featured") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":36},"end":{"line":61,"column":43}}})) != null ? stack1 : "")
    + "                                </div>\n                                <div class=\"col-sm-8 post-content\">\n                                    <h3><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":64,"column":49},"end":{"line":64,"column":56}}}) : helper)))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":64,"column":63},"end":{"line":64,"column":74}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":64,"column":83},"end":{"line":64,"column":94}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":64,"column":96},"end":{"line":64,"column":107}}}) : helper))) != null ? stack1 : "")
    + "</a></h3>\n                                    <div class=\"post-excerpt\">\n                                        <p>"
    + alias4((lookupProperty(helpers,"excerpt")||(depth0 && lookupProperty(depth0,"excerpt"))||alias2).call(alias1,{"name":"excerpt","hash":{"characters":"120"},"data":data,"loc":{"start":{"line":66,"column":43},"end":{"line":66,"column":71}}}))
    + "&hellip;</p>\n                                    </div>\n                                    <div class=\"meta-info\">\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(options={"name":"author","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":40},"end":{"line":74,"column":51}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"author")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                        <span class=\"date\">\n                                            <i class=\"fa fa-clock-o\"></i>\n                                            "
    + alias4((lookupProperty(helpers,"date")||(depth0 && lookupProperty(depth0,"date"))||alias2).call(alias1,{"name":"date","hash":{"format":"MMM DD, YYYY"},"data":data,"loc":{"start":{"line":77,"column":44},"end":{"line":77,"column":74}}}))
    + "\n                                        </span>\n                                        <span class=\"comment\">\n                                            <i class=\"fa fa-comment\"></i>\n                                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":81,"column":53},"end":{"line":81,"column":60}}}) : helper)))
    + "#disqus_thread\">0 Comments</a>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </article>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":55,"column":49},"end":{"line":55,"column":56}}}) : helper)))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":55,"column":63},"end":{"line":55,"column":74}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":55,"column":83},"end":{"line":55,"column":94}}}) : helper))) != null ? stack1 : "")
    + "\"><img src=\""
    + alias4((lookupProperty(helpers,"img_url")||(depth0 && lookupProperty(depth0,"img_url"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"img_url","hash":{},"data":data,"loc":{"start":{"line":55,"column":106},"end":{"line":55,"column":131}}}))
    + "\" /></a>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":57,"column":49},"end":{"line":57,"column":56}}}) : helper)))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":57,"column":63},"end":{"line":57,"column":74}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":57,"column":83},"end":{"line":57,"column":94}}}) : helper))) != null ? stack1 : "")
    + "\"><img src=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/no-image.jpg",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":57,"column":106},"end":{"line":57,"column":137}}}))
    + "\" /></a>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "                                        <div class=\"cp-featured\"><i class=\"glyphicon glyphicon-flash\"></i></div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <span class=\"author\">\n                                            <i class=\"fa fa-user\"></i>\n                                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":72,"column":53},"end":{"line":72,"column":60}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":72,"column":69},"end":{"line":72,"column":77}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":72,"column":84},"end":{"line":72,"column":92}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":72,"column":94},"end":{"line":72,"column":102}}}) : helper)))
    + "</a>\n                                        </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(options={"name":"author","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":41,"column":11}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"author")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<section id=\"main-body\">\n<div class=\"container\">\n	<div class=\"row\">\n        <div class=\"col-xs-12 col-md-8\">\n            <div class=\"posts-card\">\n                <div class=\"row\">\n"
    + ((stack1 = (lookupProperty(helpers,"foreach")||(depth0 && lookupProperty(depth0,"foreach"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"posts") : depth0),{"name":"foreach","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":20},"end":{"line":87,"column":32}}})) != null ? stack1 : "")
    + "                </div>\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"pagination") || (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pagination","hash":{},"data":data,"loc":{"start":{"line":89,"column":16},"end":{"line":89,"column":30}}}) : helper)))
    + "\n            </div>\n        </div>\n        <div class=\"col-xs-12 col-md-4\">    \n                        <div class=\"social-media-responsive cp-sidebar\">\n                            <section class=\"widget\">\n                                <span><h5>Social Media</h5></span>  <br><br><br>\n                                <a href=\"https://www.facebook.com/aptoide\" target=\"_blank\"><img src=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/facebook.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":96,"column":101},"end":{"line":96,"column":132}}}))
    + "\"></a>\n                                <a href=\"https://www.youtube.com/user/aptoide\" target=\"_blank\"><img src=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/youtube.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":97,"column":105},"end":{"line":97,"column":135}}}))
    + "\"></a>\n                                <a href=\"https://twitter.com/aptoide\" target=\"_blank\"><img src=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/twitter.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":98,"column":96},"end":{"line":98,"column":126}}}))
    + "\"></a>\n                                <a href=\"https://www.instagram.com/aptoideteam\" target=\"_blank\"><img src=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/instagram.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":99,"column":106},"end":{"line":99,"column":138}}}))
    + "\"></a>\n                            </section>\n                        </div>\n                    </div>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sidebar"),depth0,{"name":"sidebar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</div>\n</div>\n</section>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["default"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "      \n        <script src=\"jquery-3.2.0.min.js\"></script>\n      \n        <script type=\"text/javascript\">\n            jQuery(function($) {\n                // Debug flag\n                var debugMode = false;\n\n                // Default time delay before checking location\n                var callBackTime = 100;\n\n                // # px before tracking a reader\n                var readerLocation = 900;\n\n                // Set some flags for tracking & execution\n                var timer = 0;\n                var scroller = false;\n                var endContent = false;\n                var didComplete = false;\n                var WPM = 275;\n                var minPercentRead = 1; //at least 100% of post read\n\n                // Set some time variables to calculate reading time\n                var startTime = new Date();\n                var beginning = startTime.getTime();\n                var totalTime = 0;\n                \n                // Get some information about the current page\n                var pageTitle = document.title;\n                \n                // Track the aticle load\n                if (!debugMode) {\n                    utmContent = $('meta[property=\"utmcontent\"]').attr('content');\n                    if (typeof utmContent !== 'undefined') \n                        ga('send', 'event', 'Article', 'View', utmContent);\n                    else \n                        ga('send', 'event', 'Article', 'View')\n                } else {\n                    alert('The page has loaded. Woohoo.');    \n                }\n\n                // Check the location and track user\n                function trackLocation() {\n                    bottom = $(window).height() + $(window).scrollTop();\n                    height = $(document).height();\n\n                    // If user starts to scroll send an event\n                    if (bottom > readerLocation && !scroller) {\n                        currentTime = new Date();\n                        scrollStart = currentTime.getTime();\n                        timeToScroll = Math.round((scrollStart - beginning) / 1000);\n                        \n                        scroller = true;\n                    }\n\n                    // If user has hit the bottom of page send an event\n                    if (bottom >= height && !didComplete) {\n                        currentTime = new Date();\n                        end = currentTime.getTime();\n                        totalTime = Math.round((end - scrollStart) / 1000);\n                        if (!debugMode) {\n                            if (totalTime < ($(\".post-content\").text().split(\" \").length / (WPM/60)) * minPercentRead) {\n                                utmContent = $('meta[property=\"utmcontent\"]').attr('content');\n                                if (typeof utmContent !== 'undefined') \n                                    ga('send', 'event', 'Article', 'Skim', utmContent);\n                                else \n                                    ga('send', 'event', 'Article', 'Skim')\n                            } else {\n                                utmContent = $('meta[property=\"utmcontent\"]').attr('content');\n                                if (typeof utmContent !== 'undefined') \n                                    ga('send', 'event', 'Article', 'Read', utmContent);\n                                else \n                                    ga('send', 'event', 'Article', 'Read')\n                            }\n                        } else {\n                            if (totalTime < ($(\".post-content\").text().split(\" \").length / (WPM/60)) * minPercentRead) {\n                                alert('Skimmer bottom of page '+totalTime);\n                            } else {\n                                alert('Reader bottom of page '+totalTime);\n                            }\n                        }\n                        didComplete = true;\n                    }\n            }\n\n            // Track the scrolling and track location\n            $(window).scroll(function() {\n                if (timer) {\n                    clearTimeout(timer);\n                }\n\n                // Use a buffer so we don't call trackLocation too often.\n                timer = setTimeout(trackLocation, callBackTime);\n            });\n        });\n        </script>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    \n	<title>"
    + alias4(((helper = (helper = lookupProperty(helpers,"meta_title") || (depth0 != null ? lookupProperty(depth0,"meta_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meta_title","hash":{},"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":22}}}) : helper)))
    + "</title>\n	\n    <link rel=\"shortcut icon\" href=\"https://cdn6.aptoide.com/includes/themes/2014/images/favicon.ico?timestamp=timestamp=20170227g\" />\n	\n	<link href=\"https://fonts.googleapis.com/css?family=Droid+Serif|Roboto:300,400,500\" rel=\"stylesheet\">\n	\n	<link href=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"css/normalize.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":19,"column":13},"end":{"line":19,"column":42}}}))
    + "\" rel=\"stylesheet\">\n	\n    <link href=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"css/bootstrap.min.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":49}}}))
    + "\" rel=\"stylesheet\">\n	\n    <link href=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"css/style.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":41}}}))
    + "\" rel=\"stylesheet\">\n	\n    <link href=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"css/font-awesome.min.css",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":28,"column":52}}}))
    + "\" rel=\"stylesheet\">\n\n    <!--[if lt IE 9]>\n      <script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>\n      <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n      \n      \n	\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"config"),depth0,{"name":"config","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"ghost_head") || (depth0 != null ? lookupProperty(depth0,"ghost_head") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ghost_head","hash":{},"data":data,"loc":{"start":{"line":43,"column":4},"end":{"line":43,"column":18}}}) : helper)))
    + "\n  </head>\n  <body class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"body_class") || (depth0 != null ? lookupProperty(depth0,"body_class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body_class","hash":{},"data":data,"loc":{"start":{"line":45,"column":15},"end":{"line":45,"column":29}}}) : helper)))
    + "\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header"),depth0,{"name":"header","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	\n	"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":49,"column":1},"end":{"line":49,"column":11}}}) : helper))) != null ? stack1 : "")
    + "\n	\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"footer"),depth0,{"name":"footer","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      \n"
    + ((stack1 = (lookupProperty(helpers,"is")||(depth0 && lookupProperty(depth0,"is"))||alias2).call(alias1,"post",{"name":"is","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":151,"column":13}}})) != null ? stack1 : "")
    + "  </body>\n</html>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["error"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"col-md-6 col-md-offset-3 text-center\">\n			<section class=\"error-message\">\n				<h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"statusCode") || (depth0 != null ? lookupProperty(depth0,"statusCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statusCode","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":22}}}) : helper)))
    + "</h1>\n				<h2 class=\"error-description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":8,"column":34},"end":{"line":8,"column":45}}}) : helper)))
    + "</h2>\n				<p>The page you are looking for has not been found.</p>\n				<a class=\"btn btn-primary\" href=\""
    + alias4(container.lambda(((stack1 = (data && lookupProperty(data,"site"))) && lookupProperty(stack1,"url")), depth0))
    + "\">Go back home <i class=\"fa fa-home\"></i></a>\n			</section>\n		</div>\n	</div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["home"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"row\">\n                                <article class=\"col-md-12 post-one\">\n                                    <div class=\"postone-title\">\n                                        <h2><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":12,"column":53},"end":{"line":12,"column":60}}}) : helper)))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":67},"end":{"line":12,"column":78}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":87},"end":{"line":12,"column":98}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":100},"end":{"line":12,"column":111}}}) : helper))) != null ? stack1 : "")
    + "</a></h2>\n                                    </div> \n                                    <br>\n                                    <div class=\"meta-info col-xs-12 col-md-12\">\n                                        <span class=\"date\">\n                                            <i class=\"fa fa-clock-o\"></i>\n                                            "
    + alias4((lookupProperty(helpers,"date")||(depth0 && lookupProperty(depth0,"date"))||alias2).call(alias1,{"name":"date","hash":{"format":"MMM DD, YYYY"},"data":data,"loc":{"start":{"line":18,"column":44},"end":{"line":18,"column":74}}}))
    + "\n                                        </span>\n                                        <br>\n                                        <span class=\"comment\">\n                                            <i class=\"fa fa-comment\"></i>\n                                            <a href=\""
    + alias4((lookupProperty(helpers,"url")||(depth0 && lookupProperty(depth0,"url"))||alias2).call(alias1,{"name":"url","hash":{"absolute":"true"},"data":data,"loc":{"start":{"line":23,"column":53},"end":{"line":23,"column":76}}}))
    + "#disqus_thread\" data-disqus-identifier='ghost-"
    + alias4(((helper = (helper = lookupProperty(helpers,"comment_id") || (depth0 != null ? lookupProperty(depth0,"comment_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment_id","hash":{},"data":data,"loc":{"start":{"line":23,"column":122},"end":{"line":23,"column":136}}}) : helper)))
    + "'>Comments</a>\n                                        </span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,"tags",{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":40},"end":{"line":27,"column":47}}})) != null ? stack1 : "")
    + "                                    </div>\n                                    <div class=\"post-image col-xs-12 col-md-12\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":30,"column":40},"end":{"line":34,"column":47}}})) != null ? stack1 : "")
    + "                                        <br>\n                                        <div class=\"post-content-excerpt\">\n                                        "
    + alias4((lookupProperty(helpers,"excerpt")||(depth0 && lookupProperty(depth0,"excerpt"))||alias2).call(alias1,{"name":"excerpt","hash":{"words":"50"},"data":data,"loc":{"start":{"line":37,"column":40},"end":{"line":37,"column":62}}}))
    + "...\n                                        </div>\n                                        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":39,"column":49},"end":{"line":39,"column":56}}}) : helper)))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":39,"column":63},"end":{"line":39,"column":74}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":39,"column":83},"end":{"line":39,"column":94}}}) : helper))) != null ? stack1 : "")
    + "\"><div class=\"post-content-readmore\">Read more</div></a>\n                                        \n                                    </div> \n                                    \n\n                                </article>\n                            </div>\n                            <div class=\"posts-divider\"></div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                           <div class=\"tags\">Categories "
    + container.escapeExpression((lookupProperty(helpers,"tags")||(depth0 && lookupProperty(depth0,"tags"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tags","hash":{"separator":", "},"data":data,"loc":{"start":{"line":26,"column":72},"end":{"line":26,"column":95}}}))
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":31,"column":53},"end":{"line":31,"column":60}}}) : helper)))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":31,"column":67},"end":{"line":31,"column":78}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":31,"column":87},"end":{"line":31,"column":98}}}) : helper))) != null ? stack1 : "")
    + "\"><img src=\""
    + alias4((lookupProperty(helpers,"img_url")||(depth0 && lookupProperty(depth0,"img_url"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"img_url","hash":{},"data":data,"loc":{"start":{"line":31,"column":110},"end":{"line":31,"column":135}}}))
    + "\" /></a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":33,"column":53},"end":{"line":33,"column":60}}}) : helper)))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":33,"column":67},"end":{"line":33,"column":78}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":33,"column":87},"end":{"line":33,"column":98}}}) : helper))) != null ? stack1 : "")
    + "\"><img src=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/no-image.jpg",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":33,"column":110},"end":{"line":33,"column":141}}}))
    + "\" /></a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section id=\"main-body\">\n	<div class=\"container\">\n			<div class=\"col-xs-12 col-md-8\">\n                <div class=\"posts-card\">\n                    \n"
    + ((stack1 = (lookupProperty(helpers,"foreach")||(depth0 && lookupProperty(depth0,"foreach"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"posts") : depth0),{"name":"foreach","hash":{"limit":((stack1 = (data && lookupProperty(data,"site"))) && lookupProperty(stack1,"posts_per_page"))},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":24},"end":{"line":47,"column":36}}})) != null ? stack1 : "")
    + "                    "
    + alias3(((helper = (helper = lookupProperty(helpers,"pagination") || (depth0 != null ? lookupProperty(depth0,"pagination") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pagination","hash":{},"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":48,"column":34}}}) : helper)))
    + "\n                    </div>\n				</div>\n                    <div class=\"col-xs-12 col-md-4\">    \n                        <div class=\"social-media-responsive cp-sidebar\">\n                            <section class=\"widget\">\n                                <span><h5>Social Media</h5></span>  <br><br><br>\n                                <a href=\"https://www.facebook.com/aptoide\" target=\"_blank\" title=\"Facebook\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/facebook.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":55,"column":118},"end":{"line":55,"column":149}}}))
    + "\" alt=\"Facebook\"></a>\n                                <a href=\"https://www.youtube.com/user/aptoide\" target=\"_blank\" title=\"Youtube\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/youtube.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":56,"column":121},"end":{"line":56,"column":151}}}))
    + "\" alt=\"Youtube\"></a>\n                                <a href=\"https://twitter.com/aptoide\" target=\"_blank\" title=\"Twitter\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/twitter.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":57,"column":112},"end":{"line":57,"column":142}}}))
    + "\" alt=\"Twitter\"></a>\n                                <a href=\"https://www.instagram.com/aptoideteam\" target=\"_blank\" title=\"Instagram\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/instagram.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":58,"column":124},"end":{"line":58,"column":156}}}))
    + "\" alt=\"Instagram\"></a>\n                                <a href=\"https://www.snapchat.com/add/aptoideteam\" target=\"_blank\" title=\"Snapchat\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/snapchat.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":59,"column":126},"end":{"line":59,"column":157}}}))
    + "\" alt=\"Snapchat\"></a>\n                                <a href=\"https://plus.google.com/+AptoideOfficial\" target=\"_blank\" title=\"Google Plus\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/google.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":60,"column":129},"end":{"line":60,"column":158}}}))
    + "\" alt=\"Google Plus\"></a>\n                            </section>\n                        </div>\n                    </div>\n		</div>\n	</div>\n</section>";
},"useData":true});

this["Handlebars"]["templates"]["index"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"loop"),depth0,{"name":"loop","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div class=\"postone-title\">\n                                        <h1><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":13,"column":53},"end":{"line":13,"column":60}}}) : helper)))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":13,"column":67},"end":{"line":13,"column":78}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":13,"column":87},"end":{"line":13,"column":98}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":13,"column":100},"end":{"line":13,"column":111}}}) : helper))) != null ? stack1 : "")
    + "</a></h1>\n                                    </div> \n                                    <br>\n\n                                    <div class=\"post-image col-xs-12 col-md-12\">\n\n                                        <div class=\"post-content-excerpt\">\n                                            "
    + alias4(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":20,"column":44},"end":{"line":20,"column":55}}}) : helper)))
    + "\n                                        </div>\n\n                                    </div>                                   \n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<section id=\"main-body\">\n<div class=\"container\">\n\n	<div class=\"row\">\n		<div class=\"col-xs-12 col-md-8\">\n            <div class=\"posts-card\">\n			\n                        <div class=\"row\">\n                                <article class=\"col-md-12 post-one\">\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"post") || (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? helper : alias2),(options={"name":"post","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":36},"end":{"line":24,"column":45}}}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"post")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                                </article>\n                            </div>\n\n            </div>\n			\n		</div>\n        <div class=\"col-xs-12 col-md-4\">    \n                        <div class=\"social-media-responsive cp-sidebar\">\n                            <section class=\"widget\">\n                                <span><h5>Social Media</h5></span>  <br><br><br>\n                                <a href=\"https://www.facebook.com/aptoide\" target=\"_blank\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/facebook.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":35,"column":101},"end":{"line":35,"column":132}}}))
    + "\"></a>\n                                <a href=\"https://www.youtube.com/user/aptoide\" target=\"_blank\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/youtube.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":36,"column":105},"end":{"line":36,"column":135}}}))
    + "\"></a>\n                                <a href=\"https://twitter.com/aptoide\" target=\"_blank\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/twitter.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":37,"column":96},"end":{"line":37,"column":126}}}))
    + "\"></a>\n                                <a href=\"https://www.instagram.com/aptoideteam\" target=\"_blank\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/instagram.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":38,"column":106},"end":{"line":38,"column":138}}}))
    + "\"></a>\n                            </section>\n                        </div>\n                    </div>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sidebar"),depth0,{"name":"sidebar","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n</section>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["post"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.hooks.blockHelperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "					<header class=\"post-header\">\n						<h2>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":21}}}) : helper))) != null ? stack1 : "")
    + "</h2>\n                        <div>\n							<span class=\"date\">\n								<i class=\"fa fa-clock-o\"></i>\n								"
    + alias4((lookupProperty(helpers,"date")||(depth0 && lookupProperty(depth0,"date"))||alias2).call(alias1,{"name":"date","hash":{"format":"MMM DD, YYYY"},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":38}}}))
    + "\n							</span>\n							<span class=\"comment\">\n								<i class=\"fa fa-comment\"></i>\n								<a href=\""
    + alias4((lookupProperty(helpers,"url")||(depth0 && lookupProperty(depth0,"url"))||alias2).call(alias1,{"name":"url","hash":{"absolute":"true"},"data":data,"loc":{"start":{"line":20,"column":17},"end":{"line":20,"column":40}}}))
    + "#disqus_thread\" data-disqus-identifier='ghost-"
    + alias4(((helper = (helper = lookupProperty(helpers,"comment_id") || (depth0 != null ? lookupProperty(depth0,"comment_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment_id","hash":{},"data":data,"loc":{"start":{"line":20,"column":86},"end":{"line":20,"column":100}}}) : helper)))
    + "' style=\"color:#000\">Comments</a>\n							</span>\n                        </div>\n						<div class=\"meta-info\">\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"primary_author") || (depth0 != null ? lookupProperty(depth0,"primary_author") : depth0)) != null ? helper : alias2),(options={"name":"primary_author","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":7},"end":{"line":29,"column":47}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"primary_author")) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "						</div>\n                        <br>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":36,"column":13}}})) != null ? stack1 : "")
    + "					</header>\n					\n					<section class=\"post-content\">\n                        \n						  "
    + alias4(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":41,"column":8},"end":{"line":41,"column":19}}}) : helper)))
    + "\n                        \n					</section>\n					\n					<footer class=\"post-footer\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,"tags",{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":6},"end":{"line":50,"column":13}}})) != null ? stack1 : "")
    + "						\n						\n						<div class=\"clearfix\"></div>\n						\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"post-author"),depth0,{"name":"post-author","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "						\n						<div class=\"clearfix\"></div>\n						    <div class=\"posts-divider\"></div>\n							<nav class=\"pull-right\">\n								<div class=\"pagination\">\n                            \n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"next_post") || (depth0 != null ? lookupProperty(depth0,"next_post") : depth0)) != null ? helper : alias2),(options={"name":"next_post","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":9},"end":{"line":64,"column":23}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"next_post")) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "									\n                                    <a href=\""
    + alias4(container.lambda(((stack1 = (data && lookupProperty(data,"site"))) && lookupProperty(stack1,"url")), depth0))
    + "\" title=\"Home\"><img src=\""
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/home.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":66,"column":83},"end":{"line":66,"column":110}}}))
    + "\" alt=\"Home\"></a>\n                                    \n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"prev_post") || (depth0 != null ? lookupProperty(depth0,"prev_post") : depth0)) != null ? helper : alias2),(options={"name":"prev_post","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":9},"end":{"line":70,"column":23}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"prev_post")) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "											\n								</div>\n							</nav>\n								\n						<div class=\"clearfix\"></div>\n						\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"comments"),depth0,{"name":"comments","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "						\n					</footer>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<span class=\"author\">\n								<i class=\"fa fa-user\"></i>\n								<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":27,"column":17},"end":{"line":27,"column":24}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":27,"column":26},"end":{"line":27,"column":34}}}) : helper)))
    + "</a>\n							</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<img class=\"featured-image\" src=\""
    + container.escapeExpression((lookupProperty(helpers,"img_url")||(depth0 && lookupProperty(depth0,"img_url"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"feature_image") : depth0),{"name":"img_url","hash":{},"data":data,"loc":{"start":{"line":33,"column":40},"end":{"line":33,"column":65}}}))
    + "\" alt=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":33,"column":72},"end":{"line":33,"column":83}}}) : helper))) != null ? stack1 : "")
    + "\" title=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":33,"column":92},"end":{"line":33,"column":103}}}) : helper))) != null ? stack1 : "")
    + "\" />\n";
},"6":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<img class=\"featured-image\" src=\""
    + container.escapeExpression((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/no-image.jpg",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":35,"column":40},"end":{"line":35,"column":71}}}))
    + "\" />\n";
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<section class=\"tags pull-left\">\n							<i class=\"fa fa-tags\"></i> "
    + container.escapeExpression((lookupProperty(helpers,"tags")||(depth0 && lookupProperty(depth0,"tags"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tags","hash":{"separator":" | "},"data":data,"loc":{"start":{"line":48,"column":34},"end":{"line":48,"column":58}}}))
    + "\n						</section>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<a href=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":63,"column":18},"end":{"line":63,"column":25}}}) : helper)))
    + "\" title=\"Back\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/arrow.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":63,"column":50},"end":{"line":63,"column":78}}}))
    + "\" alt=\"Back\"></a>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<a href=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":69,"column":18},"end":{"line":69,"column":25}}}) : helper)))
    + "\" title=\"Next\"><img src=\""
    + alias3((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,"images/arrow-2.png",{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":69,"column":50},"end":{"line":69,"column":80}}}))
    + "\" alt=\"Next\"></a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<section id=\"main-body\">\n<div class=\"container\">\n    \n	<div class=\"row\">\n        \n		<div class=\"col-md-8\">\n            <div class=\"posts-card\">\n			<article class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"post_class") || (depth0 != null ? lookupProperty(depth0,"post_class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_class","hash":{},"data":data,"loc":{"start":{"line":9,"column":19},"end":{"line":9,"column":33}}}) : helper)))
    + "\">\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"post") || (depth0 != null ? lookupProperty(depth0,"post") : depth0)) != null ? helper : alias2),(options={"name":"post","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":80,"column":13}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"post")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</article>\n		</div>\n		\n	</div>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sidebar"),depth0,{"name":"sidebar","data":data,"indent":"         ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n    \n</div>\n   \n</section>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["tag"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\" style=\"background-image: url("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"feature_image") : stack1), depth0))
    + ") ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\" style=\"background-image: url("
    + container.escapeExpression(container.lambda(((stack1 = (data && lookupProperty(data,"site"))) && lookupProperty(stack1,"cover_image")), depth0))
    + ") ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section id=\"tag-header\" class=\"tag-header "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"feaure_image") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":43},"end":{"line":3,"column":190}}})) != null ? stack1 : "")
    + "\">\n	<div class=\"container\">\n		<div class=\"row\">\n		<div class=\"light-overlay\"></div>\n			<div class=\"col-md-6 tag-header-text\">\n				<h4>Showing Posts Tagged as <div class=\"tag-name-header\">\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\"</div></h4>\n				<p class=\"tag-description\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":12,"column":12}}})) != null ? stack1 : "")
    + "				</p>\n				\n			</div>\n		</div>\n	</div>\n</section>\n\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"loop"),depth0,{"name":"loop","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});