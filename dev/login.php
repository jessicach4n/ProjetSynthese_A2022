<?php
	require_once("action/LoginAction.php");
	
	$action = new LoginAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<head>
	<link rel="stylesheet" href="css/login.css">
</head>

<body class="login">
</body>
    <h1>Page Login</h1>
	<form action="" method="post">
		<input type="text" name="input-field" placeholder="Username" id="username" >
		<input type="text" name="input-field" placeholder="Password" id="password">
		<button type="submit">Se connecter</button>
    </form>

	<a href="register.php" id="lien-register">Pas membre? <br> Créer un compte aujourd'hui</a>
</html>