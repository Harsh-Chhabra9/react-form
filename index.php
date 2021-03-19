<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
$servername="localhost";
$username="root";
$passwordname="";
$databasename="react-reg";

$con=mysqli_connect($servername,$username,$passwordname,$databasename);
    if(!$con)
    {
        die("Unable to Connect");
    }
    else
    {
        $name=$_POST['name'];
        $email=$_POST['email'];
        $password=$_POST['password'];
        $query="INSERT into registration VALUES('','$name','$email','$password')";
        $r=mysqli_query($con,$query);
        if($r)
        {
            echo"Data Has been Successfully Inserted";
        }
        else
        {
            echo"Error";
        }
    }

?>