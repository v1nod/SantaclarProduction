<?php
/**
 * @file
 * bigtexasaustin.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function bigtexasaustin_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function bigtexasaustin_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function bigtexasaustin_image_default_styles() {
  $styles = array();

  // Exported image style: bigtexasaustin.
  $styles['bigtexasaustin'] = array(
    'name' => 'bigtexasaustin',
    'effects' => array(
      1 => array(
        'label' => 'Crop',
        'help' => 'Cropping will remove portions of an image to make it the specified dimensions.',
        'effect callback' => 'image_crop_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_crop_form',
        'summary theme' => 'image_crop_summary',
        'module' => 'image',
        'name' => 'image_crop',
        'data' => array(
          'width' => '2000',
          'height' => '365',
          'anchor' => 'center-center',
        ),
        'weight' => '1',
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function bigtexasaustin_node_info() {
  $items = array(
    'bigtexasaustin' => array(
      'name' => t('bigtexasaustin'),
      'base' => 'node_content',
      'description' => t('Slides for the Big Texas Austin Slide Show'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
