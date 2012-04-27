Ext.application({
    launch: function() {
        Ext.setup({
            onReady: function() {
                Ext.Viewport.add({
                    xtype: 'container',
                    html: 'My new container!'
                });
            }
        });
    }
});