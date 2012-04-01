/* yaynay, a tiny "feature detection" (actually a UA string parser) helper. Heavily inspirted by Modernizr */
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

yaynay.features.volume = [/ipad/, /iphone/, /ipod/, /android(?!.*?mobile)/, /android.*?mobile/, /blackberry/, /windows ce/, /webos/, /playbook/];
yaynay.features.timetravel = [/\w/];