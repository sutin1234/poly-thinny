class NewQuotationRequest extends Polymer.Element {

    static get is() {
        return 'new-quotation-request';
    }
    static get properties() {
        return {

        };
    }
    constructor() {
        super();
    }
    ready() {
        super.ready();
    }

}

window.customElements.define(NewQuotationRequest.is, NewQuotationRequest);