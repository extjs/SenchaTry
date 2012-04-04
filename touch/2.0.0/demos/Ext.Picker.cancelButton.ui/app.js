Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'show Picker',
                    handler: function () {
                        picker.show();
                    } // handler
                }] // items
            }] // items
        }); // create
        
        var picker = Ext.create('Ext.Picker', {
            cancelButton: {
                ui: 'decline'
            }, // cancelButton
            doneButton: {
                ui: 'confirm'
            }, // doneButton
            slots: [{
                name: 'color',
                data: [{
                    text: 'Red',
                    value: '#f00'
                }, {
                    text: 'Orange',
                    value: '#ffb600'
                }, {
                    text: 'Yellow',
                    value: '#ff0'
                }, {
                    text: 'Green',
                    value: '#80ff4d'
                }, {
                    text: 'Blue',
                    value: '#009dff'
                }] // data
            }] // slots
        }); // create()
        Ext.Viewport.add(picker);
    } // launch
}); // application()
