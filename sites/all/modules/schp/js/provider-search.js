(function($) {
  Drupal.behaviors.providerSearch = {
    attach: function(context, settings) {
      $('#schp-provider-search-form .form-item-zipcode label').inFieldLabels();
      
      
      
      $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
       }, 'Please select an option.');
      
      
      $('#schp-provider-search-form').validate(
        {
          errorElement : 'div',
          errorClass : 'invalid',
          'errorPlacement': function(error, element) {
            if ($(element).hasClass('form-select')) {
              error.insertAfter($(element).siblings('.chzn-container'));
            }
            else {
               error.insertAfter(element);
            };
          
            },
          rules : {
            plan : {
              valueNotEquals : ''
            },
            type : {
              valueNotEquals : ''
            },
            city : {
              valueNotEquals : ''
            }
          },
          messages : {
            zipcode : {
              'required' : 'Please Enter your Zip Code.'
            }
          }
        }
      );
      $('#schp-provider-search-form select').chosen().show();
      $('#schp-provider-search-form select#edit-type').change(
        function(){
          if ($(this).val() != '') {
            $('.accesibility-options').show();
            $('.preferred-location').show();
          }
        }
      );
    }
  };
})(jQuery);