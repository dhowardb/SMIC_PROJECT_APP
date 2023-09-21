import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ObjectPage/ExtensionAPI';
import MessageToast from 'sap/m/MessageToast';
/**
 * @namespace projectsdemoapp.ext.controller.ObjectPage
 * @controller
 */
export default class ObjectPage extends ControllerExtension<ExtensionAPI> {
	static overrides = {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf projectsdemoapp.ext.controller.ObjectPage
		 */
		onInit(this: ObjectPage) {
			// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			const model = this.base.getExtensionAPI().getModel('mainService');
		},
		editFlow: {
			onBeforeSave: function () {
				// return MessageToast.show('(On Before Save)');
			},
			//not working on current UI5version
			onBeforeEdit: function () {
				return MessageToast.show('(On Before Edit)');
			},
			onBeforeDiscard: function () {
				return MessageToast.show('(On Before Discard)');
			},
			onBeforeCreate: function () {
				return MessageToast.show('(On Before Create)');
			},
			onBeforeDelete: function () {
				return MessageToast.show('(On Before Delete)');
			},
			onAfterSave: function () {
				return MessageToast.show('Save successful');
			},
			//not working on current UI5version
			onAfterEdit: function () {
				return MessageToast.show('Edit successful');
			},
			onAfterDiscard: function () {
				return MessageToast.show('Discard successful');
			},
			onAfterCreate: function () {
				return MessageToast.show('Create successful');
			},
			onAfterDelete: function () {
				return MessageToast.show('Delete successful');
			},
		},
	};
}
