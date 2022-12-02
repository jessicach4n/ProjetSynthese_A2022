<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/RegisterDAO.php");
	require_once("action/emailNumberGenerator.php");

	class RegisterAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$registerSuccess = false;
			$errorMessage = "";

			if(!empty($_POST["DoB"])){
				#REF : https://stackoverflow.com/questions/13392842/using-php-regex-to-validate-username
				if (preg_match('/^\w{5,30}$/', $_POST["username"] , $tabUsername )){
					$username = $_POST["username"];
					$lastName = $_POST["lastName"];
					$firstName = $_POST["firstName"];
					$email = $_POST["email"];
					$password = $_POST["passwd"];
					$unixTime = strtotime($_POST['DoB']);
					$DoB = date('n-j-Y', $unixTime);
					$emailNumber = EmailNumberGenerator:: generateEmailNumber($email, $unixTime);;
					if(RegisterDAO::setNewUSer($lastName, $firstName, $username, $password, $DoB, $email, $emailNumber)){
						$registerSuccess = true;
					}
					else {
						$errorMessage = "Cannont create user";
					}
				}
				else {
					$errorMessage = "Username must be between 5 and 30 chars and not contain special characters";
				}
			}

			return compact("registerSuccess", "errorMessage");
		}

	}