(function ($) {
  Drupal.behaviors.careerOpportunity = {
    attach: function(context, settings) {
      // Add Last and Penultimate class
      $('article.node-career-opportunity .group-left > .field:last').addClass('last');
      $('article.node-career-opportunity .group-left > .field').eq(-2).addClass('penultimate');
      
      // Add Essential (E) and Desired (D) labels.
      label_after = "<label class=\"label-after\"><span>";
      label_after += Drupal.t('Essential (E)') + "</span> <span class=\"desired\">";
      label_after += Drupal.t('Desired (D)') + "</span></label>\n";
      $('article.node-career-opportunity .group-left .field-name-field-requirements .field-label').after(label_after);
    }
  };
})(jQuery);