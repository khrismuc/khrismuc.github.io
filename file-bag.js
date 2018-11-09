window.customElements.whenDefined('file-bag')
    .then(() => console.log('Registered'))
    .then(() => console.log(window.customElements.get('file-bag')))
    .catch(console.error);
window.customElements.define('file-bag', class extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<strong>This is the custom file bag element</strong>`;
    }
});