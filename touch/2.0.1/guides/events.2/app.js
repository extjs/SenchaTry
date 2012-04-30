Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'My Button',

            listeners: {
                tap: function() {
                    alert("You tapped me");
                }
            }
        });
    }
});
