/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.Viewport.add({
            xtype: 'titlebar',
            docked: 'top',
            title: 'Navigation',
            items: [{
                iconCls: 'add',
                iconMask: true,
                align: 'left'
            }, {
                iconCls: 'home',
                iconMask: true,
                align: 'right'
            }]
        });

        Ext.Viewport.setStyleHtmlContent(true);
        Ext.Viewport.setHtml('This shows the title being centered and buttons using align <i>left</i> and <i>right</i>.');
    } // launch
}); // application()
