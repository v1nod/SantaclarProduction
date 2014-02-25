<?php

function santaclara_alpha_preprocess_html(&$vars) {
  drupal_add_library('system', 'ui.accordion');
  drupal_add_js(libraries_get_path('jquery.cycle') . '/jquery.cycle.all.js');
  drupal_add_js(libraries_get_path('jquery.easing') . '/jquery.easing.1.3.js');
  drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/languages.js');
  drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/script.js');

  if (arg(0) == 'providers' and arg(1) == 'dashboard') {
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/jquery.jcarousel.min.js');
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/jquery.jcarousel-control.min.js');
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/jquery.jcarousel-pagination.min.js');
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/providers.carousel.js');
  }
  
  if ((arg(0) == 'about-us' && arg(1) == 'meetings-and-agendas') ||
            (arg(0) == 'for-members' && arg(1) == 'forms-and-documents' ) ||
            (arg(0) == 'community' && arg(1) == 'newsletters' ) ||
            (arg(0) == 'healthcare-plans' && arg(1) == 'calmediconnect' && arg(2) == 'forms-and-documents')
    ) {
    drupal_add_js(drupal_get_path('module', 'schp') . '/js/chosen.jquery.min.js');
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/meetings.js');
    drupal_add_css(drupal_get_path('module', 'schp') . '/js/chosen.css');
    drupal_add_css(drupal_get_path('theme', 'santaclara') . '/css/meetings.css');
  }
  
  // Styles and JS for webforms
    if (arg(0) == 'node' && is_null(arg(2)) && intval(arg(1)) > 0 && ($node = node_load(arg(1)))) {
        switch ($node->type) {
      case 'webform':
        $options = array(
          'weight' => 1000, // High number to push this file to the bottom of the list
          'scope' => 'header',
        );
        drupal_add_js(drupal_get_path('module', 'schp') . '/js/chosen.jquery.min.js');
        drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/webforms.js', $options);
        drupal_add_css(drupal_get_path('module', 'schp') . '/js/chosen.css');
        drupal_add_css(drupal_get_path('theme', 'santaclara') . '/css/webforms.css');
        break;
        
      case 'career_opportunity':
        drupal_add_css(drupal_get_path('theme', 'santaclara') . '/css/career-opportunity.css');
        drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/career-opportunity.js');
        break;
    }
  }
  
  // Styles and JS for Grievance Form
    $gf_nids = array(67, 75, 76, 60205, 60224, 60231, 60232, 60233, 60234, 60235, 60236);
    if (arg(0) == 'node' && is_null(arg(2)) && in_array(arg(1), $gf_nids)) {
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/grievance-form.js');
        drupal_add_html_head($scrpt, 'livejs');
    drupal_add_css(drupal_get_path('theme', 'santaclara') . '/css/grievance-form.css');
  }
  
  // Dispute form
    if (arg(0) == 'node' && is_null(arg(2)) && arg(1) == 60227) {
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/jquery.style-file-input.js');
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/dispute-form.js');
    drupal_add_css(drupal_get_path('theme', 'santaclara') . '/css/style-file-input.css');
    drupal_add_css(drupal_get_path('theme', 'santaclara') . '/css/dispute-form.css');
  }
  
  // News & Events block
    $news_alerts_nid = array(10, 56, 60191);
    if (arg(0) == 'node' && is_null(arg(2)) && in_array(arg(1), $news_alerts_nid)) {
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/news-and-alerts.js');
  }
  
  // 
    if (arg(0) == 'node' && is_null(arg(2)) && arg(1) == '6681') {
    drupal_add_js(drupal_get_path('theme', 'santaclara') . '/js/login-icon.js');
  }
}

