(function($) {
  Drupal.behaviors.providerLogin = {
    attach: function(context, settings) {
      $('label').inFieldLabels();
      $('.form-item-disclaimer label').hover(
        function(){

          $('.disclaimer').show();
          $('.disclaimer').position({
            my : 'center bottom',
            at : 'center top',
            of : '.form-item-disclaimer'
          });
        },
        function(){
          $('.disclaimer').hide();
        }
      );
    }
  };
})(jQuery);