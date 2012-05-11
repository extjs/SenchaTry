/*global Ext:false */
Ext.application({
    launch: function () {
        var data = [{
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
        }];
        
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'Launch picker',
                    handler: function () {
                        picker.show();
                    } // handler
                }] // items (toolbar)
            }] // items (container)
        }); // create()
        
        var picker = Ext.create('Ext.Picker', {
            useTitles: true,
            slots: [{
                align: 'left',
                name: 'align_left',
                title: 'align = left',
                data: data
            }, {
                align: 'center',
                name: 'align_center',
                title: 'align = center',
                data: data
            }, {
                align: 'right',
                name: 'align_right',
                title: 'align = right',
                data: data
            }] // slots
        }); // create()
        
        Ext.Viewport.add(picker);
    } // launch
}); // application()
