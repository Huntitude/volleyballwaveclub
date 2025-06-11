<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Set email recipient and headers
    $to = "	for.devlopment.purpose@gmail.com";  // change to your email
    $headers = "From: $name <$email>" . "\r\n";
    $fullMessage = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Something went wrong. Please try again.";
    }
}
?>
