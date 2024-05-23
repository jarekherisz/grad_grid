import log from 'loglevel';
import {DataAttributesMapper} from "./Utils/DataAttributesMapper";
import {TableConfig} from "./ConfigClasses/TableConfig";

export default class GradTable  {

    _columns = [];

    constructor(table, tableConfig = {}, columnConfig = {}) {

        if (typeof table !== 'object') {
            throw new Error("The first argument must be an object representing the table.");
        }

        // Store the table object.
        this._table = table;
        // Create a deep copy of the table object to preserve its initial state.
        // This copy can be used to restore the initial state or to compare changes.
        this._tableCopy = table.cloneNode(true);

        this.initConfig(tableConfig);

         if (this._config.debug) {
            log.setLevel('debug');
         } else {
            log.setLevel('silent');
        }

        // Setting log level based on debug option
        log.debug('GradTable initialized with tableConfig:', this._config);

         this.initColumns(columnConfig);
    }

    initConfig(tableConfig = {}) {


        // Map HTML data attributes to tableOptions using DataAttributesMapper
        const htmlConfig = DataAttributesMapper.map(this._table);

        // If tableOptions is not an instance of TableOptions, create a new TableOptions object
        if (!(tableConfig instanceof TableConfig)) {
            this._config = new TableConfig({...tableConfig, ...htmlConfig});
        }else {
            // Merging HTML tableOptions with user-provided tableOptions
            this._config.setConfig(htmlConfig);
        }
    }

    initColumns(columnConfig = {}) {

        let thead = this._table.querySelector('thead');
        let headerCells  = []

        let rowspan="2"
        thead.querySelectorAll('tr').forEach((tr, i) => {
            let columnIndex = 0
            tr.querySelectorAll('th').forEach((th, j) => {
                let colspan = parseInt(th.getAttribute('colspan'), 10) || 1;
                let dataField = th.getAttribute('data-field')

                if (dataField !== null && dataField !== "") {
                    headerCells[columnIndex] = th;
                }
                columnIndex += colspan;
            })
        });

        console.log(headerCells);

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
