<?php
/**
 * @file
 * bigtexasaustin.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function bigtexasaustin_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'bigtexasaustin';
  $view->description = 'The Big Texas Austin Slide Show';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'bigtexasaustin';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Big Texas Austin Slide Show';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'clearfix';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Big Texas Austin Image */
  $handler->display->display_options['fields']['field_big_texas_austin_image']['id'] = 'field_big_texas_austin_image';
  $handler->display->display_options['fields']['field_big_texas_austin_image']['table'] = 'field_data_field_big_texas_austin_image';
  $handler->display->display_options['fields']['field_big_texas_austin_image']['field'] = 'field_big_texas_austin_image';
  $handler->display->display_options['fields']['field_big_texas_austin_image']['label'] = '';
  $handler->display->display_options['fields']['field_big_texas_austin_image']['element_type'] = '0';
  $handler->display->display_options['fields']['field_big_texas_austin_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_big_texas_austin_image']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_big_texas_austin_image']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_big_texas_austin_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_big_texas_austin_image']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = '0';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['alter']['max_length'] = '150';
  $handler->display->display_options['fields']['body']['alter']['trim'] = TRUE;
  $handler->display->display_options['fields']['body']['element_type'] = '0';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['body']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['body']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['body']['type'] = 'text_trimmed';
  $handler->display->display_options['fields']['body']['settings'] = array(
    'trim_length' => '400',
  );
  /* Field: Content: Big Texas Austin Link */
  $handler->display->display_options['fields']['field_big_texas_austin_link']['id'] = 'field_big_texas_austin_link';
  $handler->display->display_options['fields']['field_big_texas_austin_link']['table'] = 'field_data_field_big_texas_austin_link';
  $handler->display->display_options['fields']['field_big_texas_austin_link']['field'] = 'field_big_texas_austin_link';
  $handler->display->display_options['fields']['field_big_texas_austin_link']['label'] = '';
  $handler->display->display_options['fields']['field_big_texas_austin_link']['element_type'] = '0';
  $handler->display->display_options['fields']['field_big_texas_austin_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_big_texas_austin_link']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_big_texas_austin_link']['element_default_classes'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
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
    'bigtexasaustin' => 'bigtexasaustin',
  );

  /* Display: Big Texas Austin Slide Show Block */
  $handler = $view->new_display('block', 'Big Texas Austin Slide Show Block', 'block');
  $handler->display->display_options['display_description'] = 'Big Texas austin Slide Show Block';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page_1');
  $handler->display->display_options['path'] = 'home';
  $translatables['bigtexasaustin'] = array(
    t('Master'),
    t('Big Texas Austin Slide Show'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Big Texas Austin Slide Show Block'),
    t('Big Texas austin Slide Show Block'),
    t('Page'),
  );
  $export['bigtexasaustin'] = $view;

  return $export;
}
