class GradGrid extends HTMLElement {

    container;
    containerTable;

    table;

    constructor() {
        super();
        this.columns = [];
        this.observer = new MutationObserver(this.updateColumns.bind(this));
    }

    connectedCallback() {
        console.log('Connected callback');
        this.render();
    }

    disconnectedCallback() {
        this.observer.disconnect();
        this.removeEventListener('column-updated', this.handleColumnUpdated.bind(this));
    }

    render() {
        this.initContainer();
        this.initTable();
        this.initColumns();
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


    initColumns() {
        this.observer.observe(this, { childList: true, subtree: true });
    }

    updateColumns() {
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
