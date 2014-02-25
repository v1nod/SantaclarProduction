(function ($) {
  Drupal.behaviors.newsAndAlerts = {
    attach: function(context, settings) {
      $(document).ready(function(){
        $('.news-and-alerts-block-view .view-content .views-row-first').addClass('active');
        $('.news-and-alerts-block-view .view-content .views-row:gt(0)').addClass('inactive');
        
        // Build pages
        pages = "<li class='page-previous first'><a href='#previous'><span>«</span></a></li>\n";
        active_item = '#news-alerts-item-1';
        $('.news-and-alerts-block-view .view-content .views-row').each(function(index){
          i = index + 1;
          $(this).attr('id', 'news-alerts-item-' + i);
          if ( i == 1 ) {
            pages += "<li class='page-item page-item-" + i + " active'><a data-i='" + i + "' data-id='#news-alerts-item-" + i + "' href='#item-" + i + "'><span>" + i + "</span></a></li>\n";
          } else {
            pages += "<li class='page-item page-item-" + i + "'><a data-i='" + i + "' data-id='#news-alerts-item-" + i + "' href='#item-" + i + "'><span>" + i + "</span></a></li>\n";
          }
        });
        pages += "<li class='page-next last'><a href='#next'><span>»</span></a></li>\n";
        
        // Attach it
        $('.news-and-alerts-block-view .footer .pager').html(pages);
        
        // Click on them.
        $('#news-alerts-pager li.page-item a').click(function(event){
          tid = $(this).attr('data-id');
          $(active_item).addClass('inactive').removeClass('active');
          $(tid).addClass('active').removeClass('inactive');
          active_item = tid;
          
          // Set this page. as current
          $('#news-alerts-pager .page-item.active').removeClass('active');
          $(this).parent().addClass('active');
          event.preventDefault();
        });
        
        total = $('#news-alerts-pager li.page-item').length;
        
        // Previous
        $('#news-alerts-pager li.page-previous a').click(function(event){
          // Get active
          active_i = parseInt($('#news-alerts-pager li.active a').attr('data-i'));
          if ( active_i > 1 ) {
            $('#news-alerts-pager li.page-item-' + (active_i - 1) + ' a').click();
          }
          event.preventDefault();
        });

        // Next        
        $('#news-alerts-pager li.page-next a').click(function(event){
          // Get active
          active_i = parseInt($('#news-alerts-pager li.active a').attr('data-i'));
          if ( active_i < total ) {
            $('#news-alerts-pager li.page-item-' + (active_i + 1) + ' a').click();
          }
          event.preventDefault();
        });
      });
    }
  };
})(jQuery);