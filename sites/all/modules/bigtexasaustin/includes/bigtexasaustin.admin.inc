<?php
// $Id: $

/**
 * @file
 * Configuration pages for bigtexasaustin austin module.
 */

/**
 * Callback function for admin/settings/bigtexasaustin. Display the settings form.
 */
function bigtexasaustin_settings($form, $form_state) {
  // We'll use these multiple times, so save system resources and make one call to get the paths:
  $module_theme_dir = drupal_get_path('module', 'bigtexasaustin') . '/theme';
  $theme_theme_dir = drupal_get_path('theme', variable_get('theme_default', NULL)) . '/bigtexasaustin';
  // Get the names of the themes in the theme directory
  $module_themes = _bigtexasaustin_dir_list($module_theme_dir);
  if (is_dir($theme_theme_dir)) {
    $theme_themes = _bigtexasaustin_dir_list($theme_theme_dir);
  }
  $theme_list = array();
  foreach ($module_themes as $item) {
    $theme_list[$module_theme_dir . '/' . $item] = $item;
  }
  if (is_dir($theme_theme_dir) && isset($theme_themes)) {
    foreach ($theme_themes as $item) {
      $theme_list[$theme_theme_dir . '/' . $item] = $item . ' (' . variable_get('theme_default', NULL) . ' Theme Override)';
    }
  }
  $theme_msg = t('You have valid theme directory overrides of the Big Texas Slideshow theme.
                 Select the theme override to give you a clear path to fearless modification
                 of the Javascript and CSS for this Slide Show');
  if (!isset($theme_themes)) {
    $theme_msg = t('You can customize your slideshow on the Drupal theme layer.
                   There are currently no valid theme overrides in your default theme folder.
                   To create or override a Big Texas Theme, make a "bigtexasaustin" directory inside
                   your default themes folder and copy the
                   entire directory ([theme_name_directory]) of any theme located inside @module_theme as a directory into
                   @theme_dir/[theme_name_directory].',
                   array(
                         '@module_theme' => $module_theme_dir,
                         '@theme_dir' => drupal_get_path('theme', variable_get('theme_default', NULL)) . '/bigtexasaustin')
                   );
  }
  $form['bigtexasaustin']['bigtexasaustin_theme'] = array(
    '#tree' => FALSE,
    '#type' => 'radios',
    '#title' => 'Select a Theme for your Slide Show.',
    '#options' => $theme_list,
    '#default_value' => variable_get('bigtexasaustin_theme', drupal_get_path('module', 'bigtexasaustin') . '/theme/austin'),
    '#description' => t('Select a theme for your Slide Show.'),
    '#weight' => 4,
    '#suffix' => $theme_msg,
  );
  $form['bigtexasaustin']['bigtexasaustin_pager'] = array(
    '#tree' => FALSE,
    '#type' => 'radios',
    '#title' => 'Select the type of pager for your Slide Show.',
    '#options' => array('no_pager' => 'No Pager', 'picture_pager' => 'Picture Pager, with thumbnails for each slide','circle_pager' => t('Circle Pager: Just circles for each slide in a row or column.')),
    '#default_value' => variable_get('bigtexasaustin_pager', 'picture_pager'),
    '#description' => t('Picture pager will create a list of thumbnails of each slide to use as a pager.'),
    '#weight' => 5,
  );
  // Send warning messages if javascript libraries are not installed:
  _bigtexasaustin_files_exist(variable_get('bigtexasaustin_theme', drupal_get_path('module', 'bigtexasaustin') . '/theme/austin'));
  return system_settings_form($form);
}

/**
 * Helper function to a scan directory and return an
 * array of top level directories
 */
function _bigtexasaustin_dir_list($d){
  foreach(array_diff(scandir($d),array('.','..')) as $f)if(is_dir($d.'/'.$f))$l[]=$f;
  return $l;
}