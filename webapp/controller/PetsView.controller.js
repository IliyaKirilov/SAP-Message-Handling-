sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function (Controller,Fragment) {
	"use strict";

	return Controller.extend("kpmg.home.Pets.controller.PetsView", {
		onInit: function () {
			debugger;
				var oMessageManager;

			// set message model
			oMessageManager = sap.ui.getCore().getMessageManager();
			this.getView().setModel(oMessageManager.getMessageModel(), "message");

			// activate automatic message generation for complete view
			oMessageManager.registerObject(this.getView(), true);
			
		},
		
		onMessagePopoverPress: function (oEvent) {
			debugger;
			var oSourceControl = oEvent.getSource();
			this._getMessagePopover().then(function (oMessagePopover) {
				oMessagePopover.openBy(oSourceControl);
			});
		},
		
		_getMessagePopover: function () {
			var oView = this.getView();

			// create popover lazily (singleton)
			if (!this._pMessagePopover) {
				this._pMessagePopover = Fragment.load({
					id: oView.getId(),
					name: "kpmg.home.Pets.view.MessagePopover"
				}).then(function (oMessagePopover) {
					oView.addDependent(oMessagePopover);
					return oMessagePopover;
				});
			}
			return this._pMessagePopover;
		}
	});
});