Ext.application({
    launch: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'fit',

            items: [{
                xtype: 'panel',
                html: 'This panel is created by xtype'
            }, {
                xtype: 'toolbar',
                title: 'So is the toolbar',
                docked: 'top'
            }]
        });
    }
});
