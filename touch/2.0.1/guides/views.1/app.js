/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.create('Ext.Panel', {
            html: 'Welcome to my app',
            fullscreen: true
        });
    }
});
