module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig ({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js' : ['_/components/js/*.js'] //compresses and combine multiple js files
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		
		watch: {
			options: { livereload: true }, // reloads browser on save
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			}, //scripts
			html: {
				files: ['*.html']
			},
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			} //sass
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports