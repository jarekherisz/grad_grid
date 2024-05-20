import GradColumn from "../GradColumn/GradColumn";

class GradGrid extends HTMLElement {

    container;
    containerTable;

    table;

    constructor() {
        super();
        this.columns = [];
    }

    connectedCallback() {
        console.log('Connected callback');
        this.render();

        let observer = new MutationObserver(function(mutations) {
            console.log('Mutations:', mutations);
            mutations.forEach(function(mutation) {
                console.log('Mutation:', mutation.target);
                if (mutation.target instanceof GradColumn) {

                    console.log('Column 000000', mutation.target.dataHeaderLabel);
                }
            });
        })

        observer.observe(this, { childList: true, subtree: true });
    }

    disconnectedCallback() {
        this.observer.disconnect();
    }

    render() {
        this.initContainer();
        this.initTable();
    }

    initContainer () {
        if(this.container === undefined) {
            this.container = document.createElement('div');
            this.container.classList.add('grad-grid-container');
            this.appendChild(this.container);
        }

        if(this.containerTable === undefined) {
            this.containerTable = document.createElement('div');
            this.containerTable.classList.add('grad-grid-table-container');
            this.container.appendChild(this.containerTable);
        }
    }

    initTable () {
        if(this.table === undefined) {
            this.table = document.createElement('table');
            this.table.classList.add('grad-grid-table');
            this.containerTable.appendChild(this.table);
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
        column.isInitialized = true;
    }



    updateColumn() {
        console.log('Update columns');

        const th = document.createElement('th');
        th.textContent = 'Header';
        this.table.appendChild(th);



        this.columns.forEach(column => {
            console.log('Column:', column);
        });
    }
}

export default GradGrid;
