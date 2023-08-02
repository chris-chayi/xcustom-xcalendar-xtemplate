!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return o};var o={},n=Object.prototype,r=n.hasOwnProperty,e=Object.defineProperty||function(t,o,n){t[o]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,o,n){return Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[o]}try{l({},"")}catch(I){l=function(t,o,n){return t[o]=n}}function u(t,o,n,r){var i=o&&o.prototype instanceof b?o:b,a=Object.create(i.prototype),c=new O(r||[]);return e(a,"_invoke",{value:x(t,n,c)}),a}function d(t,o,n){try{return{type:"normal",arg:t.call(o,n)}}catch(I){return{type:"throw",arg:I}}}o.wrap=u;var h={};function b(){}function f(){}function p(){}var v={};l(v,a,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==n&&r.call(m,a)&&(v=m);var y=p.prototype=b.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(o){l(t,o,function(t){return this._invoke(o,t)})})}function k(t,o){function n(e,i,a,c){var s=d(t[e],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?o.resolve(u.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):o.resolve(u).then(function(t){l.value=t,a(l)},function(t){return n("throw",t,a,c)})}c(s.arg)}var i;e(this,"_invoke",{value:function(t,r){function e(){return new o(function(o,e){n(t,r,o,e)})}return i=i?i.then(e,e):e()}})}function x(t,o,n){var r="suspendedStart";return function(e,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===e)throw i;return j()}for(n.method=e,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=d(t,o,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function L(t,o){var n=o.method,r=t.iterator[n];if(void 0===r)return o.delegate=null,"throw"===n&&t.iterator.return&&(o.method="return",o.arg=void 0,L(t,o),"throw"===o.method)||"return"!==n&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var e=d(r,t.iterator,o.arg);if("throw"===e.type)return o.method="throw",o.arg=e.arg,o.delegate=null,h;var i=e.arg;return i?i.done?(o[t.resultName]=i.value,o.next=t.nextLoc,"return"!==o.method&&(o.method="next",o.arg=void 0),o.delegate=null,h):i:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,h)}function z(t){var o={tryLoc:t[0]};1 in t&&(o.catchLoc=t[1]),2 in t&&(o.finallyLoc=t[2],o.afterLoc=t[3]),this.tryEntries.push(o)}function E(t){var o=t.completion||{};o.type="normal",delete o.arg,t.completion=o}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function C(t){if(t){var o=t[a];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,e=function o(){for(;++n<t.length;)if(r.call(t,n))return o.value=t[n],o.done=!1,o;return o.value=void 0,o.done=!0,o};return e.next=e}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,e(y,"constructor",{value:p,configurable:!0}),e(p,"constructor",{value:f,configurable:!0}),f.displayName=l(p,s,"GeneratorFunction"),o.isGeneratorFunction=function(t){var o="function"==typeof t&&t.constructor;return!!o&&(o===f||"GeneratorFunction"===(o.displayName||o.name))},o.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},o.awrap=function(t){return{__await:t}},w(k.prototype),l(k.prototype,c,function(){return this}),o.AsyncIterator=k,o.async=function(t,n,r,e,i){void 0===i&&(i=Promise);var a=new k(u(t,n,r,e),i);return o.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(y),l(y,s,"Generator"),l(y,a,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),o.keys=function(t){var o=Object(t),n=[];for(var r in o)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in o)return t.value=r,t.done=!1,t}return t.done=!0,t}},o.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var o in this)"t"===o.charAt(0)&&r.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var o=this;function n(n,r){return a.type="throw",a.arg=t,o.next=n,r&&(o.method="next",o.arg=void 0),!!r}for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,o){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc<=this.prev&&r.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=o&&o<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=o,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,o){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&o&&(this.next=o),h},finish:function(t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var e=r.arg;E(n)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(t,o,n){return this.delegate={iterator:C(t),resultName:o,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},o}function o(t,o,n){return(o=i(o))in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function n(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function r(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function e(t,o,n){return o&&r(t.prototype,o),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){var o=function(t,o){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,o||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}(t,"string");return"symbol"==typeof o?o:String(o)}(self.webpackChunkcalendarUi=self.webpackChunkcalendarUi||[]).push([[392],{1651:function(t,o,n){"use strict";n.d(o,{a:function(){return i},b:function(){return e},p:function(){return r}});var r=function(t){for(var o,n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];return(o=console).warn.apply(o,["[Ionic Warning]: ".concat(t)].concat(r))},e=function(t){for(var o,n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];return(o=console).error.apply(o,["[Ionic Error]: ".concat(t)].concat(r))},i=function(t){for(var o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];return console.error("<".concat(t.tagName.toLowerCase(),"> must be used inside ").concat(n.join(" or "),"."))}},392:function(t,r,i){"use strict";i.r(r),i.d(r,{ion_button:function(){return g},ion_icon:function(){return x}});var a,c=i(1027),s=i(6894),l=i(1572),u=i(1651),d=i(2187),h=function(t,o,n,r,e){return n="ios"===(n&&v(n))?"ios":"md",r&&"ios"===n?t=v(r):e&&"md"===n?t=v(e):(t||!o||f(o)||(t=o),p(t)&&(t=v(t))),p(t)&&""!==t.trim()?""!==t.replace(/[a-z]|-|\d/gi,"")?null:t:null},b=function(t){return p(t)&&(t=t.trim(),f(t))?t:null},f=function(t){return t.length>0&&/(\/|\.)/.test(t)},p=function(t){return"string"==typeof t},v=function(t){return t.toLowerCase()},g=function(){function t(o){var r=this;n(this,t),(0,c.r)(this,o),this.ionFocus=(0,c.e)(this,"ionFocus",7),this.ionBlur=(0,c.e)(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.inheritedAttributes={},this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=function(t){var o=r.el;if("button"===r.type)(0,d.o)(r.href,t,r.routerDirection,r.routerAnimation);else if((0,l.m)(o)){var n=r.findForm(),e=r.form;if(!n&&void 0!==e)return void(0,u.p)("string"==typeof e?'Form with selector: "#'.concat(e,'" could not be found. Verify that the id is correct and the form is rendered in the DOM.'):'The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.',o);if(n||(n=o.closest("form")),n){t.preventDefault();var i=document.createElement("button");i.type=r.type,i.style.display="none",n.appendChild(i),i.click(),i.remove()}}},this.onFocus=function(){r.ionFocus.emit()},this.onBlur=function(){r.ionBlur.emit()}}return e(t,[{key:"componentWillLoad",value:function(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=(0,l.i)(this.el)}},{key:"hasIconOnly",get:function(){return!!this.el.querySelector('[slot="icon-only"]')}},{key:"rippleType",get:function(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}},{key:"findForm",value:function(){var t=this.form;if(t instanceof HTMLFormElement)return t;if("string"==typeof t){var o=document.getElementById(t);if(o instanceof HTMLFormElement)return o}return null}},{key:"render",value:function(){var t,n=(0,s.b)(this),r=this.buttonType,e=this.type,i=this.disabled,a=this.rel,l=this.target,u=this.size,h=this.href,b=this.color,f=this.expand,p=this.hasIconOnly,v=this.shape,g=this.strong,m=this.inheritedAttributes,y=void 0===u&&this.inItem?"small":u,w=void 0===h?"button":"a",k="button"===w?{type:e}:{download:this.download,href:h,rel:a,target:l},x=this.fill;return null==x&&(x=this.inToolbar||this.inListHeader?"clear":"solid"),(0,c.h)(c.H,{onClick:this.handleClick,"aria-disabled":i?"true":null,class:(0,d.c)(b,(t={},o(t,n,!0),o(t,r,!0),o(t,"".concat(r,"-").concat(f),void 0!==f),o(t,"".concat(r,"-").concat(y),void 0!==y),o(t,"".concat(r,"-").concat(v),void 0!==v),o(t,"".concat(r,"-").concat(x),!0),o(t,"".concat(r,"-strong"),g),o(t,"in-toolbar",(0,d.h)("ion-toolbar",this.el)),o(t,"in-toolbar-color",(0,d.h)("ion-toolbar[color]",this.el)),o(t,"in-buttons",(0,d.h)("ion-buttons",this.el)),o(t,"button-has-icon-only",p),o(t,"button-disabled",i),o(t,"ion-activatable",!0),o(t,"ion-focusable",!0),t))},(0,c.h)(w,Object.assign({},k,{class:"button-native",part:"native",disabled:i,onFocus:this.onFocus,onBlur:this.onBlur},m),(0,c.h)("span",{class:"button-inner"},(0,c.h)("slot",{name:"icon-only"}),(0,c.h)("slot",{name:"start"}),(0,c.h)("slot",null),(0,c.h)("slot",{name:"end"})),"md"===n&&(0,c.h)("ion-ripple-effect",{type:this.rippleType})))}},{key:"el",get:function(){return(0,c.i)(this)}}]),t}();g.style={ios:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.in-buttons){font-size:17px;font-weight:400}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}',md:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var m,y=function t(o){if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(var n=0;n<o.attributes.length;n++){var r=o.attributes[n].name;if(p(r)&&0===r.toLowerCase().indexOf("on"))return!1}for(var e=0;e<o.childNodes.length;e++)if(!t(o.childNodes[e]))return!1}return!0},w=new Map,k=new Map,x=function(){function t(o){var r=this;n(this,t),(0,c.r)(this,o),this.iconName=null,this.inheritedAttributes={},this.isVisible=!1,this.mode=L(),this.lazy=!1,this.sanitize=!0,this.hasAriaHidden=function(){var t=r.el;return t.hasAttribute("aria-hidden")&&"true"===t.getAttribute("aria-hidden")}}return e(t,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return o.forEach(function(o){t.hasAttribute(o)&&(null!==t.getAttribute(o)&&(n[o]=t.getAttribute(o)),t.removeAttribute(o))}),n}(this.el,["aria-label"])}},{key:"connectedCallback",value:function(){var t=this;this.waitUntilVisible(this.el,"50px",function(){t.isVisible=!0,t.loadIcon()})}},{key:"disconnectedCallback",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"waitUntilVisible",value:function(t,o,n){var r=this;if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){var e=this.io=new window.IntersectionObserver(function(t){t[0].isIntersecting&&(e.disconnect(),r.io=void 0,n())},{rootMargin:o});e.observe(t)}else n()}},{key:"loadIcon",value:function(){var t=this;if(this.isVisible){var o=function(t){var o,n=b(t.src);if(n)return n;if(n=h(t.name,t.icon,t.mode,t.ios,t.md))return o=n,function(){if("undefined"==typeof window)return new Map;if(!a){var t=window;t.Ionicons=t.Ionicons||{},a=t.Ionicons.map=t.Ionicons.map||new Map}return a}().get(o)||(0,c.k)("svg/".concat(o,".svg"));if(t.icon){if(n=b(t.icon))return n;if(n=b(t.icon[t.mode]))return n}return null}(this);o&&(w.has(o)?this.svgContent=w.get(o):function(t,o){var n=k.get(t);if(!n){if("undefined"==typeof fetch||"undefined"==typeof document)return w.set(t,""),Promise.resolve();if(function(t){return t.startsWith("data:image/svg+xml")}(t)&&function(t){return-1!==t.indexOf(";utf8,")}(t)){m||(m=new DOMParser);var r=m.parseFromString(t,"text/html").querySelector("svg");return r&&w.set(t,r.outerHTML),Promise.resolve()}n=fetch(t).then(function(n){if(n.ok)return n.text().then(function(n){n&&!1!==o&&(n=function(t){var o=document.createElement("div");o.innerHTML=t;for(var n=o.childNodes.length-1;n>=0;n--)"svg"!==o.childNodes[n].nodeName.toLowerCase()&&o.removeChild(o.childNodes[n]);var r=o.firstElementChild;if(r&&"svg"===r.nodeName.toLowerCase()){var e=r.getAttribute("class")||"";if(r.setAttribute("class",(e+" s-ion-icon").trim()),y(r))return o.innerHTML}return""}(n)),w.set(t,n||"")});w.set(t,"")}),k.set(t,n)}return n}(o,this.sanitize).then(function(){return t.svgContent=w.get(o)}))}var n=this.iconName=h(this.name,this.icon,this.mode,this.ios,this.md);n&&(this.ariaLabel=n.replace(/\-/g," "))}},{key:"render",value:function(){var t,n,r=this.iconName,e=this.ariaLabel,i=this.el,a=this.inheritedAttributes,s=this.mode||"md",l=this.flipRtl||r&&(r.indexOf("arrow")>-1||r.indexOf("chevron")>-1)&&!1!==this.flipRtl;return(0,c.h)(c.H,Object.assign({"aria-label":void 0===e||this.hasAriaHidden()?null:e,role:"img",class:Object.assign(Object.assign(o({},s,!0),z(this.color)),(t={},o(t,"icon-".concat(this.size),!!this.size),o(t,"flip-rtl",!!l&&(n=i,n&&""!==n.dir?"rtl"===n.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase()))),t))},a),(0,c.h)("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}},{key:"el",get:function(){return(0,c.i)(this)}}],[{key:"assetsDirs",get:function(){return["svg"]}},{key:"watchers",get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}}}]),t}(),L=function(){return"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md"},z=function(t){return t?o({"ion-color":!0},"ion-color-".concat(t),!0):null};x.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},2187:function(n,r,e){"use strict";e.d(r,{c:function(){return s},g:function(){return l},h:function(){return c},o:function(){return d}});var i,a=e(6304),c=function(t,o){return null!==o.closest(t)},s=function(t,n){return"string"==typeof t&&t.length>0?Object.assign(o({"ion-color":!0},"ion-color-".concat(t),!0),n):n},l=function(t){var o={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return o[t]=!0}),o},u=/^[a-z][a-z0-9+\-.]*:/,d=(i=(0,a.Z)(t().mark(function o(n,r,e,i){var a;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||u.test(n)){t.next=4;break}if(!(a=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=r&&r.preventDefault(),a.push(n,e,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},o)})),function(t,o,n,r){return i.apply(this,arguments)})}}])}();