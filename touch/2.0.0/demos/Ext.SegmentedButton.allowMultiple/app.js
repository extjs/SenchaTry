/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'segmentedbutton',
                    allowMultiple: true,
                    listeners: {
                        toggle: function (segBtn, btn, isPressed) {
                            var selLabels = [];
                            Ext.Array.forEach(segBtn.getPressedButtons(), function (item) {
                                selLabels.push(item.config.text);
                            }); // forEach()
                            Ext.Msg.alert('pressedButtons (' + selLabels.length + '):', Ext.JSON.encode(selLabels));
                        } // toggle
                    },
                    items: [{
                        text: 'Red'
                    }, {
                        text: 'Orange'
                    }, {
                        text: 'Yellow'
                    }, {
                        text: 'Green'
                    }, {
                        text: 'Blue'
                    }] // items (segmentedbutton)
                }] // items (toolbar)
            }] // items (panel)
        }); // create(panel)
    } // launch
}); // application()
