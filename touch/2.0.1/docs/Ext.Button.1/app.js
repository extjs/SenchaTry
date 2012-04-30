Ext.application({
    launch: function() {
        var button = Ext.create('Ext.Button', {
            text: 'Button'
        });
        Ext.Viewport.add({
            xtype: 'container',
            padding: 10,
            items: [button]
        });
    }
});
