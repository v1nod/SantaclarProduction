<?php

function accesibility_field_value($value) {
  if ($value == 'Y') {
    return 'Y';
  }
  elseif ($value == 'N'){
    return 'N';
  }
  else {
    return 'NA';
  }
}
  $mysqli =  mysqli_connect('localhost', 'root', 'root', 'test');
  
  $query = "select 
    *
    from providers where (LOB = 'HK' or LOB = 'MC') and imported = 0 limit 50";
  if (mysqli_connect_error()) {
      die('Connect Error (' . mysqli_connect_errno() . ') '
              . mysqli_connect_error());
  }
  mysqli_query($mysqli, "set names 'utf8'");
  if ($result = mysqli_query($mysqli, $query)) {
    $found = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        //print_r($row);
        $node = new stdClass(); // We create a new node object
        $node->type = "provider"; // Or any other content type you want
        $node->title = $row['FName'] . ' ' . $row['MName'] . ' ' . $row['LName'];
        $node->language = LANGUAGE_NONE; // Or any language code if Locale module is enabled. More on this below *

        node_object_prepare($node); // Set some default values.
        $node->uid = 1; // Or any id you wish
       
        // Let's add standard body field
        $node->field_first_name[$node->language][0]['value'] = trim($row['FName']); 
        $node->field_middle_name[$node->language][0]['value'] = trim($row['MName']);
        $node->field_last_name[$node->language][0]['value'] = trim($row['LName']);
        $node->field_title[$node->language][0]['value'] = trim($row['Title']);
        $node->field_specialty_code[$node->language][0]['value'] = trim($row['Spec']);
        $node->field_specialty_short_name[$node->language][0]['value'] = trim($row['SpecShort']);
        $node->field_specialty_description[$node->language][0]['value'] = trim($row['SpecDesc']);
        $node->field_accepting_new_patients[$node->language][0]['value'] = ($row['AcceptNewPat'] == '1') ? 1 : 0 ;
        $node->field_parking[$node->language][0]['value'] = accesibility_field_value($row['FSR_PK']);
        $node->field_exterior_building_access[$node->language][0]['value'] = accesibility_field_value($row['FSR_EB']);
        $node->field_interior_building_access[$node->language][0]['value'] = accesibility_field_value($row['FSR_IB']);
        $node->field_restroom[$node->language][0]['value'] = accesibility_field_value($row['FSR_RR']);
        $node->field_exam_room[$node->language][0]['value'] = accesibility_field_value($row['FSR_ER']);
$node->field_exam_table_scale[$node->language][0]['value'] = accesibility_field_value($row['FSR_ET']);
        
        
        $node->field_lob[$node->language][0]['value'] = trim($row['LOB']);
        $node->field_type[$node->language][0]['value'] = trim($row['Type']);
        $node->field_hours[$node->language][0]['value'] = trim($row['Hours']);
      
        $prov_langs = explode(',', $row['LangProv']);
        foreach ($prov_langs as $key => $value) {
          $lang = trim($value);
          if ($lang != '') {
            $node->field_provider_language[$node->language][]['value'] = $lang;
          } 
        }
        
        $staff_langs = explode(',', $row['LangStaff']);
        foreach ($staff_langs as $key => $value) {
          $lang = trim($value);
          if ($lang != '') {
            $node->field_staff_language[$node->language][]['value'] = $lang;
          } 
        }
        $networks = explode(',', $row['Networks']);
        foreach ($networks as $key => $value) {
          $network = trim($value);
          if ($network != '') {
            $node->field_networks[$node->language][]['value'] = $network;
          } 
        }
        
        $hospitals = explode(',', $row['Hospitals']);
        foreach ($hospitals as $key => $value) {
          $hospital = trim($value);
          if ($hospital != '') {
            $node->field_hospitals[$node->language][]['value'] = $hospital;
          } 
        }
        
        $node->field_gender[$node->language][0]['value'] = ($row['Gender'] == 'M')? 'Male' : 'Female';
        
        
        
        $location = array(
          'street' => trim($row['Addr']),
          'city' => trim($row['City']),
          'province' => trim($row['State']),
          'postal_code' => trim($row['Zip']),
          'country' => 'us', );
          $coordinates = db_query(
                  'select l.lid, l.latitude, l.longitude
                    from {location} l
                    where l.street = :street and
                    l.city = :city and
                    l.province = :province and
                    l.postal_code = :zip and
                    l.country = :country
                    limit 1',
                    array(
                      ':street' => trim($row['Addr']),
                      ':city' => trim($row['City']),
                      ':province' => trim($row['State']),
                      ':zip' => trim($row['Zip']),
                      ':country' => 'us'
                    )
                    );
                  $latitude = 0;
                  $longitude = 0;
                  foreach ($coordinates as $record) {
                    $latitude = $record->latitude;
                    $longitude = $record->longitude;
                    $found_lid = $record->lid;
                  }
                  if ($latitude != 0 or $longitude != 0) {
                    $found++;
                    //print "$found Location Found\n";
                    $location['lid'] = $found_lid;
                    $location['inhibit_geocode'] = true;
                    $location['latitude'] = $latitude;
                    $location['longitude'] = $longitude;
                  }
          $criteria = array(
            
          );
          $lid = location_save($location);
          if ($lid){
            $node->field_location[$node->language][0] = location_load_location($lid);
          }
        /*$node->field_location[$node->language][0]['street'] = $row['Addr'];
        $node->field_location[$node->language][0]['city'] = $row['City'];
        $node->field_location[$node->language][0]['province'] = $row['State'];
        $node->field_location[$node->language][0]['postal_code'] = $row['Zip'];
        $node->field_location[$node->language][0]['country_name'] = 'United States';
        $node->field_location[$node->language][0]['phone'] = $row['Phone'];*/
        
        $node = node_submit($node); // Prepare node for a submit
        /*$coordinates = db_query(
        'select l.latitude, l.longitude
          from {location} l
          where l.street = :street and
          l.city = :city and
          l.province = :province and
          l.postal_code = :zip and
          l.country = :country
          limit 1',
          array(
            ':street' => $row['Addr'],
            ':city' => $row['City'],
            ':province' => $row['State'],
            ':zip' => $row['Zip'],
            ':country' => 'us'
          )
          );
        $latitude = 0;
        $longitude = 0;
        foreach ($coordinates as $record) {
          $latitude = $record->latitude;
          $longitude = $record->longitude;
        }
        if ($latitude != 0 or $longitude != 0) {
          $found++;
          print "$found Location Found\n";
          $node->field_location[$node->language][0]['latitude'] = $latitude;
          $node->field_location[$node->language][0]['longitude'] = $longitude;
        }*/
        $node = node_submit($node);
        node_save($node); // After this call we'll get a nid
        $provider_import = array();
        $provider_import = array(
          'nid' => $node->nid,
          'pid' => $row['ID'],
        );
        drupal_write_record('provider_import', $provider_import);
        mysqli_query($mysqli, 'update providers set imported = 1 where ID = ' . $row['ID']);
    }
  }
  mysqli_free_result($result);
  $mysqli->close();
?>
