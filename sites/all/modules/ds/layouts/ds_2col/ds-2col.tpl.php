<?php
error_reporting(0);
/**
 * @file
 * Display Suite 2 column template.
 */
?>
<<?php print $layout_wrapper;
print $layout_attributes; ?> class="ds-2col <?php print $classes; ?> clearfix">

<?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
<?php endif; ?>
<<?php print $left_wrapper ?> class="group-left<?php print $left_classes;
?>">
<?php print $left; ?>

<!-- Added by Astha to display custom region starts from here -->
<?php if ($node->type == 'for_providers_landing_page') : ?>
    <div id="providers_news">
        <?php print render(block_get_blocks_by_region('providers_news_and_events')); ?>
    </div>
<?php endif ?>
<!-- Added by Astha to display custom region ends here -->

</<?php print $left_wrapper ?>>

<<?php print $right_wrapper ?> class="group-right<?php print
        $right_classes; ?>">
<?php print $right; ?>
</<?php print $right_wrapper ?>>

<!-- Added by Astha to display custom cck field starts from here -->
<?php //print_r($node);exit;?>

<?php if ($node->field_material_id_disclaimer_dat[und][0]['value']) : ?>
    <div class="optional_box">
        <?php $info = field_info_instance('node', 'field_material_id_disclaimer_dat', 'cmc_page'); ?>
        <?php 
        echo $info[label].'<br/>';
        echo $node->field_material_id_disclaimer_dat[und][0]['value'] ?>
        
    </div>
<?php endif ?>

<?php if ($node->field_material_id_disc_dat_cmc_l[und][0]['value']) : ?>
    <div class="optional_box">
        <?php $info = field_info_instance('node', 'field_material_id_disc_dat_cmc_l', 'cmc_landing_page'); ?>
        <?php 
        echo $info[label].'<br/>';
        echo $node->field_material_id_disc_dat_cmc_l[und][0]['value'] ?>
        
    </div>
<?php endif ?>

<?php if ($node->field_mat_id_dis_dat_temp_five[und][0]['value']) : ?>
    <div class="optional_box">
        <?php $info = field_info_instance('node', 'field_mat_id_dis_dat_temp_five', 'report_fraud_temp_five'); ?>
        <?php 
        echo $info[label].'<br/>';
        echo $node->field_mat_id_dis_dat_temp_five[und][0]['value'] ?>
        
    </div>
<?php endif ?>

<?php if ($node->field_mat_id_dis_dat_tem_seven[und][0]['value']) : ?>
    <div class="optional_box">
        <?php $info = field_info_instance('node', 'field_mat_id_dis_dat_tem_seven', 'member_login_temp_seven'); ?>
        <?php 
        echo $info[label].'<br/>';
        echo $node->field_mat_id_dis_dat_tem_seven[und][0]['value'] ?>
        
    </div>
<?php endif ?>

<!-- Added by Astha to display custom cck field ends here -->

<<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
    <?php print $drupal_render_children ?>
<?php endif; ?>
