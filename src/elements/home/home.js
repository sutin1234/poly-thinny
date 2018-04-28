 class HomePage extends Polymer.Element {

     static get is() {
         return 'home-page';
     }

     static get properties() {
         return {

         };
     }
     ready() {
         super.ready();
     }

 }

 window.customElements.define(HomePage.is, HomePage);