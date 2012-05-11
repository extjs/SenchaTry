/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'titlebar',
            docked: 'top',
            title: 'Navigation',
            items: [{
                align: 'left',
                text: 'This button has a super long title'
            }, {
                iconCls: 'home',
                iconMask: true,
                align: 'right'
            }]
        });

        Ext.Viewport.setStyleHtmlContent(true);
        Ext.Viewport.setHtml('This shows how the title is automatically moved to the right when one of the aligned buttons is very wide.');
    }
});
