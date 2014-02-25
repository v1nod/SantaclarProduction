// Standardized Padding for Megamenu for Santa Clara
(function ($) {

  Drupal.behaviors.santaclara = {
    attach: function (context, settings) {
    
      function callout_height() {
        var max_height = -1;
        $("#zone-content .block").each(function() {
        var h = $(this).height(); 
        max_height = h > max ? h : max;
        $('#block-block-7').css('height', max_height);
        $('#block-block-8').css('height', max_height);
        $('#block-block-9').css('height', max_height);
        $('#block-block-10').css('height', max_height);
          }
      $(window).ready(callout_height);
      
      
      
   }    
    };
})(jQuery);



