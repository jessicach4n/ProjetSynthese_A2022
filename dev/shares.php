<?php
	require_once("action/SharesAction.php");
	
	$action = new SharesAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="shares">
</body>
    <h1>Page partage</h1>
</html>