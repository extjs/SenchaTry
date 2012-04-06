Ext.application({
    launch: function () {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'A floating component',
            top: 50,
            right: 5
        });
    } // launch
}); // application()
