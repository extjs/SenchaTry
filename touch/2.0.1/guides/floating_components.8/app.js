/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'This is a centered and modal panel',
            modal: true,
            hideOnMaskTap: true,
            centered: true
        });

        Ext.Viewport.setHtml('This content is in the viewport and masked because the panel is modal.<br /><br />You can also tap on the mask to hide the panel.');
        Ext.Viewport.setStyleHtmlContent(true);
    }
});
