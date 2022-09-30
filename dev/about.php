<?php
	require_once("action/AnimationAction.php");
	
	$action = new AboutAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="about">
</body>
    <h1>Page à propos</h1>
</html>