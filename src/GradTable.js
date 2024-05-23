import log from 'loglevel';
import {DataAttributesMapper} from "./Utils/DataAttributesMapper";
import {TableConfig} from "./ConfigClasses/TableConfig";

export default class GradTable  {

    constructor(table, tableConfig = {}) {

        if (typeof table !== 'object') {
            throw new Error("The first argument must be an object representing the table.");
        }

        // Store the table object.
        this._table = table;
        // Create a deep copy of the table object to preserve its initial state.
        // This copy can be used to restore the initial state or to compare changes.
        this._table = JSON.parse(JSON.stringify(table));

        this.initConfig(tableConfig);

         if (this._config.debug) {
            log.setLevel('debug');
         } else {
            log.setLevel('silent');
        }

        // Setting log level based on debug option
        log.debug('GradTable initialized with tableConfig:', this._config);
    }

    initConfig(tableConfig = {}) {


        // Map HTML data attributes to tableOptions using DataAttributesMapper
        const htmlOptions = DataAttributesMapper.map(this._table);

        // If tableOptions is not an instance of TableOptions, create a new TableOptions object
        if (!(tableConfig instanceof TableConfig)) {
            this._config = new TableConfig(tableConfig);
        }


        // Merging HTML tableOptions with user-provided tableOptions
        this._config.setConfig(htmlOptions);
    }

    setTableConfig(tableConfig = {}) {
        this._config.setConfig(tableConfig);
    }

    get pageList() {
        return this._config.pageList;
    }

    set pageList(value) {
        this._config.pageList = value;
    }

    get pageNumber() {
        return this._config.pageNumber;
    }

    set pageNumber(value) {
        this._config.pageNumber = value;
    }




}
