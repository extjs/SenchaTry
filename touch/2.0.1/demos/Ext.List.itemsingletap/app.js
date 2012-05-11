/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.List', {
            fullscreen: true,
            store: {
                fields: ['name'],
                data: [{
                    name: 'Red'
                }, {
                    name: 'Orange'
                }, {
                    name: 'Yellow'
                }, {
                    name: 'Green'
                }, {
                    name: 'Blue'
                }] // data
            }, // store
            itemTpl: '{name}',
            listeners: {
                itemsingletap: function (list, idx, target, record, evt) {
                    Ext.Msg.alert('itemsingletap', record.data.name);
                }, // itemsingletap
                itemdoubletap: function (list, idx, target, record, evt) {
                    Ext.Msg.alert('itemdoubletap', record.data.name);
                } // itemdoubletap
            } // listeners
        }); // create()
    } // launch
}); // application()
