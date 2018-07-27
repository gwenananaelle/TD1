module.exports = function(grunt) {
    grunt.registerTask('test-grunt', () => {
        console.log('grunt ready')
    })

    grunt.registerTask('task2', () => {
        console.log('je sais plus')
    })

    grunt.registerTask('default', ['test-grunt'], ['task2'])
  };
