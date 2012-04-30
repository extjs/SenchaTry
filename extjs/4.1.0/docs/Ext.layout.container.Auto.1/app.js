Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        width: 500,
        height: 280,
        title: "AutoLayout Panel",
        layout: 'auto',
        renderTo: document.body,
        items: [{
            xtype: 'panel',
            title: 'Top Inner Panel',
            width: '75%',
            height: 90
        }, {
            xtype: 'panel',
            title: 'Bottom Inner Panel',
            width: '75%',
            height: 90
        }]
    });
});
