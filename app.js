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
    
    // Morris code
    var day_data = [
                  {"elapsed": "2016", "value": 3400},
                  {"elapsed": "2017", "value": 2400},
                  {"elapsed": "2018", "value": 3000},
                  {"elapsed": "2019", "value": 1223},
                  {"elapsed": "2020", "value": 1300},
                  {"elapsed": "2021", "value": 2800},
                  {"elapsed": "2022", "value": 3000}
                ];
                Morris.Line({
                  element: 'myfirstchart',
                  data: day_data,
                  xkey: 'elapsed',
                  ykeys: ['value'],
                  labels: ['Nominal Power'],
                  parseTime: false
                });
    //End Morris code
    
    // ScrollTo Code;
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