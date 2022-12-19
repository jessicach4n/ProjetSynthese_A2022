<?php
    // Nom du fichier  : VideoAction.php
    // Description     : Classe appelant le UserDAO pour récupérer la vidéo de la BD.
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

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