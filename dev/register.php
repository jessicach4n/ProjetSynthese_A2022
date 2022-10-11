<?php
	require_once("action/RegisterAction.php");
	
	$action = new RegisterAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<head>
	<link rel="stylesheet" href="css/forms.css">
</head>

<body class="register">
	<section>
		<form action="" method="post">
			<input type="text" name="input-field" placeholder="Nom d'usager" id="reg-username">
			<input type="text" name="input-field" placeholder="Nom" id="reg-nom">
			<input type="text" name="input-field" placeholder="Prenom" id="reg-prenom">
			<input type="text" name="input-field" placeholder="Email" id="reg-email">
			<input type="text" name="input-field" placeholder="Mot de passe" id="reg-password">
			<input type="text" name="input-field" placeholder="Date de naissance" id="reg-datenaissance">
			<button type="submit">Joindre la communauté</button>
		</form>
		<h1>Inscrip<br>tion</h1>
	</section>
</body>
</html>