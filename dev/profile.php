<?php
	require_once("action/ProfileAction.php");
	
	$action = new ProfileAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="profile">
</body>
    <h1>Page profil</h1>
</html>