!function(){function t(t,e,r){return(e=i(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},r=Object.prototype,i=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(_){d=function(t,e,r){return t[e]=r}}function p(t,e,r,i){var o=e&&e.prototype instanceof c?e:c,a=Object.create(o.prototype),s=new P(i||[]);return n(a,"_invoke",{value:k(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=p;var u={};function c(){}function f(){}function v(){}var b={};d(b,a,function(){return this});var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==r&&i.call(w,a)&&(b=w);var y=v.prototype=c.prototype=Object.create(b);function g(t){["next","throw","return"].forEach(function(e){d(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){function r(n,o,a,s){var l=h(t[n],t,o);if("throw"!==l.type){var d=l.arg,p=d.value;return p&&"object"==typeof p&&i.call(p,"__await")?e.resolve(p.__await).then(function(t){r("next",t,a,s)},function(t){r("throw",t,a,s)}):e.resolve(p).then(function(t){d.value=t,a(d)},function(t){return r("throw",t,a,s)})}s(l.arg)}var o;n(this,"_invoke",{value:function(t,i){function n(){return new e(function(e,n){r(t,i,e,n)})}return o=o?o.then(n,n):n()}})}function k(t,e,r){var i="suspendedStart";return function(n,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===n)throw o;return S()}for(r.method=n,r.arg=o;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===i)throw i="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i="executing";var l=h(t,e,r);if("normal"===l.type){if(i=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i="completed",r.method="throw",r.arg=l.arg)}}}function L(t,e){var r=e.method,i=t.iterator[r];if(void 0===i)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),u;var n=h(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=v,n(y,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:f,configurable:!0}),f.displayName=d(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,d(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(x.prototype),d(x.prototype,s,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,i,n,o){void 0===o&&(o=Promise);var a=new x(p(e,r,i,n),o);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},g(y),d(y,l,"Generator"),d(y,a,function(){return this}),d(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var i in e)r.push(i);return r.reverse(),function t(){for(;r.length;){var i=r.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},t.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=void 0),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;j(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function i(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(self.webpackChunkcalendarUi=self.webpackChunkcalendarUi||[]).push([[7896],{7896:function(i,n,o){"use strict";o.r(n),o.d(n,{ion_split_pane:function(){return p}});var a=o(6304),s=o(1027),l=o(6894),d={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},p=function(){function i(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(0,s.r)(this,t),this.ionSplitPaneVisible=(0,s.e)(this,"ionSplitPaneVisible",7),this.visible=!1,this.disabled=!1,this.when=d.lg}var n,o,p;return n=i,p=[{key:"watchers",get:function(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}}],(o=[{key:"visibleChanged",value:function(t){var e={visible:t,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(e)}},{key:"connectedCallback",value:function(){var t=this;return(0,a.Z)(e().mark(function r(){return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="undefined"!=typeof customElements&&null!=customElements,!e.t0){e.next=4;break}return e.next=4,customElements.whenDefined("ion-split-pane");case 4:t.styleChildren(),t.updateState();case 6:case"end":return e.stop()}},r)}))()}},{key:"disconnectedCallback",value:function(){this.rmL&&(this.rmL(),this.rmL=void 0)}},{key:"updateState",value:function(){var t=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var e=this.when;if("boolean"!=typeof e){var r=d[e]||e;if(0!==r.length){if(window.matchMedia){var i=function(e){t.visible=e.matches},n=window.matchMedia(r);n.addListener(i),this.rmL=function(){return n.removeListener(i)},this.visible=n.matches}}else this.visible=!1}else this.visible=e}}},{key:"isPane",value:function(t){return!!this.visible&&t.parentElement===this.el&&t.classList.contains("split-pane-side")}},{key:"styleChildren",value:function(){for(var t=this.contentId,e=this.el.children,r=this.el.childElementCount,i=!1,n=0;n<r;n++){var o=e[n],a=void 0!==t&&o.id===t;if(a){if(i)return void console.warn("split pane cannot have more than one main node");i=!0}h(o,a)}i||console.warn("split pane does not have a specified main node")}},{key:"render",value:function(){var e,r=(0,l.b)(this);return(0,s.h)(s.H,{class:(e={},t(e,r,!0),t(e,"split-pane-".concat(r),!0),t(e,"split-pane-visible",this.visible),e)},(0,s.h)("slot",null))}},{key:"el",get:function(){return(0,s.i)(this)}}])&&r(n.prototype,o),p&&r(n,p),Object.defineProperty(n,"prototype",{writable:!1}),i}(),h=function(t,e){var r,i;e?(r="split-pane-main",i="split-pane-side"):(r="split-pane-side",i="split-pane-main");var n=t.classList;n.add(r),n.remove(i)};p.style={ios:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}",md:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}"}}}])}();