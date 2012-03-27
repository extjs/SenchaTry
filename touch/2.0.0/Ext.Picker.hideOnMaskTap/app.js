Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'hideOnMaskTap: true',
                    handler: function () {
                        picker.setHideOnMaskTap(true);
                        picker.show();
                        Ext.getCmp('slot1').setTitle('hideOnMaskTap = true');
                    } // handler
                }, {
                    text: 'hideOnMaskTap: false',
                    handler: function () {
                        picker.setHideOnMaskTap(false);
                        picker.show();
                        Ext.getCmp('slot1').setTitle('hideOnMaskTap = false');
                    } // handler
                }] // items (toolbar)
            }] // items (container)
        }); // create()
        
        var picker = Ext.create('Ext.Picker', {
            hideOnMaskTap: true,
            useTitles: true,
            slots: [{
                id: 'slot1',
                name: 'maskTap',
                title: 'hideOnMaskTap = true',
                data: [{
                    text: 'Red',
                    value: 0xf00
                }, {
                    text: 'Orange',
                    value: 0xffb600
                }, {
                    text: 'Yellow',
                    value: 0xff0
                }, {
                    text: 'Green',
                    value: 0x80ff4d
                }, {
                    text: 'Blue',
                    value: 0x009dff
                }] // data
            }] // slots
        }); // create()
        
        Ext.Viewport.add(picker);
    } // launch
}); // application()
