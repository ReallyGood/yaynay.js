## yaynay.js - A tiny UA blacklist helper

__yaynay.js__ helps you block features from specific User Agents based on a blacklist you provide.

Although yaynay is inspired by modernizr and yepnope.js, don't expect it to really detect _or_ load anything other than what is says on the label ;-)

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
For your convenience, a comperehensive community-edited list of UA regexes can be found here at the [ua-parser project](https://raw.github.com/tobie/ua-parser/master/regexes.yaml).
## Quick Use
Just paste the following and yaynay will be available:

```html
<script src="https://raw.github.com/ReallyGood/yaynay.js/master/yaynay.min.js"></script>
```
