<?php
// $Id: $
/**
 * @file views-view-fields--bigtexas.tpl.php
 * Views template for the default Big Texas Slide Show theme.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 */
//dpm($fields);
?>

<?php print $fields['field_big_texas_austin_image']->content; ?>
<div class="bigtexas-words">
  <div class="bigtexas-words-inner">
    <h2 class="slider_header"><?php print $fields['title']->raw; ?></h2>
    <?php //print $fields['body']->content; ?>
    <a href="<?php print $fields['field_big_texas_austin_link']->content; ?>" class="slider_link">Learn More</a>
  </div>
</div>