!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var r={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},e="function"==typeof Symbol?Symbol:{},a=e.iterator||"@@iterator",c=e.asyncIterator||"@@asyncIterator",s=e.toStringTag||"@@toStringTag";function l(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(P){l=function(t,r,n){return t[r]=n}}function d(t,r,n,i){var e=r&&r.prototype instanceof h?r:h,a=Object.create(e.prototype),c=new _(i||[]);return o(a,"_invoke",{value:k(t,n,c)}),a}function u(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(P){return{type:"throw",arg:P}}}r.wrap=d;var p={};function h(){}function g(){}function f(){}var m={};l(m,a,function(){return this});var b=Object.getPrototypeOf,v=b&&b(b(j([])));v&&v!==n&&i.call(v,a)&&(m=v);var x=f.prototype=h.prototype=Object.create(m);function y(t){["next","throw","return"].forEach(function(r){l(t,r,function(t){return this._invoke(r,t)})})}function w(t,r){function n(o,e,a,c){var s=u(t[o],t,e);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&i.call(d,"__await")?r.resolve(d.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):r.resolve(d).then(function(t){l.value=t,a(l)},function(t){return n("throw",t,a,c)})}c(s.arg)}var e;o(this,"_invoke",{value:function(t,i){function o(){return new r(function(r,o){n(t,i,r,o)})}return e=e?e.then(o,o):o()}})}function k(t,r,n){var i="suspendedStart";return function(o,e){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw e;return O()}for(n.method=o,n.arg=e;;){var a=n.delegate;if(a){var c=z(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var s=u(t,r,n);if("normal"===s.type){if(i=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i="completed",n.method="throw",n.arg=s.arg)}}}function z(t,r){var n=r.method,i=t.iterator[n];if(void 0===i)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=void 0,z(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=u(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var e=o.arg;return e?e.done?(r[t.resultName]=e.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):e:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(i.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return g.prototype=f,o(x,"constructor",{value:f,configurable:!0}),o(f,"constructor",{value:g,configurable:!0}),g.displayName=l(f,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},y(w.prototype),l(w.prototype,c,function(){return this}),r.AsyncIterator=w,r.async=function(t,n,i,o,e){void 0===e&&(e=Promise);var a=new w(d(t,n,i,o),e);return r.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},y(x),l(x,s,"Generator"),l(x,a,function(){return this}),l(x,"toString",function(){return"[object Generator]"}),r.keys=function(t){var r=Object(t),n=[];for(var i in r)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in r)return t.value=i,t.done=!1,t}return t.done=!0,t}},r.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,i){return a.type="throw",a.arg=t,r.next=n,i&&(r.method="next",r.arg=void 0),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var e=this.tryEntries[o],a=e.completion;if("root"===e.tryLoc)return n("end");if(e.tryLoc<=this.prev){var c=i.call(e,"catchLoc"),s=i.call(e,"finallyLoc");if(c&&s){if(this.prev<e.catchLoc)return n(e.catchLoc,!0);if(this.prev<e.finallyLoc)return n(e.finallyLoc)}else if(c){if(this.prev<e.catchLoc)return n(e.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<e.finallyLoc)return n(e.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var e=o;break}}e&&("break"===t||"continue"===t)&&e.tryLoc<=r&&r<=e.finallyLoc&&(e=null);var a=e?e.completion:{};return a.type=t,a.arg=r,e?(this.method="next",this.next=e.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},r}function r(t,r,n){return(r=e(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function i(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,e(i.key),i)}}function o(t,r,n){return r&&i(t.prototype,r),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function e(t){var r=function(t,r){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof r?r:String(r)}(self.webpackChunkcalendarUi=self.webpackChunkcalendarUi||[]).push([[6911],{6911:function(t,i,e){"use strict";e.r(i),e.d(i,{ion_card:function(){return d},ion_card_content:function(){return u},ion_card_header:function(){return p},ion_card_subtitle:function(){return h},ion_card_title:function(){return g}});var a=e(1027),c=e(6894),s=e(1572),l=e(2187),d=function(){function t(r){n(this,t),(0,a.r)(this,r),this.inheritedAriaAttributes={},this.button=!1,this.type="button",this.disabled=!1,this.routerDirection="forward"}return o(t,[{key:"componentWillLoad",value:function(){this.inheritedAriaAttributes=(0,s.j)(this.el,["aria-label"])}},{key:"isClickable",value:function(){return void 0!==this.href||this.button}},{key:"renderCard",value:function(t){var r=this.isClickable();if(!r)return[(0,a.h)("slot",null)];var n=this.href,i=this.routerAnimation,o=this.routerDirection,e=this.inheritedAriaAttributes,c=r?void 0===n?"button":"a":"div";return(0,a.h)(c,Object.assign({},"button"===c?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target},e,{class:"card-native",part:"native",disabled:this.disabled,onClick:function(t){return(0,l.o)(n,t,o,i)}}),(0,a.h)("slot",null),r&&"md"===t&&(0,a.h)("ion-ripple-effect",null))}},{key:"render",value:function(){var t,n=(0,c.b)(this);return(0,a.h)(a.H,{class:(0,l.c)(this.color,(t={},r(t,n,!0),r(t,"card-disabled",this.disabled),r(t,"ion-activatable",this.isClickable()),t))},this.renderCard(n))}},{key:"el",get:function(){return(0,a.i)(this)}}]),t}();d.style={ios:":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, #666666)));margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}",md:":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}"};var u=function(){function t(r){n(this,t),(0,a.r)(this,r)}return o(t,[{key:"render",value:function(){var t,n=(0,c.b)(this);return(0,a.h)(a.H,{class:(t={},r(t,n,!0),r(t,"card-content-".concat(n),!0),t)})}}]),t}();u.style={ios:"ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}ion-card-header+.card-content-ios{padding-top:0}",md:"ion-card-content{display:block;position:relative}.card-content-md{padding-left:16px;padding-right:16px;padding-top:13px;padding-bottom:13px;font-size:14px;line-height:1.5}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.card-content-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}"};var p=function(){function t(r){n(this,t),(0,a.r)(this,r),this.translucent=!1}return o(t,[{key:"render",value:function(){var t=(0,c.b)(this);return(0,a.h)(a.H,{class:(0,l.c)(this.color,r({"card-header-translucent":this.translucent,"ion-inherit-color":!0},t,!0))},(0,a.h)("slot",null))}}]),t}();p.style={ios:":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}",md:":host{--background:transparent;--color:inherit;display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}"};var h=function(){function t(r){n(this,t),(0,a.r)(this,r)}return o(t,[{key:"render",value:function(){var t=(0,c.b)(this);return(0,a.h)(a.H,{role:"heading","aria-level":"3",class:(0,l.c)(this.color,r({"ion-inherit-color":!0},t,!0))},(0,a.h)("slot",null))}}]),t}();h.style={ios:":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}",md:":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, #737373);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;font-weight:500}"};var g=function(){function t(r){n(this,t),(0,a.r)(this,r)}return o(t,[{key:"render",value:function(){var t=(0,c.b)(this);return(0,a.h)(a.H,{role:"heading","aria-level":"2",class:(0,l.c)(this.color,r({"ion-inherit-color":!0},t,!0))},(0,a.h)("slot",null))}}]),t}();g.style={ios:":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}",md:":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, #262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}"}},2187:function(n,i,o){"use strict";o.d(i,{c:function(){return s},g:function(){return l},h:function(){return c},o:function(){return u}});var e,a=o(6304),c=function(t,r){return null!==r.closest(t)},s=function(t,n){return"string"==typeof t&&t.length>0?Object.assign(r({"ion-color":!0},"ion-color-".concat(t),!0),n):n},l=function(t){var r={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return r[t]=!0}),r},d=/^[a-z][a-z0-9+\-.]*:/,u=(e=(0,a.Z)(t().mark(function r(n,i,o,e){var a;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||d.test(n)){t.next=4;break}if(!(a=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=i&&i.preventDefault(),a.push(n,o,e)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},r)})),function(t,r,n,i){return e.apply(this,arguments)})}}])}();