Ext.onReady(function() {
    // Explicitly create a Container
    Ext.create('Ext.container.Container', {
        layout: {
            type: 'hbox'
        },
        width: 400,
        renderTo: Ext.getBody(),
        border: 1,
        style: {
            borderColor: '#000000',
            borderStyle: 'solid',
            borderWidth: '1px'
        },
        defaults: {
            labelWidth: 80,
            // implicitly create Container by specifying xtype
            xtype: 'datefield',
            flex: 1,
            style: {
                padding: '10px'
            }
        },
        items: [{
            xtype: 'datefield',
            name: 'startDate',
            fieldLabel: 'Start date'
        }, {
            xtype: 'datefield',
            name: 'endDate',
            fieldLabel: 'End date'
        }]
    });
});