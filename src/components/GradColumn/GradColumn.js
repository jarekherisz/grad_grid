class GradColumn extends HTMLElement {

    isInitialized = false;

    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
            'id',
            'data-header-label',
            'data-header-class',
            'data-header-style',
            'data-cell-style',
            'data-cell-class',
            'data-footer-style',
            'data-footer-class'
        ];
    }

    connectedCallback() {
        if (!this.hasAttribute('data-header-label')) {
            this.dataHeaderLabel = this.textContent.trim();
        }

        this.innerHTML = ``;
        //this.isInitialized = true;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue && this.isInitialized) {
            this.dispatchEvent(new CustomEvent('column-updated', {
                detail: { name, oldValue, newValue },
                bubbles: true,
                composed: true
            }));
        }
    }



    get id() {
        return this.getAttribute('id');
    }

    set id(value) {
        this.setAttribute('id', value);
    }

    get dataHeaderLabel() {
        return this.getAttribute('data-header-label');
    }

    set dataHeaderLabel(value) {
        this.setAttribute('data-header-label', value);
    }

    get dataHeaderClass() {
        return this.getAttribute('data-header-class');
    }

    set dataHeaderClass(value) {
        this.setAttribute('data-header-class', value);
    }

    get dataHeaderStyle() {
        return this.getAttribute('data-header-style');
    }

    set dataHeaderStyle(value) {
        this.setAttribute('data-header-style', value);
    }

    get dataCellStyle() {
        return this.getAttribute('data-cell-style');
    }

    set dataCellStyle(value) {
        this.setAttribute('data-cell-style', value);
    }

    get dataCellClass() {
        return this.getAttribute('data-cell-class');
    }

    set dataCellClass(value) {
        this.setAttribute('data-cell-class', value);
    }

    get dataFooterStyle() {
        return this.getAttribute('data-footer-style');
    }

    set dataFooterStyle(value) {
        this.setAttribute('data-footer-style', value);
    }

    get dataFooterClass() {
        return this.getAttribute('data-footer-class');
    }

    set dataFooterClass(value) {
        this.setAttribute('data-footer-class', value);
    }
}

export default GradColumn;