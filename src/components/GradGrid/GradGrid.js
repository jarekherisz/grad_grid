import GradColumn from "../GradColumn/GradColumn";

class GradGrid extends HTMLElement {

    container;
    containerTable;

    table;
    thead;
    theadRow;

    constructor() {
        super();
        this.columns = [];
    }

    connectedCallback() {
        console.log('GradGrid connected callback');
        this.render();

        const mutationObserver = (mutationList, observer) => {
            console.log('Mutation observer 11111111111');
            for (const mutation of mutationList) {
                if (mutation.target instanceof GradColumn) {
                    this.initColumn(mutation.target);
                }
            }
        };
        this.mutationObserver = new MutationObserver(mutationObserver);
        this.mutationObserver.observe(this, {childList: true, subtree: true});
    }

    disconnectedCallback() {
        this.mutationObserver.disconnect();
    }

    render() {
        this.initContainer();
        this.initTable();
    }

    initContainer() {
        if (this.container === undefined) {
            this.container = document.createElement('div');
            this.container.classList.add('grad-grid-container');
            this.appendChild(this.container);
        }

        if (this.containerTable === undefined) {
            this.containerTable = document.createElement('div');
            this.containerTable.classList.add('grad-grid-table-container');
            this.container.appendChild(this.containerTable);
        }
    }

    getColumnById(id) {
        return this.columns.find(column => column.id === id);
    }

    initTable() {
        if (this.table === undefined) {
            this.table = document.createElement('table');
            this.table.classList.add('grad-grid-table');
            this.containerTable.appendChild(this.table);
        }

        if (this.thead === undefined) {
            this.thead = document.createElement('thead');
            this.table.appendChild(this.thead);
        }

        if (this.theadRow === undefined) {
            this.theadRow = document.createElement('tr');
            this.thead.appendChild(this.theadRow);
        }

    }


    /**
     * @param {GradColumn} column - Obiekt kolumny.
     * @returns {void}
     */
    initColumn(column) {
        if (!(column instanceof GradColumn)) {
            throw new TypeError('Argument must be an instance of GradColumn');
        }

        if (column.isInitialized) {
            if (this.getColumnById(column.id) === undefined) {
                this.columns.push(column);

                let th = column.renderHeaderCell();
                this.theadRow.appendChild(th);
            }
        }
    }


    /**
     * @param {GradColumn} column - Obiekt kolumny.
     * @returns {void}
     */
    updateColumn(column) {
        console.log('Update columns');
    }
}

export default GradGrid;
