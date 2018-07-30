/*! Built with http://stenciljs.com */
mycomponent.loadBundle("ecdrnblr",["exports","./chunk-cd8e00c4.js"],function(t,e){var i=window.mycomponent.h,n=function(){function t(){}return t.prototype.render=function(){return[i("ion-item",null,i("ion-label",{position:"floating"},"Some example only once"),i("ion-input",{value:"default value",required:!0}))]},Object.defineProperty(t,"is",{get:function(){return"my-component"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}(),o=function(){function t(){this.isVisible=!1,this.lazy=!0}return t.prototype.componentWillLoad=function(){var t=this;this.waitUntilVisible(this.el,"50px",function(){t.isVisible=!0,t.loadIcon()})},t.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.waitUntilVisible=function(t,e,i){var n=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var o=this.io=new this.win.IntersectionObserver(function(t){t[0].isIntersecting&&(o.disconnect(),n.io=void 0,i())},{rootMargin:e});o.observe(t)}else i()},t.prototype.loadIcon=function(){var t=this;if(!this.isServer&&this.isVisible){var e=this.getUrl();e&&function(t){var e=r.get(t);return e||(e=fetch(t,{cache:"force-cache"}).then(function(t){return t.ok?t.text():Promise.resolve(null)}),r.set(t,e)),e}(e).then(function(e){t.svgContent=function(t,e,i){if(e){var n=t.createDocumentFragment(),o=t.createElement("div");o.innerHTML=e,n.appendChild(o);for(var r=o.childNodes.length-1;r>=0;r--)"svg"!==o.childNodes[r].nodeName.toLowerCase()&&o.removeChild(o.childNodes[r]);var a=o.firstElementChild;if(a&&"svg"===a.nodeName.toLowerCase()&&(i&&a.setAttribute(i,""),function t(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var i=0;i<e.attributes.length;i++){var n=e.attributes[i].value;if("string"==typeof n&&0===n.toLowerCase().indexOf("on"))return!1}for(i=0;i<e.childNodes.length;i++)if(!t(e.childNodes[i]))return!1}return!0}(a)))return o.innerHTML}return""}(t.doc,e,t.el["s-sc"])})}if(!this.ariaLabel){var i=a(this.name,this.mode,this.ios,this.md);i&&(this.ariaLabel=i.replace("ios-","").replace("md-","").replace(/\-/g," "))}},t.prototype.getUrl=function(){var t=s(this.src);return t||((t=a(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=s(this.icon))?t:(t=a(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)},t.prototype.getNamedUrl=function(t){return this.resourcesUrl+"svg/"+t+".svg"},t.prototype.hostData=function(){var t;return{role:"img",class:Object.assign({},function(t){var e;return t?((e={"ion-color":!0})["ion-color-"+t]=!0,e):null}(this.color),(t={},t["icon-"+this.size]=!!this.size,t))}},t.prototype.render=function(){return!this.isServer&&this.svgContent?i("div",{class:"icon-inner",innerHTML:this.svgContent}):i("div",{class:"icon-inner"})},Object.defineProperty(t,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important;--ion-color-base:currentColor}:host(.icon-small){font-size:var(--ion-icon-size-small,18px)!important}:host(.icon-large){font-size:var(--ion-icon-size-large,32px)!important}.icon-inner,svg{display:block;height:100%;width:100%}svg{fill:var(--ion-color-base);stroke:var(--ion-color-base)}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},enumerable:!0,configurable:!0}),t}(),r=new Map;function a(t,e,i,n){return e=(e||"md").toLowerCase(),i&&"ios"===e?t=i.toLowerCase():n&&"md"===e?t=n.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=e+"-"+t)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function s(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}function l(t){return t.timeStamp||Date.now()}function c(t,e){var i=t._original||t;return{_original:t,emit:function(t,e){var i;return void 0===e&&(e=0),function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];clearTimeout(i),i=setTimeout.apply(void 0,[t,e].concat(n))}}(i.emit.bind(i),e)}}var u=function(){function t(){this.inputId="ion-input-"+p++,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value=""}return t.prototype.debounceChanged=function(){this.ionChange=c(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){var t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.emitStyle(),this.ionChange.emit({value:e})},t.prototype.componentWillLoad=function(){void 0===this.clearOnEdit&&"password"===this.type&&(this.clearOnEdit=!0)},t.prototype.componentDidLoad=function(){this.ionStyle=c(this.ionStyle,0),this.debounceChanged(),this.emitStyle(),this.ionInputDidLoad.emit()},t.prototype.componentDidUnload=function(){this.nativeInput=void 0,this.ionInputDidUnload.emit()},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,input:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})},t.prototype.onInput=function(t){t.target&&(this.value=t.target&&t.target.value||""),this.ionInput.emit(t)},t.prototype.onBlur=function(){this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.ionBlur.emit()},t.prototype.onFocus=function(){this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.ionFocus.emit()},t.prototype.focusChanged=function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0)},t.prototype.onKeydown=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)},t.prototype.clearTextInput=function(){this.value=""},t.prototype.hasValue=function(){return!!this.value},t.prototype.hostData=function(){return{class:{"in-item":e.hostContext(".item",this.el),"has-value":this.hasValue(),"has-focus":this.hasFocus}}},t.prototype.render=function(){var t=this;return function(t,e,i,n){if(t.shadowRoot){var o=t.querySelector("input.aux-input");o||((o=t.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),t.appendChild(o)),o.disabled=n,o.name=e,o.value=i}}(this.el,this.name,this.value,this.disabled),[i("input",{ref:function(e){return t.nativeInput=e},"aria-disabled":!!this.disabled&&"true",accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,class:"native-input",disabled:this.disabled,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,results:this.results,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:this.value,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.onKeydown.bind(this)}),i("slot",null),this.clearInput&&i("button",{type:"button",class:"input-clear-icon",onClick:this.clearTextInput.bind(this),onMouseDown:this.clearTextInput.bind(this)})]},Object.defineProperty(t,"is",{get:function(){return"ion-input"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{accept:{type:String,attr:"accept"},autocapitalize:{type:String,attr:"autocapitalize"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},autofocus:{type:Boolean,attr:"autofocus"},clearInput:{type:Boolean,attr:"clear-input"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},hasFocus:{state:!0},inputmode:{type:String,attr:"inputmode"},max:{type:String,attr:"max"},maxlength:{type:Number,attr:"maxlength"},min:{type:String,attr:"min"},minlength:{type:Number,attr:"minlength"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},pattern:{type:String,attr:"pattern"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},results:{type:Number,attr:"results"},size:{type:Number,attr:"size"},spellcheck:{type:Boolean,attr:"spellcheck"},step:{type:String,attr:"step"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidLoad",method:"ionInputDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidUnload",method:"ionInputDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--placeholder-weight:inherit;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:0!important}.native-input{border-radius:var(--border-radius);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:inline-block;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;border:0;outline:0;background:0 0;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-kerning:inherit;font-kerning:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-input::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight)}.native-input:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight)}.native-input::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight)}.native-input::placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight)}.native-input:-webkit-autofill{background-color:transparent}.native-input[disabled]{opacity:.4}.input-cover{left:0;top:0;position:absolute;width:100%;height:100%}:host([disabled]) .input-cover{pointer-events:none}.input-clear-icon{margin:0;padding:0;background-position:center;border:0;outline:0;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-text-color-step-400,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}:host(.has-focus.has-value) .input-clear-icon{visibility:visible}:host(.has-focus) .input-cover{display:none}:host(.has-focus){pointer-events:none}:host(.has-focus) a,:host(.has-focus) button,:host(.has-focus) input{pointer-events:auto}:host{--padding-top:11px;--padding-end:8px;--padding-bottom:11px;--padding-start:8px;--placeholder-color:var(--ion-placeholder-text-color, #999);font-family:var(--ion-font-family,inherit);font-size:inherit}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),p=0,d=function(){function t(){this.itemStyles={},this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.type="button"}return t.prototype.itemStyle=function(t){t.stopPropagation();for(var e=t.target.tagName,i=t.detail,n=Object.keys(t.detail),o={},r=this.itemStyles[e]||{},a=!1,s=0,l=n;s<l.length;s++){var c=l[s],u="item-"+c,p=i[c];p!==r[u]&&(a=!0),o[u]=p}a&&(this.itemStyles[e]=o,this.el.forceUpdate())},t.prototype.componentDidLoad=function(){for(var t=this.el.querySelectorAll("ion-button"),e=0;e<t.length;e++)t[e].size||(t[e].size="small")},t.prototype.isClickable=function(){return!!(this.href||this.el.onclick||this.button)},t.prototype.hostData=function(){var t,i={};for(var n in this.itemStyles)Object.assign(i,this.itemStyles[n]);return{tappable:this.isClickable(),class:Object.assign({},i,e.createColorClasses(this.color),(t={},t["item-lines-"+this.lines]=!!this.lines,t["item-disabled"]=this.disabled,t["in-list"]=e.hostContext("ion-list",this.el),t.item=!0,t))}},t.prototype.render=function(){var t=this,n=t.href,o=t.detail,r=t.mode,a=t.win,s=t.state,l=t.detailIcon,c=t.el,u=t.routerDirection,p=t.type,d=this.isClickable(),h=d?n?"a":"button":"div",m="button"===h?{type:p}:{href:n},f=null!=o?o:"ios"===r&&d;return i(h,Object.assign({},m,{class:"item-native",onClick:function(t){return e.openURL(a,n,t,u)}}),i("slot",{name:"start"}),i("div",{class:"item-inner"},i("div",{class:"input-wrapper"},i("slot",null)),i("slot",{name:"end"}),f&&i("ion-icon",{icon:l,class:"item-detail-icon"})),s&&i("div",{class:"item-state"}),d&&"md"===r&&i("ion-ripple-effect",{tapClick:!0,parent:c}))},Object.defineProperty(t,"is",{get:function(){return"ion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},state:{type:String,attr:"state"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionStyle",method:"itemStyle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--min-height:44px;--background:var(--ion-color-base);--background-active:var(--ion-color-tint);--color:var(--ion-color-contrast);--detail-push-color:var(--ion-color-shade);--border-radius:0;--border-width:0;--border-style:solid;--border-color:var(--ion-color-shade);--inner-border-width:0;--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-padding-top:0;--inner-padding-bottom:0;--inner-padding-start:0;--inner-padding-end:0;--box-shadow:none;--inner-box-shadow:none;--highlight-color-focus:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);--highlight-height:2px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;color:var(--ion-color-contrast);text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.activated){--background:var(--background-active)}:host(.item-disabled){cursor:default;opacity:.3;pointer-events:none}.item-native{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);border-radius:var(--border-radius);margin:0;text-align:initial;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background-color:var(--background);color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;text-decoration:inherit;text-transform:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-state{left:0;right:0;bottom:0;position:absolute;height:var(--highlight-height)}.item-inner{margin:0;padding:var(--inner-padding-top) var(--inner-padding-end) var(--inner-padding-bottom) var(--inner-padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.input-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-input),:host([vertical-align-top]){-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host(.item-label-floating)::slotted(ion-select),:host(.item-label-stacked)::slotted(ion-select){-ms-flex-item-align:stretch;align-self:stretch;max-width:100%}:host(.item-textarea){-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){max-width:100%}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}:host{--ion-color-base:var(--ion-item-background, transparent);--ion-color-contrast:var(--ion-item-text-color, var(--ion-text-color, #000));--ion-color-tint:var(--ion-item-background-color-active, #f1f1f1);--ion-color-shade:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--transition:background-color 300ms cubic-bezier(.4, 0, .2, 1);--padding-start:16px;--inner-padding-end:8px;--padding-start:16px;font-family:var(--ion-font-family,inherit);font-size:16px;font-weight:400;text-transform:none}:host(.item-interactive){--border-width:0 0 1px 0}:host(.item-lines-full){--border-width:0 0 1px 0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0}.item-detail-icon{color:var(--detail-push-color);font-size:20px}::slotted(:not(.interactive)[slot=end]),::slotted(:not(.interactive)[slot=start]){margin:2px 8px 2px 0}::slotted(ion-icon[slot=end]),::slotted(ion-icon[slot=start]){margin-left:0;margin-top:3px;margin-bottom:2px}::slotted(ion-icon[slot=start])+.item-inner,::slotted(ion-icon[slot=start])+.item-interactive{margin-left:24px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin:8px 16px 8px 0}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin:8px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small-md){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;--height:25px;font-size:12px}::slotted(.button-small-md) ion-icon[slot=icon-only]{padding:0}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:80px;height:80px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}:host(.item-label-floating) ::slotted(ion-input),:host(.item-label-floating) ::slotted(ion-textarea),:host(.item-label-stacked) ::slotted(ion-input),:host(.item-label-stacked) ::slotted(ion-textarea){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(:not(.item-label)) ::slotted(ion-input),:host(:not(.item-label)) ::slotted(ion-textarea){--padding-start:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),h=function(){function t(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}return t.prototype.tapClickChanged=function(t){this.enableListener(this,"ionActivated",t,this.parent),this.enableListener(this,"touchstart",!t),this.enableListener(this,"mousedown",!t)},t.prototype.ionActivated=function(t){this.addRipple(t.detail.x,t.detail.y)},t.prototype.touchStart=function(t){this.lastClick=l(t);var e=t.touches[0];this.addRipple(e.clientX,e.clientY)},t.prototype.mouseDown=function(t){var e=l(t);this.lastClick<e-1e3&&this.addRipple(t.pageX,t.pageY)},t.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},t.prototype.addRipple=function(t,e){var i,n,o,r=this;this.queue.read(function(){var a=r.el.getBoundingClientRect(),s=a.width,l=a.height;o=Math.min(2*Math.sqrt(s*s+l*l),b),i=t-a.left-o/2,n=e-a.top-o/2}),this.queue.write(function(){var t=r.doc.createElement("div");t.classList.add("ripple-effect");var e=t.style,a=Math.max(m*Math.sqrt(o),f);e.top=n+"px",e.left=i+"px",e.width=o+"px",e.height=o+"px",e.animationDuration=a+"ms",(r.el.shadowRoot||r.el).appendChild(t),setTimeout(function(){return t.remove()},a+50)})},t.prototype.render=function(){return null},Object.defineProperty(t,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"},enumerable:!0,configurable:!0}),t}(),m=35,f=260,b=550;t.MyComponent=n,t.IonIcon=o,t.IonInput=u,t.IonItem=d,t.IonRippleEffect=h,Object.defineProperty(t,"__esModule",{value:!0})});