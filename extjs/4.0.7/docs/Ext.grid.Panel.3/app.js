/*global Ext:false */
Ext.onReady(function () {
    var itemsPerPage = 2; // set the number of items you want per page
    var store = Ext.create('Ext.data.Store', {
        id: 'simpsonsStore',
        autoLoad: false,
        fields: ['name', 'email', 'phone'],
        pageSize: itemsPerPage, // items per page
        proxy: {
            type: 'ajax',
            url: 'pagingstore.js', // url that will load data with respect to start and limit params
            reader: {
                type: 'json',
                root: 'items',
                totalProperty: 'total'
            }
        }
    });

    // specify the page you want to load
    store.loadPage(1);

    Ext.create('Ext.grid.Panel', {
        title: 'Simpsons',
        store: store,
        columns: [{
            header: 'Name',
            dataIndex: 'name'
        }, {
            header: 'Email',
            dataIndex: 'email',
            flex: 1
        }, {
            header: 'Phone',
            dataIndex: 'phone'
        }],
        width: 400,
        height: 125,
        dockedItems: [{
            xtype: 'pagingtoolbar',
            store: store, // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        }],
        renderTo: Ext.getBody()
    });
});
