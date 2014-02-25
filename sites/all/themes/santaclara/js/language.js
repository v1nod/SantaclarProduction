// language selector for body of page
(function ($) {

  Drupal.behaviors.santaclara = {
    attach: function (context, settings) {
      $(document).ready(function() {
        var language_cookie = $.cookie('language');
	    $("#languageselector").val(language_cookie);
	    $('.' + language_cookie + ' .field-items').addClass('active');
        var languageSelect = $("#languageselector").val();
        $('.' + languageSelect + ' .field-items').addClass('active');
      });     
      $("#languageselector").click(function() {
        var languageSelect = $("#languageselector").val();
        $('.field-name-body .field-items').removeClass('active');
        $('.field-name-field-spanish .field-items').removeClass('active');
        $('.field-name-field-vietnamese .field-items').removeClass('active');
        $('.' + languageSelect + ' .field-items').addClass('active');
        $.cookie('language', languageSelect, {path: '/'});
      });
    }    
      
    };
    
})(jQuery);