# ionic-using-stencil-bug

This repository is a Ionic project that will utilise a component library made with Stencil. The component library internally uses ionic/core to provide buttons, inputs etc. to form more complex components.

Steps to demonstrate the bug mentioned in https://github.com/ionic-team/stencil/issues/969.

1. Clone this repository & npm install
2. Notice that the compiled Web Components are already placed in /src/assets/
3. See src/pages/home.html page how it contains a Web Component and also usage of <ion-input>
4. Run ionic serve

----------------------------------------------

Which will render the following showcasing the problem:

Interesting part of the problem:
5. Edit /src/index.html by removing "<script src='assets/mycomponent.js'></script>"
6. The page will refresh and now the bug does not occur: 

