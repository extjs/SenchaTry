Ext.application({
    launch: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            padding: 10,
            items: {
                xtype: 'button',
                text: 'My Button',
                badgeText: '2'
            }
        });
    }
});