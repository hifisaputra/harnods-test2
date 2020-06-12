<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'harnods-test2' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2XPD364K5TvAncngevWWnebGp3RxNUrSXQRJwgSFImJdFkacIW9muRDUPVChd62W' );
define( 'SECURE_AUTH_KEY',  'rX0fbBWlwNurLRoofzkwHirg9J1iPHoPhy1Asb9CCqk0lJ7P29chmRhTak9U5eFD' );
define( 'LOGGED_IN_KEY',    'crrRq9a4qV5FFVyuY4GGz6G6HOOQjgB0u1QzMfZji7EwB8yfB79PK2oJDXYmAWtV' );
define( 'NONCE_KEY',        'abbJHtkvZDPZjwSYqndBM3cv6u6VsL8lojAEdQ2ZVRXDsn7HLRRul8iJXMl5WzCw' );
define( 'AUTH_SALT',        'RZNd0IRONrD2G0APf3t2m6gCjjkj3VZcMM2BJ3urBQeRSfOSu9v5Tz3SWyXX6PEy' );
define( 'SECURE_AUTH_SALT', '02XMpwrmUIkj3VfydqwD3MFAmmpaIrcENWNQ83rjfaKGT08w2nIuBiPqJHvziGFq' );
define( 'LOGGED_IN_SALT',   'TvfpF4F5OPUwX1pEWUTNUzUpVrdId1pX2nDPr7i1VQ54axzXCmE3ZsXhclm3OotI' );
define( 'NONCE_SALT',       '8qE6ThxWwNoGpl67qvxvYtY5YAIXuBC0q7wyHh3vETc1Fpabh6jH35prlsumDW5q' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
