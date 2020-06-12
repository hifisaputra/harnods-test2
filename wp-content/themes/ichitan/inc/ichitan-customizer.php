<?php

class IchitanCustomizer {

	public function __construct() {
		add_action('customize_register', [$this, 'register_customize_sections']);
	}

	/**
	 * Register customizer sections.
	 *
	 * @param $wp_customize
	 */
	public function register_customize_sections ( $wp_customize ) {
		$this->social_media_section($wp_customize);
		$this->footer_section($wp_customize);
	}

	/**
	 * Sanitize url input
	 *
	 * @param $input
	 * @return mixed
	 */
	public function sanitize_custom_url ( $input ) {
		return filter_var( $input, FILTER_SANITIZE_URL );
	}

	/**
	 * Sanitize text input
	 *
	 * @param $input
	 * @return mixed
	 */
	public function sanitize_custom_text ( $input ) {
		return filter_var( $input, FILTER_SANITIZE_STRING );
	}

	/**
	 * Create section to modify social media links.
	 *
	 * @param $wp_customize
	 */
	public function social_media_section ( $wp_customize ) {

		$wp_customize->add_section('ichitan_social_media', [
			'title' => __('Social Media', 'ichitan'),
			'priority' => 30
		]);

		$social_media_list =  [
			'facebook',
			'instagram',
			'twitter',
			'youtube'
		];

		foreach ( $social_media_list as $social_media ) {
			$wp_customize->add_setting("social_media_{$social_media}_url", [
				'default'        => '',
				'sanitize_callback' => [$this, 'sanitize_custom_url']
			]);

			$wp_customize->add_control("social_media_{$social_media}_url", [
				'label'   => ucfirst($social_media),
				'section' => 'ichitan_social_media',
				'type'    => 'text',
				'input_attrs' => [
					'placeholder'    => "https://{$social_media}.com/example"
				]
			]);
		}
	}
	/**
	 * Create section to modify contact address and copyright text.
	 *
	 * @param $wp_customize
	 */
	public function footer_section ( $wp_customize ) {
		$wp_customize->add_section('ichitan_footer', [
			'title' => __('Footer', 'ichitan'),
			'priority' => 30
		]);

		$wp_customize->add_setting("footer_copy", [
			'default'        => '',
			'sanitize_callback' => [$this, 'sanitize_custom_text']
		]);

		$wp_customize->add_control("footer_copy", [
			'label'   => 'Copyright',
			'section' => 'ichitan_footer',
			'type'    => 'text'
		]);

		$wp_customize->add_setting("footer_contact_text", [
			'default'        => '',
		]);

		$wp_customize->add_control("footer_contact_text", [
			'label'   => 'Contact Text',
			'section' => 'ichitan_footer',
			'type'    => 'text'
		]);

		$wp_customize->add_setting("footer_contact_address", [
			'default'        => '',
			'sanitize_callback' => [$this, 'sanitize_custom_text']
		]);

		$wp_customize->add_control("footer_contact_address", [
			'label'   => 'Contact Address',
			'section' => 'ichitan_footer',
			'type'    => 'text'
		]);
	}
}