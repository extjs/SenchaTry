/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            xtype: 'container',
            html: 'My new container!'
        });
    }
});
