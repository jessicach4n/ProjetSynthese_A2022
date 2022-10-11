<?php
	require_once("action/CommonAction.php");

	class AboutAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$pageName = "About";
			$active = "active-page";

			return compact("pageName", "active");
		}

	}