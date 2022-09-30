<?php
	require_once("action/HomeAction.php");
	
	$action = new HomeAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<head>
	<link rel="stylesheet" href="css/home.css">
</head>

<body class="home">
	<div class="home-content">
		<div class="headings-content">
			<h1 class="nom-site">Générateur d'art météorlogique</h1>
			<h1>L'expérience<br>commence</h1>
		</div>
		<a id="go-to-animation" href="animation.php">ici</a>
	</div>
</body>
</html>