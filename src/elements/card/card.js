class cardBox extends Polymer.Element {
    static get is() {
        return 'card-box';
    }
    static get properties() {
        return {
            video: {
                type: String,
                value: 'polymer-element'
            }
        };
    }
    ready() {
        super.ready();
        console.log('cardBox ready');
    }
    json(jsonData) {
        console.log(jsonData)
        return JSON.stringify(jsonData);
    }
}

window.customElements.define(cardBox.is, cardBox);