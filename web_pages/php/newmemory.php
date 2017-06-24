<?php
//Receiving data from client
session_start();
if(isset($_POST['memory_title']) && isset($_POST['memory_data']) && isset($_POST['created_date'])){

$memory_title = $_POST['memory_title'];
$memory_data = $_POST['memory_data'];
$created_date = $_POST['created_date'];

if($memory_title == NULL && $memory_data == NULL && $created_date == NULL)
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

//ALTER TABLE tablename AUTO_INCREMENT = 1
//insert user_details into table
$id=$_SESSION["userid"];
$memory_title=$conn->real_escape_string($memory_title);
$memory_data=$conn->real_escape_string($memory_data);
$lastmodified_date=$created_date;
$sql = "INSERT INTO Memories (id, memory_title, memory_data, created_date, lastmodified_date)
VALUES ('".$id."', '".$memory_title."', '".$memory_data."', '".$created_date."', '".$lastmodified_date."')";
if ($conn->query($sql) === TRUE) {
    echo "Success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
}
};
?>