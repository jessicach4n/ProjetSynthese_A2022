<?php
	require_once("action/HomeAction.php");
	
	$action = new HomeAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="home">
	<h1>L'expérience commence </h1>
    <a href="animation.php">ici</a>
</body>
</html>