<?php
	require_once("action/CommonAction.php");
	require_once("action/DAO/registerDAO.php");
	require_once("action/emailNumberGenerator.php");

	class RegisterAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$register_success = false;

			if(!empty($_POST["DoB"])){
				#REF : https://stackoverflow.com/questions/13392842/using-php-regex-to-validate-username
				if (preg_match('/^\w{5,30}$/', $_POST["username"] , $tabUsername )){
						var_dump('good username ' . $tabUsername[0] . sizeof($tabUsername));
				}
					else {
						var_dump("user name too small : name must be between 5 and 30 chars and not contain special characters ");
				}

				//GEstion des tableaux trop petis à faire 
				
				$username = $_POST["username"];
				$lastName = $_POST["lastName"];
				$firstName = $_POST["firstName"];
				$email = $_POST["email"];
				$password = $_POST["passwd"];
				$unixTime = strtotime($_POST['DoB']);
				$DoB = date('n-j-Y', $unixTime);
				//possible besoin d'ajouter le email number a la db
				$emailNumber = EmailNumberGenerator:: generateEmailNumber($email, $unixTime);;
				var_dump(" ENB : " .$emailNumber);
				if(RegisterDAO::setNewUSer($lastName, $firstName, $username, $password, $DoB, $email, $emailNumber)){
					$register_success = true;
				}				
				else {
					var_dump('Cannont create user ');
				}
				
			}

			return compact("register_success");
		}

	}