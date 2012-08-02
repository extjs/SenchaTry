/**
 * This is the main code for the application
 */
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'App',
    requires: ['App.view.GridPanel'],
    launch: function () {
        Ext.create('Ext.Window', {
            width: 580,
            height: 410,
            maximizable: true,
            title: 'Individual Filter Column',
            autoScroll: true,
            frame: false,
            layout: 'fit',
            items: [{
                xtype: 'individualfieldcolumn'
            }]
        }).show();
    }
});
