<?php get_header(); ?>

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
						<?php
						$logo = get_theme_mod( 'custom_logo' );
						$image = wp_get_attachment_image_src( $logo , 'full' );
						$image_url = $image[0];
						?>
						<h1 style="background-image: url('<?php echo $image_url; ?>')"><?php bloginfo('description'); ?></h1>
					</a>
				</div>
				<div class="section page-static">
					<div class="money-bottom-l"></div>
					<div class="money-bottom-r"></div>
					<div class="container">
						<div class="content">

							<?php

							if ( have_posts() ) {

								while ( have_posts() ) {
									the_post();

									get_template_part( 'template-parts/content' );
								}
							}

							?>
						</div>
					</div>
				</div>

				<?php get_template_part('template-parts/section-footer'); ?>

			</div>
		</div>
		<div class="mask"></div>
	</div>


<?php get_footer(); ?>