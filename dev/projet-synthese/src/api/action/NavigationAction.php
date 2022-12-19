<?php
    // Nom du fichier  : NavigationAction.php
    // Description     : Classe n'exécutant rien lui-même, mais appelé par navigation.php pour obtenir des informations du CommonAction.
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

	require_once("action/CommonAction.php");
	require_once("action/DAO/UserDAO.php");

	class NavigationAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {

			return;
		}

	}