module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-cssc');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.initConfig ({
		uglify: {
			my_target: {
				files: {
					'_/js/script.js' : ['_/components/js/*.js'] //compresses and combine multiple js files
				} //files
			} //my_target
		}, //uglify
		
		jshint: {
			js_target: {
				src: ['_/components/js/*.js']
			}, //js_target
			options: { force: true }, //report JSHint errors but not fail the task
		}, //jshint

		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass

		cssc: {
	    build: {
	       options: {
	        consolidateViaDeclarations: true,
	        consolidateViaSelectors:    true,
	        consolidateMediaQueries:    true
	      }
	    } //build
  }, //cssc 

  	cssmin: {
	    build: {
	        src: '_/css/style.css',
	        dest: '_/css/style.css'
	    } //build
		}, //cssmin

		htmlhint: {
            build: {
                options: {
                  'tag-pair': true,
// Force tags to have a closing pair
                  'tagname-lowercase': true,
// Force tags to be lowercase
                  'attr-lowercase': true,
// Force attribute names to be lowercase e.g. <div id="header"> is invalid
                  'attr-value-double-quotes': true,
// Force attributes to have double quotes rather than single
                  'spec-char-escape': true,
// Force special characters to be escaped
                  'id-unique': true
// Prevent using the same ID multiple times in a document 
                }, //options
                src: ['*.html']
            } //build
		}, //htmlhint

		watch: {
			options: { livereload: true }, // reloads browser on save
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['jshint', 'uglify']
			}, //scripts
			html: {
				files: ['*.html'],
				tasks: ['htmlhint:build']
			}, //html
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev', 'cssc:build', 'cssmin:build']
			} //sass
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports