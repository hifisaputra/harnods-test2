<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>

	<title><?php bloginfo('name'); ?></title>

	<meta name="description" content=""/>
	<link rel="shortcut icon" type="image/png" href="<?php echo get_site_icon_url(); ?>"/>
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/styles/plugins.css"/>
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/styles/main.css"/>

	<link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet">

	<?php wp_head(); ?>

</head>

