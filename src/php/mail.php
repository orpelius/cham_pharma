<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "peterslowen123@gmail.com";
    $subject = "MEDICINE QUOTE REQUEST";
    $headers = "From: " . $email;

    mail($to, $subject, $message, $headers);
}

?>