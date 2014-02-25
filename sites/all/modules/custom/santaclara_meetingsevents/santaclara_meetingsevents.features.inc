<?php
/**
 * @file
 * santaclara_meetingsevents.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function santaclara_meetingsevents_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function santaclara_meetingsevents_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function santaclara_meetingsevents_node_info() {
  $items = array(
    'meeting' => array(
      'name' => t('Meeting'),
      'base' => 'node_content',
      'description' => t('Adds a meeting that appears in the Meetings and Agenda Calendar'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
