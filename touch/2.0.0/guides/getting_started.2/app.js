/*global Ext:false */
Ext.application({
    name: 'Sencha',

    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            html: 'Hello World'
        });
    }
});
