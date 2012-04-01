/*! https://github.com/ReallyGood/yaynay.js, MIT by http://reallygood.co.il */
/*
	After including this (or better yet, the minified) file, specify arrays of disallowed UA regexps, for example:
	  yaynay.features.volume = [/ipad/, /iphone/, /ipod/, /android(?!.*?mobile)/, /android.*?mobile/, /blackberry/, /windows ce/, /webos/, /playbook/];
	  yaynay.features.timetravel = [/\w/];

	then you can happily do
	  if( !yaynay('timetravel') ) alert('no time travel for you, sir!');

	Notice: yaynay isn't "magic" - It doesn't add any classes, variables or whatever, nowhere, but instead just works.
*/

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