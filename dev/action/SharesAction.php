<?php
	require_once("action/CommonAction.php");

	class SharesAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$pageName = "Shares";
			$active = "active-page";

			return compact("pageName", "active");
		}

	}