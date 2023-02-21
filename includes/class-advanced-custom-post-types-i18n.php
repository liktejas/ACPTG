<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://github.com/liktejas/
 * @since      1.0.0
 *
 * @package    Advanced_Custom_Post_Types
 * @subpackage Advanced_Custom_Post_Types/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Advanced_Custom_Post_Types
 * @subpackage Advanced_Custom_Post_Types/includes
 * @author     Tejas Sonawane <liktejas@gmail.com>
 */
class Advanced_Custom_Post_Types_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'advanced-custom-post-types',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
