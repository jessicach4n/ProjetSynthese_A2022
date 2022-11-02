<?php
	require_once("action/CommonAction.php");

	class AnimationAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$pageName = "Animation";
			$active = "active-page";

			return compact("pageName", "active");
		}

	}