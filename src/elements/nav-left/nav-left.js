class NavList extends Polymer.Element {
    static get is() {
        return 'nav-list';
    }
    static get properties() {
        return {
            items: {
                type: Array,
                value: [{
                    playlistID: 'PL5tvtIKjTWEwRawby8O-6t1V1-x0Qa_Mb',
                    name: 'Angular2-CLI'
                }, {
                    playlistID: 'PL5tvtIKjTWEz8XxO7NJW4M7a7NYf1tq8q',
                    name: 'Ionic v2 Storage'
                }, {
                    playlistID: 'PL5tvtIKjTWEwfPJZYcJ9YZ24lQFWuBOnH',
                    name: 'Ionic v2 Online Course'
                }, {
                    playlistID: 'PL5tvtIKjTWEwv8Kto6DbMg7K7UDECCoSW',
                    name: 'Ionic v2 problem resolve'
                }, {
                    playlistID: 'PL5tvtIKjTWEzFd0_P7oEmx40glrD_VN50',
                    name: 'Firebase AngularFire2 Basic'
                }, ]
            }
        }
    }
}

window.customElements.define(NavList.is, NavList);