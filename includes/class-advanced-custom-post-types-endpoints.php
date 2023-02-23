<?php

/**
 * Custom Endpoints.
 *
 * @link       https://github.com/liktejas/
 * @since      1.0.0
 *
 * @package    Advanced_Custom_Post_Types
 * @subpackage Advanced_Custom_Post_Types/admin
 */

/**
 * Custom Endpoints.
 *
 * Defines the custom end points.
 *
 * @package    Advanced_Custom_Post_Types
 * @subpackage Advanced_Custom_Post_Types/admin
 * @author     Tejas Sonawane <liktejas@gmail.com>
 */
class WP_ACPTG_EndPoints {

    public function __construct() {
        add_action( 'rest_api_init', array( $this, 'acptg_create_rest_routes' ) );
    }

    public function acptg_create_rest_routes() {
        register_rest_route( 'acptg/v2', '/settings', array(
                'methods'             => 'GET',
                'callback'            => array( $this, 'get_settings' ),
                'permission_callback' => array( $this, 'get_settings_permission' ),
            )
        );
        register_rest_route( 'acptg/v2', '/settings', array(
                'methods'             => 'POST',
                'callback'            => array( $this, 'save_settings' ),
                'permission_callback' => array( $this, 'save_settings_permission' ),
            )
        );

        register_rest_route( 'acptg/v2', '/acptg_list_all', array(
                'methods'             => 'GET',
                'callback'            => array( $this, 'acptg_list_all_acptg' ),
                'permission_callback' => array( $this, 'get_settings_permission' ),
            )
        );

        register_rest_route( 'acptg/v2', '/acptg_save_cpt', array(
                'methods'             => 'POST',
                'callback'            => array( $this, 'acptg_save_cpt' ),
                'permission_callback' => array( $this, 'save_settings_permission' ),
            )
        );
    }

    public function get_settings() {
        $firstname = get_option( 'wp_acpt_settings_firstname' );
        $lastname  = get_option( 'wp_acpt_settings_lastname' );
        $email     = get_option( 'wp_acpt_settings_email' );
        $response = array(
            'firstname' => $firstname,
            'lastname'  => $lastname,
            'email'     => $email,
        );
        return rest_ensure_response( $response );
    }

    public function get_settings_permission() {
        return true;
    }

    public function save_settings( $req ) {
        $firstname = sanitize_text_field( $req['firstName'] );
        $lastname  = sanitize_text_field( $req['lastName'] );
        $email     = sanitize_text_field( $req['email'] );
        update_option( 'wp_acpt_settings_firstname', $firstname );
        update_option( 'wp_acpt_settings_lastname', $lastname );
        update_option( 'wp_acpt_settings_email', $email );
        return rest_ensure_response( 'success' );
    }

    public function save_settings_permission() {
        return current_user_can( 'publish_posts' );
    }

    public function acptg_list_all_acptg() {
        global $wpdb;
		$results = $wpdb->get_results( "SELECT option_id, option_name FROM {$wpdb->prefix}options WHERE option_name LIKE 'acptg_%'", ARRAY_A );
        return rest_ensure_response( $results );
    }

    public function acptg_save_cpt( WP_REST_Request $request ) {
        $body         = json_decode( $request->get_body(), true );
        $post_types   = $body['postTypes'];
        $labels       = $body['labels'];
        $options      = $body['options'];
        $visibility   = $body['visibility'];
        $query        = $body['query'];
        $permalink    = $body['permalink'];
        $capabilities = $body['capabilities'];
        $rest         = $body['rest'];
        error_log(print_r($post_types, true));
        $labels += array( 'singular_name' => $post_types['name_singular'], 'name' => $post_types['name_plural'] );
        unset( $post_types['name_plural'] );
        
        $args = array();
        $args['label'] = $post_types['name_singular'];
        $args['description'] = $post_types['description_key'];
        $args['labels'] = $labels;
        $supports = $this->get_supports( $options );
        $args['supports'] = $supports;
        $args['taxonomies'] = explode(',', $post_types['link_to_taxonomies']);
        $args['hierarchical'] = $post_types['hierarchical'] == 'false' ? false : true;
        $args['public'] = $visibility['visibility_public'] == 'false' ? false : true;
        $args['show_ui'] = $visibility['visibility_show_ui'] == 'false' ? false : true;
        $args['show_in_menu'] = $visibility['visibility_is_show_in_admin_sidebar'] == 'false' ? false : true;
        $args['menu_position'] = intval( $visibility['visibility_where_show_in_admin_sidebar'] );
        if( $visibility['visibility_admin_sidebar_icon'] != null) $args['menu_icon'] = $visibility['visibility_admin_sidebar_icon'];
        $args['show_in_admin_bar'] = $visibility['visibility_show_in_admin_bar'] == 'false' ? false : true;
        $args['show_in_nav_menus'] = $visibility['visibility_show_in_nav_menu'] == 'false' ? false : true;
        $args['can_export'] = $options['enable_export'] == 'false' ? false : true;
        $args['has_archive'] = $options['enable_archives'] == 'false' ? false : true;
        $args['exclude_from_search'] = $options['exclude_from_search'] == 'false' ? false : true;
        if( $query['query'] == 'true') $args['query_var'] = $query['custom_query'];
        $args['publicly_queryable'] = $query['publicly_queryable'] == 'false' ? false : true;
        if( $permalink['permalink_rewrite'] == 'false' ) $args['rewrite'] = false;
        if( $permalink['permalink_rewrite'] == 'custom' ) {
            $rewrite = array(
                'slug'       => $permalink['permalink_url_slug'],
                'with_front' => $permalink['permalink_use_url_slug'] == 'false' ? false : true,
                'pages'      => $permalink['permalink_pagination'] == 'false' ? false : true,
                'feeds'      => $permalink['permalink_feeds'] == 'false' ? false : true,
            );
            $args['rewrite'] = $rewrite;
        }
        if( $capabilities['capabilities'] == 'custom' ) {
            $capabilities_options = array(
                'edit_post'          => $capabilities['capability_edit_post'],
                'read_post'          => $capabilities['capability_read_post'],
                'delete_post'        => $capabilities['capability_delete_posts'],
                'edit_posts'         => $capabilities['capability_edit_posts'],
                'edit_others_posts'  => $capabilities['capability_edit_others_posts'],
                'publish_posts'      => $capabilities['capability_publish_posts'],
                'read_private_posts' => $capabilities['capability_read_private_post'],
            );
            $args['capabilities'] = $capabilities_options;
        } else {
            $args['capability_type'] = $capabilities['base_capability_type'];
        }
        if( $rest['show_in_rest'] == 'true' ) {
            $args['show_in_rest'] = $rest['show_in_rest'];
        }
        if( $rest['show_in_rest'] == 'false' ) {
            $args['show_in_rest'] = $rest['show_in_rest'];
        }
        $args['rest_base'] = $rest['rest_base'];
        $args['rest_controller_class'] = $rest['rest_controller_class'];

        
        error_log( print_r( $args, true ) );

        error_log( print_r( $this->make_option( $post_types['post_type_key'] ), true ) );

        if ( add_option( $this->make_option( $post_types['post_type_key'] ), $args ) ) {
            return rest_ensure_response( array(
                'msg'    => 'ACPT Generated Successfully',
                'status' => 201,
                )
            );
        } else {
            return rest_ensure_response( array(
                'msg'    => 'Failed to Generate ACPT',
                'status' => 400,
                )
            );
        }
                
    }

    public function get_supports( $supports ) {
        $all_supported = array();
        if( $supports['supports_title_checkbox'] ) $all_supported[]           = 'title';
        if( $supports['supports_editor_checkbox'] ) $all_supported[]          = 'editor';
        if( $supports['supports_excerpt_checkbox'] ) $all_supported[]         = 'excerpt';
        if( $supports['supports_author_checkbox'] ) $all_supported[]          = 'author';
        if( $supports['supports_thumbnail_checkbox'] ) $all_supported[]       = 'thumbnail';
        if( $supports['supports_comments_checkbox'] ) $all_supported[]        = 'comments';
        if( $supports['supports_trackbacks_checkbox'] ) $all_supported[]      = 'trackbacks';
        if( $supports['supports_revisions_checkbox'] ) $all_supported[]       = 'revisions';
        if( $supports['supports_custom_fields_checkbox'] ) $all_supported[]   = 'custom-fields';
        if( $supports['supports_page_attributes_checkbox'] ) $all_supported[] = 'page-attributes';
        if( $supports['supports_post_formats_checkbox'] ) $all_supported[]    = 'post-formats';

        return $all_supported;
    }

    public function make_option( $option ) {
        return 'acptg_' . $option;
    }
}

new WP_ACPTG_EndPoints();