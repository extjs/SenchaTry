<?php

//Import Response Class
require_once 'lib/response.php';

//Creating User Class
class User
{		
		var $userID;
		var $name;
		var $lastname;
        var $age;
}
//Make DB connection
require_once('database_connection.php');
//Query BD
if(isset($_GET['start']))
    $offset = $_GET['start'];
else
    $offset = 0;

$limit = $_GET['limit'];

$result = mysql_query("SELECT * FROM Users LIMIT $offset, $limit");
$totalquery = mysql_query("SELECT COUNT(*) FROM Users");
$total = mysql_fetch_array($totalquery);
$total =($total[0]);
$query_array=array();
$i=0;
//Iterate all Select
while($row = mysql_fetch_array($result))
  {
    //Create New User instance
    $user = new User();
    //Fetch User Info
    $user->userID=$row['userID'];
    $user->name=$row['name'];
    $user->lastname=$row['lastname'];
    $user->age=$row['age'];
    
    //Add User to ARRAY
    $query_array[$i]=$user;
    $i++;
  }
mysql_close($con);

//Creating Json Array needed for Extjs Proxy
$res = new Response();
$res->success = true;
$res->message = "Loaded data";
$res->total = $total;
$res->data = $query_array;
//Printing json ARRAY
print_r($res->to_json());


?>