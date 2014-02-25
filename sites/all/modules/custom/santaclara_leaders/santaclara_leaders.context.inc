<?php
/**
 * @file
 * santaclara_leaders.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function santaclara_leaders_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'board_members';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'board-members' => 'board-members',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-39' => array(
          'module' => 'block',
          'delta' => '39',
          'region' => 'content',
          'weight' => '-17',
        ),
        'system-main' => array(
          'module' => 'system',
          'delta' => 'main',
          'region' => 'content',
          'weight' => '-10',
        ),
        'block-40' => array(
          'module' => 'block',
          'delta' => '40',
          'region' => 'content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['board_members'] = $context;

  return $export;
}
