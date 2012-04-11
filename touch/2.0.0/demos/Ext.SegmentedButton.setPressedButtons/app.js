Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'setPressedButtons( [0,2,3] )',
                    handler: function () {
                        Ext.getCmp('segBtn').setPressedButtons([0,2,3]);
                    } // handler
                }, {
                    text: 'setPressedButtons( [ ] )',
                    handler: function () {
                        Ext.getCmp('segBtn').setPressedButtons([]);
                    } // handler
                }] // items (toolbar)
            }, {
                xtype: 'segmentedbutton',
                id: 'segBtn',
                allowMultiple: true,
                style: 'padding: 20px;',
                items: [{
                    text: 'Red'
                }, {
                    text: 'Orange'
                }, {
                    text: 'Yellow'
                }, {
                    text: 'Green'
                }, {
                    text: 'Blue'
                }] // items (segmentedbutton)
            }] // items (panel)
        }); // create()
    } // launch
}); // application()
