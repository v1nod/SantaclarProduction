(function ($) {
  Drupal.behaviors.loginIcon = {
    attach: function(context, settings) {
      // MEETING AGENDA
      // Add class to last column in first row.
      $(document).ready(function(){
        $('.field-name-field-resources-links .field-items:first .field-item:first').addClass('login');
      });
    }
  };
})(jQuery);