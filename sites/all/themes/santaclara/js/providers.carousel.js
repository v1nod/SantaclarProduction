(function ($) {
Drupal.behaviors.providersNewsCarousel = {
    attach: function(context, settings){
      var outerChromeHeight = $('.view-provider-dashboard .view-header').outerHeight() + $('.view-provider-dashboard .view-footer').outerHeight();
      var jCarousel = $('.view-provider-dashboard').bind('create.jcarousel', function(event, carousel) {
        $('.view-provider-dashboard').height($('.view-provider-dashboard .views-row-first').outerHeight() + outerChromeHeight);
    }).jcarousel({
          'list': '.view-content'
      });

      $('.jcarousel-prev a').jcarouselControl({
        'carousel': jCarousel,
        target: '-=1'
      });
      $('.jcarousel-pagination').jcarouselPagination({
        'carousel': jCarousel,
        'perPage': 1,
        'item':function(page, carouselItems) {
            return '<div class="jcarousel-pagination-item jcarousel-pagination-item-' + page + '"><a href="#' + page + '">' + page + '</a></div>';
        }
      }).bind('createend.jcarouselpagination', function() {
    $('.jcarousel-pagination-item-1').addClass('active');
    $('.jcarousel-pagination-item').bind('active.jcarouselcontrol', function() {
            $(this).addClass('active');
        })
        .bind('inactive.jcarouselcontrol', function() {
            $(this).removeClass('active');
        });
});
      

      $('.jcarousel-prev a').jcarouselControl({
        'carousel': jCarousel,
        target: '-=1'
      }).bind('active.jcarouselcontrol', function() {
            $(this).addClass('active');
        })
        .bind('inactive.jcarouselcontrol', function() {
            $(this).removeClass('active');
        });

      $('.jcarousel-next a').jcarouselControl({
        'carousel': jCarousel,
        target: '+=1'
      }).bind('active.jcarouselcontrol', function() {
            $(this).addClass('active');
        })
        .bind('inactive.jcarouselcontrol', function() {
            $(this).removeClass('active');
        });
      jCarousel.delegate('.views-row', 'itemfirstin.jcarousel', function(event, carousel) {
        $('.view-provider-dashboard').height($(this).outerHeight() + outerChromeHeight);
      });
    }
  };
})(jQuery);