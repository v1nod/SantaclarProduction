// sticky menu for PDF Policies and Procedures:
(function ($) {

  Drupal.behaviors.santaclara = {
    attach: function (context, settings) {
    
      function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#block-menu-block-2').offset().top;
      var above_div_bottom = $('#zone-header-wrapper').offset().bottom;
      if (window_top > above_div_bottom) {
        $('#block-menu-block-2').css('position', 'fixed'); 
        $('#block-menu-block-2').css('top', '0');
        $('#block-menu-block-2').css('z-index', '1000'); 
        $('#block-menu-block-2').css('width', '940px'); 
          
      }
      else {
        $('#block-menu-block-2').css('position', 'relative');
        $('#block-menu-block-2').css('z-index', 'auto'); 
        $('#block-menu-block-2').css('width', '940px'); 
      }
      
    }
      $(window).scroll(sticky_relocate);
      sticky_relocate();
      
      
   }    
    };
})(jQuery);



