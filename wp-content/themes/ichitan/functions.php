<?php

/**
 * Init customizer settings.
 */

require get_template_directory() . '/inc/ichitan-customizer.php';
new IchitanCustomizer();


/**
 * Add support for featured image post.
 */
add_theme_support( 'post-thumbnails' );

/**
 * Add support for custom logo.
 */
add_theme_support( 'custom-logo' );

/**
 * Register navigation menus.
 */
function ichitan_menus() {

	$locations = array(
		'footer'  => __( 'Footer Navigation Menu' )
	);

	register_nav_menus( $locations );
}

add_action( 'init', 'ichitan_menus' );