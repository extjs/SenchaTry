Ext.application({
    launch: function () {
        Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'Click me',

            listeners: {
                tap: function () {
                    var randomWidth = 100 + Math.round(Math.random() * 200);
                    this.setWidth(randomWidth);
                },
                widthchange: function (button, newWidth, oldWidth) {
                    alert('My width changed from ' + oldWidth + ' to ' + newWidth);
                }
            }
        });
    } // launch
}); // application()
