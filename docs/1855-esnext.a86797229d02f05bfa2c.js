(self.webpackChunkcalendarUi=self.webpackChunkcalendarUi||[]).push([[1855],{1651:function(e,t,r){"use strict";r.d(t,{a:function(){return a},b:function(){return o},p:function(){return i}});const i=(e,...t)=>console.warn(`[Ionic Warning]: ${e}`,...t),o=(e,...t)=>console.error(`[Ionic Error]: ${e}`,...t),a=(e,...t)=>console.error(`<${e.tagName.toLowerCase()}> must be used inside ${t.join(" or ")}.`)},1855:function(e,t,r){"use strict";r.r(t),r.d(t,{ion_modal:function(){return M}});var i=r(6304),o=r(1027),a=r(6894),n=r(2154),s=r(7513),d=r(1572),l=r(9076),p=r(1651),c=r(7857),h=r(1963),m=r(2187),u=r(6387),f=r(1527),b=r(8990),g=r(9509),k=(r(1433),(()=>(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(k||(k={})),k))());const y={getEngine(){var e;return(null===(e=null==c.w?void 0:c.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("StatusBar"))&&(null==c.w?void 0:c.w.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle(){var e;return!!(null===(e=null==c.w?void 0:c.w.Capacitor)||void 0===e?void 0:e.PluginHeaders)},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:(w=(0,i.Z)(function*(){const e=this.getEngine();if(!e)return k.Default;const{style:t}=yield e.getInfo();return t}),function(){return w.apply(this,arguments)})};var w;const v=(e,t)=>{if(1===t)return 0;const r=1/(1-t);return e*r+-t*r},x=()=>{!c.w||c.w.innerWidth>=768||!y.supportsDefaultStatusBarStyle()||y.setStyle({style:k.Dark})},D=(e=k.Default)=>{!c.w||c.w.innerWidth>=768||!y.supportsDefaultStatusBarStyle()||y.setStyle({style:e})},S=function(){var e=(0,i.Z)(function*(e,t){"function"==typeof e.canDismiss&&(yield e.canDismiss(void 0,h.G))&&(t.isRunning()?t.onFinish(()=>{e.dismiss(void 0,"handler")},{oneTimeCallback:!0}):e.dismiss(void 0,"handler"))});return function(t,r){return e.apply(this,arguments)}}(),A=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,E=e=>{const{currentBreakpoint:t,backdropBreakpoint:r}=e,i=void 0===r||r<t,o=i?`calc(var(--backdrop-opacity) * ${t})`:"0",a=(0,f.c)("backdropAnimation").fromTo("opacity",0,o);return i&&a.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,f.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:a}},B=e=>{const{currentBreakpoint:t,backdropBreakpoint:r}=e,i=`calc(var(--backdrop-opacity) * ${v(t,r)})`,o=[{offset:0,opacity:i},{offset:1,opacity:0}],a=[{offset:0,opacity:i},{offset:r,opacity:0},{offset:1,opacity:0}],n=(0,f.c)("backdropAnimation").keyframes(0!==r?a:o);return{wrapperAnimation:(0,f.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:n}},C=(e,t)=>{const{presentingEl:r,currentBreakpoint:i}=t,o=(0,d.g)(e),{wrapperAnimation:a,backdropAnimation:n}=void 0!==i?E(t):{backdropAnimation:(0,f.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,f.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};n.addElement(o.querySelector("ion-backdrop")),a.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const s=(0,f.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(r){const e=window.innerWidth<768,t="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,i=(0,d.g)(r),o=(0,f.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),l=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${t?"-10px":e}) scale(0.93)`;o.afterStyles({transform:i}).beforeAddWrite(()=>l.style.setProperty("background-color","black")).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"}]),s.addAnimation(o)}else if(s.addAnimation(n),t){const e=`translateY(-10px) scale(${t?.93:1})`;o.afterStyles({transform:e}).addElement(i.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:e}]);const r=(0,f.c)().afterStyles({transform:e}).addElement(i.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:e}]);s.addAnimation([o,r])}else a.fromTo("opacity","0","1")}else s.addAnimation(n);return s},T=(e,t,r=500)=>{const{presentingEl:i,currentBreakpoint:o}=t,a=(0,d.g)(e),{wrapperAnimation:n,backdropAnimation:s}=void 0!==o?B(t):{backdropAnimation:(0,f.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,f.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};s.addElement(a.querySelector("ion-backdrop")),n.addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const l=(0,f.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(n);if(i){const e=window.innerWidth<768,t="ION-MODAL"===i.tagName&&void 0!==i.presentingElement,r=(0,d.g)(i),o=(0,f.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(e=>{1===e&&(i.style.setProperty("overflow",""),Array.from(a.querySelectorAll("ion-modal")).filter(e=>void 0!==e.presentingElement).length<=1&&a.style.setProperty("background-color",""))}),a=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",r=`translateY(${t?"-10px":e}) scale(0.93)`;o.addElement(i).keyframes([{offset:0,filter:"contrast(0.85)",transform:r,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),l.addAnimation(o)}else if(l.addAnimation(s),t){const e=`translateY(-10px) scale(${t?.93:1})`;o.addElement(r.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:e},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const i=(0,f.c)().addElement(r.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:e},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([o,i])}else n.fromTo("opacity","1","0")}else l.addAnimation(s);return l},Y=(e,t)=>{const{currentBreakpoint:r}=t,i=(0,d.g)(e),{wrapperAnimation:o,backdropAnimation:a}=void 0!==r?E(t):{backdropAnimation:(0,f.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,f.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return a.addElement(i.querySelector("ion-backdrop")),o.addElement(i.querySelector(".modal-wrapper")),(0,f.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,o])},P=(e,t)=>{const{currentBreakpoint:r}=t,i=(0,d.g)(e),{wrapperAnimation:o,backdropAnimation:a}=void 0!==r?B(t):{backdropAnimation:(0,f.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,f.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return a.addElement(i.querySelector("ion-backdrop")),o.addElement(i.querySelector(".modal-wrapper")),(0,f.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,o])},M=class{constructor(e){(0,o.r)(this,e),this.didPresent=(0,o.e)(this,"ionModalDidPresent",7),this.willPresent=(0,o.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,o.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,o.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,o.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,o.e)(this,"didPresent",7),this.willPresentShorthand=(0,o.e)(this,"willPresent",7),this.willDismissShorthand=(0,o.e)(this,"willDismiss",7),this.didDismissShorthand=(0,o.e)(this,"didDismiss",7),this.modalIndex=O++,this.coreDelegate=(0,s.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.handleBehavior="none",this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.keepContentsMounted=!1,this.configureTriggerInteraction=()=>{const{trigger:e,el:t,destroyTriggerInteraction:r}=this;if(r&&r(),void 0===e)return;const i=void 0!==e?document.getElementById(e):null;i?this.destroyTriggerInteraction=((e,t)=>{const r=()=>{t.present()};return e.addEventListener("click",r),()=>{e.removeEventListener("click",r)}})(i,t):(0,p.p)(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-modal.`,this.el)},this.onHandleClick=()=>{const{sheetTransition:e,handleBehavior:t}=this;"cycle"===t&&void 0===e&&this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:e}=this;void 0===e&&this.dismiss(void 0,h.B)},this.onLifecycle=e=>{const t=this.usersElement,r=I[e.type];if(t&&r){const i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){var t=this;return(0,i.Z)(function*(){t.gesture?t.gesture.enable(e):e&&t.initSwipeToClose()})()}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((e,t)=>e-t))}connectedCallback(){const{configureTriggerInteraction:e,el:t}=this;(0,h.e)(t),e()}disconnectedCallback(){const{destroyTriggerInteraction:e}=this;e&&e()}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,swipeToClose:r,el:i}=this;this.inheritedAttributes=(0,d.j)(i,["aria-label","role"]),this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==e&&void 0!==t)&&(this.currentBreakpoint=this.initialBreakpoint),void 0===e||void 0===t||e.includes(t)||(0,p.p)("Your breakpoints array must include the initialBreakpoint value."),r&&(0,p.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}componentDidLoad(){!0===this.isOpen&&(0,d.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const t=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:t,delegate:this.workingDelegate=t?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var r=this;return(0,i.Z)(function*(){const{canDismiss:i}=r;return void 0===i||("function"==typeof i?i(e,t):i)})()}present(){var e=this;return(0,i.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition),e.currentBreakpoint=e.initialBreakpoint;const{inline:t,delegate:r}=e.getDelegate(!0);e.usersElement=yield(0,s.a)(r,e.el,e.component,["ion-page"],e.componentProps,t),yield(0,u.e)(e.usersElement),(0,o.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,h.d)(e,"modalEnter",C,Y,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),"undefined"!=typeof window&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,d.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(l.KEYBOARD_DID_OPEN,e.keyboardOpenCallback));const i=void 0!==e.presentingElement&&(e.swipeToClose||void 0!==e.canDismiss);i&&"ios"===(0,a.b)(e)&&(e.statusBarStyle=yield y.getStyle(),x()),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():i&&e.initSwipeToClose(),e.currentTransition=void 0})()}initSwipeToClose(){var e,t=this;if("ios"!==(0,a.b)(this))return;const{el:r}=this,o=this.leaveAnimation||a.c.get("modalLeave",T),s=this.animation=o(r,{presentingEl:this.presentingElement});if(!(0,n.a)(r))return void(0,n.p)(r);const l=null!==(e=this.statusBarStyle)&&void 0!==e?e:k.Default;this.gesture=((e,t,r,i)=>{const o=e.offsetHeight;let a=!1,s=!1,l=null,p=null,c=!0,h=0;const m=(0,g.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:e=>{const t=e.event.target;if(null===t||!t.closest)return!0;if(l=(0,n.f)(t),l){if((0,n.i)(l)){const e=(0,d.g)(l);p=e.querySelector(".inner-scroll")}else p=l;return!l.querySelector("ion-refresher")&&0===p.scrollTop}return null===t.closest("ion-footer")},onStart:r=>{const{deltaY:i}=r;c=!l||!(0,n.i)(l)||l.scrollY,s=void 0!==e.canDismiss&&!0!==e.canDismiss,i>0&&l&&(0,n.d)(l),t.progressStart(!0,a?1:0)},onMove:e=>{const{deltaY:i}=e;i>0&&l&&(0,n.d)(l);const a=e.deltaY/o,p=a>=0&&s,c=p?.2:.9999,m=p?A(a/c):a,u=(0,d.l)(1e-4,m,c);t.progressStep(u),u>=.5&&h<.5?D(r):u<.5&&h>=.5&&x(),h=u},onEnd:r=>{const p=r.velocityY,h=r.deltaY/o,u=h>=0&&s,f=u?.2:.9999,g=u?A(h/f):h,k=(0,d.l)(1e-4,g,f),y=!u&&(r.deltaY+1e3*p)/o>=.5;let w=y?-.001:.001;y?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),w+=(0,b.g)([0,0],[.32,.72],[0,1],[1,1],k)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),w+=(0,b.g)([0,0],[1,0],[.68,.28],[1,1],k)[0]);const v=((e,t)=>(0,d.l)(400,e/Math.abs(1.1*t),500))(y?h*o:(1-k)*o,p);a=y,m.enable(!1),l&&(0,n.r)(l,c),t.onFinish(()=>{y||m.enable(!0)}).progressEnd(y?1:0,w,v),u&&k>f/4?S(e,t):y&&i()}});return m})(r,s,l,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,i.Z)(function*(){yield t.dismiss(void 0,h.G),t.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:r}=this;if(!e||void 0===t)return;const i=this.enterAnimation||a.c.get("modalEnter",C),o=this.animation=i(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:r});o.progressStart(!0,1);const{gesture:n,moveSheetToBreakpoint:s}=((e,t,r,i,o,a,n=[],s,l,p)=>{const c={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==o?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-o,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},h=e.querySelector("ion-content"),m=r.clientHeight;let u=i,f=0,b=!1;const k=a.childAnimations.find(e=>"wrapperAnimation"===e.id),y=a.childAnimations.find(e=>"backdropAnimation"===e.id),w=n[n.length-1],x=n[0],D=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},E=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};k&&y&&(k.keyframes([...c.WRAPPER_KEYFRAMES]),y.keyframes([...c.BACKDROP_KEYFRAMES]),a.progressStart(!0,1-u),u>o?D():E()),h&&u!==w&&(h.scrollY=!1);const B=t=>{const{breakpoint:r,canDismiss:i,breakpointOffset:s}=t,m=i&&0===r,f=m?u:r,b=0!==f;return u=0,k&&y&&(k.keyframes([{offset:0,transform:`translateY(${100*s}%)`},{offset:1,transform:`translateY(${100*(1-f)}%)`}]),y.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${v(1-s,o)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${v(f,o)})`}]),a.progressStep(0)),C.enable(!1),m?S(e,a):b||l(),new Promise(e=>{a.onFinish(()=>{b?k&&y?(0,d.r)(()=>{k.keyframes([...c.WRAPPER_KEYFRAMES]),y.keyframes([...c.BACKDROP_KEYFRAMES]),a.progressStart(!0,1-f),u=f,p(u),h&&u===n[n.length-1]&&(h.scrollY=!0),u>o?D():E(),C.enable(!0),e()}):(C.enable(!0),e()):e()},{oneTimeCallback:!0}).progressEnd(1,0,500)})},C=(0,g.createGesture)({el:r,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target.closest("ion-content");return u=s(),1!==u||!t},onStart:()=>{b=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===x,h&&(h.scrollY=!1),(0,d.r)(()=>{e.focus()}),a.progressStart(!0,1-u)},onMove:e=>{const t=n.length>1?1-n[1]:void 0,r=1-u+e.deltaY/m,i=void 0!==t&&r>=t&&b,o=i?.95:.9999,s=i&&void 0!==t?t+A((r-t)/(o-t)):r;f=(0,d.l)(1e-4,s,o),a.progressStep(f)},onEnd:e=>{const t=u-(e.deltaY+350*e.velocityY)/m,r=n.reduce((e,r)=>Math.abs(r-t)<Math.abs(e-t)?r:e);B({breakpoint:r,breakpointOffset:f,canDismiss:b})}});return{gesture:C,moveSheetToBreakpoint:B}})(this.el,this.backdropEl,e,t,r,o,this.sortedBreakpoints,()=>{var e;return null!==(e=this.currentBreakpoint)&&void 0!==e?e:0},()=>this.sheetOnDismiss(),e=>{this.currentBreakpoint!==e&&(this.currentBreakpoint=e,this.ionBreakpointDidChange.emit({breakpoint:e}))});this.gesture=n,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,i.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,h.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var r=this;return(0,i.Z)(function*(){var i;if(r.gestureAnimationDismissing&&t!==h.G)return!1;if("handler"!==t&&!(yield r.checkCanDismiss(e,t)))return!1;void 0!==r.presentingElement&&(r.swipeToClose||void 0!==r.canDismiss)&&"ios"===(0,a.b)(r)&&D(r.statusBarStyle),"undefined"!=typeof window&&r.keyboardOpenCallback&&(window.removeEventListener(l.KEYBOARD_DID_OPEN,r.keyboardOpenCallback),r.keyboardOpenCallback=void 0),void 0!==r.currentTransition&&(yield r.currentTransition);const n=h.h.get(r)||[];r.currentTransition=(0,h.f)(r,e,t,"modalLeave",T,P,{presentingEl:r.presentingElement,currentBreakpoint:null!==(i=r.currentBreakpoint)&&void 0!==i?i:r.initialBreakpoint,backdropBreakpoint:r.backdropBreakpoint});const d=yield r.currentTransition;if(d){const{delegate:e}=r.getDelegate();yield(0,s.d)(e,r.usersElement),(0,o.c)(()=>r.el.classList.remove("show-modal")),r.animation&&r.animation.destroy(),r.gesture&&r.gesture.destroy(),n.forEach(e=>e.destroy())}return r.currentBreakpoint=void 0,r.currentTransition=void 0,r.animation=void 0,d})()}onDidDismiss(){return(0,h.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,h.g)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,i.Z)(function*(){if(!t.isSheetModal)return void(0,p.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,p.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:r,moveSheetToBreakpoint:i,canDismiss:o,breakpoints:a}=t;r!==e&&i&&(t.sheetTransition=i({breakpoint:e,breakpointOffset:1-r,canDismiss:void 0!==o&&!0!==o&&0===a[0]}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,i.Z)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,i.Z)(function*(){const{breakpoints:t,currentBreakpoint:r}=e;if(!t||null==r)return!1;const i=t.filter(e=>0!==e),o=i.indexOf(r),a=i[(o+1)%i.length];return yield e.setCurrentBreakpoint(a),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:r,htmlAttributes:i,handleBehavior:n,inheritedAttributes:s}=this,d=!1!==e&&t,l=(0,a.b)(this),{modalId:p}=this,c=void 0!==r&&"ios"===l,h="cycle"===n;return(0,o.h)(o.H,Object.assign({"no-router":!0,tabindex:"-1"},i,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[l]:!0,"modal-default":!c&&!t,"modal-card":c,"modal-sheet":t,"overlay-hidden":!0},(0,m.g)(this.cssClass)),id:p,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,o.h)("ion-backdrop",{ref:e=>this.backdropEl=e,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===l&&(0,o.h)("div",{class:"modal-shadow"}),(0,o.h)("div",Object.assign({role:"dialog"},s,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:e=>this.wrapperEl=e}),d&&(0,o.h)("button",{class:"modal-handle",tabIndex:h?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:h?this.onHandleClick:void 0,part:"handle"}),(0,o.h)("slot",null)))}get el(){return(0,o.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},I={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let O=0;M.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},2187:function(e,t,r){"use strict";r.d(t,{c:function(){return a},g:function(){return n},h:function(){return o},o:function(){return d}});var i=r(6304);const o=(e,t)=>null!==t.closest(e),a=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,n=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,d=function(){var e=(0,i.Z)(function*(e,t,r,i){if(null!=e&&"#"!==e[0]&&!s.test(e)){const o=document.querySelector("ion-router");if(o)return null!=t&&t.preventDefault(),o.push(e,r,i)}return!1});return function(t,r,i,o){return e.apply(this,arguments)}}()}}]);