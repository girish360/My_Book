<html>
<body>

Welcome <?php echo $_POST["firstname"]; ?><br>
Your email address is: <?php echo $_POST["email"], "<br><br>"; 
echo "You are registered successfully...please login now. ";
echo"<a href='../login.html'>click here</a> or wait for 15 seconds to go to login page";
header('Refresh: 15; URL= ../login.html'); 
?>

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
echo "<br>Connected successfully<br><br>";

//insert user_details into table
$firstname=$_POST["firstname"];
$lastname=$_POST["lastname"];
$email=$_POST["email"];
$password=$_POST["password"];
$sql = "INSERT INTO Profile (firstname, lastname, email, password)
VALUES ('".$firstname."', '".$lastname."', '".$email."', '".$password."')";

?>

</body>
</html>