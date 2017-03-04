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
    $('.reload').on('click', function () {
                    location.reload();
    });
    $('.reloadBack').on('click', function () {
                    window.history.back();
    });
    
    // RWD menu    
      $('#nav-icon1').click( function() {
            var clickMenu = $(this);
            clickMenu.toggleClass('open');
            var main = $('.container');
            var sideNav = $('.sidenav');
            if(clickMenu.hasClass('open')) {
                main.css('padding-top','150px'); 
                sideNav.css('height','150px');
            }
        });  
        $('.closebtn').click( function () {
            var main = $('.container');
            var sideNav = $('.sidenav');
            main.css('padding-top','0px');
            sideNav.css('height','0%');
            var changeIcon = $('#nav-icon1');
            if (changeIcon.hasClass('open')) {
                changeIcon.removeClass('open');
            }
        });
    // END rwd menu   
    
    // Morris code
    
        var day_data=[]
        function dayArray () {

            var periods = $('.mapColor');
            var licensedPower = $('.powerSet');
            var arr =[];
            for (var i=0; i<periods.length; i++) {
                var val = {"period": periods.eq(i).text(), "licensed": licensedPower.eq(i).text()};
                arr.push(val);
            }
            for ( var j=0; j<arr.length; j++) {
                day_data.push(arr[j])
            }
            return day_data
        }
        dayArray();

        Morris.Bar({
          element: 'myFirstChart',
          data: day_data,
          xkey: 'period',
          ykeys: ['licensed'],
          labels: ['Power'],
          xLabelAngle: 60,
          gridTextFamily: 'Roboto',
          resize : true    
        });
    //End Morris code
    
    // CSSMap;
    
        var tools;
        if ( window.innerWidth < 490 ) {
            tools='sticky';
        }
        else {
            tools='visible';
        }  
       $("#map-poland").CSSMap({
          "size": 540,
          "tooltips": tools,
          "responsive": "auto",
           onLoad: function(mapObject){
               mapObject.find('span').off('click');
                var region = $('.poland').children();
                var tableTex= $('.mapColor');
                for (var i=0; i<tableTex.length; i++) {
                    for (var j=0; j<region.length; j++) {
                        if ( tableTex.eq(i).text() == region.eq(j).text() ) {
                            region.eq(j).addClass('active-region');
                        }
                    }
                }
           }
        });
        
    // END OF THE CSSMap;

    // ScrollTo Code;
        var clickAbout = $('.navigationMenuAbout'),
            clickBio = $('.navigationMenuBio'),
            clickContact = $('.navigationMenuContact'),
            clickRwdAbout = $('.rwdMenuAbout'),
            clickRwdBio = $('.rwdMenuBio'),
            clickRwdContact = $('.rwdMenuContact'),
            clickButton = $('.headerParaButton'),
            minusNav = $('nav').height();
            clickAbout.click(function (){
                $('html, body').animate({
                    scrollTop: $("#about").offset().top-minusNav
                }, 1500);
            });
            clickRwdAbout.click(function (){
                var rwdMinus = $('.sidenav').height();
                $('html, body').animate({
                    scrollTop: $("#about").offset().top-rwdMinus
                }, 1500);
            });
            clickBio.click(function (){
                $('html, body').animate({
                    scrollTop: $("#myFirstChart").offset().top-minusNav
                }, 1500);
            });
            clickRwdBio.click(function (){
                var rwdMinus = $('.sidenav').height();
                $('html, body').animate({
                    scrollTop: $("#myFirstChart").offset().top-rwdMinus
                }, 1500);
            });
            clickContact.click(function (){
                $('html, body').animate({
                    scrollTop: $("#footer").offset().top-minusNav
                }, 1500);
            });
            clickRwdContact.click(function (){
                var rwdMinus = $('.sidenav').height();
                $('html, body').animate({
                    scrollTop: $("#footer").offset().top-rwdMinus
                }, 1500);
            });
            clickButton.click(function (){
                $('html, body').animate({
                    scrollTop: $("#myFirstChart").offset().top-minusNav
                }, 1500);
            });
   // End of scroll code
    
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
    // END of Form validator    
});