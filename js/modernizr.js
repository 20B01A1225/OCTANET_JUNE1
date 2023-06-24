window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&h[o]!==n)return"pfx"!=t||o}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return!1===r?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+w.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):c(i=(e+" "+E.join(r+" ")+r).split(" "),t,n)}var s,u,d={},f=t.documentElement,p="modernizr",m=t.createElement(p),h=m.style,g=t.createElement("input"),y=":)",v=" -webkit- -moz- -o- -ms- ".split(" "),b="Webkit Moz O ms",w=b.split(" "),E=b.toLowerCase().split(" "),x={},S={},C={},k=[],j=k.slice,T=function(e,n,r,o){var i,a,c,l,s=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)(c=t.createElement("div")).id=o?o[r]:p+(r+1),s.appendChild(c);return i=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),s.id=p,(u?s:d).innerHTML+=i,d.appendChild(s),u||(d.style.background="",d.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),a=n(s,e),u?s.parentNode.removeChild(s):(d.parentNode.removeChild(d),f.style.overflow=l),!!a},M=function(){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(r,i){i=i||t.createElement(e[r]||"div");var a=(r="on"+r)in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(r,""),a=o(i[r],"function"),o(i[r],"undefined")||(i[r]=n),i.removeAttribute(r))),i=null,a}}(),P={}.hasOwnProperty;for(var N in u=o(P,"undefined")||o(P.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return P.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(j.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(j.call(arguments)))};return r}),x.flexbox=function(){return l("flexWrap")},x.flexboxlegacy=function(){return l("boxDirection")},x.postmessage=function(){return!!e.postMessage},x.websqldatabase=function(){return!!e.openDatabase},x.indexedDB=function(){return!!l("indexedDB",e)},x.hashchange=function(){return M("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},x.history=function(){return!!e.history&&!!history.pushState},x.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},x.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},x.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(h.backgroundColor,"rgba")},x.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(h.background)},x.backgroundsize=function(){return l("backgroundSize")},x.borderimage=function(){return l("borderImage")},x.borderradius=function(){return l("borderRadius")},x.boxshadow=function(){return l("boxShadow")},x.textshadow=function(){return""===t.createElement("div").style.textShadow},x.opacity=function(){return function(e,t){r(v.join(e+";")+(t||""))}("opacity:.55"),/^0.55$/.test(h.opacity)},x.cssanimations=function(){return l("animationName")},x.csscolumns=function(){return l("columnCount")},x.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+v.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),i(h.backgroundImage,"gradient")},x.cssreflections=function(){return l("boxReflect")},x.csstransforms=function(){return!!l("transform")},x.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in f.style&&T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",(function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight})),e},x.csstransitions=function(){return l("transition")},x.generatedcontent=function(){var e;return T(["#",p,"{font:0/0 a}#",p,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),(function(t){e=t.offsetHeight>=3})),e},x.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},x.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},x.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(e){return!1}},x.sessionstorage=function(){try{return sessionStorage.setItem(p,p),sessionStorage.removeItem(p),!0}catch(e){return!1}},x.webworkers=function(){return!!e.Worker},x.applicationcache=function(){return!!e.applicationCache},x)u(x,N)&&(s=N.toLowerCase(),d[s]=x[N](),k.push((d[s]?"":"no-")+s));return d.input||(d.input=function(n){for(var r=0,o=n.length;r<o;r++)C[n[r]]=n[r]in g;return C.list&&(C.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),C}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)g.setAttribute("type",o=e[a]),(r="text"!==g.type)&&(g.value=y,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&g.style.WebkitAppearance!==n?(f.appendChild(g),r=(i=t.defaultView).getComputedStyle&&"textfield"!==i.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,f.removeChild(g)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?g.checkValidity&&!1===g.checkValidity():g.value!=y)),S[e[a]]=!!r;return S}("search tel url email datetime date month week time datetime-local number range color".split(" "))),d.addTest=function(e,t){if("object"==typeof e)for(var r in e)u(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,f.className+=" "+(t?"":"no-")+e,d[e]=t}return d},r(""),m=g=null,function(e,t){function n(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=p[e[d]];return t||(t={},f++,e[d]=f,p[f]=t),t}function o(e,n,o){return n||(n=t),c?n.createElement(e):(o||(o=r(n)),!(i=o.cache[e]?o.cache[e].cloneNode():u.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren||s.test(e)||i.tagUrn?i:o.frag.appendChild(i));var i}function i(e){e||(e=t);var i=r(e);return m.shivCSS&&!a&&!i.hasCSS&&(i.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||function(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return m.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(m,t.frag)}(e,i),e}var a,c,l=e.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d="_html5shiv",f=0,p={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){a=!0,c=!0}}();var m={elements:l.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==l.shivCSS,supportsUnknownElements:c,shivMethods:!1!==l.shivMethods,type:"default",shivDocument:i,createElement:o,createDocumentFragment:function(e,o){if(e||(e=t),c)return e.createDocumentFragment();for(var i=(o=o||r(e)).frag.cloneNode(),a=0,l=n(),s=l.length;a<s;a++)i.createElement(l[a]);return i}};e.html5=m,i(t)}(this,t),d._version="2.7.0",d._prefixes=v,d._domPrefixes=E,d._cssomPrefixes=w,d.mq=function(t){var n,r=e.matchMedia||e.msMatchMedia;return r?r(t).matches:(T("@media "+t+" { #"+p+" { position: absolute; } }",(function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position})),n)},d.hasEvent=M,d.testProp=function(e){return a([e])},d.testAllProps=l,d.testStyles=T,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+k.join(" "),d}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=y.shift();v=1,e?e.t?m((function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)}),0):(e(),c()):v=0}function l(e,n,r,o,i,l,s){function u(t){if(!p&&a(d.readyState)&&(b.r=p=1,!v&&c(),d.onload=d.onreadystatechange=null,t))for(var r in"img"!=e&&m((function(){E.removeChild(d)}),50),j[n])j[n].hasOwnProperty(r)&&j[n][r].onload()}s=s||f.errorTimeout;var d=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:l,x:s};1===j[n]&&(g=1,j[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},y.splice(o,0,b),"img"!=e&&(g||2===j[n]?(E.insertBefore(d,w?null:h),m(u,s)):j[n].push(d))}function s(e,t,n,r,i){return v=0,t=t||"j",o(e)?l("c"==t?S:x,e,t,this.i++,n,r,i):(y.splice(this.i++,0,e),1==y.length&&c()),this}function u(){var e=f;return e.loader={load:s,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,y=[],v=0,b="MozAppearance"in p.style,w=b&&!!t.createRange().compareNode,E=w?p:h.parentNode,x=(p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,b?"object":p?"script":"img"),S=p?"script":x,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],j={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(f=function(e){function t(e,t,n,o,i){var a=function(e){e=e.split("!");var t,n,r,o=k.length,i=e.pop(),a=e.length;for(i={url:i,origUrl:i,prefixes:e},n=0;n<a;n++)r=e[n].split("="),(t=T[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=k[n](i);return i}(e),c=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(t&&(t=r(t)?t:t[e]||t[o]||t[e.split("http://www.citizengage.co/").pop().split("?")[0]]),a.instead?a.instead(e,t,n,o,i):(j[a.url]?a.noexec=!0:j[a.url]=1,n.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":undefined,a.noexec,a.attrs,a.timeout),(r(t)||r(c))&&n.load((function(){u(),t&&t(a.origUrl,i,o),c&&c(a.origUrl,i,o),j[a.url]=2}))))}function n(e,n){function a(e,i){if(e){if(o(e))i||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),t(e,d,n,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!i&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[l])),t(e[l],d,n,l,s))}else!i&&p()}var c,l,s=!!e.test,u=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;a(s?e.yep:e.nope,!!u),u&&a(u)}var a,c,l=this.yepnope.loader;if(o(e))t(e,0,l,0);else if(C(e))for(a=0;a<e.length;a++)o(c=e[a])?t(c,0,l,0):C(c)?f(c):Object(c)===c&&n(c,l);else Object(e)===e&&n(e,l)}).addPrefix=function(e,t){T[e]=t},f.addFilter=function(e){k.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,d,p=t.createElement("script");o=o||f.errorTimeout;for(d in p.src=e,r)p.setAttribute(d,r[d]);n=s?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m((function(){u||(u=1,n(1))}),o),l?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,l){var s;o=t.createElement("link"),n=l?c:n||i;for(s in o.href=e,o.rel="stylesheet",o.type="text/css",r)o.setAttribute(s,r[s]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};