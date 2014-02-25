// $Id: $
(function ($) {
  Drupal.behaviors.bigtexasaustin = {
    attach: function (context, settings) {
      $('#block-views-bigtexasaustin-block .view-bigtexasaustin .view-content, .front #block-system-main .view-bigtexasaustin .view-content').cycle({
          /* Other fx values to try:          
          blindX
          blindY
          blindZ
          cover
          curtainX
          curtainY
          fade
          fadeZoom
          growX
          growY
          none
          scrollUp
          scrollDown
          scrollLeft
          scrollRight
          scrollHorz
          scrollVert
          shuffle
          slideX
          slideY
          toss
          turnUp
          turnDown
          turnLeft
          turnRight
          uncover
          wipe
          zoom
          */
          next:   '#next', 
          prev:   '#prev',
          fx:     'scrollHorz',
          // Speed in miliseconds, where 1000 = 1 second.
          // Speed of transition:
          speed:  1000,
          // Speed between slides:
          timeout:  7000,
          // Pause when on mouseover:: pause: 1
          pause:   1,
          // For responsive themes:
          // slideResize: false,
          // containerResize: false,
          // Define the pager container:
          pager: 'ul#bigtexasaustin-pager',
          // Serialize the pager elements inside the pager container:
          pagerAnchorBuilder: function(idx, slide) {
            // return selector string for existing anchor
            return 'ul#bigtexasaustin-pager li:eq(' + idx + ')';
          }
      });
    }
  }
})(jQuery);
