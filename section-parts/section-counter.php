<?php
$onepress_counter_id       = get_theme_mod( 'onepress_counter_id', esc_html__('counter', 'onepress') );
$onepress_counter_disable  = get_theme_mod( 'onepress_counter_disable' ) == 1 ? true : false;
$onepress_counter_title    = get_theme_mod( 'onepress_counter_title', esc_html__('Our Numbers', 'onepress' ));
$onepress_counter_subtitle = get_theme_mod( 'onepress_counter_subtitle', esc_html__('Section subtitle', 'onepress' ));
if ( onepress_is_selective_refresh() ) {
    $onepress_counter_disable = false;
}

// Get counter data
$boxes = onepress_get_section_counter_data();
if ( ! empty ( $boxes ) ) {
    $desc = get_theme_mod( 'onepress_counter_desc' );
    ?>
    <?php if ($onepress_counter_disable != '1') : ?>
        <?php if ( ! onepress_is_selective_refresh() ){ ?>
        <section id="<?php if ($onepress_counter_id != '') echo $onepress_counter_id; ?>" <?php do_action('onepress_section_atts', 'counter'); ?>
                 class="<?php echo esc_attr(apply_filters('onepress_section_class', 'section-counter section-padding onepage-section', 'counter')); ?>">
            
        </section>
        <h2 id='myGift'>Kody Rabatowe na prezenty w wybranych sklepach</h2>
        <div class="logisticWrapper spaceLogistic">
                <div class="prezentLog"><a href="http://www.apart.pl" target="_blank"><img class="imgLog" src="img/apart.png" /></a>Kod Rabatowy Ślub03

                </div>
                <div class="prezentLog"><a href="https://www.zara.com/pl" target="_blank"><img class="imgLog" src="img/zara.png" /></a>Kod Rabatowy Ślub03

                </div>
                <div class="prezentLog"><a href="http://home-you.com/pl/" target="_blank"><img class="imgLog" src="img/home.png" /></a>Kod Rabatowy Ślub03

                </div>
            </div>
        <?php } ?>
    <?php endif;
}
