!function(){function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),s=new T(r||[]);return i(a,"_invoke",{value:x(e,n,s)}),a}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var f={};function h(){}function d(){}function p(){}var m={};c(m,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(L([])));g&&g!==t&&r.call(g,a)&&(m=g);var w=p.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){function n(i,o,a,s){var u=v(e[i],e,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then(function(e){n("next",e,a,s)},function(e){n("throw",e,a,s)}):t.resolve(l).then(function(e){c.value=e,a(c)},function(e){return n("throw",e,a,s)})}s(u.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t(function(t,i){n(e,r,t,i)})}return o=o?o.then(i,i):i()}})}function x(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return V()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=S(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=v(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function S(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var i=v(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,f;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:V}}function V(){return{value:void 0,done:!0}}return d.prototype=p,i(w,"constructor",{value:p,configurable:!0}),i(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(k.prototype),c(k.prototype,s,function(){return this}),e.AsyncIterator=k,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new k(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},b(w),c(w,u,"Generator"),c(w,a,function(){return this}),c(w,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?o:String(o)),r)}var i,o}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkcalendarUi=self.webpackChunkcalendarUi||[]).push([[8708],{8708:function(t,i,a){"use strict";a.r(i),a.d(i,{ion_nav:function(){return y},ion_nav_link:function(){return g}});var s=a(6304),u=a(1027),c=a(6894),l=a(8990),v=a(1572),f=a(6387),h=a(7513),d=function(){function e(t,n){r(this,e),this.component=t,this.params=n,this.state=1}return o(e,[{key:"init",value:function(e){var t=this;return(0,s.Z)(n().mark(function r(){var i;return n().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.state=2,t.element){n.next=5;break}return i=t.component,n.next=4,(0,h.a)(t.delegate,e,i,["ion-page","ion-page-invisible"],t.params);case 4:t.element=n.sent;case 5:case"end":return n.stop()}},r)}))()}},{key:"_destroy",value:function(){(0,v.n)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}]),e}(),p=function(e,t,n){return!!e&&e.component===t&&(0,v.s)(e.params,n)},m=function(e,t){return e?e instanceof d?e:new d(e,t):null},y=function(){function t(e){r(this,t),(0,u.r)(this,e),this.ionNavWillLoad=(0,u.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,u.e)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,u.e)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return o(t,[{key:"swipeGestureChanged",value:function(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}},{key:"rootChanged",value:function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}},{key:"componentWillLoad",value:function(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=(0,c.b)(this);this.swipeGesture=c.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}},{key:"componentDidLoad",value:function(){var e=this;return(0,s.Z)(n().mark(function t(){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.rootChanged(),t.next=3,a.e(8592).then(a.bind(a,8637));case 3:e.gesture=t.sent.createSwipeBackGesture(e.el,e.canStart.bind(e),e.onStart.bind(e),e.onMove.bind(e),e.onEnd.bind(e)),e.swipeGestureChanged();case 5:case"end":return t.stop()}},t)}))()}},{key:"connectedCallback",value:function(){this.destroyed=!1}},{key:"disconnectedCallback",value:function(){var t,n=e(this.views);try{for(n.s();!(t=n.n()).done;){var r=t.value;(0,f.l)(r.element,f.d),r._destroy()}}catch(i){n.e(i)}finally{n.f()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}},{key:"push",value:function(e,t,n,r){return this.insert(-1,e,t,n,r)}},{key:"insert",value:function(e,t,n,r,i){return this.insertPages(e,[{component:t,componentProps:n}],r,i)}},{key:"insertPages",value:function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)}},{key:"pop",value:function(e,t){return this.removeIndex(-1,1,e,t)}},{key:"popTo",value:function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(r.removeView=e,r.removeStart=1):"number"==typeof e&&(r.removeStart=e+1),this.queueTrns(r,n)}},{key:"popToRoot",value:function(e,t){return this.removeIndex(1,-1,e,t)}},{key:"removeIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return this.queueTrns({removeStart:e,removeCount:t,opts:n},r)}},{key:"setRoot",value:function(e,t,n,r){return this.setPages([{component:e,componentProps:t}],n,r)}},{key:"setPages",value:function(e,t,n){return null!=t||(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}},{key:"setRouteId",value:function(e,t,r,i){var o,a=this.getActiveSync();if(p(a,e,t))return Promise.resolve({changed:!1,element:a.element});var u,c=new Promise(function(e){return o=e}),l={updateURL:!1,viewIsReady:function(e){var t,r,i=new Promise(function(e){return t=e});return o({changed:!0,element:e,markVisible:(r=(0,s.Z)(n().mark(function e(){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,u;case 3:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)})}),i}};if("root"===r)u=this.setRoot(e,t,l);else{var v=this.views.find(function(n){return p(n,e,t)});v?u=this.popTo(v,Object.assign(Object.assign({},l),{direction:"back",animationBuilder:i})):"forward"===r?u=this.push(e,t,Object.assign(Object.assign({},l),{animationBuilder:i})):"back"===r&&(u=this.setRoot(e,t,Object.assign(Object.assign({},l),{direction:"back",animated:!0,animationBuilder:i})))}return c}},{key:"getRouteId",value:function(){var e=this;return(0,s.Z)(n().mark(function t(){var r;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e.getActiveSync())){t.next=3;break}return t.abrupt("return",{id:r.element.tagName,params:r.params,element:r.element});case 3:case"end":return t.stop()}},t)}))()}},{key:"getActive",value:function(){var e=this;return(0,s.Z)(n().mark(function t(){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getActiveSync());case 1:case"end":return t.stop()}},t)}))()}},{key:"getByIndex",value:function(e){var t=this;return(0,s.Z)(n().mark(function r(){return n().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.views[e]);case 1:case"end":return n.stop()}},r)}))()}},{key:"canGoBack",value:function(e){var t=this;return(0,s.Z)(n().mark(function r(){return n().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.canGoBackSync(e));case 1:case"end":return n.stop()}},r)}))()}},{key:"getPrevious",value:function(e){var t=this;return(0,s.Z)(n().mark(function r(){return n().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.getPreviousSync(e));case 1:case"end":return n.stop()}},r)}))()}},{key:"getLength",value:function(){return this.views.length}},{key:"getActiveSync",value:function(){return this.views[this.views.length-1]}},{key:"canGoBackSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();return!(!e||!this.getPreviousSync(e))}},{key:"getPreviousSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();if(e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}}},{key:"queueTrns",value:function(e,t){var r=this;return(0,s.Z)(n().mark(function i(){var o,a,s,u,c;return n().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.isTransitioning||!(null===(o=e.opts)||void 0===o?void 0:o.skipIfBusy)){n.next=2;break}return n.abrupt("return",!1);case 2:if(s=new Promise(function(t,n){e.resolve=t,e.reject=n}),e.done=t,!e.opts||!1===e.opts.updateURL||!r.useRouter){n.next=13;break}if(!(u=document.querySelector("ion-router"))){n.next=13;break}return n.next=8,u.canTransition();case 8:if(!1!==(c=n.sent)){n.next=11;break}return n.abrupt("return",!1);case 11:if("string"!=typeof c){n.next=13;break}return n.abrupt("return",(u.push(c,e.opts.direction||"back"),!1));case 13:return n.abrupt("return",(0===(null===(a=e.insertViews)||void 0===a?void 0:a.length)&&(e.insertViews=void 0),r.transInstr.push(e),r.nextTrns(),s));case 14:case"end":return n.stop()}},i)}))()}},{key:"success",value:function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}},{key:"failed",value:function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}},{key:"fireError",value:function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}},{key:"nextTrns",value:function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}},{key:"runTransition",value:function(e){var t=this;return(0,s.Z)(n().mark(function r(){var i,o,a,s;return n().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e),i=t.getActiveSync(),o=t.getEnteringView(e,i),i||o){n.next=5;break}throw new Error("no views in the stack to be removed");case 5:if(n.t0=o&&1===o.state,!n.t0){n.next=9;break}return n.next=9,o.init(t.el);case 9:if(t.postViewInit(o,i,e),(a=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&o!==i)&&e.opts&&i&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||(null==o?void 0:o.animationBuilder)),i.animationBuilder=e.opts.animationBuilder),!a){n.next=18;break}return n.next=15,t.transition(o,i,e);case 15:n.t1=n.sent,n.next=19;break;case 18:n.t1={hasCompleted:!0,requiresTransition:!1};case 19:s=n.t1,t.success(s,e),t.ionNavDidChange.emit(),n.next=27;break;case 24:n.prev=24,n.t2=n.catch(0),t.failed(n.t2,e);case 27:t.isTransitioning=!1,t.nextTrns();case 28:case"end":return n.stop()}},r,null,[[0,24]])}))()}},{key:"prepareTI",value:function(t){var n,r,i,o=this.views.length;if(null!==(n=t.opts)&&void 0!==n||(t.opts={}),null!==(r=(i=t.opts).delegate)&&void 0!==r||(i.delegate=this.delegate),void 0!==t.removeView){(0,v.n)(void 0!==t.removeStart,"removeView needs removeStart"),(0,v.n)(void 0!==t.removeCount,"removeView needs removeCount");var a=this.views.indexOf(t.removeView);if(a<0)throw new Error("removeView was not found");t.removeStart+=a}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=o-1),t.removeCount<0&&(t.removeCount=o-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===o),t.insertViews&&((t.insertStart<0||t.insertStart>o)&&(t.insertStart=o),t.enteringRequiresTransition=t.insertStart===o);var s=t.insertViews;if(s){(0,v.n)(s.length>0,"length can not be zero");var u=s.map(function(e){return e instanceof d?e:"component"in e?m(e.component,null===e.componentProps?void 0:e.componentProps):m(e,void 0)}).filter(function(e){return null!==e});if(0===u.length)throw new Error("invalid views to insert");var c,l=e(u);try{for(l.s();!(c=l.n()).done;){var f=c.value;f.delegate=t.opts.delegate;var h=f.nav;if(h&&h!==this)throw new Error("inserted view was already inserted");if(3===f.state)throw new Error("inserted view was already destroyed")}}catch(p){l.e(p)}finally{l.f()}t.insertViews=u}}},{key:"getEnteringView",value:function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var r=e.removeStart;if(void 0!==r)for(var i=this.views,o=r+e.removeCount,a=i.length-1;a>=0;a--){var s=i[a];if((a<r||a>=o)&&s!==t)return s}}},{key:"postViewInit",value:function(t,n,r){var i,o,a;(0,v.n)(n||t,"Both leavingView and enteringView are null"),(0,v.n)(r.resolve,"resolve must be valid"),(0,v.n)(r.reject,"reject must be valid");var s,u=r.opts,c=r.insertViews,l=r.removeStart,h=r.removeCount;if(void 0!==l&&void 0!==h){(0,v.n)(l>=0,"removeStart can not be negative"),(0,v.n)(h>=0,"removeCount can not be negative"),s=[];for(var d=l;d<l+h;d++){var p=this.views[d];void 0!==p&&p!==t&&p!==n&&s.push(p)}null!==(i=u.direction)&&void 0!==i||(u.direction="back")}var m=this.views.length+(null!==(o=null==c?void 0:c.length)&&void 0!==o?o:0)-(null!=h?h:0);if((0,v.n)(m>=0,"final balance can not be negative"),0===m)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(c){var y,g=r.insertStart,w=e(c);try{for(w.s();!(y=w.n()).done;){var b=y.value;this.insertViewAt(b,g),g++}}catch(L){w.e(L)}finally{w.f()}r.enteringRequiresTransition&&(null!==(a=u.direction)&&void 0!==a||(u.direction="forward"))}if(s&&s.length>0){var k,x=e(s);try{for(x.s();!(k=x.n()).done;){var S=k.value;(0,f.l)(S.element,f.b),(0,f.l)(S.element,f.c),(0,f.l)(S.element,f.d)}}catch(L){x.e(L)}finally{x.f()}var E,C=e(s);try{for(C.s();!(E=C.n()).done;){var T=E.value;this.destroyView(T)}}catch(L){C.e(L)}finally{C.f()}}}},{key:"transition",value:function(e,t,r){var i=this;return(0,s.Z)(n().mark(function o(){var a,s,u,l,v,h,d,p;return n().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.opts,s=a.progressAnimation?function(e){return i.sbAni=e}:void 0,u=(0,c.b)(i),l=e.element,v=t&&t.element,h=Object.assign(Object.assign({mode:u,showGoBack:i.canGoBackSync(e),baseEl:i.el,progressCallback:s,animated:i.animated&&c.c.getBoolean("animated",!0),enteringEl:l,leavingEl:v},a),{animationBuilder:a.animationBuilder||i.animation||c.c.get("navAnimation")}),n.next=8,(0,f.t)(h);case 8:return d=n.sent,p=d.hasCompleted,n.abrupt("return",i.transitionFinish(p,e,t,a));case 11:case"end":return n.stop()}},o)}))()}},{key:"transitionFinish",value:function(e,t,n,r){var i=e?t:n;return i&&this.unmountInactiveViews(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:r.direction}}},{key:"insertViewAt",value:function(e,t){var n=this.views,r=n.indexOf(e);r>-1?((0,v.n)(e.nav===this,"view is not part of the nav"),n.splice(r,1),n.splice(t,0,e)):((0,v.n)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}},{key:"removeView",value:function(e){(0,v.n)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);(0,v.n)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}},{key:"destroyView",value:function(e){e._destroy(),this.removeView(e)}},{key:"unmountInactiveViews",value:function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),r=t.length-1;r>=0;r--){var i=t[r],o=i.element;o&&(r>n?((0,f.l)(o,f.d),this.destroyView(i)):r<n&&(0,f.s)(o,!0))}}},{key:"canStart",value:function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}},{key:"onStart",value:function(){this.pop({direction:"back",progressAnimation:!0})}},{key:"onMove",value:function(e){this.sbAni&&this.sbAni.progressStep(e)}},{key:"onEnd",value:function(e,t,n){var r=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(function(){r.animationEnabled=!0},{oneTimeCallback:!0});var i=e?-.001:.001;e?i+=(0,l.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=(0,l.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,i,n)}}},{key:"render",value:function(){return(0,u.h)("slot",null)}},{key:"el",get:function(){return(0,u.i)(this)}}],[{key:"watchers",get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}}]),t}();y.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var g=function(){function e(t){var n=this;r(this,e),(0,u.r)(this,t),this.routerDirection="forward",this.onClick=function(){return function(e,t,r,i,o){var a=n.el.closest("ion-nav");if(a)if("forward"===t){if(void 0!==r)return a.push(r,i,{skipIfBusy:!0,animationBuilder:o})}else if("root"===t){if(void 0!==r)return a.setRoot(r,i,{skipIfBusy:!0,animationBuilder:o})}else if("back"===t)return a.pop({skipIfBusy:!0,animationBuilder:o});return Promise.resolve(!1)}(0,n.routerDirection,n.component,n.componentProps,n.routerAnimation)}}return o(e,[{key:"render",value:function(){return(0,u.h)(u.H,{onClick:this.onClick})}},{key:"el",get:function(){return(0,u.i)(this)}}]),e}()}}])}();