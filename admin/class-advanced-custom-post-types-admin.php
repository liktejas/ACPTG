<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://github.com/liktejas/
 * @since      1.0.0
 *
 * @package    Advanced_Custom_Post_Types
 * @subpackage Advanced_Custom_Post_Types/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Advanced_Custom_Post_Types
 * @subpackage Advanced_Custom_Post_Types/admin
 * @author     Tejas Sonawane <liktejas@gmail.com>
 */
class Advanced_Custom_Post_Types_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Advanced_Custom_Post_Types_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Advanced_Custom_Post_Types_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/advanced-custom-post-types-admin.css', array(), $this->version, 'all' );
		if( isset( $_GET['page'] ) ) {
			if( 'acptg-settings' === $_GET['page'] || 'acptg-add-new' === $_GET['page'] ) {
				wp_enqueue_style( 'wp_acpt', ADVANCED_CUSTOM_POST_TYPES_URL . 'build/index.css', array(), $this->version, 'all' );
			}
		}

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Advanced_Custom_Post_Types_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Advanced_Custom_Post_Types_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/advanced-custom-post-types-admin.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( 'wp_acpt', ADVANCED_CUSTOM_POST_TYPES_URL . 'build/index.js', array( 'jquery', 'wp-element' ), ADVANCED_CUSTOM_POST_TYPES_VERSION, true );
		wp_localize_script( 'wp_acpt', 'appLocalizer', array(
			'apiURL'  => home_url( '/wp-json' ),
			'nonce'   => wp_create_nonce( 'wp_rest' ),
			'siteURL' => trailingslashit( get_site_url() ),
			)
		);
	}

	/**
	 * Creates a menu.
	 *
	 * @since     1.0.0
	 */
	public function acptg_create_admin_menu() {
        $capability = 'manage_options';
        $slug = 'acptg-settings';

		add_menu_page('ACPT Generator', 'ACPT Generator', $capability, $slug, array( $this, 'acptg_list_all_acptg' ) );
		add_submenu_page($slug, 'All CPT', 'All CPT', $capability, $slug );
		add_submenu_page($slug, 'Add New CPT', 'Add New CPT', $capability, 'acptg-add-new', array( $this, 'acptg_add_new_acptg' ) );
    }

	/**
	 * Menu page markup.
	 *
	 * @since     1.0.0
	 */
	public function acptg_list_all_acptg() {
        echo '<div class="wrap"><div id="acpt-admin-app"></div></div>';
    }

	public function acptg_add_new_acptg() {
		echo '<div class="wrap"><div id="acptg-add-new-app"></div></div>';
	}

	// Register Custom Post Type
	function register_all_acpt() {

		global $wpdb;
		$results = $wpdb->get_results( "SELECT option_id, option_name FROM {$wpdb->prefix}options WHERE option_name LIKE 'acptg_%'", ARRAY_A );
		foreach( $results as $res ) {
			// error_log( print_r( get_option( $res['option_name'] ), true ) );
			$cpt_details = get_option( $res['option_name'] );
			// error_log( print_r( $cpt_details['label'], true ) );
			register_post_type( $cpt_details['label'], $cpt_details );
		}
	}

}
