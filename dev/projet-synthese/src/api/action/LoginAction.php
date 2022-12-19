<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class LoginAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$connectionError = True;
	
			if(!empty($_POST["username"]) && !empty($_POST["passwd"])){
				$username = $_POST["username"];
				$password = $_POST["passwd"];
				
				if(UserDAO::authenticate($username, $password)){
					$_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
					$_SESSION["username"] = $username;
					$connectionError = False;
				}
			}
			
			return compact('connectionError');
		}

	}