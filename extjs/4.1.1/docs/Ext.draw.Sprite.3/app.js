/*global Ext:false */
Ext.onReady(function () {
    Ext.create('Ext.draw.Component', {
        renderTo: Ext.getBody(),
        width: 200,
        height: 200,
        items: [{
            type: "ellipse",
            radiusX: 100,
            radiusY: 50,
            x: 100,
            y: 100,
            fill: 'red'
        }]
    });
});
