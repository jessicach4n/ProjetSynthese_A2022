<?php
	require_once("action/CommonAction.php");

	class ProfileAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$pageName = "Profile";

			return compact("pageName");
		}

	}