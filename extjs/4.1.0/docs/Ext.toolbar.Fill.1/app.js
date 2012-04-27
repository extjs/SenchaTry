Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Toolbar Fill Example',
        width: 300,
        height: 200,
        tbar: ['Item 1',
        {
            xtype: 'tbfill'
        }, 'Item 2'],
        renderTo: Ext.getBody()
    });
});