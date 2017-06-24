<?php

session_start();
$firstname = $_SESSION['username'];
echo $firstname;

?>