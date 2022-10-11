<?php
	require_once("action/CommonAction.php");

	class LoginAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$pageName = "Login";
			$active = "active-page";

			return compact("pageName", "active");
		}

	}