<?php
	require_once("action/RegisterAction.php");
	
	$action = new RegisterAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="register">
</body>
    <h1>Page s'enregistrer</h1>
</html>