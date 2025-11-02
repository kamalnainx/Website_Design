<?php
$name=$_REQUEST['Name'];
$email=$_REQUEST['Email'];
$message=$_REQUEST['Message'];

if(empty($name)||empty($email)||empty($message))
{
    echo("Pls fill all the fields");
}
else
{
    mail("samarthsaluja24@gmail.com","Email Form",$message,"From:$name <$email>");
    echo"<script type='text/javascript'>alert('Message Send Successfull');
    window.history.go(-1);
    </script>";
}
?>