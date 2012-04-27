Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            styleHtmlContent: true,
            defaults: {
                margin: 5
            }, // defaults
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [{
                xtype: 'button',
                text: '<code>iconAlign: left</code>',
                iconAlign: 'left',
                iconCls: 'arrow_left',
                iconMask: true
            }, {
                xtype: 'button',
                text: '<code>iconAlign: right</code>',
                iconAlign: 'right',
                iconCls: 'arrow_right',
                iconMask: true
            }, {
                xtype: 'button',
                text: '<code>iconAlign: top</code>',
                iconAlign: 'top',
                iconCls: 'arrow_up',
                iconMask: true
            }, {
                xtype: 'button',
                text: '<code>iconAlign: bottom</code>',
                iconAlign: 'bottom',
                iconCls: 'arrow_down',
                iconMask: true
            }] // items
        }); // create()
    } // launch
}); // application()
