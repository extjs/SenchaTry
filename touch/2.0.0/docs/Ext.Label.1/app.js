/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.Viewport.add({
            xtype: 'label',
            html: 'My label!'
        });
    } // launch
}); // application()
