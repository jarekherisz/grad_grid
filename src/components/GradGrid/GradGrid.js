class GradGrid extends HTMLElement {
    constructor() {
        super();
        this.columns = [];
        this.observer = new MutationObserver(this.updateColumns.bind(this));
    }

    connectedCallback() {
        this.initColumns();
        this.render();
    }

    render() {

    }


    initColumns() {
        this.observer.observe(this, { childList: true, subtree: true });
    }

    updateColumns() {
        this.columns = Array.from(this.querySelectorAll('grad-column'));
        console.log('Columns updated:', this.columns);
        this.columns.forEach(column => {
            console.log('Column attributes:', {
                id: column.id,
                dataHeaderLabel: column.dataHeaderLabel,
                dataHeaderClass: column.dataHeaderClass,
                dataHeaderStyle: column.dataHeaderStyle,
                dataCellStyle: column.dataCellStyle,
                dataCellClass: column.dataCellClass,
                dataFooterStyle: column.dataFooterStyle,
                dataFooterClass: column.dataFooterClass,
            });
        });
    }
}

export default GradGrid;
