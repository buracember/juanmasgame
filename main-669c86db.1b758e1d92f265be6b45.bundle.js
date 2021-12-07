/*! For license information please see main-669c86db.1b758e1d92f265be6b45.bundle.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[147],{1570:(e,t)=>{t.hot=function(e){return e}},6339:(e,t,n)=>{"use strict";n.d(t,{a:()=>i});var r=n(7294),o=n(8718);function i(e){var t=e.i18n,n=e.defaultNS,i=e.children,a=(0,r.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,r.createElement)(o.OO.Provider,{value:a},i)}},9189:(e,t,n)=>{"use strict";n.d(t,{c:()=>m});var r=n(1253),o=n(484),i=n(6156),a=n(7294),s=n(1613),c=n(8718),u=n(8236);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function d(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function h(e){return Array.isArray(e)?e:[e]}function y(e,t){if(!e)return"";var n="",i=h(e),s=t.transKeepBasicHtmlNodesFor||[];return i.forEach((function(e,i){if("string"===typeof e)n+="".concat(e);else if(a.isValidElement(e)){var c=Object.keys(e.props).length,l=s.indexOf(e.type)>-1,f=e.props.children;if(!f&&l&&0===c)n+="<".concat(e.type,"/>");else if(f||l&&0===c)if(e.props.i18nIsDynamicList)n+="<".concat(i,"></").concat(i,">");else if(l&&1===c&&"string"===typeof f)n+="<".concat(e.type,">").concat(f,"</").concat(e.type,">");else{var p=y(f,t);n+="<".concat(i,">").concat(p,"</").concat(i,">")}else n+="<".concat(i,"></").concat(i,">")}else if(null===e)(0,u.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,o.Z)(e)){var d=e.format,h=(0,r.Z)(e,["format"]),v=Object.keys(h);if(1===v.length){var m=d?"".concat(v[0],", ").concat(d):v[0];n+="{{".concat(m,"}}")}else(0,u.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else(0,u.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function v(e,t,n,r,i){if(""===t)return[];var c=r.transKeepBasicHtmlNodesFor||[],u=t&&new RegExp(c.join("|")).test(t);if(!e&&!u)return[t];var l={};!function e(t){h(t).forEach((function(t){"string"!==typeof t&&(p(t)?e(d(t)):"object"!==(0,o.Z)(t)||a.isValidElement(t)||Object.assign(l,t))}))}(e);var y=n.services.interpolator.interpolate(t,f(f({},l),i),n.language),v=s.Z.parse("<0>".concat(y,"</0>"));function m(e,t,n){var r=d(e),o=O(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return a.isValidElement(e)}))}(r)&&0===o.length?r:o}function g(e,t,n,r,o){e.dummy&&(e.children=t),n.push(a.cloneElement(e,f(f({},e.props),{},{key:r}),o?void 0:t))}function O(t,n,i){var s=h(t);return h(n).reduce((function(t,n,l){var d,h,y,v=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var b=s[parseInt(n.name,10)];!b&&1===i.length&&i[0][n.name]&&(b=i[0][n.name]),b||(b={});var w=0!==Object.keys(n.attrs).length?(d={props:n.attrs},(y=f({},h=b)).props=Object.assign(d.props,h.props),y):b,E=a.isValidElement(w),j=E&&p(n,!0)&&!n.voidElement,S=u&&"object"===(0,o.Z)(w)&&w.dummy&&!E,P="object"===(0,o.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"===typeof w)t.push(w);else if(p(w)||j){g(w,m(w,n,i),t,l)}else if(S){var D=O(s,n.children,i);t.push(a.cloneElement(w,f(f({},w.props),{},{key:l}),D))}else if(Number.isNaN(parseFloat(n.name))){if(P)g(w,m(w,n,i),t,l,n.voidElement);else if(r.transSupportBasicHtmlNodes&&c.indexOf(n.name)>-1)if(n.voidElement)t.push(a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var N=O(s,n.children,i);t.push(a.createElement(n.name,{key:"".concat(n.name,"-").concat(l)},N))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var I=O(s,n.children,i);t.push("<".concat(n.name,">").concat(I,"</").concat(n.name,">"))}}else if("object"!==(0,o.Z)(w)||E)1===n.children.length&&v?t.push(a.cloneElement(w,f(f({},w.props),{},{key:l}),v)):t.push(a.cloneElement(w,f(f({},w.props),{},{key:l})));else{var _=n.children[0]?v:null;_&&t.push(_)}}else"text"===n.type&&t.push(n.content);return t}),[])}return d(O([{dummy:!0,children:e}],v,h(e||[]))[0])}function m(e){var t=e.children,n=e.count,o=e.parent,i=e.i18nKey,s=e.tOptions,l=void 0===s?{}:s,p=e.values,d=e.defaults,h=e.components,m=e.ns,g=e.i18n,O=e.t,b=(0,r.Z)(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),w=(0,a.useContext)(c.OO)||{},E=w.i18n,j=w.defaultNS,S=g||E||(0,c.nI)();if(!S)return(0,u.O4)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var P=O||S.t.bind(S)||function(e){return e},D=f(f({},(0,c.JP)()),S.options&&S.options.react),N=m||P.ns||j||S.options&&S.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var I=d||y(t,D)||D.transEmptyNodeValue||i,_=D.hashTransKey,x=i||(_?_(I):I),C=p?l.interpolation:{interpolation:f(f({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},L=f(f(f(f({},l),{},{count:n},p),C),{},{defaultValue:I,ns:N}),R=v(h||t,x?P(x,L):I,S,D,L),A=void 0!==o?o:D.defaultTransParent;return A?a.createElement(A,b,R):R}},9222:(e,t,n)=>{"use strict";n.d(t,{W:()=>a});var r=n(4738),o=n(1253),i=n(6793);function a(e){var t=e.ns,n=e.children,a=(0,o.Z)(e,["ns","children"]),s=(0,i.$)(t,a),c=(0,r.Z)(s,3),u=c[0],l=c[1],f=c[2];return n(u,{i18n:l,lng:l.language},f)}},8718:(e,t,n)=>{"use strict";n.d(t,{OO:()=>f,j_:()=>p,JP:()=>d,zv:()=>h,I6:()=>y,nI:()=>v,Db:()=>m,qi:()=>g,kK:()=>O});var r=n(6610),o=n(5991),i=n(6156),a=n(7294);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u,l={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},f=a.createContext();function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l=c(c({},l),e)}function d(){return l}var h=function(){function e(){(0,r.Z)(this,e),this.usedNamespaces={}}return(0,o.Z)(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function y(e){u=e}function v(){return u}var m={type:"3rdParty",init:function(e){p(e.options.react),y(e)}};function g(e){return function(t){return new Promise((function(n){var r=O();e.getInitialProps?e.getInitialProps(t).then((function(e){n(c(c({},e),r))})):n(r)}))}}function O(){var e=v(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}},9621:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Trans:()=>r.c,useTranslation:()=>o.$,withTranslation:()=>i.Z,Translation:()=>a.W,I18nextProvider:()=>s.a,withSSR:()=>c.H,useSSR:()=>u.N,I18nContext:()=>l.OO,initReactI18next:()=>l.Db,setDefaults:()=>l.j_,getDefaults:()=>l.JP,setI18n:()=>l.I6,getI18n:()=>l.nI,composeInitialProps:()=>l.qi,getInitialProps:()=>l.kK});var r=n(9189),o=n(6793),i=n(1768),a=n(9222),s=n(6339),c=n(2851),u=n(9463),l=n(8718)},9463:(e,t,n)=>{"use strict";n.d(t,{N:()=>i});var r=n(7294),o=n(8718);function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.i18n,a=(0,r.useContext)(o.OO)||{},s=a.i18n,c=i||s||(0,o.nI)();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),t&&!c.initializedLanguageOnce&&(c.changeLanguage(t),c.initializedLanguageOnce=!0))}},6793:(e,t,n)=>{"use strict";n.d(t,{$:()=>l});var r=n(4738),o=n(6156),i=n(7294),a=n(8718),s=n(8236);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,o=(0,i.useContext)(a.OO)||{},c=o.i18n,l=o.defaultNS,f=n||c||(0,a.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new a.zv),!f){(0,s.O4)("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[p,{},!1];return d.t=p,d.i18n={},d.ready=!1,d}f.options.react&&void 0!==f.options.react.wait&&(0,s.O4)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=u(u(u({},(0,a.JP)()),f.options.react),t),y=h.useSuspense,v=e||l||f.options&&f.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(v);var m=(f.isInitialized||f.initializedStoreOnce)&&v.every((function(e){return(0,s.F0)(e,f,h)}));function g(){return f.getFixedT(null,"fallback"===h.nsMode?v:v[0])}var O=(0,i.useState)(g),b=(0,r.Z)(O,2),w=b[0],E=b[1],j=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=h.bindI18n,t=h.bindI18nStore;function n(){j.current&&E(g)}return j.current=!0,m||y||(0,s.DC)(f,v,(function(){j.current&&E(g)})),e&&f&&f.on(e,n),t&&f&&f.store.on(t,n),function(){j.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,n)})),t&&f&&t.split(" ").forEach((function(e){return f.store.off(e,n)}))}}),[f,v.join()]);var S=(0,i.useRef)(!0);(0,i.useEffect)((function(){j.current&&!S.current&&E(g),S.current=!1}),[f]);var P=[w,f,m];if(P.t=w,P.i18n=f,P.ready=m,m)return P;if(!m&&!y)return P;throw new Promise((function(e){(0,s.DC)(f,v,(function(){e()}))}))}},8236:(e,t,n)=>{"use strict";function r(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}n.d(t,{ZK:()=>r,O4:()=>i,DC:()=>a,F0:()=>s,Gf:()=>c});var o={};function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&o[t[0]]||("string"===typeof t[0]&&(o[t[0]]=new Date),r.apply(void 0,t))}function a(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return i("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!s(r,e)||o&&!s(a,e))))}function c(e){return e.displayName||e.name||("string"===typeof e&&e.length>0?e:"Unknown")}},2851:(e,t,n)=>{"use strict";n.d(t,{H:()=>l});var r=n(6156),o=n(1253),i=n(7294),a=n(9463),s=n(8718),c=n(8236);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(){return function(e){function t(t){var n=t.initialI18nStore,s=t.initialLanguage,c=(0,o.Z)(t,["initialI18nStore","initialLanguage"]);return(0,a.N)(n,s),i.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c))}return t.getInitialProps=(0,s.qi)(e),t.displayName="withI18nextSSR(".concat((0,c.Gf)(e),")"),t.WrappedComponent=e,t}}},1768:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(6156),o=n(4738),i=n(1253),a=n(7294),s=n(6793),c=n(8236);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var c=r.forwardedRef,u=(0,i.Z)(r,["forwardedRef"]),f=(0,s.$)(e,u),p=(0,o.Z)(f,3),d=p[0],h=p[1],y=p[2],v=l(l({},u),{},{t:d,i18n:h,tReady:y});return t.withRef&&c?v.ref=c:!t.withRef&&c&&(v.forwardedRef=c),a.createElement(n,v)}r.displayName="withI18nextTranslation(".concat((0,c.Gf)(n),")"),r.WrappedComponent=n;return t.withRef?a.forwardRef((function(e,t){return a.createElement(r,Object.assign({},e,{forwardedRef:t}))})):r}}},6585:(e,t,n)=>{"use strict";n.d(t,{Q_:()=>o,Nq:()=>i,Q6:()=>a,O1:()=>s,V7:()=>c});var r=n(8875),o={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};function i(){return r.canUseDOM}function a(){return function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",!!e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI}()&&"undefined"!==typeof window&&null!==window}function s(e){for(var t,n="abcdefghijklmnopqrstuvwxyz",r=""+n+n.toUpperCase()+"1234567890",o="",i=0;i<e;i++)o+=(t=r)[Math.floor(Math.random()*t.length)];return o}function c(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r={};for(var o in e)({}).hasOwnProperty.call(e,o)&&(t.includes(o)||(r[o]=e[o]));return r}},3815:(e,t,n)=>{"use strict";n.r(t),n.d(t,{cacheStore:()=>f,default:()=>p});var r,o=n(7294),i=n(7673),a=n(6585),s=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},u=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},l=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},f=Object.create(null);const p=function(e){function t(t){var n=e.call(this,t)||this;return n.isActive=!1,n.handleCacheQueue=function(e){"string"!==typeof e?n.handleError(e):n.handleLoad(e)},n.handleLoad=function(e){n.isActive&&n.setState({content:e,status:a.Q_.LOADED},n.getElement)},n.handleError=function(e){var t=n.props.onError,r="Browser does not support SVG"===e.message?a.Q_.UNSUPPORTED:a.Q_.FAILED;n.isActive&&n.setState({status:r},(function(){"function"===typeof t&&t(e)}))},n.request=function(){var e=n.props,t=e.cacheRequests,r=e.fetchOptions,o=e.src;try{return t&&(f[o]={content:"",status:a.Q_.LOADING,queue:[]}),fetch(o,r).then((function(e){var t=e.headers.get("content-type"),n=u((t||"").split(/ ?; ?/),1)[0];if(e.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some((function(e){return n.indexOf(e)>=0})))throw new Error("Content type isn't valid: "+n);return e.text()})).then((function(e){var r=n.props.src;if(o===r&&(n.handleLoad(e),t)){var i=f[o];i&&(i.content=e,i.status=a.Q_.LOADED,i.queue=i.queue.filter((function(t){return t(e),!1})))}})).catch((function(e){if(n.handleError(e),t){var r=f[o];r&&(r.queue.forEach((function(t){t(e)})),delete f[o])}}))}catch(e){return n.handleError(new Error(e.message))}},n.state={content:"",element:null,hasCache:!!t.cacheRequests&&!!f[t.src],status:a.Q_.PENDING},n.hash=t.uniqueHash||(0,a.O1)(8),n}return s(t,e),t.prototype.componentDidMount=function(){if(this.isActive=!0,(0,a.Nq)()){var e=this.state.status,t=this.props.src;try{if(e===a.Q_.PENDING){if(!(0,a.Q6)())throw new Error("Browser does not support SVG");if(!t)throw new Error("Missing src");this.load()}}catch(e){this.handleError(e)}}},t.prototype.componentDidUpdate=function(e,t){if((0,a.Nq)()){var n=this.state,r=n.hasCache,o=n.status,i=this.props,s=i.onLoad,c=i.src;if(t.status!==a.Q_.READY&&o===a.Q_.READY&&s&&s(c,r),e.src!==c){if(!c)return void this.handleError(new Error("Missing src"));this.load()}}},t.prototype.componentWillUnmount=function(){this.isActive=!1},t.prototype.processSVG=function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e},t.prototype.updateSVGAttributes=function(e){var t=this,n=this.props,r=n.baseURL,o=void 0===r?"":r,i=n.uniquifyIDs,a=["id","href","xlink:href","xlink:role","xlink:arcrole"],s=["href","xlink:href"];return i?(l([],u(e.children)).map((function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes).map((function(e){var n=e,r=e.value.match(/url\((.*?)\)/);return r&&r[1]&&(n.value=e.value.replace(r[0],"url("+o+r[1]+"__"+t.hash+")")),n}));a.forEach((function(e){var r,o,i=n.find((function(t){return t.name===e}));!i||(r=e,o=i.value,s.indexOf(r)>=0&&o&&o.indexOf("#")<0)||(i.value=i.value+"__"+t.hash)}))}return e.children.length?t.updateSVGAttributes(e):e})),e):e},t.prototype.getNode=function(){var e=this.props,t=e.description,n=e.title;try{var r=this.processSVG(),o=(0,i.ZP)(r,{nodeOnly:!0});if(!o||!(o instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");var a=this.updateSVGAttributes(o);if(t){var s=a.querySelector("desc");s&&s.parentNode&&s.parentNode.removeChild(s);var c=document.createElement("desc");c.innerHTML=t,a.prepend(c)}if(n){var u=a.querySelector("title");u&&u.parentNode&&u.parentNode.removeChild(u);var l=document.createElement("title");l.innerHTML=n,a.prepend(l)}return a}catch(e){return this.handleError(e)}},t.prototype.getElement=function(){try{var e=this.getNode(),t=(0,i.ZP)(e);if(!t||!o.isValidElement(t))throw new Error("Could not convert the src to a React element");this.setState({element:t,status:a.Q_.READY})}catch(e){this.handleError(new Error(e.message))}},t.prototype.load=function(){var e=this;this.isActive&&this.setState({content:"",element:null,status:a.Q_.LOADING},(function(){var t=e.props,n=t.cacheRequests,r=t.src,o=n&&f[r];if(o)o.status===a.Q_.LOADING?o.queue.push(e.handleCacheQueue):o.status===a.Q_.LOADED&&e.handleLoad(o.content);else{var i,s=r.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);s?i=s[1]?atob(s[2]):decodeURIComponent(s[2]):r.indexOf("<svg")>=0&&(i=r),i?e.handleLoad(i):e.request()}}))},t.prototype.render=function(){var e=this.state,t=e.element,n=e.status,r=this.props,i=r.children,s=void 0===i?null:i,u=r.innerRef,l=r.loader,f=void 0===l?null:l,p=(0,a.V7)(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return(0,a.Nq)()?t?o.cloneElement(t,c({ref:u},p)):[a.Q_.UNSUPPORTED,a.Q_.FAILED].indexOf(n)>-1?s:f:f},t.defaultProps={cacheRequests:!0,uniquifyIDs:!1},t}(o.PureComponent)},9921:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,O=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case i:case s:case a:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case v:case y:case c:return e;default:return t}}case o:return t}}}function E(e){return w(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=c,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return E(e)||w(e)===l},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===v},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===s||e===a||e===d||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p||e.$$typeof===g||e.$$typeof===O||e.$$typeof===b||e.$$typeof===m)},t.typeOf=w},9864:(e,t,n)=>{"use strict";e.exports=n(9921)}}]);