/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'panel',
            scrollable: true,
            html: 'This is a scrollable centered panel with some long content so it will scroll.',
            centered: true,
            width: 100,
            height: 100
        });
    }
});
