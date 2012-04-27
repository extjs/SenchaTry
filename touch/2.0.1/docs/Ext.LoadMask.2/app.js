Ext.application({
    launch: function() {
        Ext.Viewport.add({
            masked: {
                xtype: 'loadmask',
                message: 'A message..',
                indicator: false
            }
        });
    }
});