Ext.onReady(function() {
    Ext.create('Ext.Container', {
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'button',
            text: 'My Button'
        }]
    });
});