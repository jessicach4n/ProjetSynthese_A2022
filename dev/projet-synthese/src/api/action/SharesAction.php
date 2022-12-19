<?php
    // Nom du fichier  : SharesAction.php
    // Description     : Classe appelant le UserDAO pour récupérer les ids de tous les animations et
	//					 les informations de ces animations de la BD.
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

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
			else if ($_POST["action"] == "GET_ANIMATION_INFO") {
				$response = UserDAO::getAnimationInfo($_POST["id"]);
			}

			return compact("response");
		}

	}