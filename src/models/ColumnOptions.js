/**
 * Class representing the options for a column.
 */
class ColumnOptions {
    /**
     * Create ColumnOptions.
     * @param {Object} options - The configuration options.
     */
    constructor(options = {}) {
        this.align = 'left';
        this.bodyCellStyle = null;
        this.bodyCellClass = null;
        this.headerCellStyle = null;
        this.headerCellClass = null;
        this.footerCellStyle = null;
        this.footerCellClass = null;

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
     * Get the alignment setting.
     * @return {string} The alignment setting.
     */
    get align() {
        return this._align;
    }

    /**
     * Set the alignment setting.
     * @param {string} value - The alignment setting.
     * @throws Will throw an error if the value is not a string.
     */
    set align(value) {
        if (typeof value !== 'string') {
            throw new Error("Invalid type for align. Expected string.");
        }
        this._align = value;
    }
}