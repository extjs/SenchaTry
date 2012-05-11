/*global Ext:false */
Ext.onReady(function() {
    var drawComponent = Ext.create('Ext.draw.Component', {
        viewBox: false,
        items: [{
            type: 'circle',
            fill: '#ffc',
            radius: 100,
            x: 100,
            y: 100
        }]
    });

    Ext.create('Ext.Window', {
        width: 230,
        height: 230,
        layout: 'fit',
        items: [drawComponent]
    }).show();
});
