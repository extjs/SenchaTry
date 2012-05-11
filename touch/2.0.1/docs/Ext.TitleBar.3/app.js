/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'titlebar',
            docked: 'top',
            title: 'A very long title',
            items: [{
                align: 'left',
                text: 'This button has a super long title'
            }, {
                align: 'right',
                text: 'Another button'
            }]
        });

        Ext.Viewport.setStyleHtmlContent(true);
        Ext.Viewport.setHtml('This shows how the title and buttons will automatically adjust their size when the width of the items are too wide.');
    }
});
