Ext.onReady(function() {
    var drawComponent = Ext.create('Ext.draw.Component', {
        viewBox: false,
        items: [{
            type: 'circle',
            fill: '#79BB3F',
            radius: 100,
            x: 100,
            y: 100
        }]
    });

    Ext.create('Ext.Window', {
        width: 215,
        height: 235,
        layout: 'fit',
        items: [drawComponent]
    }).show();
});