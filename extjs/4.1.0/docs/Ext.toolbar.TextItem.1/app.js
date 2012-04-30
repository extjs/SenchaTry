Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Panel with TextItem',
        width: 300,
        height: 200,
        tbar: [{
            xtype: 'tbtext',
            text: 'Sample Text Item'
        }],
        renderTo: Ext.getBody()
    });
});
