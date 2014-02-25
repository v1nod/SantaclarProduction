<?php


function santaclara_alpha_preprocess_node(&$vars) {
  $vars['date'] = format_date($vars['created'], 'custom', 'F j, Y');
  $function = __FUNCTION__ . '_' . $vars['node']->type;
  if (function_exists($function)) {
    $function($vars);
  }
  if ($vars['type'] == 'program' and $vars['view_mode'] == 'full') {
    // Get a list of all the regions for this theme
    foreach (system_region_list($GLOBALS['theme']) as $region_key => $region_name) {
  
      // Get the content for each region and add it to the $region variable
      if ($blocks = block_get_blocks_by_region($region_key)) {
        $vars['region'][$region_key] = $blocks;
      }
      else {
        $vars['region'][$region_key] = array();
      }
    }
  }
}

function santaclara_alpha_preprocess_node_provider(&$vars) {

  $vars['provider_name'] = '<div class="field field-name-field-name">';
  if ($vars['view_mode'] == 'full') {
    $vars['provider_name'] .= '<div class="field-label">Name</div>';
  }
   
  $vars['provider_name'] .= $vars['field_last_name'][$vars['language'
  ]][0]['safe_value'];
  if ($vars['field_first_name'][$vars['language'
  ]][0]['safe_value']) {
    $vars['provider_name'] .= ', ' . $vars['field_first_name'][$vars['language'
  ]][0]['safe_value'];
  }
  if ($vars['field_middle_name'][$vars['language'
  ]][0]['safe_value']) {
    $vars['provider_name'] .= ' ' . $vars['field_middle_name'][$vars['language'
  ]][0]['safe_value'];
  }
  if ($vars['field_title'][$vars['language'
  ]][0]['safe_value']) {
    $vars['provider_name'] .= ', ' . $vars['field_title'][$vars['language'
  ]][0]['safe_value'];
  }
  $vars['provider_name'] .= '</div>';
  $vars['text_address'] = '';
  $vars['text_address'] .= '<div class="address">';
  if ($vars['view_mode'] == 'full') {
    $vars['text_address'] .= '<div class="field-label">Address</div>';
  }
  $vars['text_address'] .= '<div class="street">';
  $vars['text_address'] .= $vars['field_location'][0]['street'] . '<br/>';
  if ($vars['field_location'][0]['additional']) {
    $vars['text_address'] .= $vars['field_location'][0]['additional'] . '<br/>';
  }
  $vars['text_address'] .= $vars['field_location'][0]['city'] . ', ' . $vars['field_location'][0]['province'] . ' ' . $vars['field_location'][0]['postal_code'] . '<br/>';
  $vars['text_address'] .= '</div>';
  if ($vars['field_location'][0]['phone']) {
    $vars['text_address'] .= '<div class="phone">';
    $vars['text_address'] .= '<strong>Tel</strong> ' . $vars['field_location'][0]['phone'];
    $vars['text_address'] .= '</div>';
  }

  $vars['text_address'] .= '</div>';
  $vars['print_link'] = l('print', 'print/' . $vars['nid'], array('attributes' => array('class' => array('print-link'))));
  $vars['provider_title'] = '  <h1 class="title" id="page-head">Provider Details</h1>';
  if (isset($_GET['distance'])) {
    $vars['distance'] = '<div class="distance">';
    
    $origin = array();
    $origin['lat'] = $_GET['distance']['latitude'];
    $origin['lon'] = $_GET['distance']['longitude'];
    
    $dest = array();
    $dest['lat'] =$vars['field_location'][0]['latitude'];
    $dest['lon'] = $vars['field_location'][0]['longitude'];
    $distance = location_distance_between($origin, $dest, 'mile');
    $vars['distance'] .= 'Distance: ' . $distance['scalar'] . ' ' . $distance['distance_unit'] . 's';
    $vars['distance'] .= '</div>';
    if (isset($_GET['location'])) {
      $start = $_GET['location'];
      $finish = $vars['field_location'][0];
      $map_link = 'http://maps.google.com/maps';
      $query = array(
        'saddr' => $start['street'] . '. ' . $start['city'] . ', ' . $start['province'] . '. ' . 'United States',
        'daddr' => $finish['street'] . ', ' . $finish['city'] . ', ' . $finish['province'] . ', ' . 'United States',
      );
      $vars['get_directions'] = l(t('» Get directions'), $map_link, array('query' => $query));
    }
    
 } 
}


function santaclara_alpha_preprocess_node_general_event(&$vars) {
  $vars['event_address'] = '';
  if (isset($vars['field_location'][LANGUAGE_NONE][0])) {
    $vars['event_address'] .= '<div class="field field-name-field-address">';
    if ($vars['view_mode'] == 'full') {
      $vars['event_address'] .= '<div class="field-label">Where:</div>';
    }
    $vars['event_address'] .= '<div class="street">';
    $vars['event_address'] .= $vars['field_location'][LANGUAGE_NONE][0]['street'] . '<br/>';
    if ($vars['field_location'][LANGUAGE_NONE][0]['additional']) {
      $vars['event_address'] .= $vars['field_location'][LANGUAGE_NONE][0]['additional'] . '<br/>';
    }
    $vars['event_address'] .= $vars['field_location'][LANGUAGE_NONE][0]['city'] . ', ' . $vars['field_location'][0]['province'] . ' ' . $vars['field_location'][LANGUAGE_NONE][0]['postal_code'] . '<br/>';
    $vars['event_address'] .= '</div>';
    if ($vars['field_location'][LANGUAGE_NONE][0]['phone']) {
      $vars['event_address'] .= '<div class="phone">';
      $vars['event_address'] .= '<strong>Tel</strong> ' . $vars['field_location'][LANGUAGE_NONE][0]['phone'];
      $vars['event_address'] .= '</div>';
    }

    $vars['event_address'] .= '</div>';
    
  }

}