
module.exports = function (grunt) {
  grunt.initConfig({
      
      //Individual Task 
      concat : {
          options: {
            separator: '\n\n//--------------------------------------------------------------\n',  
            banner: '\n\n//--------------------------------------------------------------\n'  
          },
          dist: {
              src: ['components/scripts/*.js'],
              dest: 'builds/development/js/scripts.js'
          }
      },//concat
      
      //Sass Task
      sass: {
          dist: {
              options: {
              style: 'expanded'
                },
                files: [{
                    src: 'components/sass/style.scss',
                    dest: 'builds/development/css/style.css'
                }]
            }
      }, //sass
      
      watch: {
          options: {
              spawn: false
          },
          scripts: {
              files: [
                  'builds/development/**/*.html',
                  'components/scripts/**/*.js',
                  'components/sass/**/*.scss'],
              
              tasks: ['concat', 'sass'] 
          }
      } //watch
      
  }); //initConfig
  
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  //Default task
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
  
};//wrapper