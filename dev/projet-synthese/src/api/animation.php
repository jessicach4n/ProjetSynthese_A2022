<?php
require_once("header.php");
require_once("action/AnimationAction.php");
	
$action = new AnimationAction();
$data = $action->execute();

$response = json_encode($data);

header('HTTP/1.1 200 OK');
echo($response);

?>
