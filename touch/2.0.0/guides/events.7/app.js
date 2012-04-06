Ext.application({
    launch: function () {
        var myButton = Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'Click me'
        });
        
        myButton.on({
            tap: function () {
                var randomWidth = 100 + Math.round(Math.random() * 200);
                this.setWidth(randomWidth);
            },
            widthchange: function (button, newWidth, oldWidth) {
                alert('My width changed from ' + oldWidth + ' to ' + newWidth);
            }
        });
    } // launch
}); // application()
