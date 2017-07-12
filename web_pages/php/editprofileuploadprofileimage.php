<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

session_start();
$user_id=$_SESSION["userid"];

if(isset($_FILES["fileToUpload"]["type"]))
{
$validextensions = array("jpeg", "jpg", "png");
$temporary = explode(".", $_FILES["fileToUpload"]["name"]);
$file_extension = end($temporary);
if ((($_FILES["fileToUpload"]["type"] == "image/png") || ($_FILES["fileToUpload"]["type"] == "image/jpg") || ($_FILES["fileToUpload"]["type"] == "image/jpeg")
) && in_array($file_extension, $validextensions)) 
{
	
$path_parts = pathinfo($_FILES["fileToUpload"]["name"]);

$sourcePath = $_FILES['fileToUpload']['tmp_name']; // Storing source path of the file in a variable

//$extension=$path_parts['extension'];
//$targetPath = "static/Profile_images/" . "$user_id"."."."$extension"; // Target path where file is to be stored

//All images stored only in jpg format only. The above commented code will save in it's original format.But in order to avoid multiple profile images 
 //for same user... we are using jpg only. 
$targetPath = "static/Profile_images/" . "$user_id".".jpg"; // Target path where file is to be stored

move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
/*
echo "<span id='success'>Image Uploaded Successfully...!!</span><br/>";
echo "<br/><b>File Name:</b> " . $_FILES["file"]["name"] . "<br>";
echo "<b>Type:</b> " . $_FILES["file"]["type"] . "<br>";
echo "<b>Size:</b> " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
echo "<b>Temp file:</b> " . $_FILES["file"]["tmp_name"] . "<br>";
*/
echo "success";

}
else
{
echo "Unidentified file type (only supports jpg/jpeg or png)";
}
}
else
{
	echo "Nothing selected for profile image";
}
?>