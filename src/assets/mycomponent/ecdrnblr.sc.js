/*! Built with http://stenciljs.com */
const{h:t}=window.mycomponent;import{b as e,a as i,c as s}from"./chunk-a0898b87.js";class n{render(){return[t("ion-item",null,t("ion-label",{position:"floating"},"Some example only once"),t("ion-input",{value:"default value",required:!0}))]}static get is(){return"my-component"}static get encapsulation(){return"shadow"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"}}}static get style(){return""}}class a{constructor(){this.isVisible=!1,this.lazy=!0}componentWillLoad(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidUnload(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,e,i){if(this.lazy&&this.win&&this.win.IntersectionObserver){const s=this.io=new this.win.IntersectionObserver(t=>{t[0].isIntersecting&&(s.disconnect(),this.io=void 0,i())},{rootMargin:e});s.observe(t)}else i()}loadIcon(){if(!this.isServer&&this.isVisible){const t=this.getUrl();t&&function(t){let e=o.get(t);return e||(e=fetch(t,{cache:"force-cache"}).then(t=>t.ok?t.text():Promise.resolve(null)),o.set(t,e)),e}(t).then(t=>{this.svgContent=function(t,e,i){if(e){const s=t.createDocumentFragment(),n=t.createElement("div");n.innerHTML=e,s.appendChild(n);for(let t=n.childNodes.length-1;t>=0;t--)"svg"!==n.childNodes[t].nodeName.toLowerCase()&&n.removeChild(n.childNodes[t]);const a=n.firstElementChild;if(a&&"svg"===a.nodeName.toLowerCase()&&(i&&a.setAttribute(i,""),function t(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var i=0;i<e.attributes.length;i++){let t=e.attributes[i].value;if("string"==typeof t&&0===t.toLowerCase().indexOf("on"))return!1}for(i=0;i<e.childNodes.length;i++)if(!t(e.childNodes[i]))return!1}return!0}(a)))return n.innerHTML}return""}(this.doc,t,this.el["s-sc"])})}if(!this.ariaLabel){const t=l(this.name,this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," "))}}getUrl(){let t=r(this.src);return t||((t=l(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=r(this.icon))?t:(t=l(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)}getNamedUrl(t){return`${this.resourcesUrl}svg/${t}.svg`}hostData(){return{role:"img",class:Object.assign({},(t=this.color,t?{"ion-color":!0,[`ion-color-${t}`]:!0}:null),{[`icon-${this.size}`]:!!this.size})};var t}render(){return!this.isServer&&this.svgContent?t("div",{class:"icon-inner",innerHTML:this.svgContent}):t("div",{class:"icon-inner"})}static get is(){return"ion-icon"}static get encapsulation(){return"shadow"}static get properties(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}}static get style(){return"[data-ion-icon-host]{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important;--ion-color-base:currentColor}.icon-small[data-ion-icon-host]{font-size:var(--ion-icon-size-small,18px)!important}.icon-large[data-ion-icon-host]{font-size:var(--ion-icon-size-large,32px)!important}.icon-inner[data-ion-icon], svg[data-ion-icon]{display:block;height:100%;width:100%}svg[data-ion-icon]{fill:var(--ion-color-base);stroke:var(--ion-color-base)}.ion-color-primary[data-ion-icon-host]{--ion-color-base:var(--ion-color-primary, #3880ff)}.ion-color-secondary[data-ion-icon-host]{--ion-color-base:var(--ion-color-secondary, #0cd1e8)}.ion-color-tertiary[data-ion-icon-host]{--ion-color-base:var(--ion-color-tertiary, #f4a942)}.ion-color-success[data-ion-icon-host]{--ion-color-base:var(--ion-color-success, #10dc60)}.ion-color-warning[data-ion-icon-host]{--ion-color-base:var(--ion-color-warning, #ffce00)}.ion-color-danger[data-ion-icon-host]{--ion-color-base:var(--ion-color-danger, #f14141)}.ion-color-light[data-ion-icon-host]{--ion-color-base:var(--ion-color-light, #f4f5f8)}.ion-color-medium[data-ion-icon-host]{--ion-color-base:var(--ion-color-medium, #989aa2)}.ion-color-dark[data-ion-icon-host]{--ion-color-base:var(--ion-color-dark, #222428)}"}}const o=new Map;function l(t,e,i,s){return e=(e||"md").toLowerCase(),i&&"ios"===e?t=i.toLowerCase():s&&"md"===e?t=s.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=`${e}-${t}`)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function r(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}function c(t){return t.timeStamp||Date.now()}function h(t,e){const i=t._original||t;return{_original:t,emit:function(t,e=0){let i;return(...s)=>{clearTimeout(i),i=setTimeout(t,e,...s)}}(i.emit.bind(i),e)}}class d{constructor(){this.inputId=`ion-input-${u++}`,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value=""}debounceChanged(){this.ionChange=h(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){const t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.emitStyle(),this.ionChange.emit({value:e})}componentWillLoad(){void 0===this.clearOnEdit&&"password"===this.type&&(this.clearOnEdit=!0)}componentDidLoad(){this.ionStyle=h(this.ionStyle,0),this.debounceChanged(),this.emitStyle(),this.ionInputDidLoad.emit()}componentDidUnload(){this.nativeInput=void 0,this.ionInputDidUnload.emit()}emitStyle(){this.ionStyle.emit({interactive:!0,input:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}onInput(t){t.target&&(this.value=t.target&&t.target.value||""),this.ionInput.emit(t)}onBlur(){this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.ionBlur.emit()}onFocus(){this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.ionFocus.emit()}focusChanged(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0)}onKeydown(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)}clearTextInput(){this.value=""}hasValue(){return!!this.value}hostData(){return{class:{"in-item":e(".item",this.el),"has-value":this.hasValue(),"has-focus":this.hasFocus}}}render(){return function(t,e,i,s){if(t.shadowRoot){let n=t.querySelector("input.aux-input");n||((n=t.ownerDocument.createElement("input")).type="hidden",n.classList.add("aux-input"),t.appendChild(n)),n.disabled=s,n.name=e,n.value=i}}(this.el,this.name,this.value,this.disabled),[t("input",{ref:t=>this.nativeInput=t,"aria-disabled":!!this.disabled&&"true",accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,class:"native-input",disabled:this.disabled,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,results:this.results,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:this.value,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.onKeydown.bind(this)}),t("slot",null),this.clearInput&&t("button",{type:"button",class:"input-clear-icon",onClick:this.clearTextInput.bind(this),onMouseDown:this.clearTextInput.bind(this)})]}static get is(){return"ion-input"}static get encapsulation(){return"shadow"}static get properties(){return{accept:{type:String,attr:"accept"},autocapitalize:{type:String,attr:"autocapitalize"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},autofocus:{type:Boolean,attr:"autofocus"},clearInput:{type:Boolean,attr:"clear-input"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},hasFocus:{state:!0},inputmode:{type:String,attr:"inputmode"},max:{type:String,attr:"max"},maxlength:{type:Number,attr:"maxlength"},min:{type:String,attr:"min"},minlength:{type:Number,attr:"minlength"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},pattern:{type:String,attr:"pattern"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},results:{type:Number,attr:"results"},size:{type:Number,attr:"size"},spellcheck:{type:Boolean,attr:"spellcheck"},step:{type:String,attr:"step"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidLoad",method:"ionInputDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidUnload",method:"ionInputDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"[data-ion-input-md-host]{--placeholder-weight:inherit;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:0!important}.native-input[data-ion-input-md]{border-radius:var(--border-radius);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:inline-block;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;border:0;outline:0;background:0 0;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-kerning:inherit;font-kerning:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-input[data-ion-input-md]::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight)}.native-input[data-ion-input-md]:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight)}.native-input[data-ion-input-md]::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight)}.native-input[data-ion-input-md]::placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight)}.native-input[data-ion-input-md]:-webkit-autofill{background-color:transparent}.native-input[disabled][data-ion-input-md]{opacity:.4}.input-cover[data-ion-input-md]{left:0;top:0;position:absolute;width:100%;height:100%}[disabled][data-ion-input-md-host]   .input-cover[data-ion-input-md]{pointer-events:none}.input-clear-icon[data-ion-input-md]{margin:0;padding:0;background-position:center;border:0;outline:0;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-text-color-step-400,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}.has-focus.has-value[data-ion-input-md-host]   .input-clear-icon[data-ion-input-md]{visibility:visible}.has-focus[data-ion-input-md-host]   .input-cover[data-ion-input-md]{display:none}.has-focus[data-ion-input-md-host]{pointer-events:none}.has-focus[data-ion-input-md-host]   a[data-ion-input-md], .has-focus[data-ion-input-md-host]   button[data-ion-input-md], .has-focus[data-ion-input-md-host]   input[data-ion-input-md]{pointer-events:auto}[data-ion-input-md-host]{--padding-top:11px;--padding-end:8px;--padding-bottom:11px;--padding-start:8px;--placeholder-color:var(--ion-placeholder-text-color, #999);font-family:var(--ion-font-family,inherit);font-size:inherit}"}static get styleMode(){return"md"}}let u=0;class p{constructor(){this.itemStyles={},this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.type="button"}itemStyle(t){t.stopPropagation();const e=t.target.tagName,i=t.detail,s=Object.keys(t.detail),n={},a=this.itemStyles[e]||{};let o=!1;for(const t of s){const e=`item-${t}`,s=i[t];s!==a[e]&&(o=!0),n[e]=s}o&&(this.itemStyles[e]=n,this.el.forceUpdate())}componentDidLoad(){const t=this.el.querySelectorAll("ion-button");for(let e=0;e<t.length;e++)t[e].size||(t[e].size="small")}isClickable(){return!!(this.href||this.el.onclick||this.button)}hostData(){const t={};for(const e in this.itemStyles)Object.assign(t,this.itemStyles[e]);return{tappable:this.isClickable(),class:Object.assign({},t,i(this.color),{[`item-lines-${this.lines}`]:!!this.lines,"item-disabled":this.disabled,"in-list":e("ion-list",this.el),item:!0})}}render(){const{href:e,detail:i,mode:n,win:a,state:o,detailIcon:l,el:r,routerDirection:c,type:h}=this,d=this.isClickable(),u=d?e?"a":"button":"div",p="button"===u?{type:h}:{href:e},m=null!=i?i:"ios"===n&&d;return t(u,Object.assign({},p,{class:"item-native",onClick:t=>s(a,e,t,c)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"}),m&&t("ion-icon",{icon:l,class:"item-detail-icon"})),o&&t("div",{class:"item-state"}),d&&"md"===n&&t("ion-ripple-effect",{tapClick:!0,parent:r}))}static get is(){return"ion-item"}static get encapsulation(){return"shadow"}static get properties(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},state:{type:String,attr:"state"},type:{type:String,attr:"type"},win:{context:"window"}}}static get listeners(){return[{name:"ionStyle",method:"itemStyle"}]}static get style(){return"[data-ion-item-md-host]{--min-height:44px;--background:var(--ion-color-base);--background-active:var(--ion-color-tint);--color:var(--ion-color-contrast);--detail-push-color:var(--ion-color-shade);--border-radius:0;--border-width:0;--border-style:solid;--border-color:var(--ion-color-shade);--inner-border-width:0;--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-padding-top:0;--inner-padding-bottom:0;--inner-padding-start:0;--inner-padding-end:0;--box-shadow:none;--inner-box-shadow:none;--highlight-color-focus:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);--highlight-height:2px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;color:var(--ion-color-contrast);text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.activated[data-ion-item-md-host]{--background:var(--background-active)}.item-disabled[data-ion-item-md-host]{cursor:default;opacity:.3;pointer-events:none}.item-native[data-ion-item-md]{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);border-radius:var(--border-radius);margin:0;text-align:initial;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background-color:var(--background);color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;text-decoration:inherit;text-transform:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-state[data-ion-item-md]{left:0;right:0;bottom:0;position:absolute;height:var(--highlight-height)}.item-inner[data-ion-item-md]{margin:0;padding:var(--inner-padding-top) var(--inner-padding-end) var(--inner-padding-bottom) var(--inner-padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.input-wrapper[data-ion-item-md]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-input[data-ion-item-md-host], [vertical-align-top][data-ion-item-md-host]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}[data-ion-item-md-slot] > ion-icon{font-size:1.6em}[data-ion-item-md-slot] > ion-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}.item-label-floating[data-ion-item-md-host]   .input-wrapper[data-ion-item-md], .item-label-stacked[data-ion-item-md-host]   .input-wrapper[data-ion-item-md]{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[data-ion-item-md-host].item-label-floating[data-ion-item-md-slot] > ion-select, [data-ion-item-md-host].item-label-stacked[data-ion-item-md-slot] > ion-select{-ms-flex-item-align:stretch;align-self:stretch;max-width:100%}.item-textarea[data-ion-item-md-host]{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}[data-ion-item-md-host].item-multiple-inputs [data-ion-item-md-slot] > ion-select{position:relative}[data-ion-item-md-host].item-label-floating [data-ion-item-md-slot] > ion-select, [data-ion-item-md-host].item-label-stacked [data-ion-item-md-slot] > ion-select{max-width:100%}[data-ion-item-md-slot] > ion-reorder[slot]{margin-top:0;margin-bottom:0}[data-ion-item-md-host]{--ion-color-base:var(--ion-item-background, transparent);--ion-color-contrast:var(--ion-item-text-color, var(--ion-text-color, #000));--ion-color-tint:var(--ion-item-background-color-active, #f1f1f1);--ion-color-shade:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--transition:background-color 300ms cubic-bezier(.4, 0, .2, 1);--padding-start:16px;--inner-padding-end:8px;--padding-start:16px;font-family:var(--ion-font-family,inherit);font-size:16px;font-weight:400;text-transform:none}.item-interactive[data-ion-item-md-host]{--border-width:0 0 1px 0}.item-lines-full[data-ion-item-md-host]{--border-width:0 0 1px 0}.item-lines-inset[data-ion-item-md-host]{--inner-border-width:0 0 1px 0}.item-lines-inset[data-ion-item-md-host], .item-lines-none[data-ion-item-md-host]{--border-width:0}.item-lines-full[data-ion-item-md-host], .item-lines-none[data-ion-item-md-host]{--inner-border-width:0}.item-detail-icon[data-ion-item-md]{color:var(--detail-push-color);font-size:20px}[data-ion-item-md-slot] > :not(.interactive)[slot=end], [data-ion-item-md-slot] > :not(.interactive)[slot=start]{margin:2px 8px 2px 0}[data-ion-item-md-slot] > ion-icon[slot=end], [data-ion-item-md-slot] > ion-icon[slot=start]{margin-left:0;margin-top:3px;margin-bottom:2px}[data-ion-item-md-slot] > ion-icon[slot=start]+.item-inner, [data-ion-item-md-slot] > ion-icon[slot=start]+.item-interactive{margin-left:24px}[data-ion-item-md-slot] > ion-avatar[slot=start], [data-ion-item-md-slot] > ion-thumbnail[slot=start]{margin:8px 16px 8px 0}[data-ion-item-md-slot] > ion-avatar[slot=end], [data-ion-item-md-slot] > ion-thumbnail[slot=end]{margin:8px}[data-ion-item-md-host].item-label-floating [data-ion-item-md-slot] > [slot=end], [data-ion-item-md-host].item-label-stacked [data-ion-item-md-slot] > [slot=end]{margin-top:7px;margin-bottom:7px}[data-ion-item-md-slot] > .button-small-md{--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;--height:25px;font-size:12px}[data-ion-item-md-slot] > .button-small-md ion-icon[slot=icon-only]{padding:0}[data-ion-item-md-slot] > ion-avatar{width:40px;height:40px}[data-ion-item-md-slot] > ion-thumbnail{width:80px;height:80px}[data-ion-item-md-host].item-radio [data-ion-item-md-slot] > ion-label, [data-ion-item-md-host].item-toggle [data-ion-item-md-slot] > ion-label{margin-left:0}[data-ion-item-md-host].item-label-floating [data-ion-item-md-slot] > ion-input, [data-ion-item-md-host].item-label-floating [data-ion-item-md-slot] > ion-textarea, [data-ion-item-md-host].item-label-stacked [data-ion-item-md-slot] > ion-input, [data-ion-item-md-host].item-label-stacked [data-ion-item-md-slot] > ion-textarea{--padding-top:8px;--padding-bottom:8px;--padding-start:0}[data-ion-item-md-host]:not(.item-label) [data-ion-item-md-slot] > ion-input, [data-ion-item-md-host]:not(.item-label) [data-ion-item-md-slot] > ion-textarea{--padding-start:0}"}static get styleMode(){return"md"}}class m{constructor(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}tapClickChanged(t){this.enableListener(this,"ionActivated",t,this.parent),this.enableListener(this,"touchstart",!t),this.enableListener(this,"mousedown",!t)}ionActivated(t){this.addRipple(t.detail.x,t.detail.y)}touchStart(t){this.lastClick=c(t);const e=t.touches[0];this.addRipple(e.clientX,e.clientY)}mouseDown(t){const e=c(t);this.lastClick<e-1e3&&this.addRipple(t.pageX,t.pageY)}componentDidLoad(){this.tapClickChanged(this.tapClick)}addRipple(t,e){let i,s,n;this.queue.read(()=>{const a=this.el.getBoundingClientRect(),o=a.width,l=a.height;n=Math.min(2*Math.sqrt(o*o+l*l),b),i=t-a.left-n/2,s=e-a.top-n/2}),this.queue.write(()=>{const t=this.doc.createElement("div");t.classList.add("ripple-effect");const e=t.style,a=Math.max(g*Math.sqrt(n),y);e.top=s+"px",e.left=i+"px",e.width=n+"px",e.height=n+"px",e.animationDuration=a+"ms",(this.el.shadowRoot||this.el).appendChild(t),setTimeout(()=>t.remove(),a+50)})}render(){return null}static get is(){return"ion-ripple-effect"}static get encapsulation(){return"shadow"}static get properties(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}}static get listeners(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]}static get style(){return"[data-ion-ripple-effect-host]{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect[data-ion-ripple-effect]{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"}}const g=35,y=260,b=550;export{n as MyComponent,a as IonIcon,d as IonInput,p as IonItem,m as IonRippleEffect};