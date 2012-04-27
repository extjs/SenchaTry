Ext.application({
    launch: function() {
        var myButton = Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'Click me',

            listeners: {
                tap: {
                    buffer: 2000,
                    fn: function() {
                        alert("I will say this only once every 2 seconds");
                    }
                }
            }
        });
    }
});