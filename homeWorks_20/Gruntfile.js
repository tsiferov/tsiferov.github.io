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
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);

};