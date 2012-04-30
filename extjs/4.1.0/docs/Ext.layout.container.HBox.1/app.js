Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        width: 500,
        height: 300,
        title: "HBoxLayout Panel",
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        renderTo: document.body,
        items: [{
            xtype: 'panel',
            title: 'Inner Panel One',
            flex: 2
        }, {
            xtype: 'panel',
            title: 'Inner Panel Two',
            flex: 1
        }, {
            xtype: 'panel',
            title: 'Inner Panel Three',
            flex: 1
        }]
    });
});
