var HELLO = (function(module){
	module.HiYou = function (resultObject){
		resultObject.prepend(Date() + '<br/>');
	};
	return module;

	}(HELLO || {}));