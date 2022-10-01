<?php
	require_once("action/AboutAction.php");
	
	$action = new AboutAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="about">
<script src="https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js"></script>
<script defer src="js/LineRotationAlgorithm.js"  ></script>
<!-- <script defer src="js/sketch.js"  ></script> -->
</body>
    <h1>Page à propos</h1>
</html>