/*global QUnit*/

sap.ui.define([
	"kpmg/home/Pets/controller/PetsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PetsView Controller");

	QUnit.test("I should test the PetsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});