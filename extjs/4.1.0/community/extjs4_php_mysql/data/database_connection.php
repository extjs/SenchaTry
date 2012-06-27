<?php

$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }  

mysql_select_db("CRUD_Extjs4", $con);


?>
