import GradGrid from "../GradGrid/GradGrid";

/**
 * Represents a column in a GradGrid.
 * @extends HTMLElement
 */
class GradColumn extends HTMLElement {

    /**
     * Indicates whether the column is initialized.
     * @type {boolean}
     */
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
        if (!(this.parentElement instanceof GradGrid)) {
            throw new TypeError(`Invalid parent element: Expected this.parentElement to be an instance of GradGrid, but got ${this.parentElement?.constructor?.name || 'undefined'} instead.`);
        }

        if (!this.hasAttribute('data-header-label')) {
            this.dataHeaderLabel = this.textContent.trim();
        }

        this.innerHTML = ``;
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