<div class="section footer" id="section-footer">
	<footer>
		<div class="container">
			<div class="foot-menu">
				<nav>
					<ul>
						<?php
						if ( has_nav_menu( 'footer' ) ) {

							wp_nav_menu(
								array(
									'container'  => '',
									'items_wrap' => '%3$s',
									'theme_location' => 'footer'
								)
							);
						}
						?>
					</ul>
				</nav>
			</div>
			<div class="foot-copyright">
				<p><?php echo get_theme_mod('footer_copy'); ?></p>
			</div><a class="call-centre" href="tel:085-5158-0000"><span class="icon-call"></span>
				<p><?php echo get_theme_mod('footer_contact_text'); ?><br/><span class="phone-number"><?php echo get_theme_mod('footer_contact_address'); ?></span></p></a>
		</div>
	</footer>
</div>