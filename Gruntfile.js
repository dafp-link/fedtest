module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    sass: { 
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
      }]
      }
    },   

    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }

});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');	

grunt.registerTask('default', ['watch']);
};