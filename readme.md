## yaynay.js - A tiny feature blocklist helper, inspired by Modernizr/

Sometimes you just want to block some browsers from getting something. yaynay is the fastest elegant way to do that.

After including this (or better yet, the minified) file, specify arrays of disallowed UA regexps, for example:
	  yaynay.features.volume = [/ipad/, /iphone/, /ipod/, /android(?!.*?mobile)/, /android.*?mobile/, /blackberry/, /windows ce/, /webos/, /playbook/];
	  yaynay.features.timetravel = [/\w/];

	then you can happily do
	  if( !yaynay('timetravel') ) alert('no time travel for you, sir!');

	Notice: yaynay isn't "magic" - It doesn't add any classes, variables or whatever, nowhere, but instead just works.