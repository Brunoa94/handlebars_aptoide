const handlebars = require("handlebars");
const fs = require("fs");

// Read the Handlebars template file
const source = fs.readFileSync("./index.hbs", "utf-8");
handlebars.registerPartial(
  "loop",
  fs.readFileSync("./partials/loop.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerPartial(
  "sidebar",
  fs.readFileSync("./partials/sidebar.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerPartial(
  "config",
  fs.readFileSync("./partials/config.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerPartial(
  "header",
  fs.readFileSync("./partials/header.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerHelper("is", function (a, b, options) {
  if (options) {
    if (a === b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  }
});

handlebars.registerPartial(
  "footer",
  fs.readFileSync("./partials/footer.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerPartial(
  "widget-qrcode",
  fs.readFileSync("./partials/widget-qrcode.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerPartial(
  "widget-button",
  fs.readFileSync("./partials/widget-button.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerPartial(
  "widget-tags",
  fs.readFileSync("./partials/widget-tags.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerPartial(
  "widget-popularposts",
  fs.readFileSync("./partials/widget-popularposts.hbs", "utf8"),
  {
    extname: ".hbs",
  }
);

handlebars.registerHelper("get", function (obj, key) {
  return obj[key];
});

handlebars.registerHelper("foreach", function (context, options) {
  var ret = "";

  if (context) {
    for (var i = 0, j = context.length; i < j; i++) {
      ret = ret + options.fn(context[i]);
    }
  }

  return ret;
});

handlebars.registerHelper("asset", function (path) {
  return "assets/" + path;
});

handlebars.registerHelper("img_url", function (filename) {
  return "assets/images/" + filename;
});
// Compile the Handlebars template
const template = handlebars.compile(source);

// Define the data to pass to the template
const data = {
  title: "My Handlebars Project",
  url: "/aptoide-logo.svg",
  posts: [
    {
      title: "Best Android Games of November",
      feature_image: "mobile.png",
      categories: ["Android Apss", "Android"],
      featured: true,
    },
    {
      title: "Best Android Games of November",
      feature_image: "mobile.png",
      categories: ["Android Apss", "Android"],
    },
  ],
};

// Render the template with the data
const output = template(data);

// Write the HTML output to a file
fs.writeFileSync("./output.html", output, "utf-8");
