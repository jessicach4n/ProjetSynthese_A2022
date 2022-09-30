<?php
	require_once("action/HomeAction.php");
	
	$action = new HomeAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="home">
	<h1>Générateur d'art météorlogique</h1>
	<h2>L'expérience commence </h2>
    <a href="animation.php">ici</a>
</body>
</html>