<?php
    error_log("session_id = " . $_POST['session_id']);
    session_id($_POST['session_id']);
    session_start();
    error_log("is_loggedin = " . $_SESSION["visibility"]);

    
    // require_once("action/constants.php");

    abstract class CommonAction {
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

        /**
        * data = array('key1' => 'value1', 'key2' => 'value2');
        */
        // public function callAPI($service, array $data) {
        //     $apiURL = "https://magix.apps-de-cours.com/api/" . $service;

        //     $options = array(
        //         'http' => array(
        //             'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        //             'method'  => 'POST',
        //             'content' => http_build_query($data)
        //         )
        //     );
        //     $context  = stream_context_create($options);
        //     $result = file_get_contents($apiURL, false, $context);

        //     if (strpos($result, "<br") !== false) {
        //             var_dump($result);
        //             exit;
        //         }
                
        //     return json_decode($result);
        // }
    }