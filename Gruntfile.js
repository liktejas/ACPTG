module.exports = function( grunt ) {
    'use strict';

    const pkg = grunt.file.readJSON( 'package.json' );

    grunt.initConfig( {

        pkg,

        clean: {
            build: [ 'release/' ],
        },

        dirs: {
			lang: 'languages',
		},

		checktextdomain: {
			options:{
				text_domain: '<%= pkg.name %>',
				correct_domain: true,
				keywords: [
					'__:1,2d',
					'_e:1,2d',
					'_x:1,2c,3d',
					'esc_html__:1,2d',
					'esc_html_e:1,2d',
					'esc_html_x:1,2c,3d',
					'esc_attr__:1,2d',
					'esc_attr_e:1,2d',
					'esc_attr_x:1,2c,3d',
					'_ex:1,2c,3d',
					'_n:1,2,4d',
					'_nx:1,2,4c,5d',
					'_n_noop:1,2,3d',
					'_nx_noop:1,2,3c,4d'
				]
			},
			files: {
				src:  [
					'*.php',
                    'includes/**',
					'**/*.php',
                    'admin/class-advanced-custom-post-types-admin.php',
                    'public/class-advanced-custom-post-types-public.php',
					'!node_modules/**',
					'!vendor/**',
					'!core/**',
					'!build/**',
					'!package-lock.json',
					'!composer.json',
					'!composer.lock',
					'!phpcs.xml.dist',
					'!**/*~',
					'!.test/**'
				],
				expand: true
			}
		},

        makepot: {
			target: {
				options: {
					domainPath: '/languages/',    // Where to save the POT file.
					mainFile: 'advanced-custom-post-types.php',      // Main project file.
					potFilename: 'advanced-cpt-generator.pot',   // Name of the POT file.
					type: 'wp-plugin',  // Type of project (wp-plugin or wp-theme).
					exclude: ['build/.*'],       // List of files or directories to ignore.
					processPot: function( pot, options ) {
						pot.headers['x-poedit-basepath'] = '.\n';
						pot.headers['x-poedit-language'] = 'English\n';
						pot.headers['x-poedit-country'] = 'UNITED STATES\n';
						pot.headers['x-poedit-sourcecharset'] = 'utf-8\n';
						pot.headers['x-poedit-keywordslist'] = '__;_e;__ngettext:1,2;_n:1,2;__ngettext_noop:1,2;_n_noop:1,2;_c,_nc:4c,1,2;_x:1,2c;_ex:1,2c;_nx:4c,1,2;_nx_noop:4c,1,2;\n';
						pot.headers['x-textdomain-support'] = 'yes\n';
						return pot;
					}
				}
			}
		},

        // Generate RTL .css files.
		rtlcss: {
			options: {
				// rtlcss options
				config: {
					preserveComments: true,
					greedy: true
				},
				// generate source maps
				map: false
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'build/',
						src: [
							'**.css',
							'!*-rtl.css',
							'!*.min.css'
						],
						dest: 'build/',
						ext: '-rtl.css'
					}
				]
			}
		},

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        src: [
                            '!**/*.{ai,eps,psd}',
                            'LICENSE.txt',
                            'admin/**',
                            'release/**',
                            'languages/**',
                            'readme.txt',
                            '!**/*.css.map',
                            '!**/*.js.map',
                            'index.php',
                            'advanced-custom-post-types.php',
                            'uninstall.php',
                            'src/**',
                            'public/**',
                            'includes/**',
                            'build/**'
                        ],
                        dest: 'release/<%= pkg.name %>',
                    },
                ],
            },
        },

        compress: {
            acptg_generator: {
                options: {
                    archive: 'release/advanced-cpt-generator.zip',
                },
                files: [
                    {
                        cwd: 'release/<%= pkg.name %>/',
                        dest: '<%= pkg.name %>/',
                        src: [ '**' ],
                    },
                ],
            },
        },

        replace: {
            readme: {
                src: 'readme.*',
                overwrite: true,
                replacements: [
                    {
                        from: /Tested up to:(\s*?)[a-zA-Z0-9\.\-\+]+$/m,
                        to: 'Tested up to:$1' + pkg.tested_up_to,
                    },
                    {
                        from: /Version:(\s*?)[a-zA-Z0-9\.\-\+]+$/m,
                        to: 'Version:$1' + pkg.version,
                    },
                ],
            },
            languages: {
                src: 'languages/advanced-cpt-generator.pot',
                overwrite: true,
                replacements: [
                    {
                        from: /(Project-Id-Version: advanced-cpt-generator )[0-9\.]+/,
                        to: '$1' + pkg.version,
                    },
                ],
            },
        },

        shell: {
            build: [ 'npm run build' ].join( ' && ' ),
            translations: [ 'npm run makepot' ].join( ' && ' ),
        },

    } );

    require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

    grunt.registerTask( 'build', [ 'i18n', 'shell:build', 'rtlcss', 'update-pot', 'clean:build', 'copy:build', 'compress' ] );
    grunt.registerTask( 'update-pot', [ 'replace:languages' ] );
    grunt.registerTask( 'version', [ 'replace' ] );
    grunt.registerTask( 'i18n', [ 'makepot' ] );
};