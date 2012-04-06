Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Button One'
                }, {
                    xtype: 'spacer'
                }, {
                    xtype: 'button',
                    text: 'Button Two'
                }]
            }]
        });
    } // launch
}); // application()
