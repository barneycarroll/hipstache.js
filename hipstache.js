void function buildHipstache(){
	var write = (function determineWriteMethod(){
		var style       = document.createElement('style');
		var methods     = [
			function(element, CSS){
				element.appendChild(document.createTextNode(CSS));
			},
			function(element, CSS){
				element.styleSheet.cssText = CSS;
			}
		];

		return methods[~~style.styleSheet];
	}());
};
