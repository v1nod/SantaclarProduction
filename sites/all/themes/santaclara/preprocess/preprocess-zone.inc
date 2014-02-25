<?php

function santaclara_alpha_preprocess_zone(&$vars) {

  if ($vars['elements']['#zone'] == 'header'){
    $theme = alpha_get_theme();
    $vars['breadcrumb'] = $theme->page['breadcrumb'];  
  }
  
  if ($vars['elements']['#zone'] == 'content'){
    unset($vars['breadcrumb']);  
  }

}