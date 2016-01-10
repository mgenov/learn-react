/*jslint node: true */
"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: false,
        presets: ['es2015']

      },
      dist: {
        files: {
          "dist/app.js": "src/**/*.js"
        }
      }
    }
  });

  grunt.registerTask('default', ['babel']);

};

