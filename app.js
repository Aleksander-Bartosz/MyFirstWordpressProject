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
    
    // ScrollTo Code;
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
    // END OF THE ScrollTo Code;
     var form = $('form');
        form.on('submit', function () {
            
            var name = $('#name').val(),
                mail = $('#mail').val(),
                theme = $('#theme').val(),
                msg =$('#msg').val();
            var error =$('.error');
            if ( name<5 ) {
                error.eq(0).html('Imie musi mieć min 5 znaków');
                return false;
            }
            else if ( mail.indexOf('@')<1 ) {
                error.eq(1).html('Zła forma maila');
                return false;
            }
            else if ( theme<5 ) {
                error.eq(2).html('Prosze podać temat min 5 znaków');
                return false;
            } 
            else if ( msg<10 ) {
                error.eq(3).html('Prosze podać wiadomość min 10 znaków');
                return false;
            }
            else {
                return true;
            }
        })
});