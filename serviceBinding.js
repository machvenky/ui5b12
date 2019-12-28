function initModel() {
	var sUrl = "/SAP_Gateway/sap/opu/odata/iwbep/GWSAMPLE_BASIc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}