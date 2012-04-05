Ext.application({
    launch: function () {
        var button = Ext.create('Ext.Button', {
            iconCls: 'refresh',
            iconMask: true
        });
        Ext.Viewport.add({
            xtype: 'container',
            padding: 10,
            items: [button]
        });
    } // launch
}); // application()
