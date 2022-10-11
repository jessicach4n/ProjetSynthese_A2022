<?php
	require_once("action/LoginAction.php");
	
	$action = new LoginAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<head>
	<link rel="stylesheet" href="css/forms.css">
</head>

<body class="login">
	<section>
		<h1>Bien<br>venue</h1>
		<form action="" method="post">
			<input type="text" name="input-field" placeholder="Nom d'usager / Email" id="log-username" >
			<input type="text" name="input-field" placeholder="Mot de passe" id="log-password">
			<button type="submit">Se connecter</button>
			<li id="mdp-oublie">
				<a href="motdepasseoublie.php">Mot de passe oublié ?</a>
			</li>

			<li id="log-register">
				<a href="register.php">Pas membre? <br> Créer un compte aujourd'hui</a>
			</li>
		</form>
	</section>
    
	
</body>
</html>