<?php
	require_once("action/CommonAction.php");

	class ProfileAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$pageName = "Profile";
			$active = "active-page";

			return compact("pageName", "active");
		}

	}