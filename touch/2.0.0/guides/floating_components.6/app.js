/*global Ext:false */
Ext.application({
    launch: function () {
        var panel = Ext.Viewport.add({
            xtype: 'panel',
            defaultType: 'button',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                text: 'up',
                handler: function () {
                    panel.setTop(panel.getTop() - 5);
                }
            }, {
                text: 'down',
                handler: function () {
                    panel.setTop(panel.getTop() + 5);
                }
            }, {
                text: 'left',
                handler: function () {
                    panel.setLeft(panel.getLeft() - 5);
                }
            }, {
                text: 'right',
                handler: function () {
                    panel.setLeft(panel.getLeft() + 5);
                }
            }],
            top: 50,
            left: 5
        });
    } // launch
}); // application()
