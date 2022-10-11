<?php
	require_once("action/AnimationAction.php");
	
	$action = new AnimationAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="animation">

    <h1>Page animation</h1>
</body>
</html>