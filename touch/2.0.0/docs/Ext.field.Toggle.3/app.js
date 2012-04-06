Ext.application({
    launch: function () {
        Ext.Viewport.add([{
            xtype: 'togglefield',
            name: 'awesome',
            value: 1,
            label: 'Are you awesome?',
            labelWidth: '40%'
        }, {
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'button',
                text: 'Toggle',
                flex: 1,
                handler: function () {
                    Ext.ComponentQuery.query('togglefield')[0].toggle();
                }
            }]
        }]);
    } // launch
}); // application()
