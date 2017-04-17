<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package OnePress
 */
?>
    <footer id="colophon" class="site-footer" role="contentinfo">
        <?php
        $onepress_btt_disable = get_theme_mod('onepress_btt_disable');
        $onepress_social_footer_title = get_theme_mod('onepress_social_footer_title', esc_html__('Keep Updated', 'onepress'));

        $onepress_newsletter_disable = get_theme_mod('onepress_newsletter_disable', '1');
        $onepress_social_disable = get_theme_mod('onepress_social_disable', '1');
        $onepress_newsletter_title = get_theme_mod('onepress_newsletter_title', esc_html__('Join our Newsletter', 'onepress'));
        $onepress_newsletter_mailchimp = get_theme_mod('onepress_newsletter_mailchimp');

        if ( $onepress_newsletter_disable != '1' || $onepress_social_disable != '1' ) : ?>
            <div class="footer-connect">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-2"></div>
                        <?php if ($onepress_newsletter_disable != '1') : ?>
                            <div class="col-sm-4">
                                <div class="footer-subscribe">
                                    <?php if ($onepress_newsletter_title != '') echo '<h5 class="follow-heading">' . $onepress_newsletter_title . '</h5>'; ?>
                                    <form novalidate="" target="_blank" class="" name="mc-embedded-subscribe-form" id="mc-embedded-subscribe-form" method="post"
                                          action="<?php if ($onepress_newsletter_mailchimp != '') echo $onepress_newsletter_mailchimp; ?>">
                                        <input type="text" placeholder="<?php esc_attr_e('Enter your e-mail address', 'onepress'); ?>" id="mce-EMAIL" class="subs_input" name="EMAIL" value="">
                                        <input type="submit" class="subs-button" value="<?php esc_attr_e('Subscribe', 'onepress'); ?>" name="subscribe">
                                    </form>
                                </div>
                            </div>
                        <?php endif; ?>

                        <div class="<?php if ( $onepress_newsletter_disable == '1' ) {
                            echo 'col-sm-8';
                        } else {
                            echo 'col-sm-4';
                        } ?>">
                            <?php
                            if ($onepress_social_disable != '1') {
                                ?>
                                <div class="footer-social">
                                    <?php
                                    if ($onepress_social_footer_title != '') echo '<h5 class="follow-heading">' . $onepress_social_footer_title . '</h5>';

                                    $socials = onepress_get_social_profiles();
                                    /**
                                     * New Socials profiles
                                     *
                                     * @since 1.1.4
                                     * @change 1.2.1
                                     */
                                    echo '<div class="footer-social-icons">';
                                    if ( $socials ) {
                                        echo $socials;
                                    } else {
                                        /**
                                         * Deprecated
                                         * @since 1.1.4
                                         */
                                        $twitter = get_theme_mod('onepress_social_twitter');
                                        $facebook = get_theme_mod('onepress_social_facebook');
                                        $google = get_theme_mod('onepress_social_google');
                                        $instagram = get_theme_mod('onepress_social_instagram');
                                        $rss = get_theme_mod('onepress_social_rss');

                                        if ($twitter != '') echo '<a target="_blank" href="' . $twitter . '" title="Twitter"><i class="fa fa-twitter"></i></a>';
                                        if ($facebook != '') echo '<a target="_blank" href="' . $facebook . '" title="Facebook"><i class="fa fa-facebook"></i></a>';
                                        if ($google != '') echo '<a target="_blank" href="' . $google . '" title="Google Plus"><i class="fa fa-google-plus"></i></a>';
                                        if ($instagram != '') echo '<a target="_blank" href="' . $instagram . '" title="Instagram"><i class="fa fa-instagram"></i></a>';
                                        if ($rss != '') echo '<a target="_blank" href="' . $rss . '"><i class="fa fa-rss"></i></a>';
                                    }
                                    echo '</div>';
                                    ?>
                                </div>
                            <?php } ?>
                        </div>
                        <div class="col-sm-2"></div>
                    </div>
                </div>
            </div>
        <?php endif; ?>

        <div class="site-info">
            <div class="container">
                <p>@CopyRight Aleksander Bartosz</p>
            </div>
        </div>
        <!-- .site-info -->

    </footer><!-- #colophon -->
<?php
/**
 * Hooked: onepress_site_footer
 *
 * @see onepress_site_footer
 */
do_action( 'onepress_site_end' );
?>
</div><!-- #page -->

<?php wp_footer(); ?>
<script src="jquery.countdown.js"></script>
<script type="text/javascript">
    // Start of Counter
  var $ = jQuery.noConflict();
    $( document ).ready(function( $ ) {
      $(".count").countdown("2017/07/12", function(event) {
            $(this).text(
              event.strftime('%D DNI %H:%M:%S')
            );
        });
    });
    // End of Counter
    // light Box
        var imgFiller = $('.attachment-full');
        imgFiller.on('click', function () {
            
            var src = $(this).attr('src');
            var divKeeper = $('<div>');
            var containerImg = $('<div>');
            var creatClose = $('<div>');
            divKeeper.addClass('fullScreen');
            containerImg.addClass('containerImg');
            creatClose.addClass('clsBtn');
            var imgCreat = $('<img>');
                imgCreat.attr('src', src);
                containerImg.append(imgCreat);
                containerImg.append(creatClose);
                divKeeper.append(containerImg);
				divKeeper.appendTo("body").hide().fadeIn();
            creatClose.on('click', function () {
                divKeeper.fadeOut();
            })
        });
    // End of Light Box
    //Start Google Map
       function initMap() {
            
          var mapOption =  {
          zoom: 14,
          center: new google.maps.LatLng(53.0129480, 18.598323)
          };
          var map = new google.maps.Map(document.getElementById('myGoogleMap'),mapOption);      
          var church = new google.maps.LatLng(53.007559, 18.602692)
          var hotel = new google.maps.LatLng(53.012897, 18.613339)
         var churchMarker = new google.maps.Marker({
          position: church,
          map: map,
          icon : {
            url: 'img/partyMark.png',
            scaledSize: new google.maps.Size(50,50)
            }
         });
        var hotelMarker = new google.maps.Marker({
          position: hotel,
          map: map,
          icon : {
            url: 'img/weddingMark.png',
            scaledSize: new google.maps.Size(50,50)
            }
        });
      }
    // end Google Map
</script>
<script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcCFdiL4OKhmlg0rTeeTOuFQbRz1YzKng&callback=initMap">
</script>
</body>
</html>
