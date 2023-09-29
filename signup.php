<?php
$name=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];

$conn=new mysqli('localhost','root','','register');
if($conn->connect_error){
    die('Connection Failed:'.$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into registers(name,email,password)values(?,?,?) ");
    $stmt->bind_param("sss",$name,$email,$password);
    $stmt->execute();
    echo "Registration successful ";
    $stmt->close();
    $conn->close();
}
?>
