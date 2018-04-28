class PolymerStarterApp extends Polymer.Element {
    static get is() {
        return 'polymer-starter-app';
    }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'polymer-starter-app'
            },
            loading: {
                value: true
            },
            window_width: {
                type: Number,
                value: 0
            }
        };
    }
    static get observers() {
        return [
            '_routeChanged(route.*)',
            '_viewChanged(routeData.view)'
        ]
    }
    json(data) {
        console.log(data)
        return JSON.stringify(data);
    }
    ready() {
        super.ready();
        console.log('polymer.app ready.');

        if (!this.route.path) {
            this.set('route.path', '/home-page');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('resize', this._ResizeHandler);
    }
    _routeChanged(changeRecord) {
        console.log('routeChanged ', changeRecord)
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 300);
    }
    _viewChanged(view) {
        console.log('views ', view)
    }
    _ResizeHandler() {
        //console.log(window.innerWidth);
        if (window.innerWidth < 901) { // min-with resize
            console.log('window set size = 901 \n')
            this.window_width = window.innerWidth;
        }
    }
}
window.customElements.define(PolymerStarterApp.is, PolymerStarterApp);