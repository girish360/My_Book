<?php

$servername = "localhost";
$username = "abhilash";
$password = "Abhilash!0";

// Create connection
$conn = new mysqli($servername, $username, $password, "MyBook", 3306);

// Check connection
if ($conn->connect_error) {
    die("Connection failed:<br><br> " . $conn->connect_error);
} 
//Getting data from Client
$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);
//echo var_dump($request);
$memoryId = $request['memory_id'];
//echo "Deleting memory id: " .$memoryId;

$sql = "DELETE FROM MEMORIES WHERE memory_id = '".$memoryId."' ";
$result = $conn->query($sql);
if ($result == true)
{
echo "success";
}
$conn->close();
?>