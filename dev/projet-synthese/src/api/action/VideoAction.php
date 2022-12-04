<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class VideoAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
            $response = UserDAO::getVideo($_GET["id"]);			
		
			return compact("response");
		}

	}