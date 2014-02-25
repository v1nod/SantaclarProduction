// Standardized Padding for Megamenu for Santa Clara
(function ($) {

  Drupal.behaviors.santaclara = {
    attach: function (context, settings) {
    
      function megamenu_width() {
        var width_of_menu = 0;
        $('.megamenu-parent').each(function() {
          width_of_menu += $(this).outerWidth( true );
        });  
        var number_of_objects = $('#megamenu-main-menu > .megamenu-parent').length;
        var width_of_objects = $('#megamenu-main-menu > li').width();
        var padding_to_split = 940-width_of_menu;
        var each_padding = padding_to_split/(number_of_objects-1);
        var each_padding = each_padding/2;
        var rounded_padding = Math.floor(each_padding);
        $('.megamenu-parent').css('padding-left', rounded_padding);
        $('.megamenu-parent').css('padding-right', rounded_padding);
        $('.megamenu-parent.first').css('padding-left', 0);
        $('.megamenu-parent.last').css('padding-right', 0);
          }
      //$(window).ready(megamenu_width);
      
      
      
   }    
    };
})(jQuery);

