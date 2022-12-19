<?php
    // Nom du fichier  : ProfileAction.php
    // Description     : Classe appelant le UserDAO pour récupérer les ids des animations appartenant à l'usager courant, 
	//					 les informations de ces animations et le nombre total d'animations partagées de la BD.
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class ProfileAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {

			if($_POST["action"] == "GET_IDS") {
				$response = UserDAO::getUserAnimationIds($_SESSION["username"]);
			}
			else if ($_POST["action"] == "GET_ANIMATION_INFO") {
				$response = UserDAO::getAnimationInfo($_POST["id"]);
			}
			
			if($_POST["action"] == "GET_COUNT") {
				$count = UserDAO::getUserCount($_SESSION["username"]);
				error_log("count = " . $count);
			}

			return compact('response', 'count');
		}

	}