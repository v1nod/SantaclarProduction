(function ($) {
  Drupal.behaviors.meetings = {
    attach: function(context, settings) {
      // MEETING AGENDA
      // Add class to last column in first row.
      if ( $('.cool-table.meeting-agenda').length == 1 ) {
        $('table.views-table thead th:last,table.sticky-header thead th:last').addClass('last');
        $('table.views-table thead th:first, table.sticky-header thead th:first').addClass('first').addClass('date');
        $('table.views-table thead th:eq(1), table.sticky-header thead th:eq(1)').addClass('time');
        $('table.views-table thead th:eq(2), table.sticky-header thead th:eq(2)').addClass('desc');
        $('table.views-table thead th:eq(3), table.sticky-header thead th:eq(3)').addClass('agenda');
        $('table.views-table thead th:eq(4), table.sticky-header thead th:eq(4)').addClass('agenda-packate');
        $('table.views-table thead th:eq(5), table.sticky-header thead th:eq(5)').addClass('meetings');
      }
      
      // FORMS AND DOCUMENTS
      // Add class to last column in first row.
      if ( $('.cool-table.forms-and-documents').length == 1  ) {
        columns = $('table.sticky-header thead th').length;
        columns -= 4;
        $('table.views-table thead th:last,table.sticky-header thead th:last').addClass('last');
        $('table.views-table thead th:first, table.sticky-header thead th:first').addClass('first');
        $('table.views-table thead th:eq(0), table.sticky-header thead th:eq(0)').addClass('name');
        $('table.views-table thead th:gt(' + columns + '), table.sticky-header thead th:gt(' + columns + ')').addClass('download');
      }
      
      // NEWSLETTERS
      // Add class to last column in first row.
      if ( $('.cool-table.newsletters').length == 1  ) {
        $('table.views-table thead th:last,table.sticky-header thead th:last').addClass('last');
        $('table.views-table thead th:first, table.sticky-header thead th:first').addClass('first').addClass('date');
        $('table.views-table thead th:gt(0), table.sticky-header thead th:gt(0)').addClass('download');
      }

      // Add Hover Class to row when mouseover
      $('table.views-table tbody tr').hover(
        function() {
          $(this).addClass('hover');
        }, 
        function() {
          $(this).removeClass('hover');
        }
      );
      
      // Add select style and behavior
      $('#meeting-archive-year').chosen().change(function(){
        url = $(this).val();
        if ( url != '' ) {
          window.location.href=url;
        }
      });
    }
  };
})(jQuery);