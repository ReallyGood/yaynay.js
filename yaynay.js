/*! https://github.com/ReallyGood/yaynay.js <-- docs here, MIT by http://reallygood.co.il */
var yaynay = (function(){
	var features = {},
		test = function(feature){
			var ua = navigator.userAgent.toLowerCase(),
				supported = true;
			if(features[feature]){
				var blockedUA = features[feature];
				for(var i = 0, l = blockedUA.length; i < l; i++){
					if(blockedUA[i].test(ua)) {
						supported = false;
						break;
					}
				}
			}
			return supported;
		};
	test.features = features;
	return test;
})();