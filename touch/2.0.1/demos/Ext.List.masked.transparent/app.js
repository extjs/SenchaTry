Ext.application({
    launch: function () {
        var myList = Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{name}',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'Toggle transparent',
                    handler: function () {
                        var mask = myList.getMasked();
                        mask.setTransparent(!mask.getTransparent());
                        mask.setMessage('transparent = ' + mask.getTransparent());
                        myList.setMasked(mask);
                    } // handler
                }] // items (toolbar)
            }], // items (list)
            masked: {
                xtype: 'loadmask',
                transparent: true,
                message: 'transparent = true'
            }, // masked
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
            } // store
        }); // create()
    } // launch
}); // application()
