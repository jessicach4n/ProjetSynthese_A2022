<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class AnimationAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$shareSuccess = false;
			$error_message = "";
			error_log("creator = " . $_POST['creator']);
			error_log("creationDate = " . $_POST['creationDate']);
			error_log("city = " . $_POST['city']);
			error_log("country = " . $_POST['country']);
			error_log("video = " . serialize($_FILES['video']));
			error_log("videoFile = " . $_FILES['video']['tmp_name']);

			// UserDAO::getAllAnimations();
			if(!empty($_POST['creator']) && !empty($_POST['creationDate']) 
				&& !empty($_POST['city']) && !empty($_POST['country']) && !empty($_FILES['video'])) {
					if (CommonAction::$VISIBILITY_MEMBER) {
						$entered_loop = true;
						$creator = $_POST["creator"];
						$creationDate = $_POST["creationDate"];
						$city = $_POST["city"];
						$county = $_POST["country"];
						$video = $_FILES["video"]['tmp_name'];
						
						$shareSuccess = UserDAO::addAnimation($creator, $creationDate, $city, $county, $video);
					}
					else {
						$error_message = CommonAction::$NOT_SIGNED_IN;
					}
				}
				return compact("shareSuccess", "error_message");
			}
		}