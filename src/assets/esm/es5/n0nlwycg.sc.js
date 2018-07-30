/*! Built with http://stenciljs.com */
import{a as createColorClasses}from"./chunk-a0898b87.js";var Label=function(){function e(){}return e.prototype.getText=function(){return this.el.textContent||""},e.prototype.componentDidLoad=function(){this.positionChanged()},e.prototype.positionChanged=function(){var e,t=this.position;this.ionStyle.emit(((e={label:!0})["label-"+t]=!!t,e))},e.prototype.hostData=function(){var e,t=this.position;return{class:Object.assign({},createColorClasses(this.color),(e={},e["label-"+t]=!!t,e))}},Object.defineProperty(e,"is",{get:function(){return"ion-label"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},getText:{method:!0},mode:{type:String,attr:"mode"},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-label-md-host]{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;margin:11px 8px 11px 0;font-family:var(--ion-font-family,inherit)}.ion-color[data-ion-label-md-host]{color:var(--ion-color-base)}[text-wrap][data-ion-label-md-host]{white-space:normal;font-size:14px;line-height:1.5}.item-interactive-disabled[data-ion-label-md-host], .item-interactive-disabled   [data-ion-label-md-host]{cursor:default;opacity:.3;pointer-events:none}.item-input[data-ion-label-md-host], .item-input   [data-ion-label-md-host]{-webkit-box-flex:initial;-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed[data-ion-label-md-host]{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating[data-ion-label-md-host], .label-stacked[data-ion-label-md-host]{-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%;margin-left:0;margin-bottom:0}.item-has-focus.label-floating[data-ion-label-md-host], .item-has-focus   .label-floating[data-ion-label-md-host], .item-has-value.label-floating[data-ion-label-md-host], .item-has-value   .label-floating[data-ion-label-md-host]{-webkit-transform:translate3d(0,0,0) scale(.8);transform:translate3d(0,0,0) scale(.8)}.item-interactive[data-ion-label-md-host], .item-interactive   [data-ion-label-md-host]{--ion-color-base:var(--ion-text-color-step-600, #999999)}.label-stacked[data-ion-label-md-host]{font-size:12px}.label-floating[data-ion-label-md-host]{-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out,-webkit-transform 150ms ease-in-out}.item-has-focus.label-floating[data-ion-label-md-host], .item-has-focus   .label-floating[data-ion-label-md-host], .item-has-focus.label-stacked[data-ion-label-md-host], .item-has-focus   .label-stacked[data-ion-label-md-host]{color:var(--ion-color-primary,#3880ff)}[data-ion-label-md-slot]  h1 {margin:0 0 2px;font-size:24px;font-weight:400}[data-ion-label-md-slot]  h2 {margin:2px 0;font-size:16px;font-weight:400}[data-ion-label-md-slot]  h3 , [data-ion-label-md-slot]  h4 , [data-ion-label-md-slot]  h5 , [data-ion-label-md-slot]  h6 {margin:2px 0;font-size:14px;font-weight:400;line-height:normal}[data-ion-label-md-slot]  p {margin:0 0 2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}[data-ion-label-md-slot] > p{color:var(--ion-text-color-step-400,#666)}[data-ion-label-md-host].ion-color[data-ion-label-md-slot] > p, .ion-color [data-ion-label-md-host][data-ion-label-md-slot] > p{color:inherit}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();export{Label as IonLabel};