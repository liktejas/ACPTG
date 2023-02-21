<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://github.com/liktejas/
 * @since             1.0.0

 *
 * @wordpress-plugin
 * Plugin Name:       Advanced CPT Generator
 * Plugin URI:        
 * Description:       This plugins helps you to create advanced custom post types in just few clicks.
 * Version:           1.0.0
 * Author:            Tejas Sonawane
 * Author URI:        https://github.com/liktejas/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'ADVANCED_CUSTOM_POST_TYPES_VERSION', '1.0.0' );

define( 'ADVANCED_CUSTOM_POST_TYPES_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );

define( 'ADVANCED_CUSTOM_POST_TYPES_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-advanced-custom-post-types-activator.php
 */
function activate_advanced_custom_post_types() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-advanced-custom-post-types-activator.php';
	$activate = new Advanced_Custom_Post_Types_Activator();
	$activate->activate();

}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-advanced-custom-post-types-deactivator.php
 */
function deactivate_advanced_custom_post_types() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-advanced-custom-post-types-deactivator.php';
	Advanced_Custom_Post_Types_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_advanced_custom_post_types' );
register_deactivation_hook( __FILE__, 'deactivate_advanced_custom_post_types' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-advanced-custom-post-types.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_advanced_custom_post_types() {

	$plugin = new Advanced_Custom_Post_Types();
	$plugin->run();

}
run_advanced_custom_post_types();
