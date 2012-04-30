Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        title: 'Hello',
        width: 200,
        html: '<p>World!</p>',
        renderTo: Ext.getBody()
    });
});
