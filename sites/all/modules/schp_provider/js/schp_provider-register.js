(function ($) {
  Drupal.behaviors.providerRegistration = {
    attach: function(context, settings) {
      // Regexp
      name_regexp = /[^a-z- ]/i;
      zip_regexp = /[0-9]{5}/;
      phone_regexp = /[^0-9-()# ]/;
      email_regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      $('#edit-submit').click(function(event){
        if ( $(this).hasClass('disabled') ) {
          // Do nothing
        } else {
          $('#schp-provider-register-form').submit();
        }
        event.preventDefault();
      });
      
      /**
       * Funtion to determine if a dispute form is valid on the required fields.
       */
      function validate_dispute_form(form) {
        // Find the required fields and findout if there were filled
        valid = true;
        // Check for fields not empty.
        $('#edit-name, #edit-phone, #edit-mail,' + 
        '#edit-provider-name, #edit-company-name, #edit-company-address').each(function(){
          if ( $(this).hasClass('required') ) {
            this_value = $.trim($(this).val());
            if ( this_value == '' ) {
              valid = false;
            }
          }
        });
        
        // Name
        match = name_regexp.exec($('#edit-name').val());
        if ( match != null ) {
          // There should'n be numbers at provider name
          valid = false;
        }
        
        // Provider Name
        match = name_regexp.exec($('#edit-provider-name').val());
        if ( match != null ) {
          // There should'n be numbers at provider name
          valid = false;
        }
        
        // Phone
        phone = $.trim($('#edit-phone').val());
        if ( phone != '' ) {
          match = phone_regexp.exec(phone);
          if ( match != null ) {
            // There should be only numbers, -, ( and ).
            valid = false;
          }
        }
        
        // Email
        email_val = $.trim($('#edit-mail').val());
        if ( email_val != '' ) {
          match = email_regexp.exec(email_val);
          if ( match == null ) {
            valid = false;
          }
        }

        if ( valid == true ) {
          $('#edit-submit').removeClass('disabled');
        } else {
          $('#edit-submit').addClass('disabled');
        }
        return valid;
      }
      
      // Attach onchange event on fields to enable or disable the submit button.
      $('#edit-name, #edit-phone, #edit-mail, ' +
        '#edit-provider-name, #edit-company-name, #edit-company-address').keyup(function(){
        validate_dispute_form($('#schp-provider-register-form'));
      });
      
      // Execute validation at start
      validate_dispute_form($('#schp-provider-register-form'));
      
      /* Add error fields */
      // edit-name, #edit-phone, #edit-mail, edit-provider-name, #edit-company-name, #edit-company-address
      $('.form-item-name').append('<div class="error_message" style="display: none;">Please enter a valid name</div>');
      $('.form-item-phone').append('<div class="error_message" style="display: none;">Please enter a valid phone number</div>');
      $('.form-item-mail').append('<div class="error_message" style="display: none;" id="error_message_email">Please enter a valid e-mail address</div>');
      $('.form-item-provider-name').append('<div class="error_message" style="display: none;">Please enter a valid provider name</div>');
      $('.form-item-company-name').append('<div class="error_message" style="display: none;">Please enter a valid company/medical group name</div>');
      $('.form-item-company-address').append('<div class="error_message" style="display: none;">Please enter a valid company address</div>');
      
      
      $('#edit-name, #edit-provider-name').blur(function(){
        this_value = $.trim($(this).val());
        if ( this_value != '' ) {
          // Not empty, lets validate it
          match = name_regexp.exec(this_value);
          if ( match != null ) {
            $(this).parent().find('.error_message').show('fast');
          } else {
            $(this).parent().find('.error_message').hide('fast');
          }
        }
      });
      
      $('#edit-mail').blur(function(){
        this_value = $.trim($(this).val());
        if ( this_value != '' ) {
          // Not empty, lets validate it
          match = email_regexp.exec(this_value);
          if ( match == null ) {
            $(this).parent().find('.error_message').show('fast');
          } else {
            $(this).parent().find('.error_message').hide('fast');
          }
        } 
      });
      
      $('#edit-phone').blur(function(){
        phone = $.trim($(this).val());
        if ( phone != '' ) {
          // Not empty, lets validate it
          match = phone_regexp.exec(phone);
          if ( match != null ) {
            // There should be only numbers, - and ().
            $(this).parent().find('.error_message').show('fast');
          } else {
            $(this).parent().find('.error_message').hide('fast');
          }
        }
      });
    }
  };
})(jQuery);