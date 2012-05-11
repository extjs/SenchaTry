/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'This is a centered panel',
            centered: true
        });
    } // launch
}); // application()
