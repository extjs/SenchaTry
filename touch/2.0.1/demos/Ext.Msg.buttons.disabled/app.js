Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'Show alert',
                    handler: function () {
                        var msg = Ext.Msg.show({
                            title: 'Ext.Msg.show()',
                            message: 'This dialog\'s button will be disabled for 4 seconds.',
                            buttons: [{
                                id: 'alertCancelBtn',
                                disabled: true,
                                iconCls: 'user',
                                iconMask: true,
                                text: 'Sure, why not',
                                ui: 'round decline'
                            }] // buttons
                        }); // show()
                        
                        setTimeout(function () {
                            Ext.getCmp('alertCancelBtn').setDisabled(false);
                        }, 4000 /* ms */); // setTimeout()
                    } // handler
                }] // items
            }] // items (toolbar)
        }); // create()
    } // launch
}); // application()
