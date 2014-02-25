<?php
/**
 * @file
 * santaclara_leaders.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function santaclara_leaders_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'board_members';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Board Members';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Board Members';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
  $handler->display->display_options['style_plugin'] = 'grid';
  $handler->display->display_options['style_options']['grouping'] = array(
    0 => array(
      'field' => 'field_board_member_category',
      'rendered' => 1,
      'rendered_strip' => 0,
    ),
  );
  $handler->display->display_options['style_options']['columns'] = '3';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Category */
  $handler->display->display_options['fields']['field_board_member_category']['id'] = 'field_board_member_category';
  $handler->display->display_options['fields']['field_board_member_category']['table'] = 'field_data_field_board_member_category';
  $handler->display->display_options['fields']['field_board_member_category']['field'] = 'field_board_member_category';
  $handler->display->display_options['fields']['field_board_member_category']['label'] = '';
  $handler->display->display_options['fields']['field_board_member_category']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_board_member_category']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_board_member_category']['type'] = 'taxonomy_term_reference_plain';
  $handler->display->display_options['fields']['field_board_member_category']['group_rows'] = FALSE;
  $handler->display->display_options['fields']['field_board_member_category']['delta_offset'] = '0';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['field_board_member_title']['id'] = 'field_board_member_title';
  $handler->display->display_options['fields']['field_board_member_title']['table'] = 'field_data_field_board_member_title';
  $handler->display->display_options['fields']['field_board_member_title']['field'] = 'field_board_member_title';
  $handler->display->display_options['fields']['field_board_member_title']['label'] = '';
  $handler->display->display_options['fields']['field_board_member_title']['element_label_colon'] = FALSE;
  /* Field: Content: Organization */
  $handler->display->display_options['fields']['field_board_member_organization']['id'] = 'field_board_member_organization';
  $handler->display->display_options['fields']['field_board_member_organization']['table'] = 'field_data_field_board_member_organization';
  $handler->display->display_options['fields']['field_board_member_organization']['field'] = 'field_board_member_organization';
  $handler->display->display_options['fields']['field_board_member_organization']['label'] = '';
  $handler->display->display_options['fields']['field_board_member_organization']['element_label_colon'] = FALSE;
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
    'board_member' => 'board_member',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'board-members';
  $translatables['board_members'] = array(
    t('Master'),
    t('Board Members'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Page'),
  );
  $export['board_members'] = $view;

  return $export;
}
