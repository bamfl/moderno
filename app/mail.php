<?php
	//Получаем данные из html формы

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];


	// Обработка данных

	$name = htmlspecialchars($name);
	$email = htmlspecialchars($email);
	$message = htmlspecialchars($message);

	$name = urldecode($name);
	$email = urldecode($email);
	$message = urldecode($message);

	$name = trim($name);
	$email = trim($email);
	$message = trim($message);


	//Отправка на почту

	if (mail("petukhovrabota@mail.ru",
				"Новое письмо с сайта One Prime",
				"Имя: ".$name."\n".
				"Имя: ".$email."\n".
				"Имя: ".$message,
				"From: no-reply@mydomain.ru \r\n")

	) {
		echo ('Письмо успешно отправлено!');
	}

	else {
		echo ('Есть ошибки! Проверьте данные...');
	}
?>