<?php
    // Nom du fichier  : CommonAction.php
    // Description     : Classe par laquelle toutes nos classes action passent. 
    //                   Elle implemente le patron de conception Template Method.
    //                   Nous avons utilisé cette classe dans nos cours avec Frederic Thériault 
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

    error_reporting(E_ERROR | E_PARSE); // Pour compatibilité avec le mode développeur

    $currentSessionId = null;
    if (!empty($_POST['session_id'])) {
        $currentSessionId = $_POST['session_id'];
    }
    session_id($currentSessionId);
    session_start();

    abstract class CommonAction {
        protected static $NOT_SIGNED_IN = "NOT_SIGNED_IN";
        protected static $VISIBILITY_PUBLIC = 0;
        protected static $VISIBILITY_MEMBER = 1;
        protected static $VISIBILITY_MODERATOR = 2;
        protected static $VISIBILITY_ADMINISTRATOR = 3;
        private $pageVisibility;

        public function __construct($pageVisibility) {
            $this->pageVisibility = $pageVisibility;
        }

        public function execute() {
            $data = [];

            if (!empty($_POST["logout"])) {
                session_unset();
                session_destroy();
                session_start();
            }

            if (empty($_SESSION["visibility"])) {
                $_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
            }

            $data = $this->executeAction();
            $data["isLoggedIn"] = $_SESSION["visibility"] > CommonAction::$VISIBILITY_PUBLIC;
            $data["username"] = !empty($_SESSION["username"]) ? $_SESSION["username"] : "Invité";
            $data["session_id"] = session_id();
            return $data;
        }

        protected abstract function executeAction();
    }