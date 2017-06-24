<html>
<head>
<link rel="stylesheet" type="text/css" href="css/login.css">
</head>
<body>
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


$email=$_POST["username"];
$password=$_POST["password"];
//echo "$email<br>$password";
$sql="SELECT * FROM PROFILE WHERE email='".$email."' and password='".$password."' ";
$result = $conn->query($sql);



if ($result->num_rows > 0)
	{
    echo"<div class='animation'><div class='loader'></div><div>Please wait. loading....<br><br></div></div>";	
    header('Refresh: 2; URL= ../home.html');
	session_start();
	$row = $result->fetch_assoc();
    $_SESSION["user"] = $row["email"];
	$_SESSION["username"]=$row["firstname"];
    $_SESSION["userid"] = $row["id"];
	/*
	session_unset();
	session_destroy(); 
    echo "Session completed. Redirect to login page and login again";
	*/
    }
   else 
   {
    echo "<div class='incorrect'>Incorrect username/Password. Please login again!!</div>";
	header('Refresh: 2; URL= ../login.html');
   }

$conn->close();
?>
</body>
</html>
