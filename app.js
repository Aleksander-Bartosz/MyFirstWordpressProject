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
// RWD menu    
  $('#nav-icon1').click( function() {
        var clickMenu = $(this);
		clickMenu.toggleClass('open');
        var main = $('.container');
        var sideNav = $('#mySidenav');
        if(clickMenu.hasClass('open')) {
            main.css('padding-left','40%');
            sideNav.css('width','40%');
            
        }
    });  
    $('.closebtn').click( function () {
        var main = $('.container');
        var sideNav = $('#mySidenav');
        main.css('padding-left','0px');
        sideNav.css('width','0px');
        var changeIcon = $('#nav-icon1');
        if (changeIcon.hasClass('open')) {
            changeIcon.removeClass('open');
        }
    });
// END rwd menu    
// CSSMap;
    var windowSize = $(window).innerWidth()+20;
    if (windowSize>770) {
       $("#map-poland").CSSMap({
          "size": 540,
          "cities": true,
          "tooltips": "sticky",
          "responsive": "auto"
        });
    };
    if (windowSize<770 && windowSize>481) {
       $("#map-poland").CSSMap({
          "size": 320,
          "cities": true,
          "tooltips": "sticky",
          "responsive": "auto"
        }); 
    }
    
    $(window).on('resize', function () {
        var windowCheck = $(this).innerWidth()+20;
        console.log(windowCheck);
        if (windowCheck>770) {
           $("#map-poland").CSSMap({
              "size": 540,
              "cities": true,
              "tooltips": "sticky",
              "responsive": "auto"
            });
        };
        if (windowCheck<770 && windowCheck>481) {
           $("#map-poland").CSSMap({
              "size": 320,
              "cities": true,
              "tooltips": "sticky",
              "responsive": "auto" 
            }); 
        }
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
    $(".headerParaButton").click(function (){
                $('html, body').animate({
                    scrollTop: $("footer").offset().top-navHeight
                }, 2000);
            });
    $(".rwdMenuAbout").click(function (){
                $('html, body').animate({
                    scrollTop: $(".scrollAbout").offset().top-navHeight
                }, 2000);
            });
    $(".rwdMenuBio").click(function (){
                $('html, body').animate({
                    scrollTop: $(".localKeeper").offset().top-navHeight
                }, 2000);
            });
    $(".rwdMenuContact").click(function (){
                $('html, body').animate({
                    scrollTop: $(".formKeeper").offset().top-navHeight
                }, 2000);
            });
    // END OF THE ScrollTo Code;
    
    // Form Validator
     var form = $('form');
        form.on('submit', function () {
            
            var name = $('#name').val(),
                mail = $('#mail').val(),
                theme = $('#theme').val(),
                msg =$('#msg').val();
            var error =$('.error');
            if ( name.length<5 ) {
                error.eq(0).html('Imie musi mieć min 5 znaków');
                return false;
            }
            else if ( mail.indexOf('@')<1 ) {
                error.eq(1).html('Zła forma maila');
                return false;
            }
            else if ( theme.length<5 ) {
                error.eq(2).html('Prosze podać temat min 5 znaków');
                return false;
            } 
            else if ( msg.length<10 ) {
                error.eq(3).html('Prosze podać wiadomość min 10 znaków');
                return false;
            }
            else {
                return true;
            }
        })
    // end of Form validator    
});