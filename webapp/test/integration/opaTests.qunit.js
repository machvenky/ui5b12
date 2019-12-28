/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui5/db/ui5b12/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});