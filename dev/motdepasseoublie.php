<?php
	require_once("action/MotDePasseOublie.php");
	
	$action = new MotDePasseOublie();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<head>
	<link rel="stylesheet" href="css/login.css">
</head>

<body class="motdepasseoublie">

    <h1>Réinitialiser le mot de passe</h1>
	<form action="" method="post">
		<input type="email" name="input-field" placeholder="Email" id="email" >
		<button type="submit">Envoyer</button>
    </form>
	</body>
	</html>