'use strict';

module.exports = function (grunt) {
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Show elapsed time at the end
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed MIT */\n',
        // Task configuration.
        clean: {
            files: ['dist', 'test-reports']
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },

            dist: {
                files: {
                    'dist/liveRegion.min.js': ['src/liveRegion.js']
                }
            }
        },
        /* Run JSONLint on our configuration files */
        jsonlint: {
            configFiles: {
                src: ['bower.json', 'package.json', '.bowerrc', '.jshintrc', '.tenonrc']
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/**/*.js']
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/**/*.js']
            }
        },
        karma: {
            dev: {
                configFile: './karma.conf.js',
                autoWatch: true,
                singleRun: false,
                background: false,
                captureConsole: false
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src', 'karma:dev:run']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'karma:dev:run']
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 9000
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['test', 'clean', 'uglify']);
    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('test', ['jsonlint', 'jshint', 'karma:dev']);
};
