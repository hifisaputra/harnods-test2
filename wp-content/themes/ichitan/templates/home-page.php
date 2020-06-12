<?php

/**
 * Template Name: Home Page
 * Template Post Type: post, page
 */

get_header();
?>

<body class="home">
  <div id="wrap">
    <header></header>
      <main>

<div class="wrap">
	<div class="section">

		<?php get_template_part('template-parts/social-media'); ?>

		<nav class="navigation nav-light" id="navigation">
			<div class="burger-icon"><span></span><span></span><span></span></div>
			<ul>
				<li class="active">
					<a href="#section-beranda"><span><?php echo get_field('nama_section_beranda') ?></span></a>
				</li>
				<li>
					<a href="#section-tentang"><span><?php echo get_field('nama_section_tentang') ?></span></a>
				</li>
				<li>
					<a href="#section-mekanisme"><span><?php echo get_field('nama_section_mekanisme') ?></span></a>
				</li>
				<li>
					<a href="#section-video-pemenang"><span><?php echo get_field('nama_section_video_pemenang') ?></span></a>
				</li>
				<li>
					<a href="#section-footer"><span><?php echo get_field('nama_section_hubungi_kami') ?></span></a>
				</li>
			</ul>
		</nav>

		<div id="fullpage">

			<div class="section beranda" id="section-beranda">
				<?php
						$logo = get_theme_mod( 'custom_logo' );
						$image = wp_get_attachment_image_src( $logo , 'full' );
						$image_url = $image[0];
				?>
				<h1 style="background-image: url('<?php echo $image_url; ?>')"><?php bloginfo('description'); ?></h1>
				<a class="for-more" href="#section-tentang">
					Scroll for More <br>
					<span class="fa fa-angle-down"></span>
				</a>
				<span class="ship parallax-window" data-parallax="scroll" data-image-src="<?php echo get_field('floating_image_section_beranda'); ?>"></span>
				<div class="cloud-mid">
					<div class="cont-text">
						<u class="smoke1"></u>
						<u class="smoke2"></u>
            <span>Tersisa</span>
						<p><?php echo get_field('sisa_pemenang_section_beranda'); ?></p>
						<span>Pemenang Lagi</span>
						<p class="peridoe">
							Periode Promo: <br> <span><?php echo get_field('periode_promo_section_beranda'); ?></span>
						</p>
					</div>
				</div>
				<span class="money-beranda"></span>
				<span class="cloud-red"></span>
				<span class="cloud-green"></span>
			</div>

			<div class="section tentang">
				<div class="vframe" id="section-tentang">
					<div class="box-video">
						<div class="video-box">
							<div class="player" id="player"></div>
							<div class="thumbnail_container thumbnails" id="thumbnail" style="background-image: url(<?php echo get_field('video_thumbnail_section_tentang'); ?>);"></div>
              <a class="start-video"></a>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="money-top-l"></div>
					<div class="content">
						<h3><?php echo get_field('judul_section_tentang'); ?></h3>
						<p><?php echo get_field('konten_section_tentang'); ?></p>
						<ul class="mercant">
              <?php foreach (get_field('daftar_logo_merchant_section_tentang') as $merchant): ?>
							  <li><img src="<?php echo get_the_post_thumbnail_url($merchant->ID); ?>"> </li>
              <?php endforeach; ?>
						</ul>
					</div>
				</div>
			</div>

			<div class="section mekanisme" id="section-mekanisme">
				<div class="money-top-r"></div>
				<div class="container">
					<div class="content">
						<div class="row">
							<div class="slider-xs">
                <?php foreach (get_field('daftar_mekanisme_section_mekanisme') as $mekanisme): ?>
                  <div class="col-sm-4 col-xs-12">
                    <div class="mekanisme-img"><img src="<?php echo get_the_post_thumbnail_url($mekanisme->ID); ?>"/></div>
                    <h3><?php echo $mekanisme->post_title; ?></h3>
                    <?php echo $mekanisme->post_content; ?>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
						<div class="periode-promo">
              <?php echo get_field('periode_promo_section_mekanisme'); ?>
						</div>
						<p><?php echo get_field('keterangan_promo_section_mekanisme'); ?></p>
					</div>
				</div>
			</div>
			<div class="section video-pemenang" id="section-video-pemenang">
				<div class="container">
					<div class="money-bottom-l"></div>
					<div class="money-bottom-r"></div>
					<?php $start_video = get_field('start_video_section_video_pemenang'); ?>

					<div class="vframe">
						<div class="video-box">
							<div class="player" id="player2"></div>
							<div class="thumbnail_container thumbnail" id="thumbnail2" style="background-image: url(<?php echo get_field('thumbnail_video', $start_video->ID); ?>);"></div><a class="start-video"></a>
						</div>
						<div class="box-video">
							<div id="change-video" data-type="youtube" data-video-id="EMnZ0mu6mQ8"></div>
							<div class="box-image" style="background-image: url(<?php echo get_the_post_thumbnail_url($start_video->ID); ?>);"></div>
						</div>
					</div>
					<div class="content" id="video_text">
						<h3><?php echo $start_video->post_title; ?></h3>
			      <?php echo $start_video->post_content; ?>
					</div>
					<div class="video-thumbnail">
						<ul class="slider-xs2">

              <?php $first_video_pemenang = true; ?>
              <?php foreach (get_field('daftar_video_section_video_pemenang') as $video_pemenang): ?>

                <li class="<?php echo $first_video_pemenang ? 'active' : ''?>" data-video="<?php echo get_field('thumbnail_video', $video_pemenang->ID); ?>"><a class="lity-xs" href="<?php echo get_field('thumbnail_video', $video_pemenang->ID); ?>" data-lity="data-lity"></a>
                  <div class="vframe">
                    <div class="background">
                      <img src="<?php echo get_the_post_thumbnail_url($video_pemenang->ID); ?>"/>
                      <a class="vplayer-play">
                        <img src="<?php bloginfo('template_url'); ?>/assets/images/button-play.png"/>
                      </a>
                    </div>
                  </div>
                  <div class="text">
                    <h4><?php echo $video_pemenang->post_title; ?></h4>
                    <?php echo $video_pemenang->post_content; ?>
                  </div>
                </li>
	              <?php $first_video_pemenang = false; ?>

              <?php endforeach; ?>

						</ul>
					</div>
				</div>
			</div>

		  <?php get_template_part('template-parts/section-footer'); ?>

		</div>
	</div>
	<div class="mask"></div>
</div>

<?php get_footer(); ?>