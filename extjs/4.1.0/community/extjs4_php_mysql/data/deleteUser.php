<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
require_once 'lib/response.php';
require_once 'lib/request.php';


class User
{		
		var $userID;
		var $name;
		var $lastname;
                var $age;
}

require_once('database_connection.php');
$request = new Request(array());

if(isset($request->params))
{

    $array_r=$request->params;
    $user= new User();
    $user->userID=($array_r->userID);
    $user->name=($array_r->name);
    $user->lastname=($array_r->lastname);
    $user->age=($array_r->age);
    
    //Delete
    $query="DELETE FROM Users WHERE userID=$user->userID";
    $result = mysql_query($query);
    //object response
    $res = new Response();
    $res->success = true;
    $res->message = "Deleted record";

    print_r($res->to_json());
}
else
{
    //echo "false";
    $res = new Response();
    $res->success = false;
    $res->message = "Error Create record";
    $res->data = array();
    print_r($res->to_json());
}
?>
