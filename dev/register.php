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
			<input type="text" name="input-field" placeholder="Nom d'usager" id="reg-username" required>
			<input type="text" name="input-field" placeholder="Nom" id="reg-nom" required>
			<input type="text" name="input-field" placeholder="Prenom" id="reg-prenom" required>
			<input type="email" name="input-field" placeholder="Email" id="reg-email" required>
			<input type="text" name="input-field" placeholder="Mot de passe" id="reg-password" required>
			<input type="date" min="1900-01-01" name="input-field" placeholder="Date de naissance" id="reg-datenaissance" required>
			<button type="submit">Joindre la communauté</button>
		</form>
		<h1>Inscrip<br>tion</h1>
	</section>
</body>
</html>