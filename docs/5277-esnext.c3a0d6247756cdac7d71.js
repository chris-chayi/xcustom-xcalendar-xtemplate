(self.webpackChunkcalendarUi=self.webpackChunkcalendarUi||[]).push([[5277],{1651:function(t,e,n){"use strict";n.d(e,{a:function(){return i},b:function(){return a},p:function(){return r}});const r=(t,...e)=>console.warn(`[Ionic Warning]: ${t}`,...e),a=(t,...e)=>console.error(`[Ionic Error]: ${t}`,...e),i=(t,...e)=>console.error(`<${t.tagName.toLowerCase()}> must be used inside ${e.join(" or ")}.`)},5277:function(t,e,n){"use strict";n.r(e),n.d(e,{ion_range:function(){return b}});var r=n(6304),a=n(1027),i=n(6894),o=n(2154),s=n(1572),l=n(1651),d=n(5375),h=n(2187);const b=class{constructor(t){var e=this;(0,a.r)(this,t),this.ionChange=(0,a.e)(this,"ionChange",7),this.ionStyle=(0,a.e)(this,"ionStyle",7),this.ionFocus=(0,a.e)(this,"ionFocus",7),this.ionBlur=(0,a.e)(this,"ionBlur",7),this.ionKnobMoveStart=(0,a.e)(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=(0,a.e)(this,"ionKnobMoveEnd",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=t=>Math.round(t),this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=t=>(0,s.l)(this.min,t,this.max),this.ensureValueInBounds=t=>this.dualKnobs?{lower:this.clampBounds(t.lower),upper:this.clampBounds(t.upper)}:this.clampBounds(t),this.setupGesture=(0,r.Z)(function*(){const t=e.rangeSlider;t&&(e.gesture=(yield Promise.resolve().then(n.bind(n,9509))).createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:t=>e.onStart(t),onMove:t=>e.onMove(t),onEnd:t=>e.onEnd(t)}),e.gesture.enable(!e.disabled))}),this.handleKeyboard=(t,e)=>{const{ensureValueInBounds:n}=this;let r=this.step;r=r>0?r:1,r/=this.max-this.min,e||(r*=-1),"A"===t?this.ratioA=(0,s.l)(0,this.ratioA+r,1):this.ratioB=(0,s.l)(0,this.ratioB+r,1),this.ionKnobMoveStart.emit({value:n(this.value)}),this.updateValue(),this.ionKnobMoveEnd.emit({value:n(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())}}debounceChanged(){this.ionChange=(0,s.h)(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}activeBarStartChanged(){const{activeBarStart:t}=this;void 0!==t&&(t>this.max?((0,l.p)(`Range: The value of activeBarStart (${t}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):t<this.min&&((0,l.p)(`Range: The value of activeBarStart (${t}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}componentWillLoad(){this.rangeId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-r-"+p++,this.inheritedAttributes=(0,s.i)(this.el)}componentDidLoad(){this.setupGesture(),this.didLoad=!0}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture(),this.contentEl=(0,o.f)(this.el)}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var t;const e=null!==(t=this.value)&&void 0!==t?t:0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(t){const{contentEl:e}=this;e&&(this.initialContentScrollY=(0,o.d)(e));const n=this.rect=this.rangeSlider.getBoundingClientRect(),r=t.currentX;let a=(0,s.l)(0,(r-n.left)/n.width,1);(0,d.i)(this.el)&&(a=1-a),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-a)<Math.abs(this.ratioB-a)?"A":"B",this.setFocus(this.pressedKnob),this.update(r),this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(t){this.update(t.currentX)}onEnd(t){const{contentEl:e,initialContentScrollY:n}=this;e&&(0,o.r)(e,n),this.update(t.currentX),this.pressedKnob=void 0,this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(t){const e=this.rect;let n=(0,s.l)(0,(t-e.left)/e.width,1);(0,d.i)(this.el)&&(n=1-n),this.snaps&&(n=u(c(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}get valA(){return c(this.ratioA,this.min,this.max,this.step)}get valB(){return c(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);const{activeBarStart:t}=this;return null==t?0:u(t,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:e,max:n}=this;this.dualKnobs?(this.ratioA=u(t.lower,e,n),this.ratioB=u(t.upper,e,n)):this.ratioA=u(t,e,n)}updateValue(){this.noUpdate=!0;const{valA:t,valB:e}=this;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){const e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}render(){var t;const{min:e,max:n,step:r,el:o,handleKeyboard:l,pressedKnob:b,disabled:c,pin:p,ratioLower:m,ratioUpper:k,inheritedAttributes:f,rangeId:v,pinFormatter:x}=this;let{labelText:w}=(0,s.d)(o,v);null==w&&(w=f["aria-label"]);const y=(0,i.b)(this);let z=100*m+"%",B=100-100*k+"%";const A=(0,d.i)(this.el),S=A?"right":"left",C=t=>({[S]:t[S]});!1===this.dualKnobs&&(this.valA<(null!==(t=this.activeBarStart)&&void 0!==t?t:this.min)?(z=100*k+"%",B=100-100*m+"%"):(z=100*m+"%",B=100-100*k+"%"));const K={[S]:z,[A?"left":"right"]:B},M=[];if(this.snaps&&this.ticks)for(let a=e;a<=n;a+=r){const t=u(a,e,n),r=Math.min(m,k),i=Math.max(m,k),o={ratio:t,active:t>=r&&t<=i};o[S]=100*t+"%",M.push(o)}return(0,s.e)(!0,o,this.name,JSON.stringify(this.getValue()),c),(0,a.h)(a.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:v,class:(0,h.c)(this.color,{[y]:!0,"in-item":(0,h.h)("ion-item",o),"range-disabled":c,"range-pressed":void 0!==b,"range-has-pin":p})},(0,a.h)("slot",{name:"start"}),(0,a.h)("div",{class:"range-slider",ref:t=>this.rangeSlider=t},M.map(t=>(0,a.h)("div",{style:C(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active},part:t.active?"tick-active":"tick"})),(0,a.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,a.h)("div",{class:"range-bar range-bar-active",role:"presentation",style:K,part:"bar-active"}),g(A,{knob:"A",pressed:"A"===b,value:this.valA,ratio:this.ratioA,pin:p,pinFormatter:x,disabled:c,handleKeyboard:l,min:e,max:n,labelText:w}),this.dualKnobs&&g(A,{knob:"B",pressed:"B"===b,value:this.valB,ratio:this.ratioB,pin:p,pinFormatter:x,disabled:c,handleKeyboard:l,min:e,max:n,labelText:w})),(0,a.h)("slot",{name:"end"}))}get el(){return(0,a.i)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},g=(t,{knob:e,value:n,ratio:r,min:i,max:o,disabled:s,pressed:l,pin:d,handleKeyboard:h,labelText:b,pinFormatter:g})=>{const c=t?"right":"left";return(0,a.h)("div",{onKeyDown:t=>{const n=t.key;"ArrowLeft"===n||"ArrowDown"===n?(h(e,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==n&&"ArrowUp"!==n||(h(e,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===e,"range-knob-b":"B"===e,"range-knob-pressed":l,"range-knob-min":n===i,"range-knob-max":n===o,"ion-activatable":!0,"ion-focusable":!0},style:(()=>{const t={};return t[c]=100*r+"%",t})(),role:"slider",tabindex:s?-1:0,"aria-label":b,"aria-valuemin":i,"aria-valuemax":o,"aria-disabled":s?"true":null,"aria-valuenow":n},d&&(0,a.h)("div",{class:"range-pin",role:"presentation",part:"pin"},g(n)),(0,a.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},c=(t,e,n,r)=>{let a=(n-e)*t;return r>0&&(a=Math.round(a/r)*r+e),(0,s.l)(e,a,n)},u=(t,e,n)=>(0,s.l)(0,(t-e)/(n-e),1);let p=0;b.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;left:0;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}[dir=rtl] .range-knob::before,:host-context([dir=rtl]) .range-knob::before{left:unset;right:unset;right:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'}},2187:function(t,e,n){"use strict";n.d(e,{c:function(){return i},g:function(){return o},h:function(){return a},o:function(){return l}});var r=n(6304);const a=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,l=function(){var t=(0,r.Z)(function*(t,e,n,r){if(null!=t&&"#"!==t[0]&&!s.test(t)){const a=document.querySelector("ion-router");if(a)return null!=e&&e.preventDefault(),a.push(t,n,r)}return!1});return function(e,n,r,a){return t.apply(this,arguments)}}()}}]);