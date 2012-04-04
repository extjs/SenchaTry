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
                itemtaphold: function (list, idx, target, record, evt) {
                    Ext.Msg.alert('itemtaphold', record.data.name);
                }, // itemtaphold
                itemswipe: function (list, idx, target, record, evt) {
                    Ext.Msg.alert('itemswipe', record.data.name);
                } // itemswipe
            } // listeners
        }); // create()
    } // launch
}); // application()
