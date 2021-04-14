<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['comments'];

		$to='xyz.123@mail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$comments;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Enviado com Sucesso! Obrigado!"." ".$name.", Entraremos em contato em breve!</h1>";
		}
		else{
			echo "Algo deu errado! Tente novamente.";
		}
	}
?>