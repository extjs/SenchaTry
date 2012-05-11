/*global Ext:false */
Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        width: 500,
        height: 400,
        title: "VBoxLayout Panel",
        layout: {
            type: 'vbox',
            align: 'center'
        },
        renderTo: document.body,
        items: [{
            xtype: 'panel',
            title: 'Inner Panel One',
            width: 250,
            flex: 2
        }, {
            xtype: 'panel',
            title: 'Inner Panel Two',
            width: 250,
            flex: 4
        }, {
            xtype: 'panel',
            title: 'Inner Panel Three',
            width: '50%',
            flex: 4
        }]
    });
});
