module.exports = function( grunt ) {

	grunt.initConfig({

		uglify : {
			options : {
				mangle : false
			},

			my_target : {
				files : {
					'assets/js/main.js' : [ 'assets/_src/_js/scripts.js' ]
				}
			}
	    }, // uglify



	    sass : {
	    	options: {
	    		loadPath: require('node-neat').includePaths,
	    	},
	    	
	    	dist : {
	    		options : { style : 'compressed' },
	    		files : {
	    			'assets/css/style.css' : 'assets/_src/_scss/style.scss'
	    		}
	    	}
	    }, // sass


	    connect: {
		    server: {
		        options: {
		            port: 9000,
		            base: ".",
		            hostname: "localhost",
		            livereload: true,
		        }
		    }
		},

	    watch : {
    		options: {
		        livereload: true
		    },
    
	    	dist : {
	    		files : [
		    		'assets/_src/_js/**/*',
		    		'assets/_src/_scss/**/*',
		    		'**/*.html',
	    		],

	    		tasks : [ 'uglify', 'sass' ],
    		}
	    } // watch

	});


	// Plugins do Grunt
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks( 'grunt-contrib-watch' );


	// Tarefas que serão executadas
	grunt.registerTask( "default", [ "connect", "watch" ]);

	// Tarefa para Watch
	grunt.registerTask( 'w', [ 'watch' ] );

};