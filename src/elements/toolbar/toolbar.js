class Toolbar extends Polymer.Element {
    static get is() {
        return 'toolbar-box';
    }
    static get observers() {
        return [

        ]
    }
    static get properties() {
        return {
            _width: {
                type: Number,
                notify: true,
                observers: [
                    'onWidthChanged(data)'
                ]
            },
            title: {
                type: String,
                value: 'Polymer, Angular, Ionic, Nodejs, MongoDB, Express, Firebase'
            },
            items: {
                type: Array,
                value: ['Angular5', 'Ionic3', 'Ionic Native', 'Polymer2', 'MongoDB', 'Full stack']
            },
            resizeWidth: {
                type: String,
                value: 0,
                notify: true
            },
            title: {
                type: String,
                value: 'สอนเขียนโปรแกรมขั้นสูง สไตล์ทินนี่เดฟ'
            }
        }
    }
    ready() {
        super.ready();
        console.log('toolbar ready.');
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('resize', this._ResizeHandler);
    }
    json(Objects) {
        return JSON.stringify(Objects)
    }
    prettyUrl(url) {
        return url.replace(/ /g, '-');
    }
    _ResizeHandler() {
        if (window.innerWidth < 901) { // min-with resize
            //console.log('window set size = 901')
            this.resizeWidth = window.innerWidth;
            this.title = '';
            console.log(this._width);
        }
    }
    ontoggle() {
        this.$.drawer.toggle();
    }
    quotationRequest() {
        //history.pushState({}, null, '/#/new-quotation-request');
        window.location.href = "/#/new-quotation-request";
        console.log('quotationRequest');
    }
    contact() {
        window.location.href = "/#/contact-us";
    }
    HomePage() {
        window.location.href = "/#/home-page";
    }
    onWidthChanged(data) {
        console.log('width changed')
    }



}

window.customElements.define(Toolbar.is, Toolbar);