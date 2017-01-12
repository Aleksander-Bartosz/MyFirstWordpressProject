$(document).ready(function () {
    
    var navCatcher = $('nav');
    $(window).on('scroll', function () {
        
        var topLook = $(window).scrollTop();
        if (topLook>0) {
            navCatcher.addClass('scrollOpacity');
        }
        else {
            navCatcher.removeClass('scrollOpacity');
        }
    });
    
  // CSSMap;
   $("#map-poland").CSSMap({
      "size": 540,
      "cities": true,
      "tooltips": "sticky",
      "responsive": "auto"
    });
// END OF THE CSSMap;
    var catchUnwantedColor = $('#map-poland > ul > li');
    
    setTimeout( function () {
        if (catchUnwantedColor.hasClass('active-region')) {
            catchUnwantedColor.removeClass('active-region');
    }},50)
    
    var navHeight = navCatcher.height();
    $("body > div > nav > ul > li.navigationMenuAbout").click(function (){
                $('html, body').animate({
                    scrollTop: $(".scrollAbout").offset().top-navHeight
                }, 2000);
            });
      $("body > div > nav > ul > li.navigationMenuBio").click(function (){
                $('html, body').animate({
                    scrollTop: $("#map-poland").offset().top-navHeight
                }, 2000);
            });
      $("body > div > nav > ul > li.navigationMenuContact").click(function (){
                $('html, body').animate({
                    scrollTop: $("footer").offset().top-navHeight
                }, 2000);
            });
});