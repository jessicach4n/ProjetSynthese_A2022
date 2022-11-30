<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class AnimationAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$shareSuccess = false;
			$entered_loop = false;
			error_log("creator = " . $_POST['creator']);
			error_log("creationDate = " . $_POST['creationDate']);
			error_log("city = " . $_POST['city']);
			error_log("country = " . $_POST['country']);
			error_log("video = " . $_POST['video']);

			// if(!empty($_POST['creator']) && !empty($_POST['creationDate']) 
			// 	&& !empty($_POST['city']) && !empty($_POST['country']) && !empty($_POST['video'])) {
			// 	$entered_loop = true;
			// 	$creator = $_POST["creator"];
			// 	$creationDate = $_POST["creationDate"];
			// 	$city = $_POST["city"];
			// 	$county = $_POST["country"];
			// 	$video = $_POST["video"];
				
			// 	if (UserDAO::addAnimation($creator, $creationDate, $city, $county, $video)) {
			// 		$shareSuccess = true;
			// 	}

			// }

			return compact("shareSuccess", "entered_loop");
		}

	}