<?php

// Connect ot a database
$conn = mysqli_connect('localhost', 'root', 'password', 'ajaxtest');

echo 'Processing...';

// Check for POST variable
if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    echo 'POST: Your name is '.$_POST['name'];

    $query = "INSERT INTO user(name) VALUES('$name')";

    if(mysqli_query($conn, $query)){
        echo 'User Added...';
    }
    else{
        echo 'ERROR: '. mysqli_error($conn); 
    }

}

// Check for GET variable
if(isset($_GET['name'])){
    echo 'GET: Your name is '.$_GET['name'];
}