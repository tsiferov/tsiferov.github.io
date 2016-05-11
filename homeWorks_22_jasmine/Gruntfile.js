module.exports = function(grunt) {


grunt.initConfig({

  jasmine: {
    test: {
      src: 'js/*.js',
      options: {
	vendor: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
          ],
        specs: 'spec/spec.js'
      }
    }
  },

  watch: {
    scripts: {
      files: ['js/*.js', 'spec/spec.js'],
      tasks: ['jasmine'],
      options: {
        livereload: true
      }
    }
  }
});

// 2) Load plugins
grunt.loadNpmTasks('grunt-contrib-jasmine');
grunt.loadNpmTasks('grunt-contrib-watch');

// 3) Task(s) registration
grunt.registerTask('default', ['jasmine']);

};
