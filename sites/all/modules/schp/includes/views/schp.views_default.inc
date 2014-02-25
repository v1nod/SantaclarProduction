<?php

function schp_views_default_views(){
  $view = new view();
  $view->name = 'provider_search';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Provider Search';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Provider Search Results';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'node';
  $handler->display->display_options['row_options']['links'] = FALSE;
  /* No results behavior: Global: Unfiltered text */
  $handler->display->display_options['empty']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['empty']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['empty']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['empty']['area_text_custom']['empty'] = TRUE;
  $handler->display->display_options['empty']['area_text_custom']['content'] = '<h3>No Results Found</h3>';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Location: Distance / Proximity */
  $handler->display->display_options['sorts']['distance']['id'] = 'distance';
  $handler->display->display_options['sorts']['distance']['table'] = 'location';
  $handler->display->display_options['sorts']['distance']['field'] = 'distance';
  $handler->display->display_options['sorts']['distance']['origin'] = 'tied';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = '1';
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator_id'] = '';
  $handler->display->display_options['filters']['status']['expose']['label'] = 'Published';
  $handler->display->display_options['filters']['status']['expose']['operator'] = 'status_op';
  $handler->display->display_options['filters']['status']['expose']['identifier'] = 'status';
  $handler->display->display_options['filters']['status']['expose']['required'] = TRUE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'provider' => 'provider',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Location: Distance / Proximity */
  $handler->display->display_options['filters']['distance']['id'] = 'distance';
  $handler->display->display_options['filters']['distance']['table'] = 'location';
  $handler->display->display_options['filters']['distance']['field'] = 'distance';
  $handler->display->display_options['filters']['distance']['operator'] = 'dist';
  $handler->display->display_options['filters']['distance']['value'] = array(
    'latitude' => '37.3065',
    'longitude' => '-121.9128',
    'postal_code' => '',
    'country' => '',
    'php_code' => '',
    'nid_arg' => '',
    'nid_loc_field' => 'node',
    'uid_arg' => '',
    'search_distance' => '200',
    'search_units' => 'mile',
  );
  $handler->display->display_options['filters']['distance']['group'] = 1;
  $handler->display->display_options['filters']['distance']['exposed'] = TRUE;
  $handler->display->display_options['filters']['distance']['expose']['operator_id'] = 'distance_op';
  $handler->display->display_options['filters']['distance']['expose']['label'] = 'Distance';
  $handler->display->display_options['filters']['distance']['expose']['operator'] = 'distance_op';
  $handler->display->display_options['filters']['distance']['expose']['identifier'] = 'distance';
  $handler->display->display_options['filters']['distance']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
  );
  $handler->display->display_options['filters']['distance']['expose']['gmap_macro'] = array(
    'default' => '[gmap ]',
  );
  $handler->display->display_options['filters']['distance']['expose']['user_location_choose'] = array(
    'default' => FALSE,
  );
  $handler->display->display_options['filters']['distance']['origin'] = 'latlon_gmap';
  /* Filter criterion: Content: Last Name (field_last_name) */
  $handler->display->display_options['filters']['field_last_name_value']['id'] = 'field_last_name_value';
  $handler->display->display_options['filters']['field_last_name_value']['table'] = 'field_data_field_last_name';
  $handler->display->display_options['filters']['field_last_name_value']['field'] = 'field_last_name_value';
  $handler->display->display_options['filters']['field_last_name_value']['operator'] = 'starts';
  $handler->display->display_options['filters']['field_last_name_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_last_name_value']['expose']['operator_id'] = 'field_last_name_value_op';
  $handler->display->display_options['filters']['field_last_name_value']['expose']['label'] = 'Last Name';
  $handler->display->display_options['filters']['field_last_name_value']['expose']['operator'] = 'field_last_name_value_op';
  $handler->display->display_options['filters']['field_last_name_value']['expose']['identifier'] = 'lname';
  $handler->display->display_options['filters']['field_last_name_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
  );
  /* Filter criterion: Content: LOB (field_lob) */
  $handler->display->display_options['filters']['field_lob_value']['id'] = 'field_lob_value';
  $handler->display->display_options['filters']['field_lob_value']['table'] = 'field_data_field_lob';
  $handler->display->display_options['filters']['field_lob_value']['field'] = 'field_lob_value';
  $handler->display->display_options['filters']['field_lob_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_lob_value']['expose']['operator_id'] = 'field_lob_value_op';
  $handler->display->display_options['filters']['field_lob_value']['expose']['label'] = 'Type of Plan';
  $handler->display->display_options['filters']['field_lob_value']['expose']['operator'] = 'field_lob_value_op';
  $handler->display->display_options['filters']['field_lob_value']['expose']['identifier'] = 'plan';
  $handler->display->display_options['filters']['field_lob_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
  );
  /* Filter criterion: Content: Type (field_type) */
  $handler->display->display_options['filters']['field_type_value']['id'] = 'field_type_value';
  $handler->display->display_options['filters']['field_type_value']['table'] = 'field_data_field_type';
  $handler->display->display_options['filters']['field_type_value']['field'] = 'field_type_value';
  $handler->display->display_options['filters']['field_type_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_type_value']['expose']['operator_id'] = 'field_type_value_op';
  $handler->display->display_options['filters']['field_type_value']['expose']['label'] = 'Provider Type';
  $handler->display->display_options['filters']['field_type_value']['expose']['operator'] = 'field_type_value_op';
  $handler->display->display_options['filters']['field_type_value']['expose']['identifier'] = 'prov_type';
  $handler->display->display_options['filters']['field_type_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
  );
  /* Filter criterion: Content: Networks (field_networks) */
  $handler->display->display_options['filters']['field_networks_value']['id'] = 'field_networks_value';
  $handler->display->display_options['filters']['field_networks_value']['table'] = 'field_data_field_networks';
  $handler->display->display_options['filters']['field_networks_value']['field'] = 'field_networks_value';
  $handler->display->display_options['filters']['field_networks_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_networks_value']['expose']['operator_id'] = 'field_networks_value_op';
  $handler->display->display_options['filters']['field_networks_value']['expose']['label'] = 'Networks';
  $handler->display->display_options['filters']['field_networks_value']['expose']['operator'] = 'field_networks_value_op';
  $handler->display->display_options['filters']['field_networks_value']['expose']['identifier'] = 'network';
  $handler->display->display_options['filters']['field_networks_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
  );
  /* Filter criterion: Content: Specialty Code (field_specialty_code) */
  $handler->display->display_options['filters']['field_specialty_code_value']['id'] = 'field_specialty_code_value';
  $handler->display->display_options['filters']['field_specialty_code_value']['table'] = 'field_data_field_specialty_code';
  $handler->display->display_options['filters']['field_specialty_code_value']['field'] = 'field_specialty_code_value';
  $handler->display->display_options['filters']['field_specialty_code_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_specialty_code_value']['expose']['operator_id'] = 'field_specialty_code_value_op';
  $handler->display->display_options['filters']['field_specialty_code_value']['expose']['label'] = 'Spec Code';
  $handler->display->display_options['filters']['field_specialty_code_value']['expose']['operator'] = 'field_specialty_code_value_op';
  $handler->display->display_options['filters']['field_specialty_code_value']['expose']['identifier'] = 'spec';
  $handler->display->display_options['filters']['field_specialty_code_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
  );
  /* Filter criterion: Content: Provider Speaks (field_provider_language) */
  $handler->display->display_options['filters']['field_provider_language_value']['id'] = 'field_provider_language_value';
  $handler->display->display_options['filters']['field_provider_language_value']['table'] = 'field_data_field_provider_language';
  $handler->display->display_options['filters']['field_provider_language_value']['field'] = 'field_provider_language_value';
  $handler->display->display_options['filters']['field_provider_language_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_provider_language_value']['expose']['operator_id'] = 'field_provider_language_value_op';
  $handler->display->display_options['filters']['field_provider_language_value']['expose']['label'] = 'Provider Speaks';
  $handler->display->display_options['filters']['field_provider_language_value']['expose']['operator'] = 'field_provider_language_value_op';
  $handler->display->display_options['filters']['field_provider_language_value']['expose']['identifier'] = 'prov_lang';
  $handler->display->display_options['filters']['field_provider_language_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
  );
  /* Filter criterion: Content: Gender (field_gender) */
  $handler->display->display_options['filters']['field_gender_value']['id'] = 'field_gender_value';
  $handler->display->display_options['filters']['field_gender_value']['table'] = 'field_data_field_gender';
  $handler->display->display_options['filters']['field_gender_value']['field'] = 'field_gender_value';
  $handler->display->display_options['filters']['field_gender_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_gender_value']['expose']['operator_id'] = 'field_gender_value_op';
  $handler->display->display_options['filters']['field_gender_value']['expose']['label'] = 'Gender';
  $handler->display->display_options['filters']['field_gender_value']['expose']['operator'] = 'field_gender_value_op';
  $handler->display->display_options['filters']['field_gender_value']['expose']['identifier'] = 'gender';
  $handler->display->display_options['filters']['field_gender_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
  );
  /* Filter criterion: Content: Accepting New Patients (field_accepting_new_patients) */
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['id'] = 'field_accepting_new_patients_value';
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['table'] = 'field_data_field_accepting_new_patients';
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['field'] = 'field_accepting_new_patients_value';
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['expose']['operator_id'] = 'field_accepting_new_patients_value_op';
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['expose']['label'] = 'Accepting New Patients';
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['expose']['operator'] = 'field_accepting_new_patients_value_op';
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['expose']['identifier'] = 'new_pat';
  $handler->display->display_options['filters']['field_accepting_new_patients_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
  );
  /* Filter criterion: Exam Room */
  $handler->display->display_options['filters']['field_exam_room_value']['id'] = 'field_exam_room_value';
  $handler->display->display_options['filters']['field_exam_room_value']['table'] = 'field_data_field_exam_room';
  $handler->display->display_options['filters']['field_exam_room_value']['field'] = 'field_exam_room_value';
  $handler->display->display_options['filters']['field_exam_room_value']['ui_name'] = 'Exam Room';
  $handler->display->display_options['filters']['field_exam_room_value']['value'] = array(
    'Y' => 'Y',
    'N' => 'N',
    'NA' => 'NA',
  );
  $handler->display->display_options['filters']['field_exam_room_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_exam_room_value']['expose']['operator_id'] = 'field_exam_room_value_op';
  $handler->display->display_options['filters']['field_exam_room_value']['expose']['label'] = 'Exam Room';
  $handler->display->display_options['filters']['field_exam_room_value']['expose']['operator'] = 'field_exam_room_value_op';
  $handler->display->display_options['filters']['field_exam_room_value']['expose']['identifier'] = 'exam';
  $handler->display->display_options['filters']['field_exam_room_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
    17 => 0,
  );
  /* Filter criterion: Content: Exam Table/Scale (field_exam_table_scale) */
  $handler->display->display_options['filters']['field_exam_table_scale_value']['id'] = 'field_exam_table_scale_value';
  $handler->display->display_options['filters']['field_exam_table_scale_value']['table'] = 'field_data_field_exam_table_scale';
  $handler->display->display_options['filters']['field_exam_table_scale_value']['field'] = 'field_exam_table_scale_value';
  $handler->display->display_options['filters']['field_exam_table_scale_value']['value'] = array(
    'Y' => 'Y',
    'N' => 'N',
    'NA' => 'NA',
  );
  $handler->display->display_options['filters']['field_exam_table_scale_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_exam_table_scale_value']['expose']['operator_id'] = 'field_exam_table_scale_value_op';
  $handler->display->display_options['filters']['field_exam_table_scale_value']['expose']['label'] = 'Exam Table/Scale';
  $handler->display->display_options['filters']['field_exam_table_scale_value']['expose']['operator'] = 'field_exam_table_scale_value_op';
  $handler->display->display_options['filters']['field_exam_table_scale_value']['expose']['identifier'] = 'exam_table';
  $handler->display->display_options['filters']['field_exam_table_scale_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
    17 => 0,
  );
  /* Filter criterion: Content: Exterior Building Access (field_exterior_building_access) */
  $handler->display->display_options['filters']['field_exterior_building_access_value']['id'] = 'field_exterior_building_access_value';
  $handler->display->display_options['filters']['field_exterior_building_access_value']['table'] = 'field_data_field_exterior_building_access';
  $handler->display->display_options['filters']['field_exterior_building_access_value']['field'] = 'field_exterior_building_access_value';
  $handler->display->display_options['filters']['field_exterior_building_access_value']['value'] = array(
    'Y' => 'Y',
    'N' => 'N',
    'NA' => 'NA',
  );
  $handler->display->display_options['filters']['field_exterior_building_access_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_exterior_building_access_value']['expose']['operator_id'] = 'field_exterior_building_access_value_op';
  $handler->display->display_options['filters']['field_exterior_building_access_value']['expose']['label'] = 'Exterior Building Access';
  $handler->display->display_options['filters']['field_exterior_building_access_value']['expose']['operator'] = 'field_exterior_building_access_value_op';
  $handler->display->display_options['filters']['field_exterior_building_access_value']['expose']['identifier'] = 'eba';
  $handler->display->display_options['filters']['field_exterior_building_access_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
    17 => 0,
  );
  /* Filter criterion: Content: Interior Building Access (field_interior_building_access) */
  $handler->display->display_options['filters']['field_interior_building_access_value']['id'] = 'field_interior_building_access_value';
  $handler->display->display_options['filters']['field_interior_building_access_value']['table'] = 'field_data_field_interior_building_access';
  $handler->display->display_options['filters']['field_interior_building_access_value']['field'] = 'field_interior_building_access_value';
  $handler->display->display_options['filters']['field_interior_building_access_value']['value'] = array(
    'Y' => 'Y',
    'N' => 'N',
    'NA' => 'NA',
  );
  $handler->display->display_options['filters']['field_interior_building_access_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_interior_building_access_value']['expose']['operator_id'] = 'field_interior_building_access_value_op';
  $handler->display->display_options['filters']['field_interior_building_access_value']['expose']['label'] = 'Interior Building Access';
  $handler->display->display_options['filters']['field_interior_building_access_value']['expose']['operator'] = 'field_interior_building_access_value_op';
  $handler->display->display_options['filters']['field_interior_building_access_value']['expose']['identifier'] = 'iba';
  $handler->display->display_options['filters']['field_interior_building_access_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
    17 => 0,
  );
  /* Filter criterion: Content: Parking (field_parking) */
  $handler->display->display_options['filters']['field_parking_value']['id'] = 'field_parking_value';
  $handler->display->display_options['filters']['field_parking_value']['table'] = 'field_data_field_parking';
  $handler->display->display_options['filters']['field_parking_value']['field'] = 'field_parking_value';
  $handler->display->display_options['filters']['field_parking_value']['value'] = array(
    'Y' => 'Y',
    'N' => 'N',
    'NA' => 'NA',
  );
  $handler->display->display_options['filters']['field_parking_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_parking_value']['expose']['operator_id'] = 'field_parking_value_op';
  $handler->display->display_options['filters']['field_parking_value']['expose']['label'] = 'Parking';
  $handler->display->display_options['filters']['field_parking_value']['expose']['operator'] = 'field_parking_value_op';
  $handler->display->display_options['filters']['field_parking_value']['expose']['identifier'] = 'parking';
  $handler->display->display_options['filters']['field_parking_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
    17 => 0,
  );
  /* Filter criterion: Content: Restroom (field_restroom) */
  $handler->display->display_options['filters']['field_restroom_value']['id'] = 'field_restroom_value';
  $handler->display->display_options['filters']['field_restroom_value']['table'] = 'field_data_field_restroom';
  $handler->display->display_options['filters']['field_restroom_value']['field'] = 'field_restroom_value';
  $handler->display->display_options['filters']['field_restroom_value']['value'] = array(
    'Y' => 'Y',
    'N' => 'N',
    'NA' => 'NA',
  );
  $handler->display->display_options['filters']['field_restroom_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_restroom_value']['expose']['operator_id'] = 'field_restroom_value_op';
  $handler->display->display_options['filters']['field_restroom_value']['expose']['label'] = 'Restroom';
  $handler->display->display_options['filters']['field_restroom_value']['expose']['operator'] = 'field_restroom_value_op';
  $handler->display->display_options['filters']['field_restroom_value']['expose']['identifier'] = 'restroom';
  $handler->display->display_options['filters']['field_restroom_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    16 => 0,
    4 => 0,
    5 => 0,
    7 => 0,
    8 => 0,
    9 => 0,
    10 => 0,
    11 => 0,
    12 => 0,
    13 => 0,
    14 => 0,
    15 => 0,
    17 => 0,
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'provider_search');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['exposed_block'] = TRUE;
  $handler->display->display_options['path'] = 'for-members/find-a-doctor/search-results';
  $translatables['provider_search'] = array(
    t('Master'),
    t('Provider Search Results'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('<h3>No Results Found</h3>'),
    t('Published'),
    t('Distance'),
    t('[gmap ]'),
    t('Last Name'),
    t('Type of Plan'),
    t('Provider Type'),
    t('Networks'),
    t('Spec Code'),
    t('Provider Speaks'),
    t('Gender'),
    t('Accepting New Patients'),
    t('Exam Room'),
    t('Exam Table/Scale'),
    t('Exterior Building Access'),
    t('Interior Building Access'),
    t('Parking'),
    t('Restroom'),
    t('Page'),
  );
  $views[$view->name] = $view;
  

  
  $view = new view();
  $view->name = 'clinical_guidelines';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Clinical Guidelines';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Clinical Guidelines';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['grouping'] = array(
    0 => array(
      'field' => 'field_guide_category',
      'rendered' => 1,
      'rendered_strip' => 0,
    ),
  );
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Document */
  $handler->display->display_options['fields']['field_document']['id'] = 'field_document';
  $handler->display->display_options['fields']['field_document']['table'] = 'field_data_field_document';
  $handler->display->display_options['fields']['field_document']['field'] = 'field_document';
  $handler->display->display_options['fields']['field_document']['label'] = '';
  $handler->display->display_options['fields']['field_document']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_document']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_document']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_document']['type'] = 'file_url_plain';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '[field_document] ';
  $handler->display->display_options['fields']['title']['alter']['target'] = '_blank';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Guide Category */
  $handler->display->display_options['fields']['field_guide_category']['id'] = 'field_guide_category';
  $handler->display->display_options['fields']['field_guide_category']['table'] = 'field_data_field_guide_category';
  $handler->display->display_options['fields']['field_guide_category']['field'] = 'field_guide_category';
  $handler->display->display_options['fields']['field_guide_category']['label'] = '';
  $handler->display->display_options['fields']['field_guide_category']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_guide_category']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_guide_category']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Footnote */
  $handler->display->display_options['fields']['field_footnote']['id'] = 'field_footnote';
  $handler->display->display_options['fields']['field_footnote']['table'] = 'field_data_field_footnote';
  $handler->display->display_options['fields']['field_footnote']['field'] = 'field_footnote';
  $handler->display->display_options['fields']['field_footnote']['label'] = '';
  $handler->display->display_options['fields']['field_footnote']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_footnote']['element_label_colon'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'clinical_guideline' => 'clinical_guideline',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'for-providers/clinical-guidelines';
  $translatables['clinical_guidelines'] = array(
    t('Master'),
    t('Clinical Guidelines'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Page'),
  );
  
  $views[$view->name] = $view;
  return $views;
}