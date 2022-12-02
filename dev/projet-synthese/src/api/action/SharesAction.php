<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class SharesAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$response = null;

			if($_POST["action"] == "GET_IDS") {
				$response = UserDAO::getAllAnimationIds();
			}
			else if ($_POST["action"] == "GET_ANIMATION") {
				$response = UserDAO::getAnimation($_POST["id"]);
			}

			return compact("response");
		}

	}