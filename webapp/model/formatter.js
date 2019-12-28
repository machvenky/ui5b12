sap.ui.define([], function () {
	"use strict";
	return {
		convertToUpperCase:function(sCat,sTypeCode){
			var sUppercase=sCat.toUpperCase();
			return sUppercase+"#"+sTypeCode;
		}	
		
	};
});