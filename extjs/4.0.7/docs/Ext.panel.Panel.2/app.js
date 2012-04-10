Ext.onReady(function () {
    var filterPanel = Ext.create('Ext.panel.Panel', {
        bodyPadding: 5,
        // Don't want content to crunch against the borders
        width: 300,
        title: 'Filters',
        items: [{
            xtype: 'datefield',
            fieldLabel: 'Start date'
        }, {
            xtype: 'datefield',
            fieldLabel: 'End date'
        }],
        renderTo: Ext.getBody()
    });
});
