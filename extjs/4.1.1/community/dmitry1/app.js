/*global Ext:false */
Ext.onReady(function () {
    // read Data Package guide http://docs.sencha.com/ext-js/4-0/#!/guide/data

    Ext.define("User", {
        extend: "Ext.data.Model",
        fields: [{
            name: "id",
            type: "int"
        }, {
            name: "name",
            mapping: 'name.name'
        }, {
            name: "descr",
            type: "string",
            mapping: 'description'
        }]
    });

    var data = [{
        id: 1,
        name: {
            name: "John"
        },
        description: "Fapfapfap"
    }, {
        id: 2,
        name: {
            name: "Danny"
        },
        description: "Boobooboo"
    }, {
        id: 3,
        name: {
            name: "Tom"
        },
        description: "Tralala"
    }, {
        id: 4,
        name: {
            name: "Jane"
        },
        description: "Ololo"
    }];

    // store with data
    var oStore = Ext.create('Ext.data.Store', {
        model: 'User',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json'
            }
        }
    });


    // and finally I have a grid panel
    Ext.create("Ext.grid.Panel", {
        columns: [{
            dataIndex: "id",
            header: "ID"
        }, {
            dataIndex: "name",
            header: "Name",
            // renderer: function(value){return value.name;}, 
            editor: "textfield"
        }, {
            dataIndex: "descr",
            header: "Description",
            flex: 1,
            editor: "htmleditor"
        }],
        plugins: [new Ext.grid.plugin.CellEditing({
            clicksToEdit: 2
        })],
        store: oStore,
        renderTo: 'center_div',
        listeners: {
            render: function () {
                this.store.loadRawData(data);
            }
        },
        tbar: Ext.create('Ext.Toolbar', {
            items: [' ', {
                xtype: 'radiofield',
                name: 'searchType',
                value: 'order_name',
                boxLabel: 'Order Name'
            }, '  &nbsp; &nbsp; ', {
                xtype: 'radiofield',
                name: 'searchType',
                value: 'order_no',
                boxLabel: 'Order No'
            }, '', {
                xtype: 'radiofield',
                name: 'searchType',
                value: 'status',
                boxLabel: 'Status'
            }, '=', {
                xtype: 'textfield',
                name: 'keyword',
                value: 'Keyword'
            }, '|', {
                xtype: 'datefield',
                labelWidth: 50,
                width: 200,
                name: 'order_from',
                fieldLabel: 'From ',
                //labelStyle : 'width:50px',
                value: new Date()
            }, '~', {
                xtype: 'datefield',
                name: 'order_to',
                fieldLabel: "To ",
                //labelStyle : 'width:50px',
                labelWidth: 30,
                width: 200,
                value: new Date()
            }, '|', {
                xtype: 'button',
                text: "Search"
            }]
        })
    });
});
