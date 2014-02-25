<?php  $node_type = 'provider';
  
  //fetch the nodes we want to delete
  $result = db_query("SELECT n.nid FROM {node} n WHERE type='provider'");
foreach ($result as $record) {
  node_delete($record->nid);

  $deleted_count+=1;
}
  //simple debug message so we can see what had been deleted.
  print "$deleted_count nodes have been deleted";

