import {AbstractConfig} from "./AbstractConfig";

/**
 * Class representing the ConfigClasses for a table.
 */
export class TableConfig extends AbstractConfig{
    constructor(config = {}) {
        super();
        this.setConfig(config);
    }

    /**
     * List of page sizes for pagination.
     * @type {number[]}
     * @default [10, 25, 50, 100]
     */
    pageList = [10, 25, 50, 100];

    /**
     * The initial page number when pagination is enabled.
     * @type {number}
     * @default 1
     */
    pageNumber = 1;

    /**
     * The initial page size when pagination is enabled.
     * @type {number}
     * @default 10
     */
    pageSize = 10;

    /**
     * Whether to enable pagination.
     * @type {boolean}
     * @default false
     */
    pagination = false;

    /**
     * Whether to enable debug mode.
     * @type {boolean}
     * @default true
     */
    debug = true;

    /**
     * Custom styles for the table header.
     * @type {Object|null}
     * @default null
     */
    headerStyle = null;

    /**
     * Custom CSS class for the table header.
     * @type {string|null}
     * @default null
     */
    headerClass = null;

    /**
     * Custom styles for the table body.
     * @type {Object|null}
     * @default null
     */
    bodyStyle = null;

    /**
     * Custom CSS class for the table body.
     * @type {string|null}
     * @default null
     */
    bodyClass = null;

    /**
     * Custom styles for the table footer.
     * @type {Object|null}
     * @default null
     */
    footerStyle = null;

    /**
     * Custom CSS class for the table footer.
     * @type {string|null}
     * @default null
     */
    footerClass = null;



}
