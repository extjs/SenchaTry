Ext.application({
    launch: function () {
        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'segmentedbutton',
                    items: [{
                        text: '<code>toggle()</code>',
                        handler: function (btn) {
                            btn.up('formpanel').down('togglefield').toggle();
                        } // handler
                    }, {
                        text: '<code>setValue(0)</code>',
                        handler: function (btn) {
                            btn.up('formpanel').down('togglefield').setValue(0);
                        } // handler
                    }, {
                        text: '<code>setValue(1)</code>',
                        handler: function (btn) {
                            btn.up('formpanel').down('togglefield').setValue(1);
                        } // handler
                    }], // items (segmentedbutton)
                    listeners: {
                        toggle: function (segBtn, btn, isPressed) {
                            segBtn.setPressedButtons([]);
                        } // toggle
                    } // listeners
                }] // items (toolbar)
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'togglefield',
                    label: 'togglefield:'
                }] // items (fieldset)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
