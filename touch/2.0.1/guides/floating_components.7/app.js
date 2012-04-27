Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'This is a centered and modal panel',
            modal: true,
            centered: true
        });

        Ext.Viewport.setHtml('This content is in the viewport and masked because the panel is modal.');
        Ext.Viewport.setStyleHtmlContent(true);
    }
});