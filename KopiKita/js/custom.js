
/* <!-- 

All Right/liences is Reserved by rjksharma
For Buy this Template contact us https://rjksharma.com/contact

follow us on social media for more projects :)

► YouTube : https://www.youtube.com/@rjksharma
► Facebook : https://www.facebook.com/rjksharma23
► Instagram : https://www.instagram.com/rjksharma_/
► Twitter : https://twitter.com/rjksharma23
► Linkedin : https://www.linkedin.com/in/rjksharma23
► Github : https://github.com/rjksharma 

--> */
 
(function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/slides/testingslide.png' },
              { src: 'images/team/barley.png' },
              { src: 'images/team/fikri.png' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


