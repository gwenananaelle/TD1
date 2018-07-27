module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-json-minification');

    grunt.initConfig({
        htmlmin: {                                     // Task
          dist: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
            files: {                                   // Dictionary of files
              'dist/index.html': 'src/index.html',     // 'destination': 'source'
            }
          },
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts',
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/scripts',
                    ext: '.js'
                  }]
            }
          },
          cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.css'
                  }]
            }
          },
          imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images'
                }]
            }
        },
        json_minification: {
            target: {
              files: [{
                expand: true,
                cwd: 'src/data',
                src: ['*.json', '!*.min.json'],
                dest: 'dist/data',
                ext: '.json'
              }]
            }
          },
        clean: ['dist']
      });
      grunt.registerTask('default', ['clean', 'htmlmin', 'uglify', 'cssmin', 'imagemin', 'json_minification']);  
}
