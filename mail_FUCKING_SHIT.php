<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["artem.korchevy@gmail.com"]);
	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["artem.korchevy@gmail.com"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
}

$message = "
<html> 
    <head> 
        <title>message to you</title> 
    </head> 
    <body> 
        <h2>Здравствуйте администратор!</h2> 
 			<h3>Это универсальное письмо отправленное с вашего ресурса говорит о том, что кто то заполнил форму с заголовком - <b><u>".$form_subject."</u></b></h3>
 				<h3>Данные с формы:</h3>
					<table style='width: 100%;'>$message</table>
    </body> 
</html>

";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

// $headers = "MIME-Version: 1.0" . PHP_EOL .
// "Content-Type: text/html; charset=utf-8" . PHP_EOL .
// 'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
// 'Reply-To: '.$admin_email.'' . PHP_EOL;


$headers    = "MIME-Version: 1.0;$EOL <br>";   
$headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL <br>";  
$headers   .= "From: address@server.com <br>";  
  

mail($admin_email, adopt($form_subject), $message, $headers);


