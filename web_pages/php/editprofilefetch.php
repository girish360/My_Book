<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$user_id=$_SESSION["userid"];

$servername = "localhost";
$username = "abhilash";
$password = "Abhilash!0";

// Create connection
$conn = new mysqli($servername, $username, $password, "MyBook", 3306);

// Check connection
if ($conn->connect_error) {
    die("Connection failed:<br><br> " . $conn->connect_error);
} 

//Fetching data from database
$sql = "SELECT firstname,lastname,email from profile  where id='".$user_id."'";
$result = $conn->query($sql);

$outp = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
	$outp .= '{"firstname":"'  . $rs["firstname"] . '",';
    $outp .= '"lastname":"'  . $rs["lastname"] . '",';
    $outp .= '"email":"'   . $rs["email"]      . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>