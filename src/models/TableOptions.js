import * as console from "node:console";

/**
 * Class representing the options for a table.
 */
export class TableOptions {


    /**
     * Create TableOptions.
     * @param {Object} options - The configuration options.
     */
    constructor(options = {}) {
        this.pageList = [10, 25, 50, 100];
        this.pageNumber = 1;
        this.pageSize = 10;
        this.pagination = false;
        this.debug = true;
        this._headerStyle = null;
        this.headerClass = null;
        this.bodyStyle = null;
        this.bodyClass = null;
        this.footerStyle = null;
        this.footerClass = null;

        this.setOptions(options);
    }


    /**
     * Set multiple options.
     * @param {Object} options - The configuration options.
     */
    setOptions(options) {
        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                this[key] = options[key];
            }
        }
    }

    /**
     * Get the debug setting.
     * @return {boolean} The debug setting.
     */
    get debug() {
        return this._debug;
    }

    /**
     * Set the debug setting.
     * @param {boolean} value - The debug setting.
     * @throws Will throw an error if the value is not a boolean.
     */
    set debug(value) {
        if (typeof value !== 'boolean') {
            throw new Error("Invalid type for debug. Expected boolean.");
        }
        this._debug = value;
    }


    /**
     * Get the page list.
     * @return {Array} The page list.
     */
    get pageList() {
        return this._pageList;
    }

    /**
     * Set the page list.
     * @param {Array} value - The page list.
     * @throws Will throw an error if the value is not an array.
     */
    set pageList(value) {
        if (!Array.isArray(value)) {
            console.log(value);
            throw new Error("Invalid type for pageList. Expected Array.");
        }
        this._pageList = value;
    }

    /**
     * Get the page number.
     * @return {number} The page number.
     */
    get pageNumber() {
        return this._pageNumber;
    }

    /**
     * Set the page number.
     * @param {number} value - The page number.
     * @throws Will throw an error if the value is not a number.
     */
    set pageNumber(value) {
        if (typeof value !== 'number') {
            throw new Error("Invalid type for pageNumber. Expected number.");
        }
        this._pageNumber = value;
    }

    /**
     * Get the page size.
     * @return {number} The page size.
     */
    get pageSize() {
        return this._pageSize;
    }

    /**
     * Set the page size.
     * @param {number} value - The page size.
     * @throws Will throw an error if the value is not a number.
     */
    set pageSize(value) {
        if (typeof value !== 'number') {
            throw new Error("Invalid type for pageSize. Expected number.");
        }
        this._pageSize = value;
    }

    /**
     * Get the pagination setting.
     * @return {boolean} The pagination setting.
     */
    get pagination() {
        return this._pagination;
    }

    /**
     * Set the pagination setting.
     * @param {boolean} value - The pagination setting.
     * @throws Will throw an error if the value is not a boolean.
     */
    set pagination(value) {
        if (typeof value !== 'boolean') {
            throw new Error("Invalid type for pagination. Expected boolean.");
        }
        this._pagination = value;
    }
}
