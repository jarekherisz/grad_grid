import log from 'loglevel';
import {TableOptions} from "./models/TableOptions";
import {DataAttributesMapper} from "./utils/DataAttributesMapper";

export default class GradTable {
    /**
     * Create a GradTable.
     * @param {Object} table - The table object representing the HTML table element.
     * @param {Object} [tableOptions={}] - The configuration tableOptions.
     * @throws Will throw an error if the first argument is not an object.
     */
    constructor(table, tableOptions = {}) {
        if (typeof table !== 'object') {
            throw new Error("The first argument must be an object representing the table.");
        }

        // Store the table object.
        this.table = table;
        // Create a deep copy of the table object to preserve its initial state.
        // This copy can be used to restore the initial state or to compare changes.
        this._table = JSON.parse(JSON.stringify(this.table));


        this.initTableOptions(tableOptions);


        if (this.tableOptions.debug) {
            log.setLevel('debug');
        } else {
            log.setLevel('silent');
        }

        // Setting log level based on debug option
        log.debug('GradTable initialized with tableOptions:', this.tableOptions);
    }

    initTableOptions(tableOptions = {}) {
        // Map HTML data attributes to tableOptions using DataAttributesMapper
        const htmlOptions = DataAttributesMapper.map(this.table);

        // If tableOptions is not an instance of TableOptions, create a new TableOptions object
        if (!(tableOptions instanceof TableOptions)) {
            this.tableOptions = new TableOptions(tableOptions);
        }

        // Merging HTML tableOptions with user-provided tableOptions
        this.tableOptions.setOptions(htmlOptions);
    }


}
