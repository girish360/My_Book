<?php

header("Access-Control-Allow-Origin: *");
header("text");

session_start();
$user_id=$_SESSION["userid"];

$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);
//echo var_dump($request);
$firstname = $request['firstname'];
$lastname = $request['lastname'];
$old_password = $request['old_password'];
$new_password =  $request['new_password'];

$servername = "localhost";
$username = "abhilash";
$password = "Abhilash!0";

// Create connection
$conn = new mysqli($servername, $username, $password, "MyBook", 3306);

// Check connection
if ($conn->connect_error) {
    die("Connection failed:<br><br> " . $conn->connect_error);
} 


//When user edit other profile except password
if ($old_password == "" && $new_password == "")
{
	
	  //Since old_password and new_password are "" that means user didn't touch the password field. 
	$sql = "UPDATE Profile SET firstname = '".$firstname."' ,lastname = '".$lastname."' where id='".$user_id."' ";

    if ($conn->query($sql) === TRUE) 
     {
	   $_SESSION["username"]=$firstname;	 
       die("success");
	   
     } 

}

//When user edit other profile along with password

//Fetching data from database
$sql = "SELECT * from profile  where id='".$user_id."' and password='".$old_password."'";
$result = $conn->query($sql);

//If user enters correct password then only we make any changes otherwise cancel all changes.
if ($result->num_rows > 0)
{
$sql = "UPDATE Profile SET firstname = '".$firstname."' ,lastname = '".$lastname."', password = '".$new_password."' where id='".$user_id."' ";

    if ($conn->query($sql) === TRUE) 
     {
       echo "success";
	   //Setting session variables
	   $_SESSION["username"]=$firstname;
     } 

}
else
{
	$sql = "UPDATE Profile SET firstname = '".$firstname."' ,lastname = '".$lastname."' where id='".$user_id."' ";
    if ($conn->query($sql) === TRUE) 
     {
          echo "incorrect password";
		  $_SESSION["username"]=$firstname;
     }
}
$conn->close();
?>