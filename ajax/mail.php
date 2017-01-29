<?php

$project_name = trim($_POST["project_name"]);
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

$subject = 'Новое сообщение с сайта "ГК Качественный сервис"';	

// $headers= "From: noreply <noreply@noreply.ru>\r\n";
// $headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
// $headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
// $headers.= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";


// $headers = "MIME-Version: 1.0" . PHP_EOL .
// "Content-Type: text/html; charset=utf-8" . PHP_EOL .
// 'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
// 'Reply-To: '.$admin_email.'' . PHP_EOL;

$to = "almaz.hasanov1@mail.ru";

// $message .= "Phone: $Phone\n";
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


mail ($to,$subject,$message,$headers);
// include("ajax/amocrm_api.php");
?>