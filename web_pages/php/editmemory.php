<?php
//Receiving data from client
session_start();
if(isset($_POST['memory_title']) && isset($_POST['memory_data']) && isset($_POST['modified_date'])){

$memory_title = $_POST['memory_title'];
$memory_data = $_POST['memory_data'];
$modified_date = $_POST['modified_date'];
$memory_id = $_POST['memory_id'];

if($memory_title == NULL && $memory_data == NULL && $modified_date == NULL)
{
   echo "empty";
}

else
{	

$servername = "localhost";
$username = "abhilash";
$password = "Abhilash!0";

// Create connection
$conn = new mysqli($servername, $username, $password, "MyBook", 3306);

// Check connection
if ($conn->connect_error) {
    die("Connection failed:<br><br> " . $conn->connect_error);
} 

//"ALTER TABLE tablename AUTO_INCREMENT = 1" to set auto incrememt to 0 again
 
//insert user_details into table
//$id=$_SESSION["userid"];
$memory_title=$conn->real_escape_string($memory_title);
$memory_data=$conn->real_escape_string($memory_data);
$lastmodified_date=$modified_date;

$sql = "UPDATE Memories SET memory_title = '".$memory_title."' ,memory_data = '".$memory_data."', lastmodified_date = '".$lastmodified_date."' WHERE memory_id = '".$memory_id."' ";


if ($conn->query($sql) === TRUE) {
    echo "Success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
}
};
?>