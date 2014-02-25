(function ($) {
  Drupal.behaviors.genericPage = {
    attach: function(context, settings) {
      $('.field-collection-container > .field > .field-items').each(function(index){
        text = $.trim($(this).text());
        if ( text == '' ) {
          $(this).parent().parent().remove();
        }
      });
    }
  };
})(jQuery);
