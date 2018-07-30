// mycomponent: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './mycomponent.core.js';
import {
  Icon,
  Input,
  Item,
  Label,
  MyComponent,
  RippleEffect
} from './mycomponent.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    Icon,
    Input,
    Item,
    Label,
    MyComponent,
    RippleEffect
  ], opts);
}