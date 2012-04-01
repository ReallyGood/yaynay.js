## yaynay.js - A tiny feature blocklist helper

Sometimes you just want to block some browsers from getting something. __yaynay.js__ is the fastest elegant way to do that.

After including this (or better yet, the minified) file, specify arrays of disallowed UA regexps, for example:

```javascript
yaynay.features.changeVolume = [/ip(ad|hone|od)/, /android(?!.*?mobile)/, /webos/];
yaynay.features.timetravel = [/\w/];
```
then you can happily do

```javascript
if( !yaynay('timetravel') ) alert('no time travel for you, sir!');
```
Notice: yaynay isn't "magic" - It doesn't add any classes, variables or whatever, nowhere, but instead just works.

Also note yaynay works as a blacklist - A feature is assumed to be allowed unless proven otherwise.

## Quick Use
Just paste the following and yaynay will be available:

```html
<script src="https://raw.github.com/ReallyGood/yaynay.js/master/yaynay.min.js"></script>
```
