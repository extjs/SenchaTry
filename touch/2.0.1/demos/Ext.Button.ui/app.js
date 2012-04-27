Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            bodyPadding: 20,
            layout: {
                layout: 'vbox',
                align: 'center'
            }, // layout
            defaults: {
                margin: 10
            }, // defaults
            items: [
                {
                    xtype: 'button',
                    ui: 'normal',
                    text: 'normal'
                }, {
                    xtype: 'button',
                    ui: 'round',
                    text: 'round'
                }, {
                    xtype: 'button',
                    ui: 'back',
                    text: 'back'
                }, {
                    xtype: 'button',
                    ui: 'forward',
                    text: 'forward'
                }, {
                    xtype: 'button',
                    ui: 'small',
                    text: 'small'
                }, {
                    xtype: 'button',
                    ui: 'action',
                    text: 'action'
                }, {
                    xtype: 'button',
                    ui: 'decline',
                    text: 'decline'
                }, {
                    xtype: 'button',
                    ui: 'confirm',
                    text: 'confirm'
                }
            ] // items
        }); // create()
    } // launch
}); // application()
