<?php
	require_once("action/ProfileAction.php");
	
	$action = new ProfileAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>

<head>
	<link rel="stylesheet" href="css/stats.css">
</head>

<body class="profile">

    <h1>Votre profil</h1>
	<section class="stats">
		<div id="icon-profile">
			<img src="https://static.vecteezy.com/system/resources/previews/001/192/291/original/circle-png.png" alt="">
			<p id="stats-username">Nom utilisateur</p>
		</div>
		<div id="gen-anim">
			<span>01</span>
			<p>Animations générées</p>
		</div>
		<div id="shared-anim">
			<span>01</span>
			<p>Animations partagées</p>
		</div>
		<div id="likes">
			<span>01</span>
			<p>Coups de coeur</p>
		</div>
	</section>
	<div>
		<li><a href=""></a>Mes animations</li>
		<li><a href=""></a>Mes vidéos aimées</li>
	</div>
	<section class="my-animations">
		<div></div>
	</section>
	<section class="my-likes">
		<div></div>
	</section>

</body>
</html>