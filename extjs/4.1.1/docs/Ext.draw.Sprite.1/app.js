/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.draw.Component', {
        renderTo: Ext.getBody(),
        width: 200,
        height: 200,
        items: [{
            type: 'rect',
            width: 100,
            height: 50,
            radius: 10,
            fill: 'green',
            opacity: 0.5,
            stroke: 'red',
            'stroke-width': 2
        }]
    });
});
