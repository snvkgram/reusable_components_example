sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType",
	"sap/ui/model/json/JSONModel",
	"sap/base/Log"
], function (Controller, MessageToast, MessageBox, Sorter, Filter, FilterOperator, FilterType, JSONModel, Log) {
	"use strict";

	return Controller.extend("com.examples.ui5.fruits.controller.FruitsController", {
		/**
		 *  Hook for initializing the controller
		 */
		onInit : function () {
			// check if any data is passed by other components
			var compData = this.getOwnerComponent().getComponentData();
			
			// this component accepts quantity!! - just for the sake of an example
			if( compData )
				this.getView().byId("quantity").setValue( compData.quantity );
			
		},
		
		onPress_component_ui5: function(oEvt){
			MessageToast.show("Welcome");
		},
		onPress_component_angular: function(oEvt){
			MessageToast.show("This component is scheduled for next release!! Stay tight!!!");
		},
		onPress_component_odata: function(oEvt){
			MessageToast.show("Welcome");
		},
		onPress_component_rest: function(oEvt){
			MessageToast.show("Welcome");
		},
		
		onPress_component_jdbc: function(oEvt){
			MessageToast.show("This component is availabe along with OData Component, " +
					" not available as separate component at the moment", 
				{ duration: 10000 }
			);
		},
		
		onPress_component_hiberate: function(oEvt){
			MessageToast.show("Welcome");
		}
	
	});
});