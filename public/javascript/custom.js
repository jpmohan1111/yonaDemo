(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

( /* ACCORDION PANEL */
  function($) {
    $(document).ready(function() {
        $(".accordionAnchor").click(function() {
            $currButtons = $(this).find("p"); //caching sub paragraphs of clicked anchor

            $("p.minus").not($currButtons).hide();
            $("p.plus").not($currButtons).show();
            $currButtons.toggle();
        });
    });

    /* SMOOTH SCOLLING */
    $('a[href*="#"]:not(.accordionAnchor,.carousel-control)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(this.hash);
      target = target.length!==0 ? target : $('#');
      console.log(target.offset());
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 140
        }, 1000);
        return false;
      }
    }
  });

    setInterval(function(){ 
      // console.log($(window).scrollTop());
      var scrollPosition = $(window).scrollTop();
      console.log("scrollPosition", scrollPosition);
      console.log("Position1:::", 1400 - (scrollPosition * 0.7));
      console.log("Position2:::", 1500 - (scrollPosition * 0.7));
      console.log(window.screen.height);
      // console.log($('.container-background').height() - 170);
       }, 2000);

    /* NAVBAR STYLING ON SCROLL */
    var lastScroll = 0;
    var scrollDelta = ($('.container-background').height() - 470);
    var animationDirection = 0;
    $(window).on('scroll', function () {
    hasScrolled();
    });

    function hasScrolled() {
    var st = $(window).scrollTop();
    if(st > lastScroll){
      animationDirection = 0;
    }
    else{
      animationDirection = 1;
    }
    if (Math.abs(lastScroll - st) <= 10)
        return;


    if (st > scrollDelta && st >= 0 && animationDirection == 0) {  // Scroll Down                                    
        $('#box').css('display', 'none');
        $('.row-navbar').stop().animate({
          backgroundColor: "#34495e",
          height: '130px'},1000);
        console.log('Inside if');
        animationDirection = 1;
        lastScroll = st;
    }
    else if (st <= scrollDelta && st >= 0 && animationDirection == 1) {  // Scroll Up
        animationDirection = 0;
        $('#box').css('display', 'block');
        console.log('Inside else');
        $('.row-navbar').stop().animate({
          backgroundColor: "transparent",
          height: '130px'
        }, 1000);
        lastScroll = st;
    }
    
    }


    /* Parallax Scrolling Effect */
    jQuery(window).trigger('resize').trigger('scroll');

}(jQuery));

//$(window).scrollTop()>2000


