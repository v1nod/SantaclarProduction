<?php

/**
 * @file
 * Default theme implementation for rendering a block.
 *
 * Available variables:
 * - $dest: The drupal function drupal_get_destination().
 * - $block_title: Block title: "Text Size" or "Zoom".
 * - $list_inline: Display the ul list "inline" or not.
 * - $current_inline: Display the current text size "inline" or not.
 * - $subtitle: The subtitle.
 * - $subtitle_text: "Text Size"/"Zoom" or inline "Text Size: "/"Zoom: ".
 * - $textsize_normal: The text size normal link.
 * - $display_links: Show or hide ("display_hidden") the text in the links.
 * - $current_textsize: The current text size.
 * - $display_current_textsize: Show or hide ("display_hidden") the text of the current textsize.
 * - $display_current_textsize_text: Show or hide ("display_hidden").
 * - $increment: The increment step (default 5%).
 * - $normal: The textsize normal (default 75%).
 * - $current_textsize_text: The current textsize text "Current Size" or "Current Zoom".
 * - $textsize: The current text size (default 100%).
 *
 * @see template_preprocess_textsize_text()
 */
?>
<ul class="textsize_<?php print $list_inline .' '. $current_inline; ?>">
<?php  if ($textsize_increase): ?>
  <li class="ts_increase"><?php print l('<span class="'. $display_links .'">'. 'A+' .'</span>', 'textsize/increase', array('attributes' => array('title' => $block_title .': '. t('Increase') .' +'. $increment .'%', 'class' => 'ts_icon ts_increase textsize_increase text_'. $display_links, 'rel' => 'nofollow'), 'query' => $dest, 'html' => TRUE)); ?></li>
<?php endif; ?>
<?php  if ($textsize_decrease): ?>
  <li class="ts_decrease"><?php print l('<span class="'. $display_links .'">'. 'A-' .'</span>', 'textsize/decrease', array('attributes' => array('title' => $block_title .': '. t('Decrease') .' -'. $increment .'%', 'class' => 'ts_icon ts_decrease textsize_decrease text_'. $display_links, 'rel' => 'nofollow'), 'query' => $dest, 'html' => TRUE)); ?></li>
<?php endif; ?>
</ul>
