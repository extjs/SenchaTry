Ext.application({
    launch: function () {
        Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'segmentedbutton',
                    allowDepress: false,
                    items: [{
                        text: 'Tony',
                        pressed: true
                    }, {
                        text: 'Angela'
                    }, {
                        text: 'Samantha',
                        disabled: true
                    }, {
                        text: 'Jonathan',
                        disabled: true
                    }, {
                        text: 'Mona',
                        hidden: true
                    }], // items (segmentedbutton)
                    listeners: {
                        toggle: function (segBtn, btn, isPressed) {
                            Ext.Msg.alert('toggle', btn.getText() + ' was pressed.');
                        } // toggle
                    } // listeners
                }] // items (toolbar)
            }] // items (container)
        }); // create()
    } // launch
}); // application()
