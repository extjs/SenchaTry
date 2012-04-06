Ext.application({
    launch: function () {
        var myButton = Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'Click me'
        });

        myButton.on('tap', function () {
            alert("Event listener attached by .on");
        });
    } // launch
}); // application()
