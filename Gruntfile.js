module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        banner: [
            '/*!\n',
            ' * <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>)\n',
            ' * 2018-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
            ' */\n'
        ].join(''),

        cacheBust: {
            options: {
                assets: ['build/**/*', 'build/**/**/*'],
                queryString: true
            },
            src: ['build/index.html']
        },

        cssmin: {
            css: {
                src: 'build/css/styles.min.css',
                dest: 'build/css/styles.min.css'
            }
        },

        clean: {
            css: ['build/css/*'],
            js: ['build/js/*'],
            fonts: ['build/fonts/**'],
        },

        concat: {
            options: {
                banner: "<%= banner %>"
            },
            css: {
                src: ['app/css/styles.css'],
                dest: 'build/css/styles.min.css'
            },
            js: {
                src: [
                    'app/js/figlet.js',
                    'app/js/app.js',
                ],
                dest: 'build/js/app.min.js'
            }
        },

        'gh-pages': {
            options: {
                base: 'build',
                branch: 'gh-pages',
                message: 'Updates v<%= pkg.version %>',
                user: {
                    name: 'Santiago Leiva',
                    email: 'santiagoeleiva@gmail.com'
                }
            },
            src: ['**/*']
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'build/index.html'
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    'build/index.html': ['app/index.html']
                }
            }
        },

        uglify: {
            options: {
                banner: "<%= banner %>"
            },
            js: {
                files: {
                    'build/js/app.min.js': ['build/js/app.min.js']
                }
            }
        },

        copy: {
            fonts: {
                expand: true,
                cwd: 'app/fonts/',
                src: '**',
                dest: 'build/fonts/'
            },
        },

    });

    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', [
        'minify-css',
        'minify-js',
        'copy-fonts',
        'prepare-html',
        'cacheBust'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'gh-pages'
    ]);

    grunt.registerTask('minify-css', [
        'clean:css',
        'concat:css',
        'cssmin:css'
    ]);

    grunt.registerTask('minify-js', [
        'clean:js',
        'concat:js',
        'uglify:js'
    ]);

    grunt.registerTask('prepare-html', [
        'processhtml:dist',
        'htmlmin:dist'
    ]);

    grunt.registerTask('copy-fonts', [
        'clean:fonts',
        'copy:fonts'
    ]);

    grunt.registerTask('default', ['build']);
};