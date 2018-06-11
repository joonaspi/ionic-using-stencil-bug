/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function l(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,l)}s((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[0,o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};import{h}from"./mycomponent.core.js";function now(t){return t.timeStamp||Date.now()}function deferEvent(t){return debounceEvent(t,0)}function debounceEvent(t,e){var n=t._original||t;return{_original:t,emit:debounce(n.emit.bind(n),e)}}function debounce(t,e){var n;return void 0===e&&(e=0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(i))}}function createThemedClasses(t,e,n){var i={};return getClassList(n).forEach(function(n){i[n]=!0,t&&(i[n+"-"+t]=!0,e&&(i[n+"-"+e]=!0,i[n+"-"+t+"-"+e]=!0))}),i}function getElementClassMap(t){for(var e={},n=0;n<t.length;n++)e[t[n]]=!0;return e}function getClassList(t){return t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}function openURL(t,e,n,i){return __awaiter(this,void 0,void 0,function(){var o;return __generator(this,function(r){switch(r.label){case 0:return e&&"#"!==e[0]&&-1===e.indexOf("://")&&(o=t.document.querySelector("ion-router"))?(n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(e,i)];case 2:return[2,Promise.resolve()]}})})}var Input=function(){function t(){this.didBlurAfterEdit=!1,this.autocapitalize="none",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value=""}return t.prototype.debounceChanged=function(){this.ionChange=debounceEvent(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){var t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.emitStyle(),this.ionChange.emit({value:e})},t.prototype.componentWillLoad=function(){void 0===this.clearOnEdit&&"password"===this.type&&(this.clearOnEdit=!0)},t.prototype.componentDidLoad=function(){this.ionStyle=deferEvent(this.ionStyle),this.debounceChanged(),this.emitStyle(),this.ionInputDidLoad.emit()},t.prototype.componentDidUnload=function(){this.nativeInput=void 0,this.ionInputDidUnload.emit()},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,input:!0,"input-disabled":this.disabled,"input-has-value":this.hasValue(),"input-has-focus":this.hasFocus()})},t.prototype.onInput=function(t){t.target&&(this.value=t.target&&t.target.value||""),this.ionInput.emit(t)},t.prototype.onBlur=function(){this.focusChanged(),this.emitStyle(),this.ionBlur.emit()},t.prototype.onFocus=function(){this.focusChanged(),this.emitStyle(),this.ionFocus.emit()},t.prototype.focusChanged=function(){this.clearOnEdit&&!this.hasFocus()&&this.hasValue()&&(this.didBlurAfterEdit=!0)},t.prototype.inputKeydown=function(){this.checkClearOnEdit()},t.prototype.checkClearOnEdit=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)},t.prototype.clearTextInput=function(){this.value=""},t.prototype.hasFocus=function(){return this.nativeInput===document.activeElement},t.prototype.hasValue=function(){return""!==this.value},t.prototype.render=function(){var t=this,e=createThemedClasses(this.mode,this.color,"native-input");return[h("input",{ref:function(e){return t.nativeInput=e},"aria-disabled":!!this.disabled&&"true",accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,class:e,disabled:this.disabled,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,results:this.results,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:this.value,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.inputKeydown.bind(this)}),h("button",{type:"button",class:"input-clear-icon",hidden:!this.clearInput,onClick:this.clearTextInput.bind(this),onMouseDown:this.clearTextInput.bind(this)})]},Object.defineProperty(t,"is",{get:function(){return"ion-input"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"input"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{accept:{type:String,attr:"accept"},autocapitalize:{type:String,attr:"autocapitalize"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},autofocus:{type:Boolean,attr:"autofocus"},clearInput:{type:Boolean,attr:"clear-input"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},inputmode:{type:String,attr:"inputmode"},max:{type:String,attr:"max"},maxlength:{type:Number,attr:"maxlength"},min:{type:String,attr:"min"},minlength:{type:Number,attr:"minlength"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},pattern:{type:String,attr:"pattern"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},results:{type:Number,attr:"results"},size:{type:Number,attr:"size"},spellcheck:{type:Boolean,attr:"spellcheck"},step:{type:String,attr:"step"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidLoad",method:"ionInputDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidUnload",method:"ionInputDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".input{position:relative;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.item-input .input{position:static}.native-input{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;border-radius:0;display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:92%;width:calc(100% - 10px);border:0;background:0 0}.native-input:active,.native-input:focus{outline:0}.native-input[disabled]{opacity:.4}input.native-input:-webkit-autofill{background-color:transparent}.input-cover{left:0;top:0;position:absolute;width:100%;height:100%}.input[disabled] .input-cover{pointer-events:none}.item-input-has-focus .input-cover{display:none}.item-input-has-focus{pointer-events:none}.item-input-has-focus a,.item-input-has-focus button,.item-input-has-focus input{pointer-events:auto}[next-input]{padding:0;position:absolute;bottom:20px;width:1px;height:1px;border:0;background:0 0;pointer-events:none}.input-clear-icon{margin:0;padding:0;background-position:center;position:absolute;top:0;display:none;height:100%;background-repeat:no-repeat}.item-input-has-focus.item-input-has-value .input-clear-icon{display:block}.native-input-ios{margin:11px 8px 11px 0;padding:0;width:calc(100% - 8px);font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif;font-size:inherit}.native-input-ios::-moz-placeholder{color:var(--ion-placeholder-text-ios-color,var(--ion-placeholder-text-color,#999))}.native-input-ios:-ms-input-placeholder{color:var(--ion-placeholder-text-ios-color,var(--ion-placeholder-text-color,#999))}.native-input-ios::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-ios-color,var(--ion-placeholder-text-color,#999))}.input-ios .inset-input{padding:5.5px 8px;margin:5.5px 16px 5.5px 0}.label-ios+.input .native-input,.label-ios+.input+.cloned-input{margin-left:16px}.item-ios.item-label-floating .native-input,.item-ios.item-label-stacked .native-input{margin-left:0;margin-top:8px;margin-bottom:8px;width:calc(100% - 8px)}.item-ios.item-label-floating .label-ios+.input+.cloned-input,.item-ios.item-label-stacked .label-ios+.input+.cloned-input{margin-left:0}.input-ios[clear-input]{position:relative}.input-ios[clear-input] .native-input{padding-right:46px}.input-ios .input-clear-icon{right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-text-ios-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");width:30px;background-color:transparent;background-size:18px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),Item=function(){function t(){this.itemStyles={},this.button=!1,this.disabled=!1}return t.prototype.itemStyle=function(t){t.stopPropagation();for(var e=t.target.tagName,n=t.detail,i=Object.keys(t.detail),o={},r=this.itemStyles[e]||{},a=!1,l=0,s=i;l<s.length;l++){var u=s[l],c="item-"+u,p=n[u];p!==r[c]&&(a=!0),o[c]=p}a&&(this.itemStyles[e]=o,this.el.forceUpdate())},t.prototype.componentDidLoad=function(){for(var t=this.el.querySelectorAll("ion-button"),e=0;e<t.length;e++)t[e].size||(t[e].size="small")},t.prototype.render=function(){var t=this,e={};for(var n in this.itemStyles)Object.assign(e,this.itemStyles[n]);var i,o=!!(this.href||this.el.onclick||this.button),r=o?this.href?"a":"button":"div",a="button"===r?{type:"button"}:{href:this.href},l=null!=this.detail?this.detail:"ios"===this.mode&&o,s=Object.assign({},e,createThemedClasses(this.mode,this.color,"item"),getElementClassMap(this.el.classList),((i={"item-disabled":this.disabled,"item-detail-push":l})["item-lines-"+this.lines]=!!this.lines,i["item-"+this.mode+"-lines-"+this.lines]=!!this.lines,i));return h(r,Object.assign({},a,{class:s,onClick:function(e){return openURL(t.win,t.href,e,t.routerDirection)}}),h("slot",{name:"start"}),h("div",{class:"item-inner"},h("div",{class:"input-wrapper"},h("slot",null)),h("slot",{name:"end"})),o&&"md"===this.mode&&h("ion-ripple-effect",{tapClick:!0}))},Object.defineProperty(t,"is",{get:function(){return"ion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionStyle",method:"itemStyle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block}.item{border-radius:0;margin:0;padding:0;text-align:initial;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:44px;border:0;outline:0;font-weight:400;line-height:normal;text-decoration:none;color:inherit}.item-inner{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-webkit-flex-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-webkit-align-items:inherit;-ms-flex-align:inherit;align-items:inherit;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0}.input-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-webkit-flex-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-webkit-align-items:inherit;-ms-flex-align:inherit;align-items:inherit;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis}ion-item-group{display:block}.input.item,[vertical-align-top]{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.item-cover{left:0;top:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer}.item-inner>ion-icon,.item>ion-icon{font-size:1.6em}.item .button{margin:0}.item-disabled{cursor:default;opacity:.4;pointer-events:none}.item-ios{padding-left:16px;padding-left:calc(constant(safe-area-inset-left) + 16px);padding-left:calc(env(safe-area-inset-left) + 16px);border-radius:0;position:relative;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif;font-size:17px;color:var(--ion-item-ios-text-color,var(--ion-item-text-color,var(--ion-text-color,#000)));background-color:var(--ion-item-ios-background-color,var(--ion-background-ios-color,var(--ion-background-color,#fff)));-webkit-transition:background-color .2s linear;transition:background-color .2s linear}.item-ios.activated{background-color:var(--ion-item-ios-background-color-active,var(--ion-item-background-color-active,#d9d9d9));-webkit-transition-duration:0s;transition-duration:0s}.item-ios h1{margin:0 0 2px;font-size:24px;font-weight:400}.item-ios h2{margin:0 0 2px;font-size:17px;font-weight:400}.item-ios h3,.item-ios h4,.item-ios h5,.item-ios h6{margin:0 0 3px;font-size:14px;font-weight:400;line-height:normal}.item-ios p{margin:0 0 2px;overflow:inherit;font-size:14px;line-height:normal;text-overflow:inherit;color:var(--ion-text-ios-color-step-600,var(--ion-text-color-step-600,#999))}.item-ios h2:last-child,.item-ios h3:last-child,.item-ios h4:last-child,.item-ios h5:last-child,.item-ios h6:last-child,.item-ios p:last-child{margin-bottom:0}.item-ios .item-inner{padding-right:8px}\@media screen and (orientation:landscape){.item-ios .item-inner{padding-right:calc(constant(safe-area-inset-right) + 8px);padding-right:calc(env(safe-area-inset-right) + 8px)}}.item-ios,.item-ios .item-inner{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-ios-border-color,var(--ion-item-border-color,#c8c7cc))}.item-ios .item-inner{border-bottom-width:.55px}.item-ios-lines-full,.item-ios-lines-inset .item-inner{border-bottom-width:.55px}.item-ios-lines-full .item-inner,.item-ios-lines-inset,.item-ios-lines-none,.item-ios-lines-none .item-inner{border-bottom-width:0}.item-ios [slot=start]{margin:8px 16px 8px 0}.item-ios [slot=end]{margin-left:8px;margin-right:8px}.item-ios>ion-icon[slot=end],.item-ios>ion-icon[slot=start]{margin-left:0;margin-top:9px;margin-bottom:8px}.item-ios.item-label-floating [slot=end],.item-ios.item-label-stacked [slot=end]{margin-top:6px;margin-bottom:6px}.item-ios .button-small-ios{padding:0 .5em;height:24px;font-size:13px}.item-ios .button-small-ios ion-icon[slot=icon-only]{padding:0 1px}.item-ios ion-avatar{width:36px;height:36px}.item-ios ion-thumbnail{width:56px;height:56px}.item-ios ion-avatar[slot=end],.item-ios ion-thumbnail[slot=end]{margin:8px}.item-ios.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-item-ios-border-color,%20var(--ion-item-border-color,%20%23c8c7cc))'/></svg>\");padding-right:32px;background-position:right 14px center;background-position:right calc(14px + constant(safe-area-inset-right)) center;background-position:right calc(14px + env(safe-area-inset-right)) center;background-repeat:no-repeat;background-size:14px 14px}.item-ios-primary{border-bottom-color:var(--ion-color-ios-primary-shade,var(--ion-color-primary-shade,#3171e0));color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.item-ios-primary .item-inner{border-bottom-color:var(--ion-color-ios-primary-shade,var(--ion-color-primary-shade,#3171e0))}.item-ios-primary p{color:var(--ion-color-ios-primary-contrast,var(--ion-color-primary-contrast,#fff))}.item-ios-primary.activated{background-color:var(--ion-color-ios-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.item-ios-primary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-primary-shade,%20var(--ion-color-primary-shade,%20%233171e0))'/></svg>\")}.item-ios-secondary{border-bottom-color:var(--ion-color-ios-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc));color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.item-ios-secondary .item-inner{border-bottom-color:var(--ion-color-ios-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc))}.item-ios-secondary p{color:var(--ion-color-ios-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.item-ios-secondary.activated{background-color:var(--ion-color-ios-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.item-ios-secondary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-secondary-shade,%20var(--ion-color-secondary-shade,%20%230bb8cc))'/></svg>\")}.item-ios-tertiary{border-bottom-color:var(--ion-color-ios-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0));color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff))}.item-ios-tertiary .item-inner{border-bottom-color:var(--ion-color-ios-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0))}.item-ios-tertiary p{color:var(--ion-color-ios-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.item-ios-tertiary.activated{background-color:var(--ion-color-ios-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.item-ios-tertiary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-tertiary-shade,%20var(--ion-color-tertiary-shade,%20%23633ce0))'/></svg>\")}.item-ios-success{border-bottom-color:var(--ion-color-ios-success-shade,var(--ion-color-success-shade,#0ec254));color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.item-ios-success .item-inner{border-bottom-color:var(--ion-color-ios-success-shade,var(--ion-color-success-shade,#0ec254))}.item-ios-success p{color:var(--ion-color-ios-success-contrast,var(--ion-color-success-contrast,#fff))}.item-ios-success.activated{background-color:var(--ion-color-ios-success-tint,var(--ion-color-success-tint,#28e070))}.item-ios-success.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-success-shade,%20var(--ion-color-success-shade,%20%230ec254))'/></svg>\")}.item-ios-warning{border-bottom-color:var(--ion-color-ios-warning-shade,var(--ion-color-warning-shade,#e0b500));color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#fff));background-color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.item-ios-warning .item-inner{border-bottom-color:var(--ion-color-ios-warning-shade,var(--ion-color-warning-shade,#e0b500))}.item-ios-warning p{color:var(--ion-color-ios-warning-contrast,var(--ion-color-warning-contrast,#fff))}.item-ios-warning.activated{background-color:var(--ion-color-ios-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.item-ios-warning.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-warning-shade,%20var(--ion-color-warning-shade,%20%23e0b500))'/></svg>\")}.item-ios-danger{border-bottom-color:var(--ion-color-ios-danger-shade,var(--ion-color-danger-shade,#d33939));color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141))}.item-ios-danger .item-inner{border-bottom-color:var(--ion-color-ios-danger-shade,var(--ion-color-danger-shade,#d33939))}.item-ios-danger p{color:var(--ion-color-ios-danger-contrast,var(--ion-color-danger-contrast,#fff))}.item-ios-danger.activated{background-color:var(--ion-color-ios-danger-tint,var(--ion-color-danger-tint,#f25454))}.item-ios-danger.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-danger-shade,%20var(--ion-color-danger-shade,%20%23d33939))'/></svg>\")}.item-ios-light{border-bottom-color:var(--ion-color-ios-light-shade,var(--ion-color-light-shade,#d7d8da));color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.item-ios-light .item-inner{border-bottom-color:var(--ion-color-ios-light-shade,var(--ion-color-light-shade,#d7d8da))}.item-ios-light p{color:var(--ion-color-ios-light-contrast,var(--ion-color-light-contrast,#000))}.item-ios-light.activated{background-color:var(--ion-color-ios-light-tint,var(--ion-color-light-tint,#f5f6f9))}.item-ios-light.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-light-shade,%20var(--ion-color-light-shade,%20%23d7d8da))'/></svg>\")}.item-ios-medium{border-bottom-color:var(--ion-color-ios-medium-shade,var(--ion-color-medium-shade,#86888f));color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#fff));background-color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.item-ios-medium .item-inner{border-bottom-color:var(--ion-color-ios-medium-shade,var(--ion-color-medium-shade,#86888f))}.item-ios-medium p{color:var(--ion-color-ios-medium-contrast,var(--ion-color-medium-contrast,#fff))}.item-ios-medium.activated{background-color:var(--ion-color-ios-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.item-ios-medium.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-medium-shade,%20var(--ion-color-medium-shade,%20%2386888f))'/></svg>\")}.item-ios-dark{border-bottom-color:var(--ion-color-ios-dark-shade,var(--ion-color-dark-shade,#1e2023));color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.item-ios-dark .item-inner{border-bottom-color:var(--ion-color-ios-dark-shade,var(--ion-color-dark-shade,#1e2023))}.item-ios-dark p{color:var(--ion-color-ios-dark-contrast,var(--ion-color-dark-contrast,#fff))}.item-ios-dark.activated{background-color:var(--ion-color-ios-dark-tint,var(--ion-color-dark-tint,#383a3e))}.item-ios-dark.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-dark-shade,%20var(--ion-color-dark-shade,%20%231e2023))'/></svg>\")}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),Label=function(){function t(){}return t.prototype.getText=function(){return this.el.textContent||""},t.prototype.componentDidLoad=function(){this.positionChanged()},t.prototype.positionChanged=function(){var t,e=this.position;return this.ionStyle.emit(((t={})["label-"+e]=!!e,t))},t.prototype.hostData=function(){var t,e=this.position;return{class:(t={},t["label-"+e]=!!e,t["label-"+this.mode+"-"+e]=!!e,t)}},Object.defineProperty(t,"is",{get:function(){return"ion-label"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"label"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},getText:{method:!0},mode:{type:String,attr:"mode"},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-label{margin:0;display:block;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-input ion-label{-webkit-box-flex:initial;-webkit-flex:initial;-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}[text-wrap] ion-label{white-space:normal}.label-fixed{-webkit-box-flex:0;-webkit-flex:0 0 100px;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.item-label-floating ion-label,.item-label-stacked ion-label{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-floating,.label-stacked{margin-bottom:0}.item-label-floating .input-wrapper,.item-label-stacked .input-wrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.item-label-floating ion-select,.item-label-stacked ion-select{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;max-width:100%}.label-ios{margin:11px 8px 11px 0;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif}[text-wrap] .label-ios{font-size:14px;line-height:1.5}.label-ios-stacked{margin-bottom:4px;font-size:12px}.label-ios-floating{margin-bottom:0;-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out,-webkit-transform 150ms ease-in-out}.item-input-has-focus .label-ios-floating,.item-input-has-value .label-ios-floating{-webkit-transform:translate3d(0,0,0) scale(.8);transform:translate3d(0,0,0) scale(.8)}.item-interactive .label-ios-primary,.label-ios-primary{color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.item-interactive .label-ios-secondary,.label-ios-secondary{color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.item-interactive .label-ios-tertiary,.label-ios-tertiary{color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff))}.item-interactive .label-ios-success,.label-ios-success{color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.item-interactive .label-ios-warning,.label-ios-warning{color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.item-interactive .label-ios-danger,.label-ios-danger{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141))}.item-interactive .label-ios-light,.label-ios-light{color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.item-interactive .label-ios-medium,.label-ios-medium{color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.item-interactive .label-ios-dark,.label-ios-dark{color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),RippleEffect=function(){function t(){this.lastClick=-1e4,this.tapClick=!1}return t.prototype.tapClickChanged=function(t){this.enableListener(this,"parent:ionActivated",t),this.enableListener(this,"touchstart",!t),this.enableListener(this,"mousedown",!t)},t.prototype.ionActivated=function(t){this.addRipple(t.detail.x,t.detail.y)},t.prototype.touchStart=function(t){this.lastClick=now(t);var e=t.touches[0];this.addRipple(e.clientX,e.clientY)},t.prototype.mouseDown=function(t){var e=now(t);this.lastClick<e-1e3&&this.addRipple(t.pageX,t.pageY)},t.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},t.prototype.addRipple=function(t,e){var n,i,o,r=this;this.queue.read(function(){var a=r.el.getBoundingClientRect(),l=a.width,s=a.height;o=Math.min(2*Math.sqrt(l*l+s*s),MAX_RIPPLE_DIAMETER),n=t-a.left-o/2,i=e-a.top-o/2}),this.queue.write(function(){var t=r.doc.createElement("div");t.classList.add("ripple-effect");var e=t.style,a=Math.max(RIPPLE_FACTOR*Math.sqrt(o),MIN_RIPPLE_DURATION);e.top=i+"px",e.left=n+"px",e.width=o+"px",e.height=o+"px",e.animationDuration=a+"ms",r.el.appendChild(t),setTimeout(function(){return t.remove()},a+50)})},Object.defineProperty(t,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"parent:ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-ripple-effect{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:var(--ion-ripple-background-color,#000);opacity:0;will-change:transform,opacity;pointer-events:none;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;contain:strict}\@-webkit-keyframes rippleAnimation{0%{opacity:.2;-webkit-transform:scale(.1);transform:scale(.1)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}\@keyframes rippleAnimation{0%{opacity:.2;-webkit-transform:scale(.1);transform:scale(.1)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}"},enumerable:!0,configurable:!0}),t}(),RIPPLE_FACTOR=35,MIN_RIPPLE_DURATION=260,MAX_RIPPLE_DIAMETER=550;export{Input as IonInput,Item as IonItem,Label as IonLabel,RippleEffect as IonRippleEffect};