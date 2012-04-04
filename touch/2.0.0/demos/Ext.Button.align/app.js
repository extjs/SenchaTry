Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            styleHtmlContent: true,
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Panel title',
                items: [{
                    xtype: 'button',
                    align: 'left',
                    iconCls: 'arrow_left',
                    iconMask: true,
                    ui: 'plain',
                    handler: function () {
                        Ext.Msg.alert('You clicked the left button');
                    } // handler
                }, {
                    xtype: 'button',
                    align: 'right',
                    iconCls: 'arrow_right',
                    iconMask: true,
                    ui: 'plain',
                    handler: function () {
                        Ext.Msg.alert('You clicked the right button');
                    } // handler
                }] // items
            }, {
                html: 'This is the body of the panel'
            }] // items
        }); // create()
    } // launch
}); // application()
