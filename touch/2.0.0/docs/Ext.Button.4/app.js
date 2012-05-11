/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            padding: 4,
            defaults: {
                xtype: 'button',
                margin: 5
            },
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [{
                ui: 'normal',
                text: 'normal'
            }, {
                ui: 'round',
                text: 'round'
            }, {
                ui: 'action',
                text: 'action'
            }, {
                ui: 'decline',
                text: 'decline'
            }, {
                ui: 'confirm',
                text: 'confirm'
            }]
        });
    } // launch
}); // application()
