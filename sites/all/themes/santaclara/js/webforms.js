(function ($) {
  Drupal.behaviors.webforms = {
    attach: function(context, settings) {
      


    }
  };
})(jQuery);



/* code added for 'date of service' field on Submit a Dispute by Astha starts */
jQuery('document').ready(function() {
    jQuery('#webform-component-date-demo .webform-datepicker').hide();
    jQuery('#webform-component-date-demo label').click(function() {
        jQuery('#webform-component-date-demo .webform-datepicker').show();
        jQuery('#webform-component-date-demo label').hide();
		
    });
});
/* code added for 'date of service' field on Submit a Dispute by Astha ends */

