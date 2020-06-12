<ul class="sosmed">
	<?php if(get_theme_mod('social_media_facebook_url')): ?>
	<li>
		<a class="fa fa-facebook-official" href="<?php echo get_theme_mod('social_media_facebook_url') ?>" target="_blank"></a>
	</li>
	<?php endif; ?>

	<?php if(get_theme_mod('social_media_instagram_url')): ?>
		<li>
			<a class="fa fa-instagram" href="<?php echo get_theme_mod('social_media_instagram_url') ?>" target="_blank"></a>
		</li>
	<?php endif; ?>

	<?php if(get_theme_mod('social_media_twitter_url')): ?>
		<li>
			<a class="fa fa-twitter" href="<?php echo get_theme_mod('social_media_twitter_url') ?>" target="_blank"></a>
		</li>
	<?php endif; ?>

	<?php if(get_theme_mod('social_media_youtube_url')): ?>
		<li>
			<a class="fa fa-youtube-play" href="<?php echo get_theme_mod('social_media_youtube_url') ?>" target="_blank"></a>
		</li>
	<?php endif; ?>
</ul>