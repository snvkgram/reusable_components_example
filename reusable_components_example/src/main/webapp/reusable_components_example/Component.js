sap.ui.define([
	"sap/ui/core/UIComponent",
	"com/examples/ui5/nested/model/models"
], function(UIComponent, models) {
	"use strict";

	return UIComponent.extend("com.examples.ui5.nested.Component", {

		metadata: {
			"publicMethods": [ "getReuseComponent" ]
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		
		getReuseComponent: function(compName, compData) {
			var oComponentPromise;
			
			oComponentPromise = this.createComponent({
				  usage: compName,
				  settings: {},
				  componentData: compData,
				  async: false
				});
			return oComponentPromise;
			
			
			/*oComponentPromise = this.createComponent( compName ).then(function(oComponent) {
				  oComponent.getRootControl();
				}).catch(function(oError) {
				  Log.error(oError);
				});*/
		}
	});
});