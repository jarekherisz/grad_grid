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
        this.render();

        const mutationObserver = (mutationList, observer) => {
            console.log("mutationObserver start", mutationList);

            mutationList.forEach(mutation => {
                mutation.removedNodes.forEach(node => {
                    if (node instanceof GradColumn) {
                        this.removeColumn(node);
                    }
                });

                mutationList.forEach(mutation => {
                        mutation.addedNodes.forEach(node => {
                            if (node instanceof GradColumn) {
                                this.initColumn(node);
                            }
                        });
                });
                
            });
        };

        this.mutationObserver = new MutationObserver(mutationObserver);
        this.mutationObserver.observe(this, {childList: true});


        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].tagName.toLowerCase() === 'grad-column') {
                this.children[i].addEventListener('init-column', (event) => {
                    this.initColumn(event.detail.column);
                });
            }
        }
    }

    disconnectedCallback() {
        console.log('GradGrid disconnected callback');
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

                column.addEventListener('column-updated', this.updateColumn);

                let th = column.renderHeaderCell();
                this.theadRow.appendChild(th);
            }
        }
    }

    removeColumn(columnToRemove) {
        // Sprawdzanie, czy podana kolumna znajduje się w this.columns
        const index = this.columns.indexOf(columnToRemove);
        if (index !== -1) {
            // Usuwanie kolumny z listy this.columns
            this.columns.splice(index, 1);

            // Usuwanie odpowiadającego elementu <th> z <thead>
            // Zakładając, że kolumna ma właściwość `id`, która jest używana do identyfikacji elementu <th>
            const th = this.theadRow.querySelector(`th[data-id="${columnToRemove.id}"]`);
            if (th) {
                this.theadRow.removeChild(th);
            }
        }
    }


    /**
     * @param event
     * @returns {void}
     */
    updateColumn(event) {
        const { column, attributeName, oldValue, newValue } = event.detail;

        column.renderHeaderCell();
    }

}

export default GradGrid;
