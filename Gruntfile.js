
module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks matching the `grunt-*` pattern
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        watch: {
            scripts: {
                files: '**/*.js',
                tasks: ['jshint']
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'liveRegion.js']
        }

    });

    grunt.registerTask('default', ['jshint', 'watch']);
};