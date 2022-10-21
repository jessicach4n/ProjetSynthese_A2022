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
				// preg_match('/(\w{0,5})/',$_POST["username"] , $tabUsername);
				#REF : https://stackoverflow.com/questions/13392842/using-php-regex-to-validate-username
				if (preg_match('/^\w{5,30}$/', $_POST["username"] , $tabUsername )){
						var_dump('good username ' . $tabUsername[0] . sizeof($tabUsername));
				}
					else {
						var_dump("user name too small");
				}

				//GEstion des tableaux trop petis à faire 
				
				$username = $_POST["username"];
				$lastName = $_POST["lastName"];
				$firstName = $_POST["firstName"];
				$email = $_POST["email"];
				$password = $_POST["passwd"];
				$unixTime = strtotime($_POST['DoB']);
				$DoB = date('n-j-Y', $unixTime);
				var_dump('this is unix time ' . $unixTime);
				preg_match('/(.{4})/', $email, $debutEmail);
				preg_match('/@(.{3})/', $email, $finEmail);
				var_dump(("debut email " . $debutEmail[0]));
				var_dump(("fin email " . $finEmail[0]));

				$emailNumber = 5
				;
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