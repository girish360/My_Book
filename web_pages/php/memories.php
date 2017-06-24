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
$sql = "SELECT memory_id,memory_title, memory_data, lastmodified_date from memories  where id='".$user_id."' ORDER BY lastmodified_date DESC ";
$result = $conn->query($sql);

$outp = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
	$outp .= '{"memory_id":"'  . $rs["memory_id"] . '",';
    $outp .= '"memory_title":"'  . $rs["memory_title"] . '",';
	//$rs["memory_data"]= $conn->real_escape_string($rs["memory_data"]);
	//$rs["memory_data"]= nl2br($rs["memory_data"]);
	//$rs["memory_data"]=str_replace("\n","<br/>",$rs["memory_data"]);
	$rs["memory_data"]= json_encode($rs["memory_data"]);
	
	//$rs["memory_data"]= addslashes($rs["memory_data"]);
	//$rs["memory_data"]= test_input($rs["memory_data"]);
	//Not using double quotes...because json_encode already adding.
    $outp .= '"memory_data":'   . $rs["memory_data"]     . ',';
	$outp .= '"lastmodified_date":"'. $conn->real_escape_string($rs["lastmodified_date"])     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

echo($outp);
?>