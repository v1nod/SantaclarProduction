<?php
/**
 * @file
 * santaclara_meetingsevents.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function santaclara_meetingsevents_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'meetings_agendas_and_calendar';
  $view->description = 'Page for Meeting Agendas and Calendar';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Meetings Agendas and Calendar';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Meetings Agendas and Calendar';
  $handler->display->display_options['use_more'] = TRUE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'VIEW ARCHIVES';
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['row_class'] = 'meeting';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['columns'] = array(
    'field_meeting_date' => 'field_meeting_date',
    'field_time' => 'field_time',
    'title' => 'title',
    'field_agenda' => 'field_agenda',
    'field_agenda_packate' => 'field_agenda_packate',
    'field_meetings' => 'field_meetings',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'field_meeting_date' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_time' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_agenda' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_agenda_packate' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_meetings' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  $handler->display->display_options['style_options']['override'] = FALSE;
  $handler->display->display_options['style_options']['sticky'] = TRUE;
  /* Field: Date */
  $handler->display->display_options['fields']['field_meeting_date']['id'] = 'field_meeting_date';
  $handler->display->display_options['fields']['field_meeting_date']['table'] = 'field_data_field_meeting_date';
  $handler->display->display_options['fields']['field_meeting_date']['field'] = 'field_meeting_date';
  $handler->display->display_options['fields']['field_meeting_date']['ui_name'] = 'Date';
  $handler->display->display_options['fields']['field_meeting_date']['label'] = 'Date';
  $handler->display->display_options['fields']['field_meeting_date']['element_class'] = 'date';
  $handler->display->display_options['fields']['field_meeting_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_meeting_date']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_meeting_date']['settings'] = array(
    'format_type' => 'mm_dd_yyyy',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
    'show_repeat_rule' => 'show',
  );
  /* Field: Time */
  $handler->display->display_options['fields']['field_time']['id'] = 'field_time';
  $handler->display->display_options['fields']['field_time']['table'] = 'field_data_field_time';
  $handler->display->display_options['fields']['field_time']['field'] = 'field_time';
  $handler->display->display_options['fields']['field_time']['ui_name'] = 'Time';
  $handler->display->display_options['fields']['field_time']['element_class'] = 'time';
  $handler->display->display_options['fields']['field_time']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_time']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_time']['type'] = 'text_plain';
  /* Field: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['ui_name'] = 'Title';
  $handler->display->display_options['fields']['title']['label'] = 'Description';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_class'] = 'meeting-description';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Agenda */
  $handler->display->display_options['fields']['field_agenda']['id'] = 'field_agenda';
  $handler->display->display_options['fields']['field_agenda']['table'] = 'field_data_field_agenda';
  $handler->display->display_options['fields']['field_agenda']['field'] = 'field_agenda';
  $handler->display->display_options['fields']['field_agenda']['ui_name'] = 'Agenda';
  $handler->display->display_options['fields']['field_agenda']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_agenda']['alter']['text'] = '<a href="[field_agenda]"><span>Download</span></a>';
  $handler->display->display_options['fields']['field_agenda']['element_class'] = 'download agenda';
  $handler->display->display_options['fields']['field_agenda']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_agenda']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_agenda']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_agenda']['type'] = 'file_url_plain';
  $handler->display->display_options['fields']['field_agenda']['settings'] = array(
    'file_view_mode' => 'default',
  );
  /* Field: Agenda Packate */
  $handler->display->display_options['fields']['field_agenda_packate']['id'] = 'field_agenda_packate';
  $handler->display->display_options['fields']['field_agenda_packate']['table'] = 'field_data_field_agenda_packate';
  $handler->display->display_options['fields']['field_agenda_packate']['field'] = 'field_agenda_packate';
  $handler->display->display_options['fields']['field_agenda_packate']['ui_name'] = 'Agenda Packate';
  $handler->display->display_options['fields']['field_agenda_packate']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_agenda_packate']['alter']['text'] = '<a href="[field_agenda_packate]"><span>Download</span></a>';
  $handler->display->display_options['fields']['field_agenda_packate']['element_class'] = 'download agenda-packate';
  $handler->display->display_options['fields']['field_agenda_packate']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_agenda_packate']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_agenda_packate']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_agenda_packate']['type'] = 'file_url_plain';
  $handler->display->display_options['fields']['field_agenda_packate']['settings'] = array(
    'file_view_mode' => 'media_link',
  );
  /* Field: Meetings */
  $handler->display->display_options['fields']['field_meetings']['id'] = 'field_meetings';
  $handler->display->display_options['fields']['field_meetings']['table'] = 'field_data_field_meetings';
  $handler->display->display_options['fields']['field_meetings']['field'] = 'field_meetings';
  $handler->display->display_options['fields']['field_meetings']['ui_name'] = 'Meetings';
  $handler->display->display_options['fields']['field_meetings']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_meetings']['alter']['text'] = '<a href="[field_meetings]"><span>Download</span></a>';
  $handler->display->display_options['fields']['field_meetings']['element_class'] = 'download meetings';
  $handler->display->display_options['fields']['field_meetings']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_meetings']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_meetings']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_meetings']['type'] = 'file_url_plain';
  $handler->display->display_options['fields']['field_meetings']['settings'] = array(
    'file_view_mode' => 'media_link',
  );
  /* Sort criterion: Content: Meeting Date (field_meeting_date) */
  $handler->display->display_options['sorts']['field_meeting_date_value']['id'] = 'field_meeting_date_value';
  $handler->display->display_options['sorts']['field_meeting_date_value']['table'] = 'field_data_field_meeting_date';
  $handler->display->display_options['sorts']['field_meeting_date_value']['field'] = 'field_meeting_date_value';
  $handler->display->display_options['sorts']['field_meeting_date_value']['order'] = 'DESC';
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
    'meeting' => 'meeting',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
    'meeting' => 'meeting',
  );
  /* Filter criterion: Content: Meeting Date (field_meeting_date) */
  $handler->display->display_options['filters']['field_meeting_date_value']['id'] = 'field_meeting_date_value';
  $handler->display->display_options['filters']['field_meeting_date_value']['table'] = 'field_data_field_meeting_date';
  $handler->display->display_options['filters']['field_meeting_date_value']['field'] = 'field_meeting_date_value';
  $handler->display->display_options['filters']['field_meeting_date_value']['operator'] = 'between';
  $handler->display->display_options['filters']['field_meeting_date_value']['default_date'] = 'now';
  $handler->display->display_options['filters']['field_meeting_date_value']['default_to_date'] = 'now + 1 year';
  $handler->display->display_options['filters']['field_meeting_date_value']['year_range'] = '-0:+1';
  $handler->display->display_options['path'] = 'about-us/meetings';

  /* Display: Page by Year */
  $handler = $view->new_display('page', 'Page by Year', 'page_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Archives';
  $handler->display->display_options['defaults']['use_more'] = FALSE;
  $handler->display->display_options['defaults']['use_more_always'] = FALSE;
  $handler->display->display_options['defaults']['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['defaults']['use_more_text'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'VIEW ARCHIVES';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Year */
  $handler->display->display_options['arguments']['field_meeting_date_value']['id'] = 'field_meeting_date_value';
  $handler->display->display_options['arguments']['field_meeting_date_value']['table'] = 'field_data_field_meeting_date';
  $handler->display->display_options['arguments']['field_meeting_date_value']['field'] = 'field_meeting_date_value';
  $handler->display->display_options['arguments']['field_meeting_date_value']['ui_name'] = 'Year';
  $handler->display->display_options['arguments']['field_meeting_date_value']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_meeting_date_value']['title_enable'] = TRUE;
  $handler->display->display_options['arguments']['field_meeting_date_value']['title'] = 'Archive %1';
  $handler->display->display_options['arguments']['field_meeting_date_value']['breadcrumb_enable'] = TRUE;
  $handler->display->display_options['arguments']['field_meeting_date_value']['breadcrumb'] = '%1';
  $handler->display->display_options['arguments']['field_meeting_date_value']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_meeting_date_value']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_meeting_date_value']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_meeting_date_value']['year_range'] = '-100:+100';
  $handler->display->display_options['arguments']['field_meeting_date_value']['granularity'] = 'year';
  $handler->display->display_options['arguments']['field_meeting_date_value']['use_fromto'] = 'no';
  $handler->display->display_options['path'] = 'about-us/meetings/%';
  $translatables['meetings_agendas_and_calendar'] = array(
    t('Master'),
    t('Meetings Agendas and Calendar'),
    t('VIEW ARCHIVES'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Date'),
    t('Time'),
    t('Description'),
    t('Agenda'),
    t('<a href="[field_agenda]"><span>Download</span></a>'),
    t('Agenda Packate'),
    t('<a href="[field_agenda_packate]"><span>Download</span></a>'),
    t('Meetings'),
    t('<a href="[field_meetings]"><span>Download</span></a>'),
    t('Page'),
    t('more'),
    t('Page by Year'),
    t('Archives'),
    t('All'),
    t('Archive %1'),
    t('%1'),
  );
  $export['meetings_agendas_and_calendar'] = $view;

  return $export;
}
