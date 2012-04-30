Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Panel with VerticalTextItem',
        width: 300,
        height: 200,
        lbar: {
            layout: {
                align: 'center'
            },
            items: [{
                xtype: 'text',
                text: 'Sample VerticalTextItem',
                degrees: 90
            }]
        },
        renderTo: Ext.getBody()
    });
});
