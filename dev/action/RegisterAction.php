<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/registerDAO.php");

	class RegisterAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$pageName = "Register";
			$active = "active-page";

			if(!empty($_POST["DoB"])){
				$username = $_POST["username"];
				$lastName = $_POST["lastName"];
				$firstName = $_POST["firstName"];
				$email = $_POST["email"];
				$password = $_POST["passwd"];
				$notDoB = strtotime($_POST['DoB']);
				$DoB = date('j-n-Y', $notDoB);
				var_dump($DoB);
				$emailNumber = 5;
				if(RegisterDAO::setNewUSer($lastName, $firstName, $username, $password, $DoB, $email, $emailNumber)){
					header(("Location: login.php"));
				}				
				else {
					var_dump('Cannont create user ');
				}
				
			}

			return compact("pageName", "active");
		}

	}