<?php
	require_once("action/AnimationAction.php");
	
	$action = new LoginAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="login">
</body>
    <h1>Page Login</h1>
</html>