sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ui5/db/ui5b12/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function (Controller, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("ui5.db.ui5b12.controller.Home", {
		formatter: formatter,
		onInit: function () {
			var obj = {
				dbText: {
					name: "Introduction to data binding and types"
				}
			};
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("./model/Address.json");
			this.getView().setModel(oModel, "jsonm1");
		},
		onTableRowSelected: function (oEvent) {
			var sBindingPath = oEvent.getSource().getBindingContextPath();
			var sIdPanel = this.getView().byId("productsPanel");
			sIdPanel.bindElement(sBindingPath);
			sIdPanel.setVisible(true);
		},
		onTableRowClicked: function (oEvent) {
			var sBindingPath = oEvent.getSource().getBindingContextPath();
		   if(!this._dialog){
				this._dialog =sap.ui.xmlfragment(this.getView().getId(), "ui5.db.ui5b12.fragments.details",this);
			    this.getView().addDependent(this._dialog);
			}
			var sIdPanel = this.getView().byId("productsPanel");
			sIdPanel.bindElement(sBindingPath);
			this._dialog.open();
		},
		onDialogClose:function(){
			this._dialog.close();
		},
		onBtnClick: function () {
			var sBtnId = this.byId("myBtn");
			sBtnId.bindProperty("text", "jsonm1>/Country");
		},
		onTableSearch: function (oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if(sQuery){
			var productIDFilter = new Filter("ProductID", FilterOperator.Contains, sQuery);
			var productCatgoryFilter = new Filter("Category", FilterOperator.Contains, sQuery);
			//var productNameFilter = new Filter("Name", FilterOperator.Contains, sQuery);
			aFilter.push(new Filter({
				filters: [productIDFilter, productCatgoryFilter]
				
			}));

			this.byId("productTable").getBinding("items").filter(aFilter);
           }else{
           		this.byId("productTable").getBinding("items").filter([]);
           }
		}

	});
});