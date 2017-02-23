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
    $('#reload').on('click', function () {
                    location.reload();
    });
    $('#reloadBack').on('click', function () {
                    window.history.back();
    });
// RWD menu    
  $('#nav-icon1').click( function() {
        var clickMenu = $(this);
		clickMenu.toggleClass('open');
        var main = $('.container');
        var sideNav = $('#mySidenav');
        if(clickMenu.hasClass('open')) {
            main.css('padding-top','150px');
            sideNav.css('height','150px');
        }
    });  
    $('.closebtn').click( function () {
        var main = $('.container');
        var sideNav = $('#mySidenav');
        main.css('padding-top','0px');
        sideNav.css('height','0%');
        var changeIcon = $('#nav-icon1');
        if (changeIcon.hasClass('open')) {
            changeIcon.removeClass('open');
        }
    });
// END rwd menu    
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
document.addEventListener("DOMContentLoaded", function() {
   var menuHeight = document.getElementsByTagName('nav')[0].offsetHeight;
        console.log(menuHeight);
        var elementScroll = document.getElementsByClassName('scroller');
    
        function scroll(el) {
          var scrollEl = document.getElementById(el).offsetTop-menuHeight;
          var start = window.scrollY;
          var move = 20;
          var adder =setInterval(function () {
              var check = window.scrollY;
              if ( start>scrollEl ) {
                  start=start-move
                  
              }
              else if ( start<scrollEl ) {
                  start=start+move;
                  if ( start>scrollEl ){
                    clearInterval(adder);
                  }
              }
              window.scrollTo(0, start)
              console.log(start)
              
          },10)
        }
        for (var i=0; i<elementScroll.length; i++) {
            elementScroll[i].addEventListener('click', function () {
                var element = this.dataset.id;
                scroll(element);
            });
        }
});
