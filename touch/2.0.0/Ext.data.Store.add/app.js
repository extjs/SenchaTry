Ext.application({
    launch: function () {
        var myStore = Ext.create('Ext.data.Store', {
            storeId: 'MyStore',
            fields: ['txt']
        }); // create()
        
        Ext.create('Ext.List', {
            fullscreen: true,
            store: 'MyStore',
            itemTpl: '{txt}',
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                items: [{
                    text: 'Add item',
                    handler: function () {
                        var now = new Date(),
                            value = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
                        myStore.add({txt: value});
                    } // handler
                }] // items (titlebar)
            }] // items (list)
        }); // create()
    } // launch
}); // application()
