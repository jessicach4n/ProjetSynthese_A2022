<?php
	require_once("action/CommonAction.php");

	class RegisterAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$pageName = "Register";

			return compact("pageName");
		}

	}