Ext.define('ExtMVC.store.Books', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Book',
    autoLoad: true,
    proxy: {
        // load using HTTP
        type: 'ajax',
        url: 'data/sheldon.xml',
        // the return will be XML, so lets set up a reader
        reader: {
            type: 'xml',
            // records will have an "Item" tag
            record: 'Item',
            idProperty: 'ASIN',
            totalRecords: '@total'
        }
    }
});
