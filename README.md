# ionic-using-stencil-bug

This repository is a Ionic project that will utilise a component library made with Stencil. The component library internally uses ionic/core to provide buttons, inputs etc. to form more complex components.

Steps to demonstrate the bug mentioned in https://github.com/ionic-team/stencil/issues/969.

1. Clone this repository & npm install
2. Notice that the compiled Web Components are already placed in /src/assets/
3. Run ionic serve

/src/pages/home/home.html contains the following:

<ion-content padding>
  <h2>double input bug</h2>
  <p>
    below is a Web Component working OK
  </p>
  <my-component></my-component>

  <p>
    And here is a Ionic input showing as double
  </p>
  <ion-list>
    <ion-item>
      <ion-label color="primary">This should also be only once</ion-label>
      <ion-input placeholder="One input only?"></ion-input>
    </ion-item>
  </ion-list>
</ion-content>

----------------------------------------------

Which will render the following showcasing the problem:

Interesting part of the problem:
4. Edit /src/index.html by removing "<script src='assets/mycomponent.js'></script>"
5. The page will refresh and now the bug does not occur: 

