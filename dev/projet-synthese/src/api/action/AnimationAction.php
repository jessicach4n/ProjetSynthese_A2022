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
			
			if(!empty($_POST['creator']) && !empty($_POST['creationDate']) 
			&& !empty($_POST['city']) && !empty($_POST['country']) && !empty($_FILES['video'])) {
				if (CommonAction::$VISIBILITY_MEMBER) {
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
			if(!empty($_POST['action'] == 'GET_EMAIL_NUMBER')){
				$emailNumber = UserDAO::getEmailNumber($_SESSION['username']);
			}

			return compact("shareSuccess", "error_message", "emailNumber");
			}
		}