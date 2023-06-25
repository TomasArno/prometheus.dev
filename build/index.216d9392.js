function e(e){return Array.isArray(e=e||[])?e:[e]}function t(e){return`[Vaadin.Router] ${e}`}const r="module",n="nomodule",i=[r,n];function o(e){if(!e.match(/.+\.[m]?js$/))throw Error(t(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function a(e){if(!e||!u(e.path))throw Error(t('Expected route config to be an object with a "path" string property, or an array of such objects'));let a=e.bundle,s=["component","redirect","bundle"];if(!d(e.action)&&!Array.isArray(e.children)&&!d(e.children)&&!c(a)&&!s.some(t=>u(e[t])))throw Error(t(`Expected route config "${e.path}" to include either "${s.join('", "')}" or "action" function but none found.`));if(a){if(u(a))o(a);else if(i.some(e=>e in a))i.forEach(e=>e in a&&o(a[e]));else throw Error(t('Expected route bundle to include either "'+n+'" or "'+r+'" keys, or both'))}e.redirect&&["bundle","component"].forEach(r=>{r in e&&console.warn(t(`Route config "${e.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function s(t){e(t).forEach(e=>a(e))}function l(e,t){let i=document.head.querySelector('script[src="'+e+'"][async]');return i||((i=document.createElement("script")).setAttribute("src",e),t===r?i.setAttribute("type",r):t===n&&i.setAttribute(n,""),i.async=!0),new Promise((e,t)=>{i.onreadystatechange=i.onload=t=>{i.__dynamicImportLoaded=!0,e(t)},i.onerror=e=>{i.parentNode&&i.parentNode.removeChild(i),t(e)},null===i.parentNode?document.head.appendChild(i):i.__dynamicImportLoaded&&e()})}function h(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function c(e){return"object"==typeof e&&!!e}function d(e){return"function"==typeof e}function u(e){return"string"==typeof e}function p(e){let r=Error(t(`Page not found (${e.pathname})`));return r.context=e,r.code=404,r}const f=new class{};function _(e){if(e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target,r=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<r.length;e++){let n=r[e];if(n.nodeName&&"a"===n.nodeName.toLowerCase()){t=n;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase()||t.target&&"_self"!==t.target.toLowerCase()||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&""!==t.hash)return;let n=t.origin||function(e){let t=e.port,r=e.protocol,n="http:"===r&&"80"===t||"https:"===r&&"443"===t?e.hostname:e.host;return`${r}//${n}`}(t);if(n!==window.location.origin)return;let{pathname:i,search:o,hash:a}=t;h("go",{pathname:i,search:o,hash:a})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const m=/Trident/.test(navigator.userAgent);function g(e){if("vaadin-router-ignore"===e.state)return;let{pathname:t,search:r,hash:n}=window.location;h("go",{pathname:t,search:r,hash:n})}m&&!d(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,!!t.bubbles,!!t.cancelable),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);var v=function e(t,r,n){return t instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,r):Array.isArray(t)?function(t,r,n){for(var i=[],o=0;o<t.length;o++)i.push(e(t[o],r,n).source);return RegExp("(?:"+i.join("|")+")",E(n))}(t,r,n):C(y(t,n),r,n)},w=RegExp("(\\\\.)|(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?","g");function y(e,t){for(var r,n=[],i=0,o=0,a="",s=t&&t.delimiter||"/",l=t&&t.delimiters||"./",h=!1;null!==(r=w.exec(e));){var c=r[0],d=r[1],u=r.index;if(a+=e.slice(o,u),o=u+c.length,d){a+=d[1],h=!0;continue}var p="",f=e[o],_=r[2],m=r[3],g=r[4],v=r[5];if(!h&&a.length){var y=a.length-1;l.indexOf(a[y])>-1&&(p=a[y],a=a.slice(0,y))}a&&(n.push(a),a="",h=!1);var b=""!==p&&void 0!==f&&f!==p,E="+"===v||"*"===v,C="?"===v||"*"===v,R=p||s,A=m||g;n.push({name:_||i++,prefix:p,delimiter:R,optional:C,repeat:E,partial:b,pattern:A?A.replace(/([=!:$/()])/g,"\\$1"):"[^"+x(R)+"]+?"})}return(a||o<e.length)&&n.push(a+e.substr(o)),n}function b(e){for(var t=Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var i="",o=n&&n.encode||encodeURIComponent,a=0;a<e.length;a++){var s,l=e[a];if("string"==typeof l){i+=l;continue}var h=r?r[l.name]:void 0;if(Array.isArray(h)){if(!l.repeat)throw TypeError('Expected "'+l.name+'" to not repeat, but got array');if(0===h.length){if(l.optional)continue;throw TypeError('Expected "'+l.name+'" to not be empty')}for(var c=0;c<h.length;c++){if(s=o(h[c],l),!t[a].test(s))throw TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'"');i+=(0===c?l.prefix:l.delimiter)+s}continue}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h){if(s=o(String(h),l),!t[a].test(s))throw TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+s+'"');i+=l.prefix+s;continue}if(l.optional){l.partial&&(i+=l.prefix);continue}throw TypeError('Expected "'+l.name+'" to be '+(l.repeat?"an array":"a string"))}return i}}function x(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function E(e){return e&&e.sensitive?"":"i"}function C(e,t,r){for(var n=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,a=x(r.delimiter||"/"),s=r.delimiters||"./",l=[].concat(r.endsWith||[]).map(x).concat("$").join("|"),h=i?"^":"",c=0===e.length,d=0;d<e.length;d++){var u=e[d];if("string"==typeof u)h+=x(u),c=d===e.length-1&&s.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+x(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?h+=x(u.prefix)+"("+p+")?":h+="(?:"+x(u.prefix)+"("+p+"))?":h+=x(u.prefix)+"("+p+")"}}return o?(n||(h+="(?:"+a+")?"),h+="$"===l?"$":"(?="+l+")"):(n||(h+="(?:"+a+"(?="+l+"))?"),c||(h+="(?="+a+"|"+l+")")),new RegExp(h,E(r))}v.parse=y,v.compile=function(e,t){return b(y(e,t))},v.tokensToFunction=b,v.tokensToRegExp=C;const{hasOwnProperty:R}=Object.prototype,A=new Map;function k(e){try{return decodeURIComponent(e)}catch(t){return e}}function O(e){if(d(e.route.action))return e.route.action(e)}A.set("|false",{keys:[],pattern:/(?:)/});class ${constructor(e,t={}){if(Object(e)!==e)throw TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||O,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){s(t);let r=[...e(t)];this.root.__children=r}addRoutes(t){return s(t),this.root.__children.push(...e(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){let t=Object.assign({},this.context,u(e)?{pathname:e}:e),r=function e(t,r,n,i,o){let a,s;let l=0,h=t.path||"";return"/"===h.charAt(0)&&(n&&(h=h.substr(1)),n=!0),{next(c){if(t===c)return{done:!0};let d=t.__children=t.__children||t.children;if(!a&&(a=function(e,t,r,n,i){r=!!r;let o=`${e}|${r}`,a=A.get(o);if(!a){let t=[];a={keys:t,pattern:v(e,t,{end:r,strict:""===e})},A.set(o,a)}let s=a.pattern.exec(t);if(!s)return null;let l=Object.assign({},i);for(let e=1;e<s.length;e++){let t=a.keys[e-1],r=t.name,n=s[e];void 0===n&&R.call(l,r)||(t.repeat?l[r]=n?n.split(t.delimiter).map(k):[]:l[r]=n?k(n):n)}return{path:s[0],keys:(n||[]).concat(a.keys),params:l}}(h,r,!d,i,o)))return{done:!1,value:{route:t,keys:a.keys,params:a.params,path:a.path}};if(a&&d)for(;l<d.length;){if(!s){let i=d[l];i.parent=t;let o=a.path.length;o>0&&"/"===r.charAt(o)&&(o+=1),s=e(i,r.substr(o),n,a.keys,a.params)}let i=s.next(c);if(!i.done)return{done:!1,value:i.value};s=null,l++}return{done:!0}}}}(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute,i=null,o=null,a=t;function s(e,l=i.value.route,h){let c=null===h&&i.value.route;return(i=o||r.next(c),o=null,!e&&(i.done||!function(e,t){let r=t;for(;r;)if((r=r.parent)===e)return!0;return!1}(l,i.value.route)))?(o=i,Promise.resolve(f)):i.done?Promise.reject(p(t)):(!function(e,t){let{route:r,path:n}=t;if(r&&!r.__synthetic){if(e.chain){if(r.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==r.parent;)e.chain.pop()}}else e.chain=[];e.chain.push({path:n,route:r})}}(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},t,i.value),i.value),Promise.resolve(n(a)).then(t=>null!=t&&t!==f?(a.result=t.result||t,a):s(e,l,t)))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(e=>{let t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`,r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}(a);if(e?console.warn(t):e=Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;let t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}$.pathToRegexp=v;const{pathToRegexp:L}=$,j=new Map;function P(e,t){let r=e.get(t);if(r&&r.length>1)throw Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function I(e){let t=e.path;return void 0!==(t=Array.isArray(t)?t[0]:t)?t:""}let U=[];const T=e=>{let t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},B=(e,t)=>{let r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function N(e,t){return e.classList.add(t),new Promise(r=>{if(T(e)){let n=e.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;e.setAttribute("style",`position: absolute; ${i}`),B(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}function S({pathname:e="",search:t="",hash:r="",chain:n=[],params:i={},redirectFrom:o,resolver:a},s){let l=n.map(e=>e.route);return{baseUrl:a&&a.baseUrl||"",pathname:e,search:t,hash:r,routes:l,route:s||l.length&&l[l.length-1]||null,params:i,redirectFrom:o,getUrl:(e={})=>D(K.pathToRegexp.compile(z(l))(Object.assign({},i,e)),a)}}function M(e,t){let r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function H(e,t,r){if(d(e))return e.apply(r,t)}function F(e,t,r){return n=>n&&(n.cancel||n.redirect)?n:r?H(r[e],t,r):void 0}function V(e){if(e&&e.length){let t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function D(e,t){let r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function z(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class K extends ${constructor(e,t){let r=document.head.querySelector("base"),n=r&&r.getAttribute("href");super([],Object.assign({baseUrl:n&&$.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);let i=K.NavigationTrigger;K.setTriggers.apply(K,Object.keys(i).map(e=>i[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=S({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(r){let n=r.route,o=Promise.resolve();d(n.children)&&(o=o.then(()=>n.children(function(e){let t=Object.assign({},e);return delete t.next,t}(r))).then(r=>{null!=r||d(n.children)||(r=n.children),function(r,n){if(!Array.isArray(r)&&!c(r))throw Error(t(`Incorrect "children" value for the route ${n.path}: expected array or object, but got ${r}`));n.__children=[];let i=e(r);for(let e=0;e<i.length;e++)a(i[e]),n.__children.push(i[e])}(r,n)}));let s={redirect:e=>M(r,e),component:e=>{let t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return o.then(()=>{if(this.__isLatestRender(r))return H(n.action,[r,s],n)}).then(e=>{var r;return null!=e&&(e instanceof HTMLElement||e.redirect||e===f)?e:u(n.redirect)?s.redirect(n.redirect):n.bundle?(u(r=n.bundle)?l(r):Promise.race(i.filter(e=>e in r).map(e=>l(r[e],e)))).then(()=>{},()=>{throw Error(t(`Bundle not found: ${n.bundle}. Check if the file name is correct`))}):void 0}).then(e=>null!=e?e:u(n.component)?s.component(n.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){let r=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},u(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(n).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){let n=this.__previousContext;if(e===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=S(e),t&&this.__updateBrowserHistory(e,1===r),h("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,n),this.__previousContext=e,this.location;this.__addAppearingContent(e,n);let i=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,n),i.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),V(this.__outlet&&this.__outlet.children),this.location=S(Object.assign(n,{resolver:this})),h("error",Object.assign({router:this,error:e},n)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{let n=r!==t,i=n?r:e,o=D(z(r.chain),r.resolver),a=o===r.pathname,s=(e,t=e.route,r)=>e.next(void 0,t,r).then(r=>{if(null===r||r===f){if(a)return e;if(null!==t.parent)return s(e,t.parent,r)}return r});return s(r).then(e=>{if(null===e||e===f)throw p(i);return e&&e!==f&&e!==r?this.__fullyResolveChain(i,e):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){let r=e.result;return r instanceof HTMLElement?(!function(e,t){t.location=S(e);let r=e.chain.map(e=>e.route).indexOf(e.route);e.chain[r].element=t}(e,r),Promise.resolve(e)):r.redirect?this.__redirect(r.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):r instanceof Error?Promise.reject(r):Promise.reject(Error(t(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);let t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){let t=this.__previousContext||{},r=t.chain||[],n=e.chain,i=Promise.resolve(),o=()=>({cancel:!0}),a=t=>M(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let t=0;t<Math.min(r.length,n.length)&&r[t].route===n[t].route&&(r[t].path===n[t].path||r[t].element===n[t].element)&&this.__isReusableElement(r[t].element,n[t].element);t=++e.__divergedChainIndex);if(e.__skipAttach=n.length===r.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=n.length-1;t>=0;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},r[t]);for(let t=0;t<n.length;t++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:a},n[t]),r[t].element.location=S(e,r[t].route)}else for(let t=r.length-1;t>=e.__divergedChainIndex;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},r[t])}if(!e.__skipAttach)for(let t=0;t<n.length;t++)t<e.__divergedChainIndex?t<r.length&&r[t].element&&(r[t].element.location=S(e,r[t].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:a},n[t]),n[t].element&&(n[t].element.location=S(e,n[t].route)));return i.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,n){let i=S(t);return e.then(e=>{if(this.__isLatestRender(t)){let t=F("onBeforeLeave",[i,r,this],n.element);return t(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,r,n){let i=S(t,n.route);return e.then(e=>{if(this.__isLatestRender(t)){let t=F("onBeforeEnter",[i,r,this],n.element);return t(e)}})}__isReusableElement(e,t){return!!e&&!!t&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,r,n){if(r>256)throw Error(t(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(r||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw TypeError(t(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},n){(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r)&&(window.history[n?"replaceState":"pushState"](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"})))}__copyUnchangedElements(e,t){let r=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){let i=t&&t.chain[n].element;if(i){if(i.parentNode===r)e.chain[n].element=i,r=i;else break}}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();let r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let n=r;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){let i=e.chain[t].element;i&&(n.appendChild(i),this.__addedByRouter.set(i,!0),n===r&&this.__appearingContent.push(i),n=i)}}__removeDisappearingContent(){this.__disappearingContent&&V(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(V(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){let n=t.chain[r].element;if(n)try{let r=S(e);H(n.onAfterLeave,[r,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&V(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){let r=e.chain[t].element||{},n=S(e,e.chain[t].route);H(r.onAfterEnter,[n,{},e.resolver],r)}}__animateIfNeeded(e){let t;let r=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],o=e.chain;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){t=o[e-1].route.animate;break}if(r&&n&&t){let e=c(t)&&t.leave||"leaving",o=c(t)&&t.enter||"entering";i.push(N(r,e)),i.push(N(n,o))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){let{pathname:t,search:r,hash:n}=e?e.detail:window.location;u(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:n},!0))}static setTriggers(...e){U.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),U=e}urlForName(e,t){return this.__urlForName||(this.__urlForName=function(e,t={}){if(!(e instanceof $))throw TypeError("An instance of Resolver is expected");let r=new Map;return(n,i)=>{let o=P(r,n);if(!o&&(r.clear(),function e(t,r,n){let i=r.name||r.component;if(i&&(t.has(i)?t.get(i).push(r):t.set(i,[r])),Array.isArray(n))for(let i=0;i<n.length;i++){let o=n[i];o.parent=r,e(t,o,o.__children||o.children)}}(r,e.root,e.root.__children),!(o=P(r,n))))throw Error(`Route "${n}" not found`);let a=j.get(o.fullPath);if(!a){let e=I(o),t=o.parent;for(;t;){let r=I(t);r&&(e=r.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}let r=L.parse(e),n=L.tokensToFunction(r),i=Object.create(null);for(let e=0;e<r.length;e++)u(r[e])||(i[r[e].name]=!0);a={toPath:n,keys:i},j.set(e,a),o.fullPath=e}let s=a.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){let e={},r=Object.keys(i);for(let t=0;t<r.length;t++){let n=r[t];a.keys[n]||(e[n]=i[n])}let n=t.stringifyQueryParams(e);n&&(s+="?"===n.charAt(0)?n:`?${n}`)}return s}}(this)),D(this.__urlForName(e,t),this)}urlForPath(e,t){return D(K.pathToRegexp.compile(e)(t),this)}static go(e){let{pathname:t,search:r,hash:n}=u(e)?this.__createUrl(e,"http://a"):e;return h("go",{pathname:t,search:r,hash:n})}}const W=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,q=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Z(e,t){if("function"!=typeof e)return;let r=W.exec(e.toString());if(r)try{e=Function(r[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const Q=function(e,t){if(window.Vaadin.developmentMode)return Z(e,t)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{if(localStorage.getItem("vaadin.developmentmode.force"))return!0;if(!(["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0))return!1;if(q)return!function(){if(q){let e=Object.keys(q).map(e=>q[e]).filter(e=>e.productionMode);if(e.length>0)return!0}return!1}();return!Z(function(){return!0})}catch(e){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),Q(function(){}),K.NavigationTrigger={POPSTATE:{activate(){window.addEventListener("popstate",g)},inactivate(){window.removeEventListener("popstate",g)}},CLICK:{activate(){window.document.addEventListener("click",_)},inactivate(){window.document.removeEventListener("click",_)}}};const J=new K(document.querySelector(".root"));J.setRoutes([{path:"/",component:"init-welcome"}]),customElements.define("init-welcome",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}addStyles(){let e=document.createElement("style");e.innerHTML=`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
      
			.header {	
				height: 60px;
				background-color: rgba(240, 240, 240, 0.200);
				border-bottom: rgba(245,238,230,.5);
				display:flex;
				justify-content:space-between;
				align-items:center;
			}

			.ul_nav {
				list-style:none;
				display: flex;
				column-gap: 12px;
				margin: 0 20px 0 0;
			}

			.li_nav {
				font-size: 30px;
			}

			.main {
				height: 100%;
				width: 100%;
				display:flex;
				justify-content: center;
				align-items: center;
			}

			.complete-draw {
				display: flex;
				
				width: 100%;
				height: 100%;
			}
			
			@media (min-width: 499px) {
				.complete-draw {					
					width: 60%;
					height: 90%;

					justify-content: space-between;
				}
			}

			.draw {
				background: white;
			}

			.left-corner {
				display: flex;
				flex-direction: row-reverse;
			}
			
			.right-corner {
				
				display: flex;
				align-items: flex-end;
				align-self: self-end;
				
				animation: slideBottomUnder500 1.5s;
			}
			
			@media (min-width: 499px) {
				.left-corner {
					height: 320px;
					animation: leftZone 1.5s;
					
				}
				.right-corner {
					height: 320px;
					animation: rightZone 1.5s;
					
				}
			}
			
			.top {
				width: 100px;
				height: 10px;
				border-radius: 0 0 10px 0;
				
			}

			.rigth {
				width: 100px;
				height: 5px;
				
			}
			
			@media (min-width: 499px) {
				.top, .rigth {
					width: 250px;
					height: 14px;
				}

				.rigth {
					border-radius: 10px 0 0 0;
				}
			}
			
			.left {
				width: 10px;
				height: 100px;
				border-radius: 5px 0 10px 0;
			}

			.bottom {
				width: 100px;
				height: 5px;
			}
			
			@media (min-width: 499px) {
				.left, .bottom {
					width: 14px;
					height: 250px;
				}

				.bottom {
					border-radius:  10px 0 5px 0;
				}
			}

			@keyframes slideBottomUnder500 {
				0% {
					transform: translate(500px);
					
				}
				
				100% {
					transform: translate(50%);

				}
			}

			@keyframes leftZone {
				0% {
					transform: translate(130px, 130px);
					
				}
				
				100% {
					transform: translate(0, 0);
					
				}
			}
			
			@keyframes rightZone {
				0% {
					transform: translate(-130px, -130px);
					
				}
				
				100% {
					transform: translate(0, 0);

				}
			}
		
          
              `,this.shadow.appendChild(e)}render(){this.shadow.innerHTML=`

			<div class="main">
				<div class="complete-draw">
					<div class="left-corner">
						<div class="draw top"></div>
						<div class="draw left"></div>
					</div>

					<div class="right-corner">
						<div class="draw rigth"></div>
						<div class="draw bottom"></div>
					</div>
				</div>
			</div>
			
			`,this.addStyles()}}),window.addEventListener("load",()=>{K.go("/")});
//# sourceMappingURL=index.216d9392.js.map
