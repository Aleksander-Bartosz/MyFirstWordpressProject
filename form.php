<!DOCTYPE html>
<html lang="pl-PL">
  <head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1" name="viewport"/>
    <meta name='description' content='BIO gazownie w polsce, instalacje inwestycje oraz nowe projekty !'/>
    <meta name='keywords' content="biogazownie, westwind, westwind biogaz, biogazownie w polsce, projektowanie biogazowni, produkcja ekoligocznej energii, rolnictwo, Biogazownia - instalacja, organiczne materiały wsadowe,energia odnawialna, ekologiczna energia"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js"></script>
    <script src="morris.min.js"></script>
    <script src="app.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="morris.css">
    <link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
    <title>WestWind BIOGAZ</title>
  </head>
  <body>
      <script>
             $(document).ready(function () {
               window.location= '#footer';
            });   
      </script>
      <div class='container'>
            <nav>
              <div class='language'>
                  <div class='languageItem'><b>PL</b></div>
                  <div class='languageItem'>ENG</div>
                  <div class='languageItem'>DE</div>
                </div>
              <div class ='logo'>
                  <a class='hrefsLinks' id='reload'></a>
                  <a class='hrefsLinks' href="http://www.w-wind.de/" target="_blank"></a>
                  <a class='hrefsLinks' href="http://www.w-solar.pl/pl/" target="_blank"></a>
                  <div class='clearner'></div>
              </div>
              <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <ul class='normalMenu'>
                  <li class='navigationMenuAbout scroller' data-id='about'><i class="fa fa-users fa-3x" aria-hidden="true"></i><br><span><b>O nas</b></span></li>
                  <li class='navigationMenuBio scroller' data-id='bio'><i class="fa fa-bolt fa-3x" aria-hidden="true"></i><br><span><b>Biogazownie</b></span></li>
                  <li class='navigationMenuContact scroller' data-id='contact'><i class="fa fa-comment-o fa-3x" aria-hidden="true"></i><br><span><b>Kontakt</b></span></li>
              </ul>
                <div id="mySidenav" class="sidenav">
                  <a class="closebtn">&times;</a>
                  <a class='rwdMenuAbout scroller' data-id='about'>O nas</a>
                  <a class='rwdMenuBio scroller' data-id='bio'>Biogazownie</a>
                  <a class='rwdMenuContact scroller' data-id='contact'>Kontakt</a>
                </div>
          </nav>
          <header id='head'>
             <ul class="cb-slideshow">
                <li class='cb-slideList'>
                    <span class='cb-slideImg'></span>
                </li>
                <li class='cb-slideList'>
                    <span class='cb-slideImg'></span>
                </li>
                <li class='cb-slideList'>
                    <span class='cb-slideImg'></span>
                </li>
                 <li class='cb-slideList'>
                    <span class='cb-slideImg'></span>
                 </li>
                 <li class='cb-slideList'>
                    <span class='cb-slideImg'></span>
                 </li>
                 <li class='cb-slideList'>
                    <span class='cb-slideImg'></span>
                 </li>
                 <div class='headerParaContainer'>
                          <h1><span  class='greenLogoPart'>West</span><span  class='blueLogoPart'>Wind</span> BIOGAZ</h1>
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis odio dictum, hendrerit ex sed, placerat massa. Nulla ac lectus non risus ornare scelerisque sed in odio. Donec venenatis cursus sapien, nec venenatis lacus sollicitudin nec.Umc </p>
                          <button class='headerParaButton'>Sprawdź</button>
                    </div> 
              </ul> 
      </header>
            <article id='about'>
                <div class='tringle'></div>
              <img src='css/img/gazzzz.jpg' alt='connection Problem'>
                <div class='biogazInfo'>
                    <h2 class='scrollAbout'>O Firmie</h2>
                    <p>Nulla nec ultricies nisi. Pellentesque ac odio dolor. In ullamcorper elit a purus blandit lobortis. Quisque pellentesque lectus in eros porta, vitae condimentum quam tincidunt. Vivamus sollicitudin, leo et tincidunt interdum, augue tortor facilisis mi, eget ultricies elit nunc ut lacus. Cras venenatis, ligula ac iaculis porttitor, quam felis semper elit, in molestie quam lorem id nulla. Curabitur viverra diam ac auctor mollis. Maecenas sagittis quam quis lorem ornare malesuada. Pellentesque tempor ligula a libero interdum consequat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                </div>
            </article>
          <section id='bio'>
              <div class='tringle'></div>
              <div class='coverSection'>
                  <div class='mapChartKeeper'>
                    <div id='map'></div>  
                    <div class='localKeeper' id="myfirstchart"></div>
                  </div>      
                  <table>
                      <thead>
                          <tr>
                              <th class='noneRwd'>Uruchomienie</th>
                              <th>BioGazownia</th>
                              <th>Moc Nominalna</th>
                              <th>Powierzchnia</th>
                          </tr>
                          <tr>
                              <td class='noneRwd'>2016</td>
                              <td>Toruń</td>
                              <td>3400KW</td>
                              <td>10km<SUP>2</SUP></td>
                          </tr>
                          <tr>
                              <td class='noneRwd'>2017</td>
                              <td>Bydgoszcz</td>
                              <td>2400KW</td>
                              <td>12km<SUP>2</SUP></td>
                          </tr>
                          <tr>
                              <td class='noneRwd'>2018</td>
                              <td>Kraków</td>
                              <td>3000KW</td>
                              <td>14km<SUP>2</SUP></td>
                          </tr>
                          <tr>
                              <td class='noneRwd'>2019</td>
                              <td>Gdańsk</td>
                              <td>1223KW</td>
                              <td>5km<SUP>2</SUP></td>
                          </tr>
                          <tr>
                              <td class='noneRwd'>2020</td>
                              <td>Łódz</td>
                              <td>1300KW</td>
                              <td>9km<SUP>2</SUP></td>
                          </tr>
                          <tr>
                              <td class='noneRwd'>2021</td>
                              <td>Wrocław</td>
                              <td>2800KW</td>
                              <td>5km<SUP>2</SUP></td>
                          </tr>
                          <tr>
                              <td class='noneRwd'>2022</td>
                              <td>Gdynia</td>
                              <td>3000KW</td>
                              <td>9km<SUP>2</SUP></td>
                          </tr>
                      </thead>
                  </table>
                </div>  
          </section>
          <footer id='footer'>
              
              <div class='footerInfo' id='contact'>
                  <div>
                      <address class='footerInfoText'>
                          <b>WestWind BIOGAZ</b> Sp. z o.o. Ul. Gdańska 4a
                          87-100 Toruń<br>
                          info@w-biogaz.pl<br>
                          Tel: +48 56 652 89 10
                      </address>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.1963106325084!2d18.69236321574921!3d53.03480910570138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ccb5c1314e2e3%3A0xeefe4b49ebae6cb9!2zR2RhxYRza2EgNEEsIFRvcnXFhCwgUG9sc2th!5e0!3m2!1spl!2sus!4v1484050876510" allowfullscreen></iframe>
                  </div>      
                  <div class='formKeeper'>
                      <form method="post" action="form.php">
                          <input type='text' placeholder="Imię i Nazwisko" class='formText holderColor' name ='name' id='name'>
                          <div class='error'></div>
                          <input type='text' placeholder="E-mail" class='formText holderColor' name ='email' id='mail'>
                          <div class='error'></div>
                          <input type='text' placeholder="Temat" class='formText holderColor' name ='theme' id='theme'>
                          <div class='error'></div>
                          <textarea rows="13" placeholder="Wiadomość" class='holderColor' name ='msg' id='msg'></textarea>
                          <div class='error'></div>
                          <div class='formSpaceDiv'>
                              <h1 class='correctMsg'>Wiadomość została wysłana</h1>     
                          </div>
                      </form>
                    </div>      
              </div>
              <div class='reserved'>
                  <div class='coverReserved'>
                      <div class='textReserved'>
                         <span class='greenLogoPart'>West</span><span class='blueLogoPart'>Wind</span> BIOGAZ @2017
                      </div>      
                </div>
              </div>
          </footer>
        </div>
      <script>
      var map;
      function initMap() {
        var zoomChangeSmall=6;
        if ( window.outerWidth< 390 ) {
            zoomChangeSmall=5;
        }  
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: zoomChangeSmall,
          center: new google.maps.LatLng(52.323424, 19.389433),
          mapTypeId: 'roadmap'
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
       

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            map: map
          });
        }

        var features = [
           {
            position: new google.maps.LatLng(53.011776, 18.612904),
            
          }, {
            position: new google.maps.LatLng(53.126825, 18.003281),
            
          }, {
            position: new google.maps.LatLng(50.074593, 19.952175),
            
          }, {
            position: new google.maps.LatLng(54.362030, 18.619659),
            
          }, {
            position: new google.maps.LatLng(54.522007, 18.534937),
            
          }, {
            position: new google.maps.LatLng(51.116341, 17.011621),
            
          }, {
            position: new google.maps.LatLng(51.710310, 19.431399),
            
          }
        ];

        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDyL2sNvdz0359UHeTRR4BFTz-yYUbMp-Q&callback=initMap">
    </script>
      <?php
				$emailBody = "Imie i nazwisko: ".$_POST['name']."\n"
                ."Email: ".$_POST['email']."\n"
                ."Temat: ".$_POST['theme']."\n"
                ."Wiadomość: ".$_POST['msg'];
                mail("info@w-biogaz.pl","BIOGAZOWNIA Zapytanie", $emailBody);
         ?>
 </body>
</html>
