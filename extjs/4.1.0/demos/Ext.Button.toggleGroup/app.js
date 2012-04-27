Ext.onReady(function () {
    Ext.create('Ext.Container', {
        items: [
            {
                xtype: 'label',
                text: 'Rating: '
            }, {
                xtype: 'button',
                enableToggle: true,
                text: '1',
                toggleGroup: 'ratings'
            }, {
                xtype: 'button',
                enableToggle: true,
                text: '2',
                toggleGroup: 'ratings'
            }, {
                xtype: 'button',
                enableToggle: true,
                text: '3',
                toggleGroup: 'ratings'
            }, {
                xtype: 'button',
                enableToggle: true,
                text: '4',
                toggleGroup: 'ratings'
            }, {
                xtype: 'button',
                enableToggle: true,
                text: '5',
                toggleGroup: 'ratings'
            }
        ], // items
        renderTo: Ext.getBody()
    }); // create()
}); // onReady()
