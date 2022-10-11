<?php
	require_once("action/CommonAction.php");

	class LoginAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$pageName = "Login";
			$active = "active-page";
	

			if(!empty($_POST["passwd"])){
				if($_POST["username"] == "boi" && $_POST["passwd"] == "boi"){
					$_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
					header(("Location: profile.php"));

				}				
				
			}
			
				

			return compact("pageName", "active");
		}

	}