(function($) {
  Drupal.behaviors.providerRegistration = {
    attach: function(context, settings) {
      $('label').inFieldLabels();
    }
  };
})(jQuery);