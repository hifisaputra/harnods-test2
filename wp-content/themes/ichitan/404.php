<?php

/**
 * Template Name: Static Page
 * Template Post Type: post, page
 */

get_header();
?>

	<body class="static-page">
<div id="wrap">
	<header></header>
	<main>

	<div class="wrap">
		<div class="section">

			<?php get_template_part('template-parts/social-media'); ?>

			<div id="fullpage">

				<div class="section beranda">
					<a href="<?php bloginfo('url'); ?>">
						<h1><?php bloginfo('description'); ?></h1>
					</a>
				</div>
				<div class="section page-static">
					<div class="money-bottom-l"></div>
					<div class="money-bottom-r"></div>
					<div class="container">
						<div class="content">

							<h1 class="text-center">404 Not Found</h1>
							<a class="backtohome" href="<?php bloginfo('url'); ?>"><span class="fa fa-angle-left"> </span>Kembali ke Beranda </a>
						</div>
					</div>
				</div>

				<?php get_template_part('template-parts/section-footer'); ?>

			</div>
		</div>
		<div class="mask"></div>
	</div>

<?php get_footer(); ?>