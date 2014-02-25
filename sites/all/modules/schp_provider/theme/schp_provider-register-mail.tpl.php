<html>
  <head><title><?php print $subject;?></title></head>
  <body>
    <p>A new provider has requested a login id/pwd via the provider registration form.</p>
    
    <p>
      <strong>Date Submitted:</strong> <?php print $date; ?><br/>
      <strong>Requester Name:</strong> <?php print $requester_name; ?><br/>
      <strong>Phone:</strong> <?php print $phone; ?><br/>
      <strong>Email:</strong> <a href="mailto:<?php print $email;?>"><?php print $email;?></a><br/>
      <strong>Provider Name:</strong> <?php print $provider_name; ?><br/>
      <strong>Company Name:</strong> <?php print $company_name; ?><br/>
      <strong>Address:</strong> <?php print $company_address; ?>
    </p>
  </body>
</html>
