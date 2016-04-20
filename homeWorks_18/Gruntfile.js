module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/script.js'
            }
        },
        uglify: {
            dist: {
                src: ['js/script.js'],
                dest: 'js/script.min.js'
            }
        },
        cssmin: {
            css: {
                src: ['css/src/*.css'],
                dest: 'css/style.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};