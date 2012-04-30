Ext.application({
    launch: function() {
        var myButton = Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'Click me',

            listeners: {
                tap: function() {
                    alert('First tap listener');
                }
            }
        });

        myButton.on('tap', function() {
            alert("Second tap listener");
        });
    }
});
