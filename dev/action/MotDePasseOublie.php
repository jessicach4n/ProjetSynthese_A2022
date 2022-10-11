<?php
	require_once("action/CommonAction.php");

	class MotDePasseOublie extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$pageName = "MotDePasseOublie";
			$active = "active-page";

			return compact("pageName", "active");
		}

	}