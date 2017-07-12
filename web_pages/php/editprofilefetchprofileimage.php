<?php
header("Content-type: text"); 
session_start();
$user_id=$_SESSION["userid"];

$dirname = "static/profile_images/";
$images = glob($dirname."$user_id.*");
$x = 0;
foreach($images as $image) 
{
	$x = $x+1;
    die ($image);
}
$default = glob($dirname."default.*");
if ($x == 0)
{
	echo $default[0];
}
/*
Directly sending image instead of src

$filename = basename($image);
$file_extension = strtolower(substr(strrchr($filename,"."),1));

echo $file_extension;

switch( $file_extension ) {
    case "gif": $ctype="image/gif"; break;
    case "png": $ctype="image/png"; break;
    case "jpeg":
    case "jpg": $ctype="image/jpeg"; break;
    default:
}
header('Content-type: ' . $ctype);
*/
?>