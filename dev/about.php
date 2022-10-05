<?php
	require_once("action/AboutAction.php");
	
	$action = new AboutAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<body class="about">
<script src="https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js"></script>
<script type=module defer src="js/BreathingCircleAlgorithm.js"  ></script>
<script type=module defer src="js/ScrollBarColor.js"  ></script>
<!-- si type=module p5 ne fonctionne pas  -->

<!-- <script defer src="js/sketch.js"  ></script> -->
</body>
    <h1>Page à propos</h1>
</html>