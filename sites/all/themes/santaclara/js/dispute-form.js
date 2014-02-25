(function ($) {
    Drupal.behaviors.disputeForm = {
        attach: function(context, settings) {
            $('.webform-client-form .webform-component-date select').chosen();     // Added by Astha to make select use chosen plugin  
            $('#edit-reset').click(function(){
                $('.webform-client-form label').show();
            });
            // Add Reset button
            $('.webform-component-managed_file input.form-file').styleFileInput({
                addClearLink : false,
                buttonAttributes : {
                    value: Drupal.t('Choose a File'), 
                    'class': 'choose-file'
                }, 
                textTagName : 'strong',
                textAttributes : {
                    text : 'No File Selected'
                }, 
                textFileListHtml: '<em>%s</em>'
            });
      
            toggle_form = 'claims';
            // Regexp
            name_regexp = /[^a-z- ]/i;
            zip_regexp = /[0-9]{5}/;
            phone_regexp = /[^0-9-()# ]/;
            email_regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            /*added by vinod to set toggle of form*/
            $('#edit-submitted-dispute-type-1').click(function(){
                if($(this).val() == 'claims'){
                    toggle_form = 'claims';
                }
            });	
            $('#edit-submitted-dispute-type-2').click(function(){
                if($(this).val() == 'medical'){
                    toggle_form = 'medical';
                }
            });	
            $('#edit-submitted-dispute-type-3').click(function(){
                if($(this).val() == 'administrative'){
                    toggle_form = 'medical';
                }
            });	
				  
            /*end of setting of toggling of form*/
         
	 
      
            /**
       * Funtion to determine if a dispute form is valid on the required fields.
       */
            function validate_dispute_form(form) {
                // Find the required fields and findout if there were filled
                valid = true;
                //check for medical
				
	
				
                // Check for fields not empty.
                if(toggle_form == 'claims'){				
                    $('#edit-submitted-member-name,#edit-submitted-member-id,edit-submitted-date-of-service, #edit-submitted-billed-amount, #edit-submitted-provider-name, #edit-submitted-npi-number, #edit-submitted-problem,' + 
                        '#edit-submitted-desired-resolution, #edit-submitted-email, #edit-captcha-response').each(function(){
                        if ( $(this).hasClass('required') ) {
                            this_value = $.trim($(this).val());
                            if ( this_value == '' ) {
                                valid = false;
                            }
                        }
                    });
                }else if (toggle_form == 'medical'){
                    // Check for fields not empty.
                    $(' #edit-submitted-provider-name, #edit-submitted-npi-number, #edit-submitted-problem,' + 
                        '#edit-submitted-desired-resolution, #edit-submitted-email, #edit-captcha-response').each(function(){
                        if ( $(this).hasClass('required') ) {
                            this_value = $.trim($(this).val());
                            if ( this_value == '' ) {
                                valid = false;
                            }
                        }
                    });
                }
        
                //  Member Name
                match_member = name_regexp.exec($('#edit-submitted-member-name').val());
                if ( match_member != null ) {
                    // There should'n be numbers at member name
                    valid = false;
                }
                
                
                //  Date Of Service
                match_dos = name_regexp.exec($('#edit-submitted-date-of-service').val());
                if ( match_dos != null ) {
                    // There should'n be numbers at member id
                    valid = false;
                }
        
                // Provider Name
                match_provider = name_regexp.exec($('#edit-submitted-provider-name').val());
                if ( match_provider != null ) {
                    // There should'n be numbers at provider name
                    valid = false;
                }
        
                // Phone
                phone = $.trim($('#edit-submitted-phone-number').val());
                if ( phone != '' ) {
                    match = phone_regexp.exec(phone);
                    if ( match != null ) {
                        // There should be only numbers, -, ( and ).
                        valid = false;
                    }
                }
        
                // Email
                email_val = $.trim($('#edit-submitted-email').val());
                if ( email_val != '' ) {
                    match = email_regexp.exec(email_val);
                    if ( match == null ) {
                        valid = false;
                    }
                }
        
                // Zipcode
                zip = $.trim($('#edit-submitted-zip-code').val());
                if ( zip != '' ) {
                    match = zip_regexp.exec(zip);
                    if ( match == null ) {
                        // There should be only 5 numbers.
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
            $('#edit-submitted-member-name,#edit-submitted-member-id, #edit-submitted-date-of-service, #edit-submitted-billed-amount, #edit-submitted-provider-name, #edit-submitted-npi-number, #edit-submitted-problem, ' +
                '#edit-submitted-email, #edit-captcha-response, ' + 
                '#edit-submitted-desired-resolution,#edit-submitted-zip-code, #edit-submitted-phone-number').keyup(function(){
                validate_dispute_form($('form.webform-client-form'));
            });
      
            // Execute validation at start
            validate_dispute_form($('form.webform-client-form'));
      
            /* Add error fields */
            $('#webform-component-provider-name').append('<div class="error_message" style="display: none;">Please enter a valid name is required</div>');
            $('#webform-component-npi-number').append('<div class="error_message" style="display: none;">Please enter a valid NPI number is required</div>');
            $('#webform-component-email').append('<div class="error_message" style="display: none;" id="error_message_email">Please enter a valid email is required</div>');
            $('#webform-component-zip-code').append('<div class="error_message" style="display: none;" id="error_message_zip">Please enter a valid Zip Code</div>');
            $('#webform-component-problem').append('<div class="error_message" style="display: none;">Please enter a description of the problem</div>');
            $('#webform-component-desired-resolution').append('<div class="error_message" style="display: none;">Please enter a desired resolution</div>');
            $('#webform-component-phone-number').append('<div class="error_message" style="display: none;">Please enter a valid phone number</div>');
            $('fieldset.captcha').append('<div class="error_message" style="display: none;">What code is in the image? field is required.</div>');
            
            
            /* Error fields added by Astha starts */
            $('#webform-component-member-name').append('<div class="error_message" style="display: none;">Please enter a valid name is required</div>');
            $('#webform-component-member-id').append('<div class="error_message" style="display: none;">Please enter a valid member id is required</div>');
            $('#webform-component-date-of-service').append('<div class="error_message" style="display: none;" id="error_message_email">Please enter a valid date is required</div>');
            $('#webform-component-billed-amount').append('<div class="error_message" style="display: none;" id="error_message_zip">Please enter a valid amount</div>');
            /* Error fields added by Astha starts */
      
            $('#edit-submitted-member-name').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {
                    // Not empty, lets validate it
                    match = name_regexp.exec(this_value);
                    if ( match != null ) {
                        $(this).parent().find('.error_message').show('fast');
                    } else {
                        $(this).parent().find('.error_message').hide('fast');
                    }
                } else {
                    $(this).parent().find('.error_message').show('fast');
                }
            });
            
            $('#edit-submitted-member-id').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {
                    // Not empty, lets validate it
                    match = name_regexp.exec(this_value);
                    if ( match != null ) {
                        $(this).parent().find('.error_message').show('fast');
                    } else {
                        $(this).parent().find('.error_message').hide('fast');
                    }
                } else {
                    $(this).parent().find('.error_message').show('fast');
                }
            });
            
            $('#edit-submitted-date-of-service').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {
                    // Not empty, lets validate it
                    match = name_regexp.exec(this_value);
                    if ( match != null ) {
                        $(this).parent().find('.error_message').show('fast');
                    } else {
                        $(this).parent().find('.error_message').hide('fast');
                    }
                } else {
                    $(this).parent().find('.error_message').show('fast');
                }
            });
      
            $('#edit-submitted-billed-amount').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {
                    // Not empty, lets validate it
                    match = name_regexp.exec(this_value);
                    if ( match != null ) {
                        $(this).parent().find('.error_message').show('fast');
                    } else {
                        $(this).parent().find('.error_message').hide('fast');
                    }
                } else {
                    $(this).parent().find('.error_message').show('fast');
                }
            });
            
            $('#edit-submitted-provider-name').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {
                    // Not empty, lets validate it
                    match = name_regexp.exec(this_value);
                    if ( match != null ) {
                        $(this).parent().find('.error_message').show('fast');
                    } else {
                        $(this).parent().find('.error_message').hide('fast');
                    }
                } else {
                    $(this).parent().find('.error_message').show('fast');
                }
            });
      
            $('#edit-submitted-email').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {
                    // Not empty, lets validate it
                    match = email_regexp.exec(this_value);
                    if ( match == null ) {
                        $(this).parent().find('.error_message').show('fast');
                    } else {
                        $(this).parent().find('.error_message').hide('fast');
                    }
                } else {
                    $(this).parent().find('.error_message').show('fast');
                }
            });
      
            $('#edit-submitted-npi-number').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value == '' ) {
                    $(this).parent().find('.error_message').show('fast');
                } else {
                    $(this).parent().find('.error_message').hide('fast');
                }
            });
      
            $('#edit-submitted-zip-code').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {
                    // Not empty, lets validate it
                    match = zip_regexp.exec(this_value);
                    if ( match == null ) {
                        $(this).parent().find('.error_message').show('fast');
                    } else {
                        $(this).parent().find('.error_message').hide('fast');
                    }
                } else {
                    $(this).parent().find('.error_message').hide('fast');
                }
            });
      
            $('#edit-submitted-phone-number').blur(function(){
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
                } else {
                    $(this).parent().find('.error_message').hide('fast');
                }
            });
      
            $('#edit-submitted-problem, #edit-submitted-desired-resolution').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value == '' ) {
                    $(this).parent().parent().find('.error_message').show('fast');
                } else {
                    $(this).parent().parent().find('.error_message').hide('fast');
                }
            });
      
            $('#edit-captcha-response').blur(function(){
                this_value = $.trim($(this).val());
                if ( this_value == '' ) {
                    $(this).parent().parent().parent().find('.error_message').show('fast');
                } else {
                    $(this).parent().parent().parent().find('.error_message').hide('fast');
                }
            });
        }
    };
})(jQuery);