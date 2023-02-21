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

		// $labels = array(
		// 	'name'                  => _x( 'Post Types', 'Post Type General Name', 'text_domain' ),
		// 	'singular_name'         => _x( 'Post Type', 'Post Type Singular Name', 'text_domain' ),
		// 	'menu_name'             => __( 'Post Types', 'text_domain' ),
		// 	'name_admin_bar'        => __( 'Post Type', 'text_domain' ),
		// 	'archives'              => __( 'Item Archives', 'text_domain' ),
		// 	'attributes'            => __( 'Item Attributes', 'text_domain' ),
		// 	'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		// 	'all_items'             => __( 'All Items', 'text_domain' ),
		// 	'add_new_item'          => __( 'Add New Item', 'text_domain' ),
		// 	'add_new'               => __( 'Add New', 'text_domain' ),
		// 	'new_item'              => __( 'New Item', 'text_domain' ),
		// 	'edit_item'             => __( 'Edit Item', 'text_domain' ),
		// 	'update_item'           => __( 'Update Item', 'text_domain' ),
		// 	'view_item'             => __( 'View Item', 'text_domain' ),
		// 	'view_items'            => __( 'View Items', 'text_domain' ),
		// 	'search_items'          => __( 'Search Item', 'text_domain' ),
		// 	'not_found'             => __( 'Not found', 'text_domain' ),
		// 	'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		// 	'featured_image'        => __( 'Featured Image', 'text_domain' ),
		// 	'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		// 	'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		// 	'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		// 	'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		// 	'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		// 	'items_list'            => __( 'Items list', 'text_domain' ),
		// 	'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		// 	'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
		// );
		// $args = array(
		// 	'label'                 => __( 'Post Type', 'text_domain' ),
		// 	'description'           => __( 'Post Type Description', 'text_domain' ),
		// 	'labels'                => $labels,
		// 	'supports'              => false,
		// 	'taxonomies'            => array( 'category', 'post_tag' ),
		// 	'hierarchical'          => false,
		// 	'public'                => true,
		// 	'show_ui'               => true,
		// 	'show_in_menu'          => true,
		// 	'menu_position'         => 5,
		// 	'show_in_admin_bar'     => true,
		// 	'show_in_nav_menus'     => true,
		// 	'can_export'            => true,
		// 	'has_archive'           => true,
		// 	'exclude_from_search'   => false,
		// 	'publicly_queryable'    => true,
		// 	'capability_type'       => 'page',
		// );
		// register_post_type( 'post_type', $args );

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
