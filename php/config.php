<?php
// Database configuration for Yeahost
$host = "localhost";
$user = "your_yeahost_user";
$pass = "your_db_password";
$dbname = "izylions_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
