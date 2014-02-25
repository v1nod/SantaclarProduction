<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */
function santaclara_breadcrumb(&$variables) {     //Commented by Astha
    santaclara_breadcrumb_meetings_override($variables);
    santaclara_breadcrumb_jobs_override($variables);
    $output = '';
    if (!empty($variables['breadcrumb'])) {
        //$variables['breadcrumb'][] = l(drupal_get_title(), current_path(), array('html' => TRUE));
        if (arg(1) == 'find-a-doctor') {
            array_pop($variables['breadcrumb']);
        }
        if (arg(0) == 'node') {
            if (is_numeric(arg(1))) {
                $node = node_load(arg(1));
                if ($node->type == 'provider') {
                    $last_bc = array_pop($variables['breadcrumb']);
                    array_pop($variables['breadcrumb']);
                    $variables['breadcrumb'][] = $last_bc;
                }
            }
        }
        $variables['breadcrumb'][] = truncate_utf8(drupal_get_title(), 35, false, true, 4);


        $output = '<div id="breadcrumb" class="clearfix"><ul class="breadcrumb">';
        $switch = array('odd' => 'even', 'even' => 'odd');
        $zebra = 'even';
        $last = count($variables['breadcrumb']) - 1;

        foreach ($variables['breadcrumb'] as $key => $item) {
            $zebra = $switch[$zebra];
            $attributes['class'] = array('depth-' . ($key + 1), $zebra);

            if ($key == 0) {
                $attributes['class'][] = 'first';
            }

            if ($key == $last) {
                $attributes['class'][] = 'last';
            }

            $output .= '<li' . drupal_attributes($attributes) . '>' . $item . '</li>';
        }

        $output .= '</ul></div>';
    }
    return $output;
}

/**
 * Overrides theme_link.
 */
function santaclara_link($vars) {
    santaclara_link_grievance($vars);
    return theme_link($vars);
}

/**
 * Override theme_link for grievance form only.
 */
function santaclara_link_grievance(&$vars) {
    if (!(arg(0) == 'node' && intval(arg(1)) > 0 && is_null(arg(2)))) {
        return;
    }

    $gf_nids = array(67, 75, 76, 60205, 60224, 60231, 60232);
    if (!in_array(arg(1), $gf_nids)) {
        $node = node_load(arg(1));
        if ($node->type != 'career_opportunity') {
            return;
        }
    }

    if (isset($vars['options']['attributes']['type'])) {
        $ext = strtolower(pathinfo($vars['path'], PATHINFO_EXTENSION));
        $vars['options']['html'] = TRUE;
        $vars['options']['attributes']['target'] = '_blank';
        $vars['text'] .= ' <span class="ext">(' . $ext . ')</span>';
    }
}

// ---------------------

function santaclara_preprocess_views_view_unformatted(&$vars) {
    if ($vars['view']->name == 'clinical_guidelines') {
        $vars['footnotes'] = '';
        foreach ($vars['rows'] as $key => $value) {
            if ($footnotetext = drupal_render($vars['view']->result[$key]->field_field_footnote[0]['rendered'])) {
                $vars['footnotes'] .= '<div class="footnote">' . $footnotetext . '</div>';
            }
        }
    }
}

/**
 * Implements hook_form_alter
 */
function santaclara_form_alter(&$form, &$form_state, $form_id) {

    $word_en_spanish = htmlentities('español');
    $word_de_spanish = html_entity_decode($word_en_spanish);

    $word_en_chinese = htmlentities('中文');
    $word_de_chinese = html_entity_decode($word_en_chinese);

    $word_en_vietnamese = htmlentities('Tiếng Việt');
    $word_de_vietnamese = html_entity_decode($word_en_vietnamese);

    $req_en_viet = htmlentities('Những thông tin cần cung cấp');
    $req_de_viet = html_entity_decode($req_en_viet);

    $req_en_ch = htmlentities('必填项');
    $req_de_ch = html_entity_decode($req_en_ch);

    switch ($form_id) {
        case 'webform_client_form_60227':
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . t('Required Fields') . '</label></div>',
                '#weight' => -101,
            );
            break;

        case 'webform_client_form_67':
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . t('Required Fields') . '</label></div>',
                '#weight' => -101,
            );
            $form['submitted']['language_select'] = array(
                '#type' => 'select',
                '#options' => array(),
                '#weight' => -100,
            );
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-english'] = t('English');
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-spanish'] = $word_de_spanish;
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-vietnamese'] = $word_de_vietnamese;
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-chinese'] = $word_de_chinese;
            switch ($form_id) {
                case 'webform_client_form_67':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-english';
                    break;

                case 'webform_client_form_60231':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-spanish';
                    break;

                case 'webform_client_form_60232':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-vietnamese';
                    break;

                case 'webform-client-form-60224':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-chinese';
                    break;
            }
            break;

        case 'webform_client_form_60233': /* enlish cal mediconnect */
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . t('Required Fields') . '</label></div>',
                '#weight' => -101,
            );
            $form['submitted']['language_select'] = array(
                '#type' => 'select',
                '#options' => array(),
                '#weight' => -100,
            );
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/grievance-form'] = t('English');
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/formulario-de-quejas-del-miembro'] = $word_de_spanish;
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/mau-khieu-nai-cua-hoi-vien'] = $word_de_vietnamese;
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/tou-su-biao-ge'] = $word_de_chinese;
            switch ($form_id) {
                case 'webform_client_form_60233':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/grievance-form';
                    break;

                case 'webform_client_form_60234':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/formulario-de-quejas-del-miembro';
                    break;

                case 'webform_client_form_60235':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/mau-khieu-nai-cua-hoi-vien';
                    break;

                case 'webform-client-form-60236':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/tou-su-biao-ge';
                    break;
            }
            break;


        case 'webform_client_form_60231': /* Added by Astha for Spanish */
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . t('Campos Requeridos') . '</label></div>',
                '#weight' => -101,
            );
            $form['submitted']['language_select'] = array(
                '#type' => 'select',
                '#options' => array(),
                '#weight' => -100,
            );
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-english'] = t('English');
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-spanish'] = $word_de_spanish;
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-vietnamese'] = $word_de_vietnamese;
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-chinese'] = $word_de_chinese;
            switch ($form_id) {
                case 'webform_client_form_67':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-english';
                    break;

                case 'webform_client_form_60231':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-spanish';
                    break;

                case 'webform_client_form_60232':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-vietnamese';
                    break;

                case 'webform-client-form-60224':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-chinese';
                    break;
            }
            break;


        case 'webform_client_form_60234': /* spanish cal mediconnect */
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . t('Campos Requeridos') . '</label></div>',
                '#weight' => -101,
            );
            $form['submitted']['language_select'] = array(
                '#type' => 'select',
                '#options' => array(),
                '#weight' => -100,
            );
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/grievance-form'] = t('English');
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/formulario-de-quejas-del-miembro'] = $word_de_spanish;
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/mau-khieu-nai-cua-hoi-vien'] = $word_de_vietnamese;
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/tou-su-biao-ge'] = $word_de_chinese;
            switch ($form_id) {
                case 'webform_client_form_60233':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/grievance-form';
                    break;

                case 'webform_client_form_60234':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/formulario-de-quejas-del-miembro';
                    break;

                case 'webform_client_form_60235':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/mau-khieu-nai-cua-hoi-vien';
                    break;

                case 'webform-client-form-60236':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/tou-su-biao-ge';
                    break;
            }
            break;



        case 'webform_client_form_60232': /* Added by Astha for Vietnamese */
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . $req_de_viet . '</label></div>',
                '#weight' => -101,
            );
            $form['submitted']['language_select'] = array(
                '#type' => 'select',
                '#options' => array(),
                '#weight' => -100,
            );
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-english'] = t('English');
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-spanish'] = $word_de_spanish;
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-vietnamese'] = $word_de_vietnamese;
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-chinese'] = $word_de_chinese;
            switch ($form_id) {
                case 'webform_client_form_67':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-english';
                    break;

                case 'webform_client_form_60231':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-spanish';
                    break;

                case 'webform_client_form_60232':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-vietnamese';
                    break;

                case 'webform-client-form-60224':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-chinese';
                    break;
            }
            break;

        case 'webform_client_form_60235': /* vietnamese cal mediconnect */
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . $req_de_viet . '</label></div>',
                '#weight' => -101,
            );
            $form['submitted']['language_select'] = array(
                '#type' => 'select',
                '#options' => array(),
                '#weight' => -100,
            );
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/grievance-form'] = t('English');
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/formulario-de-quejas-del-miembro'] = $word_de_spanish;
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/mau-khieu-nai-cua-hoi-vien'] = $word_de_vietnamese;
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/tou-su-biao-ge'] = $word_de_chinese;
            switch ($form_id) {
                case 'webform_client_form_60233':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/grievance-form';
                    break;

                case 'webform_client_form_60234':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/formulario-de-quejas-del-miembro';
                    break;

                case 'webform_client_form_60235':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/mau-khieu-nai-cua-hoi-vien';
                    break;

                case 'webform-client-form-60236':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/tou-su-biao-ge';
                    break;
            }
            break;

        case 'webform_client_form_60224': /* Added by Astha for Chinese */
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . $req_de_ch . '</label></div>',
                '#weight' => -101,
            );
            $form['submitted']['language_select'] = array(
                '#type' => 'select',
                '#options' => array(),
                '#weight' => -100,
            );
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-english'] = t('English');
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-spanish'] = $word_de_spanish;
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-vietnamese'] = $word_de_vietnamese;
            $form['submitted']['language_select']['#options'][base_path() . 'for-members/report-a-problem/grievance-form-chinese'] = $word_de_chinese;
            switch ($form_id) {
                case 'webform_client_form_67':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-english';
                    break;

                case 'webform_client_form_60231':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-spanish';
                    break;

                case 'webform_client_form_60232':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-vietnamese';
                    break;

                case 'webform_client_form_60224':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'for-members/report-a-problem/grievance-form-chinese';
                    break;
            }
            break;

        case 'webform_client_form_60236': /* chinese cal mediconnect */
            $form['submitted']['required_labels'] = array(
                '#type' => 'item',
                '#markup' => '<div class="js-label"><label>
          <span class="form-required" title="' . t('Required Fields') . '">*</span> 
          ' . $req_de_ch . '</label></div>',
                '#weight' => -101,
            );
            $form['submitted']['language_select'] = array(
                '#type' => 'select',
                '#options' => array(),
                '#weight' => -100,
            );

            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/grievance-form'] = t('English');
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/formulario-de-quejas-del-miembro'] = $word_de_spanish;
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/mau-khieu-nai-cua-hoi-vien'] = $word_de_vietnamese;
            $form['submitted']['language_select']['#options'][base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/tou-su-biao-ge'] = $word_de_chinese;

            switch ($form_id) {
                case 'webform_client_form_60233':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/grievance-form';
                    break;

                case 'webform_client_form_60234':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/formulario-de-quejas-del-miembro';
                    break;

                case 'webform_client_form_60235':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/mau-khieu-nai-cua-hoi-vien';
                    break;

                case 'webform_client_form_60236':
                    $form['submitted']['language_select']['#default_value'] = base_path() . 'healthcare-plans/calmediconnect/appeal-grievances/file-an-appeal/tou-su-biao-ge';
                    break;
            }
            break;
    }
}

/**
 * Indicates if there are more meetings in other years.
 */
function santaclara_meeting_archive_in_other_years() {
    $this_year = intval(date('Y'));
    $sql = "SELECT COUNT(entity_id) total FROM {field_data_field_meeting_date} 
  WHERE entity_type = 'node' AND bundle = 'meeting' AND DATE_FORMAT(field_meeting_date_value, '%Y') != {$this_year} 
  LIMIT 1";
    $results = db_query($sql);
    $row = $results->fetchAssoc();
    $total = intval($row['total']);
    return $total;
}

/**
 * Returns a collection of dropdown options for Meeting Years.
 */
function santaclara_get_meeting_years() {
    $sql = "SELECT DATE_FORMAT(field_meeting_date_value, '%Y') year 
  FROM {field_data_field_meeting_date} 
  WHERE entity_type = 'node' AND bundle = 'meeting' 
  GROUP BY year 
  ORDER BY year DESC";
    $results = db_query($sql);
    $selected_year = intval(date('Y'));
    if (!is_null(arg(2))) {
        if (arg(2) == 'all') {
            $selected_year = 'all';
        } else {
            $get_year = intval(arg(2));
            if ($get_year > 2000 && $get_year <= ($selected_year + 10)) {
                $selected_year = $get_year;
            }
        }
    }
    $url = url('about-us/meetings-and-agendas/all', array('absolute' => true));
    if ($selected_year == 'all') {
        $options = "<option selected='selected' value='{$url}'>" . t('All') . "</option>\n";
    } else {
        $options = "<option value='{$url}'>" . t('All') . "</option>\n";
    }
    while (($row = $results->fetchAssoc())) {
        $year = intval(trim($row['year']));
        $url = url('about-us/meetings-and-agendas/' . $year, array('absolute' => true));
        if ($selected_year == $year) {
            $options .= "<option selected='selected' value='{$url}'>{$year}</option>\n";
        } else {
            $options .= "<option value='{$url}'>{$year}</option>\n";
        }
    }
    return $options;
}

/**
 * Returns HTML for a date element formatted as a range.
 */
function santaclara_date_display_range($variables) {
    $date1 = $variables['date1'];
    $date2 = $variables['date2'];
    $timezone = $variables['timezone'];
    $attributes_start = $variables['attributes_start'];
    $attributes_end = $variables['attributes_end'];

    // Wrap the result with the attributes.
    return '<span class="time-interval">' . t('!start-date to !end-date', array(
        '!start-date' => '<span class="date-display-start"' . drupal_attributes($attributes_start) . '>' . $date1 . '</span>',
        '!end-date' => '<span class="date-display-end"' . drupal_attributes($attributes_end) . '>' . $date2 . $timezone . '</span>',
    )) . '</span>';
}

function santaclara_menu_link(array $variables) {
    $element = $variables['element'];
    $sub_menu = '';
    $element['#attributes']['class'][] = 'menu-' . $element['#original_link']['mlid'];
    if ($element['#below']) {
        $sub_menu = drupal_render($element['#below']);
    }


    // Call the original theme function for normal menu link.
    $output = l($element['#title'], $element['#href'], $element['#localized_options']);
    return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

function santaclara_preprocess_search_results(&$variables) {
    $variables['search_term'] = ucwords(arg(2));
    $variables['search_results'] = '';
    if (!empty($variables['module'])) {
        $variables['module'] = check_plain($variables['module']);
    }
    foreach ($variables['results'] as $result) {
        $variables['search_results'] .= theme('search_result', array('result' => $result, 'module' => $variables['module']));
    }
    $tags = array('��', '�', '', '�', '��');

    $variables['pager'] = theme('pager', array('tags' => $tags));
    $variables['theme_hook_suggestions'][] = 'search_results__' . $variables['module'];
}

function santaclara_preprocess_search_result(&$variables) {
    global $language;
    $variables['target'] = '';
    $result = $variables['result'];
    if (isset($result['node'])) {
        $node = $result['node'];
    } else {
        $node = false;
    }
    $variables['url'] = check_url($result['link']);
    $variables['title'] = check_plain($result['title']);
    if ($node) {
        if ($node->type == 'clinical_guideline') {
            $variables['title'] = '<span class="file-type file-type-pdf">[PDF]</span> ' . $variables['title'];
            $variables['target'] = 'target="_blank"';
            if ($field_document = field_get_items('node', $node, 'field_document')) {
                $variables['url'] = file_create_url($field_document[0]['uri']);
            }
        } elseif ($node->type == 'policies_and_proceedures') {
            $variables['title'] = '<span class="file-type file-type-pdf">[PDF]</span> ' . $variables['title'];
            $variables['target'] = 'target="_blank"';
            if ($field_document = field_get_items('node', $node, 'field_upload_document')) {
                $variables['url'] = file_create_url($field_document[0]['file']->uri);
            }
        }
    }


    if (isset($result['language']) && $result['language'] != $language->language && $result['language'] != LANGUAGE_NONE) {
        $variables['title_attributes_array']['xml:lang'] = $result['language'];
        $variables['content_attributes_array']['xml:lang'] = $result['language'];
    }

    $info = array();
    if (!empty($result['module'])) {
        $info['module'] = check_plain($result['module']);
    }

    if (!empty($result['date'])) {
        $info['date'] = format_date($result['date'], 'custom', 'm/d/Y');
    }
    if (isset($result['extra']) && is_array($result['extra'])) {
        $info = array_merge($info, $result['extra']);
    }
    // Check for existence. User search does not include snippets.
    $variables['snippet'] = isset($result['snippet']) ? $result['snippet'] : '';

    if (substr($variables['snippet'], 0, 3) == '...') {
        $variables['snippet'] = substr_replace($variables['snippet'], '', 0, 3);
    }
    // Provide separated and grouped meta information..
    $variables['info_split'] = $info;
    $variables['info'] = implode(' - ', $info);
    $variables['theme_hook_suggestions'][] = 'search_result__' . $variables['module'];
}

/**
 * Overrides Breadcrumb for Job Opportunities.
 */
function santaclara_breadcrumb_jobs_override(&$vars) {
    if (!(arg(0) == 'node' && intval(arg(1)) > 1 && is_null(arg(2)))) {
        return;
    }

    // Check if is a job node
    $node = node_load(arg(1));
    if ($node->type != 'career_opportunity') {
        return;
    }

    // Add Job Opportunities Listing Page to breadcrumb.
    $vars['breadcrumb'][] = l(t('Employment Opportunities'), 'employment-opportunities');
}

/**
 * Overrides Breadcrumb for Meeting Agenda pages.
 */
function santaclara_breadcrumb_meetings_override(&$vars) {
    if (arg(0) == 'about-us' && arg(1) == 'meetings-and-agendas') {
        $vars['breadcrumb'] = array(
            l(t('Home'), '<front>'),
            l(t('About Us'), 'node/6380'),
        );
        if (!is_null(arg(2))) {
            $vars['breadcrumb'][] = l(t('Meetings Agendas and Calendar'), 'about-us/meetings-and-agendas');
            menu_tree_set_path('main-menu', 'about-us/meetings-and-agendas');
        }
    }
}

/**
 * Overrides theme_field.
 */
function santaclara_field($variables) {
    // Overrides Field Output for Job Opportunity nodes.
    if (($output = santaclara_job_opportunity_field($variables))) {
        return $output;
    } else if (($output = santaclara_remove_semicolon($variables))) {
        return $output;
    }

    // Default Theme
    return theme_field($variables);
}

/**
 * Removes semicolon out of the labels for Job Opportunity nodes.
 */
function santaclara_job_opportunity_field($vars) {
    if (!(isset($vars['element']['#bundle']) && $vars['element']['#bundle'] == 'career_opportunity')) {
        return false;
    }

    // Override
    $output = '';

    // Render the label, if it's not hidden.
    if (!$vars['label_hidden']) {
        if ($vars['element']['#label_display'] == 'above') {
            $output .= '<div class="field-label"' . $vars['title_attributes'] . '>' . $vars['label'] . '&nbsp;</div>';
        } else {
            $output .= '<div class="field-label"' . $vars['title_attributes'] . '>' . $vars['label'] . ':&nbsp;</div>';
        }
    }

    // Render the items.
    $output .= '<div class="field-items"' . $vars['content_attributes'] . '>';
    foreach ($vars['items'] as $delta => $item) {
        $classes = 'field-item ' . ($delta % 2 ? 'odd' : 'even');
        $output .= '<div class="' . $classes . '"' . $vars['item_attributes'][$delta] . '>' . drupal_render($item) . '</div>';
    }
    $output .= '</div>';

    // Render the top-level DIV.
    $output = '<div class="' . $vars['classes'] . '"' . $vars['attributes'] . '>' . $output . '</div>';

    return $output;
}

/**
 * Removes semicolon out of the labels for Job Opportunity nodes.
 */
function santaclara_remove_semicolon($vars) {
    $labels = array('More Information', 'Resources', 'Downloads', 'Links');
    if (!in_array($vars['label'], $labels)) {
        return false;
    }

    // Override
    $output = '';

    // Render the label, if it's not hidden.
    if (!$vars['label_hidden']) {
        if ($vars['element']['#label_display'] == 'above') {
            $output .= '<div class="field-label"' . $vars['title_attributes'] . '>' . $vars['label'] . '&nbsp;</div>';
        } else {
            $output .= '<div class="field-label"' . $vars['title_attributes'] . '>' . $vars['label'] . ':&nbsp;</div>';
        }
    }

    // Render the items.
    $output .= '<div class="field-items"' . $vars['content_attributes'] . '>';
    foreach ($vars['items'] as $delta => $item) {
        $classes = 'field-item ' . ($delta % 2 ? 'odd' : 'even');
        $output .= '<div class="' . $classes . '"' . $vars['item_attributes'][$delta] . '>' . drupal_render($item) . '</div>';
    }
    $output .= '</div>';

    // Render the top-level DIV.
    $output = '<div class="' . $vars['classes'] . '"' . $vars['attributes'] . '>' . $output . '</div>';

    return $output;
}

/**
 * Override link for sitemap.
 */
function santaclara_site_map_menu_link(&$vars) {
    $element = $vars['element'];
    $sub_menu = '';

    if ($element['#below']) {
        $sub_menu = drupal_render($element['#below']);
    }
    $element['#localized_options']['html'] = true;
    $output = l('&raquo; ' . $element['#title'], $element['#href'], $element['#localized_options']);
    return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

/**
 *
 * @param type $element
 * @param type $choices
 * @return string 
 */


//function santaclara_select($variables) {
//    $element = $variables['element'];
//    element_set_attributes($element, array('id', 'name', 'size'));
//    _form_set_class($element, array('form-select'));
//    return '<select' . drupal_attributes($element['#attributes']) . '>' . THEME_form_select_options($element) . '</select>';
//}