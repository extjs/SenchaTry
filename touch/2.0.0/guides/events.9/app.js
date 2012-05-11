/*global Ext:false */
Ext.application({
    launch: function () {
        var myButton = Ext.Viewport.add({
            xtype: 'button',
            centered: true,
            text: 'Listener Disabled'
        });
        
        var handler = function () {
                alert('listener called');
            };
        
        Ext.Viewport.add({
            xtype: 'togglefield',
            docked: 'bottom',
            label: 'Toggle Listener',
            listeners: {
                change: function (field, thumb, enabled) {
                    if (enabled) {
                        myButton.on('tap', handler);
                        myButton.setText('Listener Enabled');
                    } else {
                        myButton.un('tap', handler);
                        myButton.setText('Listener Disabled');
                    }
                }
            }
        });
    } // launch
}); // application()
