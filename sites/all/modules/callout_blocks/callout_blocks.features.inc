<?php
/**
 * @file
 * callout_blocks.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function callout_blocks_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function callout_blocks_node_info() {
  $items = array(
    'callout_blocks' => array(
      'name' => t('Callout Blocks'),
      'base' => 'node_content',
      'description' => t('Use this content type for the Callout Blocks for the Home Page, the Provider Landing Page, the Member Landing Page, and the Community Landing Page.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
