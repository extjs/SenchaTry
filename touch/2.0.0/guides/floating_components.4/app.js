Ext.application({
    launch: function () {
        var panel = Ext.Viewport.add({
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [{
                xtype: 'button',
                text: 'toggle centered',
                handler: function () {
                    if (panel.isCentered()) {
                        panel.setCentered(false);
                        panel.setWidth(null);
                        panel.setHeight(null);
                    } else {
                        panel.setCentered(true);
                        panel.setWidth(200);
                        panel.setHeight(100);
                    }
                }
            }]
        });
    } // launch
}); // application()
