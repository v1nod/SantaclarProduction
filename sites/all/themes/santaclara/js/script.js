(function ($) {
    Drupal.behaviors.callOutBlocksHeight = {
      attach: function (context, settings) {
        var maxHeight = Math.max.apply(null, $('.view-call-out-blocks .view-content').map(function ()
        {
            return $(this).height();
        }).get());
        $('.view-call-out-blocks .view-content').height(maxHeight);
        
        $('.view-media-coverage .views-row').each(
          function(i, e){
            if ($(this).find('.views-field-field-document').length > 0) {
              $(this).find('.views-field-title').remove();
            };
            var maxHeight = Math.max.apply(null, $(this).find('.views-field').map(function ()
            {
                return $(this).height();
            }).get());
            $(this).find('.views-field').height(maxHeight);
            $(this).find('.views-field-field-publication-date').css({lineHeight:maxHeight + 'px'});
          }
        );

        
        
    }
  };
  
  Drupal.behaviors.loginDropdown = {
    attach: function(context, settings) {
      $('#block-menu-menu-login-register').hover(
        function(){
          $(this).toggleClass('content-visible');
          $('#block-menu-menu-login-register .content').css('left', $('#block-menu-menu-login-register .line h2.block-title').position().left - 170);
        },
        function(){
          $(this).toggleClass('content-visible');
        }
      );
    }
  };
  
  Drupal.behaviors.pagerMod = {
  	attach: function(context, settings) {
  		$('.pager .pager-previous a').html('&laquo;');
  		$('.pager .pager-next a').html('&raquo;');
  	}
  
  };
  
  
  Drupal.behaviors.warningModal = {
  	attach: function(context, settings) {
  		if($('body').hasClass('page-node-6588')) {
  		
  			$('.group-right .group_resources').appendTo('.group-right');
  			
  			$('a.ext').click(function(e) {
  			
  				var warnLink = $(this).attr('href'),
  				    warnWidth = $(document).width(),
  				    warnWinWidth = $(window).width(),
  				    warnLeft = (warnWinWidth-486)/2,
  				    warnHeight = $(document).height(),
  				    warnWinHeight = $(window).height(),
  				    warnTop = (warnWinHeight-190)/2;
  				
  				$('body').append('<div id="warning-screen" style="width:'+warnWidth+'px; height:'+warnHeight+'px"><div id="warning-modal" style="top:'+warnTop+'px; left:'+warnLeft+'px"><header>Alert</header><p>You are now leaving Santa Clara Family Health Plan\'s Medicare section.</p><p><a data-link="' + warnLink + '" class="continue">Continue</a><a class="cancel">Cancel</a></p></div></div>')
  			
  				$('#warning-modal .cancel').click(function() {
					  $('#warning-screen').fadeOut('fast', function() {
					  	$('#warning-screen').remove();
					  });
					});
					
					$('#warning-modal .continue').click(function() {
					  window.open(warnLink, '_blank');
					  $('#warning-screen').fadeOut('fast', function() {
					  	$('#warning-screen').remove();
					  });
					});
					
					e.preventDefault();
  			
  			});
  			
  		} else {
  		
  		}
  		
  		
  	}
  };  

    
  Drupal.behaviors.programsAccordion = {
    attach: function(context, settings){
      $('.field-name-field-related-info-items > .field-items > .field-item').each(
        function(){
          $(this).find('.field-name-field-related-info-text > .field-items > .field-item').prepend('<h3 class="panel-title">' + $(this).find('.field-name-field-related-info-label > .field-items > .field-item').html() + '</h3>')
        }
      );
      $('.field-name-field-related-info-items > .field-items').accordion(
        {
          'header' : '.field-name-field-related-info-label',
          'autoHeight' : false,
          changestart: function(event, ui) {
            ui.oldContent.find('.panel-title').hide();
            ui.newContent.find('.panel-title').show();
            ui.newHeader.height(ui.newHeader.height() - 6);
            ui.newHeader.find('.field-items').hide();
            ui.oldHeader.find('.field-items').show();
          },
          change: function(event, ui){
            $(window).scrollTop(ui.newHeader.offset().top);
            
          }
        }
      );
    }
  };
  
  
  
  Drupal.behaviors.genericDetail = {
    attach: function(context, settings){
      var how_to_apply = $(".field-name-field-how-to-apply .field-item").length;
      if (how_to_apply == 0) {
	      $('.field-name-field-how-to-apply').css('display','none');
      }
      var more_information_block = $(".field-name-field-more-information .field-item").length;
      if (more_information_block == 0) {
	      $('.field-name-field-more-information').css('display','none');
      }
      var resources_block = $(".group_resources .field-item").length;
      if (resources_block == 0) {
	      $('.group_resources').css('display','none');
      }
      var accordion_count_block = $(".field-name-field-related-info-text .field-item").length;
      if (accordion_count_block == 0) {
	      $('.field-name-field-related-info-text').css('display','none');
      }    
      }
  };



  // PDF Blocks based on URI
  Drupal.behaviors.pdfBlockdisplay = {
    attach: function(context, settings){
        var pathname = window.location.pathname;
        var query = window.location.search;
        $('.menu-block-2 .menu-mlid-690').siblings().find('a').removeClass('active');
        // Case Management
        $('.menu-block-2 ul li.menu-mlid-655 a').click (function(){
	        $('#block-views-providers-forms-filter-block-1').css('display','block');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-655 a').addClass('active');
	        $('.menu-block-2 ul').hide('slow');
	        $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
	        return false;    
        });
        $('.menu-block-2 ul li.menu-mlid-656 a').click (function(){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','block');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-656 a').addClass('active');
	        $('.menu-block-2 ul').hide('slow');
	        $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
	        return false;    
        });
        $('.menu-block-2 ul li.menu-mlid-657 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','block');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-657 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Credentials
        $('.menu-block-2 ul li.menu-mlid-658 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','block');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-658 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Compliance
        $('.menu-block-2 ul li.menu-mlid-659 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','block');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-659 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Cultural and Linguistics
        $('.menu-block-2 ul li.menu-mlid-660 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','block');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-660 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Finance
        $('.menu-block-2 ul li.menu-mlid-661 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','block');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-661 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Health Education
        $('.menu-block-2 ul li.menu-mlid-662 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','block');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-662 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Information Services
        $('.menu-block-2 ul li.menu-mlid-663 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','block');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-663 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Marketing
        $('.menu-block-2 ul li.menu-mlid-664 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','block');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-664 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Member Services
        $('.menu-block-2 ul li.menu-mlid-665 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','block');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-665 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
            return false;    
        });
        // Pharmacy Management
        $('.menu-block-2 ul li.menu-mlid-666 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','block');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-666 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Provider Services
        $('.menu-block-2 ul li.menu-mlid-667 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','block');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-667 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Quality Management
        $('.menu-block-2 ul li.menu-mlid-668 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','block');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-668 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Quality Improvement
        $('.menu-block-2 ul li.menu-mlid-669 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','block');
            $('#block-views-providers-forms-filter-block-15').css('display','none');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-669 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        // Utilization Management
        $('.menu-block-2 ul li.menu-mlid-670 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','none');
            $('#block-views-providers-forms-filter-block-2').css('display','none');
            $('#block-views-providers-forms-filter-block-3').css('display','none');
            $('#block-views-providers-forms-filter-block-4').css('display','none');
            $('#block-views-providers-forms-filter-block-5').css('display','none');
            $('#block-views-providers-forms-filter-block-6').css('display','none');
            $('#block-views-providers-forms-filter-block-7').css('display','none');
            $('#block-views-providers-forms-filter-block-8').css('display','none');
            $('#block-views-providers-forms-filter-block-9').css('display','none');
            $('#block-views-providers-forms-filter-block-10').css('display','none');
            $('#block-views-providers-forms-filter-block-11').css('display','none');
            $('#block-views-providers-forms-filter-block-12').css('display','none');
            $('#block-views-providers-forms-filter-block-13').css('display','none');
            $('#block-views-providers-forms-filter-block-14').css('display','none');
            $('#block-views-providers-forms-filter-block-15').css('display','block');
            $('#block-views-providers-forms-filter-block-16').css('display','none');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-670 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
$('.menu-block-2 ul li.menu-mlid-690 a').click (function(){
            $('#block-views-providers-forms-filter-block-1').css('display','block');
            $('#block-views-providers-forms-filter-block-2').css('display','block');
            $('#block-views-providers-forms-filter-block-3').css('display','block');
            $('#block-views-providers-forms-filter-block-4').css('display','block');
            $('#block-views-providers-forms-filter-block-5').css('display','block');
            $('#block-views-providers-forms-filter-block-6').css('display','block');
            $('#block-views-providers-forms-filter-block-7').css('display','block');
            $('#block-views-providers-forms-filter-block-8').css('display','block');
            $('#block-views-providers-forms-filter-block-9').css('display','block');
            $('#block-views-providers-forms-filter-block-10').css('display','block');
            $('#block-views-providers-forms-filter-block-11').css('display','block');
            $('#block-views-providers-forms-filter-block-12').css('display','block');
            $('#block-views-providers-forms-filter-block-13').css('display','block');
            $('#block-views-providers-forms-filter-block-14').css('display','block');
            $('#block-views-providers-forms-filter-block-15').css('display','block');
            $('#block-views-providers-forms-filter-block-16').css('display','block');
            $('.menu-block-2 ul li a').removeClass('active');
            $('.menu-block-2 ul li.menu-mlid-690 a').addClass('active');
            $('.menu-block-2 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-2 .line").removeClass('open');
            return false;    
        });
        $('.menu-block-4 .menu-mlid-841').siblings().find('a').removeClass('active');
        $('.menu-block-4 ul li.menu-mlid-841 a').click (function(){
	        $('#block-views-providers-pdf-filter-block-13').css('display','block');
	        $('#block-views-providers-pdf-filter-block-1').css('display','block');
	        $('#block-views-providers-pdf-filter-block-14').css('display','block');
	        $('#block-views-providers-pdf-filter-block-15').css('display','block');
	        $('#block-views-providers-pdf-filter-block-2').css('display','block');
	        $('#block-views-providers-pdf-filter-block-4').css('display','block');
	        $('#block-views-providers-pdf-filter-block-3').css('display','block');
	        $('.menu-block-4 ul li a').removeClass('active');
	        $('.menu-block-4 ul li.menu-mlid-841 a').addClass('active');
	        $('.menu-block-4 ul').hide('slow');
	        $('#overlay').hide('slow');
	        $("#block-menu-block-4 .line").removeClass('open');
	        return false;    
        });
        $('.menu-block-4 ul li.menu-mlid-842 a').click (function(){
            $('#block-views-providers-pdf-filter-block-13').css('display','block');
            $('#block-views-providers-pdf-filter-block-1').css('display','none');
            $('#block-views-providers-pdf-filter-block-14').css('display','none');
            $('#block-views-providers-pdf-filter-block-15').css('display','none');
            $('#block-views-providers-pdf-filter-block-2').css('display','none');
            $('#block-views-providers-pdf-filter-block-4').css('display','none');
            $('#block-views-providers-pdf-filter-block-3').css('display','none');
            $('.menu-block-4 ul li a').removeClass('active');
            $('.menu-block-4 ul li.menu-mlid-842 a').addClass('active');
            $('.menu-block-4 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-4 .line").removeClass('open');
            return false;    
        });
        $('.menu-block-4 ul li.menu-mlid-852 a').click (function(){
            $('#block-views-providers-pdf-filter-block-13').css('display','none');
            $('#block-views-providers-pdf-filter-block-1').css('display','block');
            $('#block-views-providers-pdf-filter-block-14').css('display','none');
            $('#block-views-providers-pdf-filter-block-15').css('display','none');
            $('#block-views-providers-pdf-filter-block-2').css('display','none');
            $('#block-views-providers-pdf-filter-block-4').css('display','none');
            $('#block-views-providers-pdf-filter-block-3').css('display','none');
            $('.menu-block-4 ul li a').removeClass('active');
            $('.menu-block-4 ul li.menu-mlid-852 a').addClass('active');
            $('.menu-block-4 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-4 .line").removeClass('open');
            return false;    
        });
        $('.menu-block-4 ul li.menu-mlid-843 a').click (function(){
            $('#block-views-providers-pdf-filter-block-13').css('display','none');
            $('#block-views-providers-pdf-filter-block-1').css('display','none');
            $('#block-views-providers-pdf-filter-block-14').css('display','block');
            $('#block-views-providers-pdf-filter-block-15').css('display','none');
            $('#block-views-providers-pdf-filter-block-2').css('display','none');
            $('#block-views-providers-pdf-filter-block-4').css('display','none');
            $('#block-views-providers-pdf-filter-block-3').css('display','none');
            $('.menu-block-4 ul li a').removeClass('active');
            $('.menu-block-4 ul li.menu-mlid-843 a').addClass('active');
            $('.menu-block-4 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-4 .line").removeClass('open');
            return false;    
        });
        $('.menu-block-4 ul li.menu-mlid-844 a').click (function(){
            $('#block-views-providers-pdf-filter-block-13').css('display','none');
            $('#block-views-providers-pdf-filter-block-1').css('display','none');
            $('#block-views-providers-pdf-filter-block-14').css('display','none');
            $('#block-views-providers-pdf-filter-block-15').css('display','block');
            $('#block-views-providers-pdf-filter-block-2').css('display','none');
            $('#block-views-providers-pdf-filter-block-4').css('display','none');
            $('#block-views-providers-pdf-filter-block-3').css('display','none');
            $('.menu-block-4 ul li a').removeClass('active');
            $('.menu-block-4 ul li.menu-mlid-844 a').addClass('active');
            $('.menu-block-4 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-4 .line").removeClass('open');
            return false;    
        });
        $('.menu-block-4 ul li.menu-mlid-853 a').click (function(){
            $('#block-views-providers-pdf-filter-block-13').css('display','none');
            $('#block-views-providers-pdf-filter-block-1').css('display','none');
            $('#block-views-providers-pdf-filter-block-14').css('display','none');
            $('#block-views-providers-pdf-filter-block-15').css('display','none');
            $('#block-views-providers-pdf-filter-block-2').css('display','block');
            $('#block-views-providers-pdf-filter-block-4').css('display','none');
            $('#block-views-providers-pdf-filter-block-3').css('display','none');
            $('.menu-block-4 ul li a').removeClass('active');
            $('.menu-block-4 ul li.menu-mlid-853 a').addClass('active');
            $('.menu-block-4 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-4 .line").removeClass('open');
            return false;    
        });
        $('.menu-block-4 ul li.menu-mlid-855 a').click (function(){
            $('#block-views-providers-pdf-filter-block-13').css('display','none');
            $('#block-views-providers-pdf-filter-block-1').css('display','none');
            $('#block-views-providers-pdf-filter-block-14').css('display','none');
            $('#block-views-providers-pdf-filter-block-15').css('display','none');
            $('#block-views-providers-pdf-filter-block-2').css('display','none');
            $('#block-views-providers-pdf-filter-block-4').css('display','block');
            $('#block-views-providers-pdf-filter-block-3').css('display','none');
            $('.menu-block-4 ul li a').removeClass('active');
            $('.menu-block-4 ul li.menu-mlid-855 a').addClass('active');
            $('.menu-block-4 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-4 .line").removeClass('open');
            return false;    
        });
        $('.menu-block-4 ul li.menu-mlid-854 a').click (function(){
            $('#block-views-providers-pdf-filter-block-13').css('display','none');
            $('#block-views-providers-pdf-filter-block-1').css('display','none');
            $('#block-views-providers-pdf-filter-block-14').css('display','none');
            $('#block-views-providers-pdf-filter-block-15').css('display','none');
            $('#block-views-providers-pdf-filter-block-2').css('display','none');
            $('#block-views-providers-pdf-filter-block-4').css('display','none');
            $('#block-views-providers-pdf-filter-block-3').css('display','block');
            $('.menu-block-4 ul li a').removeClass('active');
            $('.menu-block-4 ul li.menu-mlid-854 a').addClass('active');
            $('.menu-block-4 ul').hide('slow');
            $('#overlay').hide('slow');
	        $("#block-menu-block-4 .line").removeClass('open');
            return false;    
        });
        if (pathname == '/providers/policies-and-procedures' && query == ''){
	        $('#block-views-providers-forms-filter-block-1').css('display','block');
	        $('#block-views-providers-forms-filter-block-2').css('display','block');
	        $('#block-views-providers-forms-filter-block-3').css('display','block');
	        $('#block-views-providers-forms-filter-block-4').css('display','block');
	        $('#block-views-providers-forms-filter-block-5').css('display','block');
	        $('#block-views-providers-forms-filter-block-6').css('display','block');
	        $('#block-views-providers-forms-filter-block-7').css('display','block');
	        $('#block-views-providers-forms-filter-block-8').css('display','block');
	        $('#block-views-providers-forms-filter-block-9').css('display','block');
	        $('#block-views-providers-forms-filter-block-10').css('display','block');
	        $('#block-views-providers-forms-filter-block-11').css('display','block');
	        $('#block-views-providers-forms-filter-block-12').css('display','block');
	        $('#block-views-providers-forms-filter-block-13').css('display','block');
	        $('#block-views-providers-forms-filter-block-14').css('display','block');
	        $('#block-views-providers-forms-filter-block-15').css('display','block');
	        $('#block-views-providers-forms-filter-block-16').css('display','block');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-690 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=All'){
	        $('#block-views-providers-forms-filter-block-1').css('display','block');
	        $('#block-views-providers-forms-filter-block-2').css('display','block');
	        $('#block-views-providers-forms-filter-block-3').css('display','block');
	        $('#block-views-providers-forms-filter-block-4').css('display','block');
	        $('#block-views-providers-forms-filter-block-5').css('display','block');
	        $('#block-views-providers-forms-filter-block-6').css('display','block');
	        $('#block-views-providers-forms-filter-block-7').css('display','block');
	        $('#block-views-providers-forms-filter-block-8').css('display','block');
	        $('#block-views-providers-forms-filter-block-9').css('display','block');
	        $('#block-views-providers-forms-filter-block-10').css('display','block');
	        $('#block-views-providers-forms-filter-block-11').css('display','block');
	        $('#block-views-providers-forms-filter-block-12').css('display','block');
	        $('#block-views-providers-forms-filter-block-13').css('display','block');
	        $('#block-views-providers-forms-filter-block-14').css('display','block');
	        $('#block-views-providers-forms-filter-block-15').css('display','block');
	        $('#block-views-providers-forms-filter-block-16').css('display','block');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-690 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=casemanagement'){
	        $('#block-views-providers-forms-filter-block-1').css('display','block');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-655 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=claims'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','block');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-656 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=contracting'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','block');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-657 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=credentialing'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','block');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-658 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=compliance'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','block');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-659 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=culturallinguistics'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','block');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-660 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=finance'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','block');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-661 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=healtheducation'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','block');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-662 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=informationservices'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','block');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-663 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=marketing'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','block');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-664 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=memberservices'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','block');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-665 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=pharmacymanagement'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','block');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-666 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=providerservices'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','block');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-667 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=qualitymanagement'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','block');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-668 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=qualityimprovement'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','block');
	        $('#block-views-providers-forms-filter-block-15').css('display','none');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-669 a').addClass('active');
        }
        else if (pathname == '/providers/policies-and-procedures' && query == '?pdf=utilizationmanagement'){
	        $('#block-views-providers-forms-filter-block-1').css('display','none');
	        $('#block-views-providers-forms-filter-block-2').css('display','none');
	        $('#block-views-providers-forms-filter-block-3').css('display','none');
	        $('#block-views-providers-forms-filter-block-4').css('display','none');
	        $('#block-views-providers-forms-filter-block-5').css('display','none');
	        $('#block-views-providers-forms-filter-block-6').css('display','none');
	        $('#block-views-providers-forms-filter-block-7').css('display','none');
	        $('#block-views-providers-forms-filter-block-8').css('display','none');
	        $('#block-views-providers-forms-filter-block-9').css('display','none');
	        $('#block-views-providers-forms-filter-block-10').css('display','none');
	        $('#block-views-providers-forms-filter-block-11').css('display','none');
	        $('#block-views-providers-forms-filter-block-12').css('display','none');
	        $('#block-views-providers-forms-filter-block-13').css('display','none');
	        $('#block-views-providers-forms-filter-block-14').css('display','none');
	        $('#block-views-providers-forms-filter-block-15').css('display','block');
	        $('#block-views-providers-forms-filter-block-16').css('display','none');
	        $('.menu-block-2 ul li a').removeClass('active');
	        $('.menu-block-2 ul li.menu-mlid-670 a').addClass('active');
        }
        else if (pathname == '/providers/provider-forms' && query == ''){
            $('#block-views-providers-pdf-filter-block-13').css('display','block');
            $('#block-views-providers-pdf-filter-block-1').css('display','block');
            $('#block-views-providers-pdf-filter-block-14').css('display','block');
            $('#block-views-providers-pdf-filter-block-15').css('display','block');
            $('#block-views-providers-pdf-filter-block-2').css('display','block');
            $('#block-views-providers-pdf-filter-block-4').css('display','block');
            $('#block-views-providers-pdf-filter-block-3').css('display','block');
            $('.menu-block-4 ul li a').removeClass('active');
            $('.menu-block-4 ul li.menu-mlid-841 a').addClass('active');
        }
    }
  };
  
  // sticky menu for PDF Policies and Procedures
  Drupal.behaviors.pdfSticky = {
    attach: function (context, settings) {
    
      function sticky_relocate() {
      var if_pdf_filter = window.location.pathname;
        if (if_pdf_filter == '/for-providers/policies-and-procedures') {  
      var window_top = $(window).scrollTop();
      //var div_top = $('#block-menu-block-2').offset().top;
      var above_div_bottom = $('#block-block-35').offset().top;
      var above_div_height = $('#block-block-35').height();
      var above_div_bottom = above_div_bottom+above_div_height+60;
      if (window_top > above_div_bottom) {
        $('#block-menu-block-2').css('position', 'fixed'); 
        $('#block-menu-block-2').css('top', '0');
        $('#block-menu-block-2').css('z-index', '1000'); 
        $('#block-menu-block-2').css('width', '940px'); 
          
      }
      else {
        $('#block-menu-block-2').css('position', 'relative');
        $('#block-menu-block-2').css('z-index', 'auto'); 
      }
       
       }
       else if (if_pdf_filter == '/for-providers/forms') {  
      var window_top = $(window).scrollTop();
      //var div_top = $('#block-menu-block-2').offset().top;
      var above_div_bottom = $('#block-block-37').offset().top;
      var above_div_height = $('#block-block-37').height();
      var above_div_bottom = above_div_bottom+above_div_height+60;
      if (window_top > above_div_bottom) {
        $('#block-menu-block-4').css('position', 'fixed'); 
        $('#block-menu-block-4').css('top', '0');
        $('#block-menu-block-4').css('z-index', '1000'); 
        $('#block-menu-block-4').css('width', '940px'); 
          
      }
      else {
        $('#block-menu-block-4').css('position', 'relative');
        $('#block-menu-block-4').css('z-index', 'auto'); 
      }
       
       }

       else {};
    }
      $(window).scroll(sticky_relocate);
      sticky_relocate();
      
      
   }    
    };
  

  Drupal.behaviors.frontpage = {
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
      
      $('#section-content').addClass('clearfix');
      $('.front #region-content .region-content-inner').addClass('clearfix');
    }
  }
    
  // Select Policy Category Dropdown
  Drupal.behaviors.pdfDropdown = {
    attach: function(context, settings){
      
	  $("#block-menu-block-2 .line").click(function() {
	      $("#block-menu-block-2 .line").addClass('open');
	      $(".menu-block-2 ul").css('display','block');
	      $("#overlay").css('display','block');
	      $("#block-menu-block-2 .line h2").css('color','#99789E');
	  });
	  $(".menu-block-2 ul li").click(function() {
	      $("#block-menu-block-2 .line").removeClass('open');
	      $(".menu-block-2 ul").css('display','none');
	      $("#overlay").css('display','none');
	      $("#block-menu-block-2 .line h2").css('color','#FFFFFF');
	  });
	  
	  $(".menu-block-2 .open").click(function() {
	      $("#block-menu-block-2 .line").removeClass('open');
	      $(".menu-block-2 ul").css('display','none');
	      $("#overlay").css('display','none');
	      $("#block-menu-block-2 .line h2").css('color','#FFFFFF');
	  });
	  $("#overlay").click(function() {
	      $("#block-menu-block-2 .line").removeClass('open');
	      $(".menu-block-2 ul").css('display','none');
	      $("#overlay").css('display','none');
	      $("#block-menu-block-2 .line h2").css('color','#FFFFFF');
	  });
	  $("#block-menu-block-4 .line").click(function() {
	      $("#block-menu-block-4 .line").addClass('open');
	      $(".menu-block-4 ul").css('display','block');
	      $("#overlay").css('display','block');
	      $("#block-menu-block-4 .line h2").css('color','#99789E');
	  });
	  $(".menu-block-4 ul li").click(function() {
	      $("#block-menu-block-4 .line").removeClass('open');
	      $(".menu-block-4 ul").css('display','none');
	      $("#overlay").css('display','none');
	      $("#block-menu-block-4 .line h2").css('color','#FFFFFF');
	  });
	  
	  $(".menu-block-4 .open").click(function() {
	      $("#block-menu-block-4 .line").removeClass('open');
	      $(".menu-block-4 ul").css('display','none');
	      $("#overlay").css('display','none');
	      $("#block-menu-block-4 .line h2").css('color','#FFFFFF');
	  });
	  $("#overlay").click(function() {
	      $("#block-menu-block-4 .line").removeClass('open');
	      $(".menu-block-4 ul").css('display','none');
	      $("#overlay").css('display','none');
	      $("#block-menu-block-4 .line h2").css('color','#FFFFFF');
	  });
    }
  };

  Drupal.behaviors.mainMenu = {
    attach: function (context, settings) {
      $('select#languageselector').each(function(){
                  var title = $(this).attr('title');
                  if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
                  $(this)
                      .css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
                      .after('<div class="select">' + title + '</div>')
                      .change(function(){
                          val = $('option:selected',this).text();
                          $(this).next().text(val);
                          })
              });
      $('#block-system-main-menu ul.menu li').hover(
        function(e){
          $(this).addClass('dropdown-visible').prev().addClass('no-separator');
        },
        function(e){
          $(this).removeClass('dropdown-visible').prev().removeClass('no-separator');
        }
      );
    }
    };
})(jQuery);