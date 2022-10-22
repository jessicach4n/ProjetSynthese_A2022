<?php
	require_once("action/AnimationAction.php");
	
	$action = new AnimationAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<head>
	<link rel="stylesheet" href="css/settings.css">
</head>

<body class="animation">

<div id="settings-container"></div>

<!-- React -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<!-- Load our React component. -->

<script src="./js/react-components/SettingsContainer.js"></script>
<script src="./js/react-components/SettingsButton.js"></script>
<script src="./js/react-components/Settings.js"></script>


<script>
	const container = document.querySelector('#settings-container');
	const root = ReactDOM.createRoot(container);
	root.render(e(SettingsContainer));
</script>
    
</body>
</html>