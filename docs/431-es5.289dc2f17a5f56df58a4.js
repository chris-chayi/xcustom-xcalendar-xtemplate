!function(){function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),l=new L(n||[]);return i(a,"_invoke",{value:k(t,r,l)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var f={};function d(){}function v(){}function p(){}var g={};c(g,a,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(I([])));y&&y!==e&&n.call(y,a)&&(g=y);var b=p.prototype=d.prototype=Object.create(g);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){function r(i,o,a,l){var s=h(t[i],t,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then(function(t){r("next",t,a,l)},function(t){r("throw",t,a,l)}):e.resolve(u).then(function(t){c.value=t,a(c)},function(t){return r("throw",t,a,l)})}l(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e(function(e,i){r(t,n,e,i)})}return o=o?o.then(i,i):i()}})}function k(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return j()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var l=E(a,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=h(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function H(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=p,i(b,"constructor",{value:p,configurable:!0}),i(p,"constructor",{value:v,configurable:!0}),v.displayName=c(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),c(x.prototype,l,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new x(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(b),c(b,s,"Generator"),c(b,a,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(H),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),H(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;H(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),n)}var i,o}(self.webpackChunkcalendarUi=self.webpackChunkcalendarUi||[]).push([[431],{431:function(e,i,o){"use strict";o.r(i),o.d(i,{ion_virtual_scroll:function(){return f}});var a=o(6304),l=o(1027),s=o(1572),c=function(t,e){var r=u(t,e);return r&&null!==t.ownerDocument?t.ownerDocument.importNode(r.content,!0).children[0]:null},u=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},h=function(t,e,r,n,i,o,a,l,s,c,u,h){for(var f=[],d=h+u,v=u;v<d;v++){var p=t[v];if(i){var g=i(p,v,t);null!=g&&f.push({i:c++,type:"header",value:g,index:v,height:r?r(g,v):a,reads:r?0:2,visible:!!r})}if(f.push({i:c++,type:"item",value:p,index:v,height:e?e(p,v):s,reads:e?0:2,visible:!!e}),o){var m=o(p,v,t);null!=m&&f.push({i:c++,type:"footer",value:m,index:v,height:n?n(m,v):l,reads:n?0:2,visible:!!n})}}return f},f=function(){function e(t){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(0,l.r)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){r.updateVirtualScroll()}}var i,o,u;return i=e,u=[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}],(o=[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"componentWillLoad",value:function(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}},{key:"connectedCallback",value:function(){var t=this;return(0,a.Z)(r().mark(function e(){var n;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.el.closest("ion-content"))){e.next=10;break}return e.next=4,n.getScrollElement();case 4:t.scrollEl=e.sent,t.contentEl=n,t.calcCells(),t.updateState(),e.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return e.stop()}},e)}))()}},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(t,e,r){var n=e.find(function(e){return"item"===e.type&&e.index===t});return n?r[n.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=this;return(0,a.Z)(r().mark(function i(){var o,a,l;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n.items){r.next=2;break}return r.abrupt("return");case 2:o=-1===e?n.items.length-t:e,a=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(function(t){return t.index===e})}(n.cells,t),l=h(n.items,n.itemHeight,n.headerHeight,n.footerHeight,n.headerFn,n.footerFn,n.approxHeaderHeight,n.approxFooterHeight,n.approxItemHeight,a,t,o),n.cells=function(t,e,r){if(0===r&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+r]=e[n];return t}(n.cells,l,a),n.lastItemLen=n.items.length,n.indexDirty=Math.max(t-1,0),n.scheduleUpdate();case 4:case"end":return r.stop()}},i)}))()}},{key:"checkEnd",value:function(){var t=this;return(0,a.Z)(r().mark(function e(){return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.items&&t.checkRange(t.lastItemLen);case 1:case"end":return e.stop()}},e)}))()}},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,l.f)(this.readVS.bind(this)),(0,l.c)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,e=this.scrollEl,r=0,n=this.el;null!==n&&n!==t;)r+=n.offsetTop,n=n.offsetParent;this.viewportOffset=r,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}},{key:"writeVS",value:function(){var e,r,n=this.indexDirty,i=(e=this.currentScrollTop-this.viewportOffset,r=this.viewportHeight,{top:Math.max(e-100,0),bottom:e+r+100}),o=this.getHeightIndex(),a=function(t,e,r){for(var n=e.top,i=e.bottom,o=0;o<t.length&&!(t[o]>n);o++);for(var a=Math.max(o-2-1,0);o<t.length&&!(t[o]>=i);o++);return{offset:a,length:Math.min(o+2,t.length)-a}}(o,i);(function(t,e,r){return t<=r.offset+r.length||e.offset!==r.offset||e.length!==r.length})(n,this.range,a)&&(this.range=a,function(e,r,n,i){var o,a=t(e);try{for(a.s();!(o=a.n()).done;){var l=o.value;l.change=0,l.d=!0}}catch(g){a.e(g)}finally{a.f()}for(var s=[],c=i.offset+i.length,u=function(){var t=n[h],i=e.find(function(e){return e.d&&e.cell===t});if(i){var o=r[h];o!==i.top&&(i.top=o,i.change=1),i.d=!1}else s.push(t)},h=i.offset;h<c;h++)u();for(var f=e.filter(function(t){return t.d}),d=function(){var t=p[v],n=f.find(function(e){return e.d&&e.cell.type===t.type}),i=t.i;n?(n.d=!1,n.change=2,n.cell=t,n.top=r[i]):e.push({d:!1,cell:t,visible:!0,change:2,top:r[i]})},v=0,p=s;v<p.length;v++)d();e.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,o,this.cells,a),this.nodeRender?function(t,e,r,n){for(var i,o,a=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),l=a.length,s=0;s<r.length;s++){var u=r[s],h=u.cell;if(2===u.change){if(s<l)e(o=a[s],h,s);else{var f=c(t,h.type);(o=null!==(i=e(f,h,s))&&void 0!==i?i:f).classList.add("virtual-item"),t.appendChild(o)}o.$ionCell=h}else o=a[s];0!==u.change&&(o.style.transform="translate3d(0,".concat(u.top,"px,0)"));var d=h.visible;u.visible!==d&&(d?o.classList.remove("virtual-loading"):o.classList.add("virtual-loading"),u.visible=d),h.reads>0&&(n(h,o),h.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,l.j)(this))}},{key:"updateCellHeight",value:function(t,e){var r=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),i=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));r.setCellHeight(t,i)}};e?(0,s.c)(e,n):n()}},{key:"setCellHeight",value:function(t,e){var r=t.i;t===this.cells[r]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,r),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)}},{key:"updateState",value:function(){var t=!!(this.scrollEl&&this.cells.length>0);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=h(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var r=new Uint32Array(e);return r.set(t),r}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,r){for(var n=t[r],i=r;i<t.length;i++)t[i]=n,n+=e[i].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var r=this.scrollEl;r&&(this.isEnabled=t,r.addEventListener("scroll",this.onScroll),this.rmEvent=function(){r.removeEventListener("scroll",e.onScroll)})}},{key:"renderVirtualNode",value:function(t){var e=t.cell,r=e.type,n=e.value,i=e.index;switch(r){case"item":return this.renderItem(n,i);case"header":return this.renderHeader(n,i);case"footer":return this.renderFooter(n,i)}}},{key:"render",value:function(){var t=this;return(0,l.h)(l.H,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&(0,l.h)(d,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)})))}},{key:"el",get:function(){return(0,l.i)(this)}}])&&n(i.prototype,o),u&&n(i,u),Object.defineProperty(i,"prototype",{writable:!1}),e}(),d=function(t,e,r){var n=t.dom;return r.map(e,function(t,e){var r=n[e],i=t.vattrs||{},o=i.class||"";return o+="virtual-item ",r.visible||(o+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},i),{class:o,style:Object.assign(Object.assign({},i.style),{transform:"translate3d(0,".concat(r.top,"px,0)")})})})})};f.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}])}();