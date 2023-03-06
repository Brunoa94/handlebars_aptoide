module.exports = function (grunt) {
  grunt.initConfig({
    handlebars: {
      compile: {
        options: {
          namespace: "Handlebars.templates",
          processName: function (filePath) {
            return filePath.replace(/^templates\/(.*).hbs$/, "$1");
          },
        },
        files: {
          "templates/compiled/templates.js": ["templates/*.hbs"],
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-handlebars");
  grunt.registerTask("default", ["handlebars"]);
};
