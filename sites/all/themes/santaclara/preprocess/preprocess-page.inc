<?php 

function santaclara_alpha_preprocess_page(&$vars) {
  if (arg(0)=='search') {
    drupal_set_title('Search Results');
  }
  if (arg(0)=='home') {
    drupal_set_title('Santa Clara Family Health Plan');
  }
}
