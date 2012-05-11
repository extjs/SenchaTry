/*global Ext:false */
Ext.application({
    launch: function () {
        var myList = Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{name}',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'Toggle indicator',
                    handler: function () {
                        var mask = myList.getMasked();
                        mask.setIndicator(!mask.getIndicator());
                        mask.setMessage('indicator = ' + mask.getIndicator());
                        myList.setMasked(mask);
                    } // handler
                }] // items (toolbar)
            }], // items (list)
            masked: {
                xtype: 'loadmask',
                indicator: false,
                message: 'indicator = false'
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
